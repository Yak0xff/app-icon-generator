import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Define icon sizes for different platforms
const APP_STORE_ICON_SIZES = [
  { size: 1024, name: 'icon-1024x1024', folder: 'AppStore' },
  { size: 180, name: 'icon-180x180', folder: 'AppStore/iPhone' },
  { size: 167, name: 'icon-167x167', folder: 'AppStore/iPad' },
  { size: 152, name: 'icon-152x152', folder: 'AppStore/iPad' },
  { size: 120, name: 'icon-120x120', folder: 'AppStore/iPhone' },
  { size: 87, name: 'icon-87x87', folder: 'AppStore/iPhone' },
  { size: 80, name: 'icon-80x80', folder: 'AppStore/iPhone' },
  { size: 76, name: 'icon-76x76', folder: 'AppStore/iPad' },
  { size: 60, name: 'icon-60x60', folder: 'AppStore/iPhone' },
  { size: 58, name: 'icon-58x58', folder: 'AppStore/iPhone' },
  { size: 40, name: 'icon-40x40', folder: 'AppStore/iPhone' },
  { size: 29, name: 'icon-29x29', folder: 'AppStore/iPhone' },
  { size: 20, name: 'icon-20x20', folder: 'AppStore/iPhone' },
];

const GOOGLE_PLAY_ICON_SIZES = [
  { size: 512, name: 'icon-512x512', folder: 'GooglePlay' },
  { size: 384, name: 'icon-384x384', folder: 'GooglePlay' },
  { size: 192, name: 'icon-192x192', folder: 'GooglePlay' },
  { size: 144, name: 'icon-144x144', folder: 'GooglePlay' },
  { size: 96, name: 'icon-96x96', folder: 'GooglePlay' },
  { size: 72, name: 'icon-72x72', folder: 'GooglePlay' },
  { size: 48, name: 'icon-48x48', folder: 'GooglePlay' },
  { size: 36, name: 'icon-36x36', folder: 'GooglePlay' },
];

/**
 * Resize an image to a specific size
 */
const resizeImage = async (file: File, size: number): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      
      // Draw image with smooth scaling
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, size, size);
      
      // Convert to blob
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create blob'));
        }
      }, 'image/png');
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = URL.createObjectURL(file);
  });
};

/**
 * Generate app icons for AppStore
 */
export const generateAppStoreIcons = async (file: File): Promise<void> => {
  try {
    const zip = new JSZip();
    
    // Process each icon size
    const promises = APP_STORE_ICON_SIZES.map(async ({ size, name, folder }) => {
      const resizedBlob = await resizeImage(file, size);
      zip.file(`${folder}/${name}.png`, resizedBlob);
    });
    
    // Add readme file
    zip.file('README.txt', 
      'AppStore Icon Package\n\n' +
      'This package contains all the necessary icon sizes for iOS and macOS applications.\n' +
      'The icons are organized by device type (iPhone/iPad).\n\n' +
      'For more information on iOS app icons, visit:\n' +
      'https://developer.apple.com/design/human-interface-guidelines/app-icons'
    );
    
    await Promise.all(promises);
    
    // Generate and download zip
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'appstore-icons.zip');
  } catch (error) {
    console.error('Error generating AppStore icons:', error);
    throw error;
  }
};

/**
 * Generate app icons for Google Play
 */
export const generateGooglePlayIcons = async (file: File): Promise<void> => {
  try {
    const zip = new JSZip();
    
    // Process each icon size
    const promises = GOOGLE_PLAY_ICON_SIZES.map(async ({ size, name, folder }) => {
      const resizedBlob = await resizeImage(file, size);
      zip.file(`${folder}/${name}.png`, resizedBlob);
    });
    
    // Add readme file
    zip.file('README.txt', 
      'Google Play Icon Package\n\n' +
      'This package contains all the necessary icon sizes for Android applications.\n' +
      'These icons follow the material design guidelines for Android app icons.\n\n' +
      'For more information on Android app icons, visit:\n' +
      'https://developer.android.com/distribute/google-play/resources/icon-design-specifications'
    );
    
    await Promise.all(promises);
    
    // Generate and download zip
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'google-play-icons.zip');
  } catch (error) {
    console.error('Error generating Google Play icons:', error);
    throw error;
  }
};
