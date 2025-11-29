import { useState, useEffect } from 'react';

export type ConnectionSpeed = '4g' | '3g' | '2g' | 'slow-2g' | 'unknown';

export interface ConnectionInfo {
  speed: ConnectionSpeed;
  downlink?: number; // Mbps
  effectiveType?: string;
  saveData?: boolean;
}

export const useConnectionSpeed = (): ConnectionInfo => {
  const [connectionInfo, setConnectionInfo] = useState<ConnectionInfo>({
    speed: 'unknown',
  });

  useEffect(() => {
    const updateConnectionInfo = () => {
      const connection = 
        (navigator as any).connection || 
        (navigator as any).mozConnection || 
        (navigator as any).webkitConnection;

      if (connection) {
        setConnectionInfo({
          speed: connection.effectiveType || 'unknown',
          downlink: connection.downlink,
          effectiveType: connection.effectiveType,
          saveData: connection.saveData,
        });
      }
    };

    // Initial check
    updateConnectionInfo();

    // Listen for connection changes
    const connection = 
      (navigator as any).connection || 
      (navigator as any).mozConnection || 
      (navigator as any).webkitConnection;

    if (connection) {
      connection.addEventListener('change', updateConnectionInfo);
      
      return () => {
        connection.removeEventListener('change', updateConnectionInfo);
      };
    }
  }, []);

  return connectionInfo;
};

// Helper function to determine if video should be loaded based on connection
export const shouldLoadVideo = (speed: ConnectionSpeed, saveData?: boolean): boolean => {
  // Don't load if user has data saver enabled
  if (saveData) return false;

  // Load for good connections
  if (speed === '4g' || speed === 'unknown') return true;

  // Be conservative with 3g and below
  return false;
};

// Helper function to get optimal preload attribute based on connection
export const getOptimalPreload = (speed: ConnectionSpeed, saveData?: boolean): 'none' | 'metadata' | 'auto' => {
  if (saveData) return 'none';
  
  switch (speed) {
    case '4g':
      return 'metadata';
    case '3g':
      return 'metadata';
    case '2g':
    case 'slow-2g':
      return 'none';
    default:
      return 'metadata';
  }
};
