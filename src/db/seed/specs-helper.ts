
export const getDefaultSpecs = (categoryId: number) => {
    switch (categoryId) {
        case 1: // Smartphones
            return { storage: '128GB', ram: '8GB', display: '6.1-inch OLED', battery: '4000mAh' };
        case 2: // Laptops
            return { processor: 'Intel Core i5', ram: '16GB', storage: '512GB SSD', display: '14-inch FHD' };
        case 3: // Tablets
            return { storage: '64GB', connectivity: 'WiFi', display: '10.9-inch' };
        case 4: // Smartwatches
            return { size: '44mm', material: 'Aluminum', connectivity: 'GPS' };
        case 5: // Headphones
            return { type: 'Over-ear', noiseCancellation: true, batteryLife: '20h' };
        case 6: // Speakers
            return { type: 'Bluetooth', waterproof: true, batteryLife: '12h' };
        case 7: // Cameras
            return { sensor: 'Full Frame', resolution: '24MP', video: '4K/60fps' };
        case 8: // Gaming Consoles
            return { storage: '1TB', resolution: '4K', frameRate: '120fps' };
        default:
            return { description: 'Standard specification', quality: 'High' };
    }
};
