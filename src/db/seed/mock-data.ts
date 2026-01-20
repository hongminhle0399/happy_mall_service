// Mock data for tech devices store database

// Countries
export const countriesData = [
  { id: 'US', name: 'United States' },
  { id: 'CN', name: 'China' },
  { id: 'KR', name: 'South Korea' },
  { id: 'JP', name: 'Japan' },
  { id: 'TW', name: 'Taiwan' },
  { id: 'DE', name: 'Germany' },
  { id: 'FI', name: 'Finland' },
  { id: 'SE', name: 'Sweden' },
];

// Brands with country references
export const brandsData = [
  { name: 'Apple', countryId: 'US' },
  { name: 'Samsung', countryId: 'KR' },
  { name: 'Sony', countryId: 'JP' },
  { name: 'LG', countryId: 'KR' },
  { name: 'Dell', countryId: 'US' },
  { name: 'HP', countryId: 'US' },
  { name: 'Lenovo', countryId: 'CN' },
  { name: 'Asus', countryId: 'TW' },
  { name: 'Acer', countryId: 'TW' },
  { name: 'Microsoft', countryId: 'US' },
  { name: 'Google', countryId: 'US' },
  { name: 'Xiaomi', countryId: 'CN' },
  { name: 'Huawei', countryId: 'CN' },
  { name: 'OnePlus', countryId: 'CN' },
  { name: 'Nokia', countryId: 'FI' },
  { name: 'Bose', countryId: 'US' },
  { name: 'JBL', countryId: 'US' },
  { name: 'Canon', countryId: 'JP' },
  { name: 'Nikon', countryId: 'JP' },
  { name: 'Razer', countryId: 'US' },
  { name: 'Logitech', countryId: 'US' },
  { name: 'GoPro', countryId: 'US' },
  { name: 'DJI', countryId: 'CN' },
  { name: 'Anker', countryId: 'CN' },
  { name: 'Beats', countryId: 'US' },
];

// Colors (hex format with 7 chars including #)
export const colorsData = [
  { id: '#000000', name: 'Black' },
  { id: '#FFFFFF', name: 'White' },
  { id: '#C0C0C0', name: 'Silver' },
  { id: '#808080', name: 'Space Gray' },
  { id: '#FFD700', name: 'Gold' },
  { id: '#B87333', name: 'Rose Gold' },
  { id: '#0000FF', name: 'Blue' },
  { id: '#4169E1', name: 'Midnight Blue' },
  { id: '#87CEEB', name: 'Sky Blue' },
  { id: '#FF0000', name: 'Red' },
  { id: '#00FF00', name: 'Green' },
  { id: '#800080', name: 'Purple' },
  { id: '#FFC0CB', name: 'Pink' },
  { id: '#FFA500', name: 'Orange' },
  { id: '#FFFF00', name: 'Yellow' },
  { id: '#964B00', name: 'Brown' },
  { id: '#00FFFF', name: 'Cyan' },
];

// Product Categories
export const productCategoriesData = [
  { name: 'Smartphones' },
  { name: 'Laptops' },
  { name: 'Tablets' },
  { name: 'Smartwatches' },
  { name: 'Headphones' },
  { name: 'Speakers' },
  { name: 'Cameras' },
  { name: 'Gaming Consoles' },
  { name: 'Monitors' },
  { name: 'Keyboards' },
  { name: 'Mice' },
  { name: 'External Storage' },
  { name: 'Power Banks' },
  { name: 'Drones' },
  { name: 'Smart Home' },
  { name: 'Accessories' },
];

// Products (using indexes that will be auto-generated)
// Note: In actual seeding, you'd get the actual IDs after inserting brands, colors, and categories
export const productsData = [
  // Smartphones
  {
    name: 'iPhone 15 Pro',
    price: 999.99,
    description:
      'Experience the pinnacle of smartphone innovation with the iPhone 15 Pro. Featuring the groundbreaking A17 Pro chip built on 3-nanometer technology, this device delivers unprecedented performance and efficiency. The aerospace-grade titanium design makes it the lightest Pro model ever, while maintaining exceptional durability. Capture stunning photos with the advanced 48MP main camera featuring second-generation sensor-shift optical image stabilization, and enjoy professional-grade video recording in ProRes. The Super Retina XDR display with ProMotion technology offers smooth 120Hz refresh rates, making every interaction fluid and responsive.',
    images: [
      'https://images.unsplash.com/photo-1696446702969-d2930f17d2e7?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.1"',
      camera: '48MP',
      battery: '3274mAh',
      processor: 'A17 Pro',
    },

    brandId: 1,
    categoryId: 1,
  },
  {
    name: 'iPhone 15 Pro',
    price: 999.99,
    description:
      'Experience the pinnacle of smartphone innovation with the iPhone 15 Pro. Featuring the groundbreaking A17 Pro chip built on 3-nanometer technology, this device delivers unprecedented performance and efficiency. The aerospace-grade titanium design makes it the lightest Pro model ever, while maintaining exceptional durability. Capture stunning photos with the advanced 48MP main camera featuring second-generation sensor-shift optical image stabilization, and enjoy professional-grade video recording in ProRes. The Super Retina XDR display with ProMotion technology offers smooth 120Hz refresh rates, making every interaction fluid and responsive.',
    images: [
      'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=800',
      'https://images.unsplash.com/photo-1592286927505-67fd6b54d537?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.1"',
      camera: '48MP',
      battery: '3274mAh',
      processor: 'A17 Pro',
    },

    brandId: 1,
    categoryId: 1,
  },
  {
    name: 'iPhone 15 Pro',
    price: 999.99,
    description:
      'Experience the pinnacle of smartphone innovation with the iPhone 15 Pro. Featuring the groundbreaking A17 Pro chip built on 3-nanometer technology, this device delivers unprecedented performance and efficiency. The aerospace-grade titanium design makes it the lightest Pro model ever, while maintaining exceptional durability. Capture stunning photos with the advanced 48MP main camera featuring second-generation sensor-shift optical image stabilization, and enjoy professional-grade video recording in ProRes. The Super Retina XDR display with ProMotion technology offers smooth 120Hz refresh rates, making every interaction fluid and responsive.',
    images: [
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.1"',
      camera: '48MP',
      battery: '3274mAh',
      processor: 'A17 Pro',
    },

    brandId: 1,
    categoryId: 1,
  },
  {
    name: 'Galaxy S24 Ultra',
    price: 1199.99,
    description:
      "Unleash ultimate mobile power with the Galaxy S24 Ultra, Samsung's most advanced smartphone yet. The revolutionary 200MP camera system with AI-enhanced processing captures every detail with breathtaking clarity, while the integrated S Pen transforms your phone into a creative powerhouse. Powered by the Snapdragon 8 Gen 3 processor optimized for Galaxy, experience buttery-smooth performance whether you're gaming, multitasking, or creating content. The stunning 6.8-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate offers vivid colors and deep blacks, protected by Corning Gorilla Armor.",
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
    ],
    specifications: {
      storage: '512GB',
      display: '6.8"',
      camera: '200MP',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 3',
    },

    brandId: 2,
    categoryId: 1,
  },
  {
    name: 'Galaxy S24 Ultra',
    price: 1199.99,
    description:
      "Unleash ultimate mobile power with the Galaxy S24 Ultra, Samsung's most advanced smartphone yet. The revolutionary 200MP camera system with AI-enhanced processing captures every detail with breathtaking clarity, while the integrated S Pen transforms your phone into a creative powerhouse. Powered by the Snapdragon 8 Gen 3 processor optimized for Galaxy, experience buttery-smooth performance whether you're gaming, multitasking, or creating content. The stunning 6.8-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate offers vivid colors and deep blacks, protected by Corning Gorilla Armor.",
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800',
    ],
    specifications: {
      storage: '512GB',
      display: '6.8"',
      camera: '200MP',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 3',
    },

    brandId: 2,
    categoryId: 1,
  },
  {
    name: 'Pixel 8 Pro',
    price: 899.99,
    description:
      'Discover the future of smartphone photography with the Google Pixel 8 Pro, where cutting-edge AI meets exceptional hardware. The Google Tensor G3 chip powers incredible computational photography features like Magic Eraser, Best Take, and Audio Magic Eraser, making every shot perfect. The 50MP main camera with advanced Super Res Zoom delivers stunning detail even at distance, while Night Sight captures brilliant photos in low light. Enjoy the pure Android experience with instant updates, five years of security patches, and exclusive Google features. The bright 6.7-inch LTPO OLED display with up to 2400 nits peak brightness ensures clarity even in direct sunlight.',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.7"',
      camera: '50MP',
      battery: '5050mAh',
      processor: 'Google Tensor G3',
    },

    brandId: 11,
    categoryId: 1,
  },
  {
    name: 'Pixel 8 Pro',
    price: 899.99,
    description:
      'Discover the future of smartphone photography with the Google Pixel 8 Pro, where cutting-edge AI meets exceptional hardware. The Google Tensor G3 chip powers incredible computational photography features like Magic Eraser, Best Take, and Audio Magic Eraser, making every shot perfect. The 50MP main camera with advanced Super Res Zoom delivers stunning detail even at distance, while Night Sight captures brilliant photos in low light. Enjoy the pure Android experience with instant updates, five years of security patches, and exclusive Google features. The bright 6.7-inch LTPO OLED display with up to 2400 nits peak brightness ensures clarity even in direct sunlight.',
    images: [
      'https://images.unsplash.com/photo-1607537764820-cbffa8ff6e0d?w=800',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.7"',
      camera: '50MP',
      battery: '5050mAh',
      processor: 'Google Tensor G3',
    },

    brandId: 11,
    categoryId: 1,
  },
  {
    name: 'Xperia 1 V',
    price: 1399.99,
    description:
      "Elevate your mobile experience with the Sony Xperia 1 V, crafted for creators and entertainment enthusiasts. The world's first smartphone with a true 4K 120Hz HDR OLED display delivers cinema-quality visuals in your palm. Backed by Sony's legendary camera expertise from Alpha series, capture professional-grade photos and videos with the triple-lens system featuring ZEISS optics and real-time eye autofocus. The advanced audio system with front-facing stereo speakers and LDAC support provides studio-quality sound. Designed for gamers, the dedicated Game Enhancer mode optimizes performance while the advanced cooling system maintains peak performance during intensive sessions.",
    images: [
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.5" 4K',
      camera: '48MP',
      battery: '5000mAh',
      processor: 'Snapdragon 8 Gen 2',
    },

    brandId: 3,
    categoryId: 1,
  },
  {
    name: 'OnePlus 12',
    price: 799.99,
    description:
      'Redefine flagship performance with the OnePlus 12, the ultimate flagship killer that delivers premium features at an incredible value. Experience blazing-fast 100W SUPERVOOC charging that powers your device to 100% in just 26 minutes. The stunning 6.7-inch AMOLED display with LTPO 4.0 technology intelligently adjusts refresh rates from 1Hz to 120Hz for optimal battery efficiency. Powered by Snapdragon 8 Gen 3, tackle demanding tasks and games with ease. The Hasselblad-tuned camera system captures natural, true-to-life colors with exceptional dynamic range, while OxygenOS provides a clean, fast, and customizable user experience.',
    images: [
      'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800',
      'https://images.unsplash.com/photo-1706550136594-6efbc803171d?w=800',
    ],
    specifications: {
      storage: '256GB',
      display: '6.7"',
      camera: '50MP',
      battery: '5400mAh',
      processor: 'Snapdragon 8 Gen 3',
    },

    brandId: 14,
    categoryId: 1,
  },
  {
    name: 'Xiaomi 14 Pro',
    price: 899.99,
    description:
      "Capture life's moments in stunning detail with the Xiaomi 14 Pro, featuring a revolutionary Leica-engineered camera system. The professional-grade triple camera setup includes a 50MP main sensor with variable aperture, delivering outstanding performance in any lighting condition. HyperOS provides a seamless, intelligent user experience with powerful AI features and deep system optimization. The massive 4880mAh battery supports blazing-fast 120W wired and 50W wireless charging, eliminating battery anxiety. The gorgeous 6.73-inch AMOLED display with Dolby Vision and HDR10+ brings your content to life with vivid colors and incredible contrast.",
    images: [
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800',
      'https://images.unsplash.com/photo-1678911820864-e5c67c6e3a66?w=800',
    ],
    specifications: {
      storage: '512GB',
      display: '6.73"',
      camera: '50MP',
      battery: '4880mAh',
      processor: 'Snapdragon 8 Gen 3',
    },

    brandId: 12,
    categoryId: 1,
  },

  // Laptops
  {
    name: 'MacBook Pro 16"',
    price: 2499.99,
    description:
      'Unleash your creativity with the MacBook Pro 16", powered by the revolutionary M3 Pro chip that delivers extraordinary performance for demanding professional workflows. The stunning 16.2-inch Liquid Retina XDR display features over 1000 nits of sustained brightness for HDR content, mini-LED backlighting with 100,000:1 contrast ratio, and P3 wide color gamut. With up to 22 hours of battery life, advanced thermal architecture, and a phenomenal six-speaker sound system with Spatial Audio, this is the ultimate tool for video editors, 3D artists, developers, and creative professionals who refuse to compromise.',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
    ],
    specifications: {
      processor: 'M3 Pro',
      ram: '18GB',
      storage: '512GB SSD',
      display: '16.2" Liquid Retina XDR',
      weight: '2.15kg',
    },

    brandId: 1,
    categoryId: 2,
  },
  {
    name: 'MacBook Air M2',
    price: 1199.99,
    description:
      'Remarkably thin, incredibly powerful - the MacBook Air with M2 chip redefines what a laptop can be. At just 2.7 pounds and 11.3mm thin, it delivers astonishing performance with an 8-core CPU and up to 10-core GPU. The all-new fanless design stays completely silent while handling intensive tasks. The 13.6-inch Liquid Retina display supports one billion colors with 500 nits of brightness. Enjoy all-day battery life with up to 18 hours of video playback, MagSafe charging, and the peace of mind that comes with the advanced security of Touch ID. Perfect for students, travelers, and anyone who values portability without sacrificing capability.',
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=800',
    ],
    specifications: {
      processor: 'M2',
      ram: '8GB',
      storage: '256GB SSD',
      display: '13.6" Liquid Retina',
      weight: '1.24kg',
    },

    brandId: 1,
    categoryId: 2,
  },
  {
    name: 'XPS 15',
    price: 1799.99,
    description:
      'Experience premium Windows computing with the Dell XPS 15, featuring stunning InfinityEdge display technology that maximizes your screen real estate. Powered by 13th Gen Intel Core i7 processor and available with NVIDIA RTX graphics, it handles everything from creative work to gaming with ease. The precision-machined aluminum chassis with carbon fiber palm rest provides both durability and comfort. The 15.6-inch FHD+ display with Dolby Vision delivers lifelike color and contrast. Advanced cooling technology keeps performance consistent under load, while the massive 86Wh battery provides all-day productivity.',
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    ],
    specifications: {
      processor: 'Intel Core i7-13700H',
      ram: '16GB',
      storage: '512GB SSD',
      display: '15.6" FHD+',
      weight: '1.86kg',
    },

    brandId: 5,
    categoryId: 2,
  },
  {
    name: 'ThinkPad X1 Carbon',
    price: 1599.99,
    description:
      "The ThinkPad X1 Carbon Gen 11 is the gold standard for business ultrabooks, combining ultra-portable design with legendary durability. Crafted from aerospace-grade carbon fiber, this 2.4-pound powerhouse passes military-grade tests for reliability. Featuring a world-class spill-resistant keyboard and a stunning 14-inch 16:10 display, it's built for maximum productivity. Integrated AI-driven security features protect your most sensitive data, while the 360-degree microphones and Dolby Voice ensure crystal-clear communication during conference calls. With ultra-long battery life and rapid charging, the X1 Carbon is the ultimate companion for the modern professional on the move.",
    images: [
      'https://images.unsplash.com/photo-1588702547313-2dc04f981ddb?w=800',
      'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800',
    ],
    specifications: {
      processor: 'Intel Core i7-1365U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" WUXGA',
      weight: '1.12kg',
    },

    brandId: 7,
    categoryId: 2,
  },
  {
    name: 'ROG Zephyrus G14',
    price: 1899.99,
    description:
      'The ROG Zephyrus G14 redefines portable gaming, packing immense power into a compact 14-inch magnesium-alloy chassis. Powered by the latest AMD Ryzen 9 processor and NVIDIA GeForce RTX 4070 graphics, this ultra-portable laptop delivers stunning high-frame-rate performance in the latest AAA titles. The gorgeous ROG Nebula Display features a 165Hz refresh rate and 100% DCI-P3 color coverage for cinematic visuals. Featuring the iconic AniMe Matrix LED display on the lid, express your personality through custom animations. With high-efficiency liquid metal cooling and a massive battery, the G14 is the ultimate gaming machine that you can take anywhere.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0cd4b3ff269d?w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    ],
    specifications: {
      processor: 'AMD Ryzen 9 7940HS',
      ram: '32GB',
      storage: '1TB SSD',
      display: '14" QHD+ 165Hz',
      gpu: 'RTX 4070',
      weight: '1.65kg',
    },

    brandId: 8,
    categoryId: 2,
  },
  {
    name: 'Surface Laptop 5',
    price: 1299.99,
    description:
      "Effortless style meets exceptional performance with the Surface Laptop 5. This sleek, ultra-thin laptop features a vibrant 13.5-inch PixelSense touchscreen that makes navigation and creativity intuitive. Powered by 12th Gen Intel Core i7 processors built on the Intel Evo platform, it delivers lightning-fast multitasking and all-day battery life. The signature Alcantara palm rest provides a warm, comfortable typing experience, while the OmniSonic speakers with Dolby Atmos offer immersive cinematic sound. With a brilliant 720p HD camera and dual far-field Studio Mics, you'll always look and sound your best on video calls.",
    images: [
      'https://images.unsplash.com/photo-1583573636246-18cb2246697f?w=800',
      'https://images.unsplash.com/photo-1583024026451-306e321e17a6?w=800',
    ],
    specifications: {
      processor: 'Intel Core i7-1255U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5" PixelSense',
      weight: '1.27kg',
    },

    brandId: 10,
    categoryId: 2,
  },
  {
    name: 'Spectre x360',
    price: 1499.99,
    description:
      'The HP Spectre x360 is a masterclass in premium convertible design, featuring precision gem-cut edges and a versatile 360-degree hinge. Switch seamlessly between laptop, tablet, tent, and stand modes to suit any task. The stunning 13.5-inch 3K2K OLED touchscreen display offers breathtaking contrast and vivid colors, protected by Corning Gorilla Glass. Powered by 13th Gen Intel Core processors, it delivers exceptional performance for creation and productivity. Integrated security features like an IR camera for facial recognition and a physical camera shutter ensure your privacy is always protected. With the included HP Tilt Pen, let your creativity flow naturally.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0cd4b3ff269d?w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    ],
    specifications: {
      processor: 'Intel Core i7-1355U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5" WUXGA+',
      weight: '1.34kg',
    },

    brandId: 6,
    categoryId: 2,
  },

  // Tablets
  {
    name: 'iPad Pro 12.9"',
    price: 1099.99,
    description:
      'Experience the pinnacle of tablet productivity with the iPad Pro 12.9". Driven by the groundbreaking M2 chip, this device offers laptop-class performance in an impossibly thin design. The stunning Liquid Retina XDR display features 1,000,000:1 contrast ratio and 1600 nits of peak brightness for breathtaking HDR visuals. With support for Apple Pencil (2nd gen) featuring hover functionality and the Magic Keyboard, the iPad Pro becomes a versatile workstation for artists and professionals. The advanced camera system with LiDAR scanner enables pro-level photography and immersive AR experiences, while Thunderbolt connectivity allows for high-speed data transfer and external display support.',
    images: [
      'https://images.unsplash.com/photo-1544244015-0cd4b3ff269d?w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    ],
    specifications: {
      processor: 'M2',
      storage: '256GB',
      display: '12.9" Liquid Retina XDR',
      camera: '12MP',
      weight: '682g',
    },

    brandId: 1,
    categoryId: 3,
  },
  {
    name: 'iPad Air',
    price: 599.99,
    description:
      "Powerful, colorful, and impossibly versatile - the iPad Air with M1 chip brings incredible capability to a light and portable design. The stunning 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an anti-reflective coating for an immersive viewing experience. With a 12MP Ultra Wide front camera featuring Center Stage, you'll always stay perfectly framed during video calls. Support for Apple Pencil (2nd gen) and Magic Keyboard transforms the iPad Air into your notepad, canvas, and mobile office. Available in five gorgeous colors, it's the perfect blend of performance and portability.",
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
      'https://images.unsplash.com/photo-1544244015-0cd4b3ff269d?w=800',
    ],
    specifications: {
      processor: 'M1',
      storage: '64GB',
      display: '10.9" Liquid Retina',
      camera: '12MP',
      weight: '461g',
    },

    brandId: 1,
    categoryId: 3,
  },
  {
    name: 'Galaxy Tab S9',
    price: 799.99,
    description:
      'Reinvent your productivity with the Samsung Galaxy Tab S9, featuring a breathtaking 11-inch Dynamic AMOLED 2X display with a smooth 120Hz refresh rate. Powered by the Snapdragon 8 Gen 2 processor, experience blazing-fast performance for gaming, creation, and multitasking. The included S Pen, featuring ultra-low latency, provides a natural writing and drawing experience and attaches magnetically for wireless charging. With an IP68 rating for water and dust resistance, the Tab S9 is built to go wherever inspiration takes you. Samsung DeX mode provides a desktop-like experience, making it a true laptop replacement when paired with the Book Cover Keyboard.',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800',
    ],
    specifications: {
      processor: 'Snapdragon 8 Gen 2',
      storage: '256GB',
      display: '11" Dynamic AMOLED 2X',
      camera: '13MP',
      weight: '498g',
    },

    brandId: 2,
    categoryId: 3,
  },
  {
    name: 'Surface Pro 9',
    price: 999.99,
    description:
      '2-in-1 tablet that runs full Windows with laptop-class performance.',
    images: ['/products/surface-pro-9-1.jpg', '/products/surface-pro-9-2.jpg'],
    specifications: {
      processor: 'Intel Core i7-1255U',
      storage: '256GB',
      display: '13" PixelSense Flow',
      camera: '10MP',
      weight: '879g',
    },

    brandId: 10,
    categoryId: 3,
  },

  // Smartwatches
  {
    name: 'Apple Watch Series 9',
    price: 399.99,
    description:
      "The Apple Watch Series 9 is your essential companion for a healthy life, now even more powerful with the S9 SiP. Experience a magical new way to interact with your watch without touching the screen, a brighter-than-ever display, and the first Apple product combination that's carbon neutral. Advanced health sensors provide deep insights into your physical and mental well-being, including ECG, heart rate, sleep stages, and temperature sensing for cycle tracking. With Crash Detection and Fall Detection, help is always just a tap away. The Always-On Retina display makes it easy to see your progress at a glance, whether you're at the gym or in a meeting.",
    images: [
      'https://images.unsplash.com/photo-1544244015-0cd4b3ff269d?w=800',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800',
    ],
    specifications: {
      display: '1.9"',
      battery: '18 hours',
      sensors: 'ECG, Blood Oxygen, Temperature',
      waterResistant: '50m',
      connectivity: 'GPS + Cellular',
    },

    brandId: 1,
    categoryId: 4,
  },
  {
    name: 'Apple Watch Series 9',
    price: 399.99,
    description:
      "The Apple Watch Series 9 is your essential companion for a healthy life, now even more powerful with the S9 SiP. Experience a magical new way to interact with your watch without touching the screen, a brighter-than-ever display, and the first Apple product combination that's carbon neutral. Advanced health sensors provide deep insights into your physical and mental well-being, including ECG, heart rate, sleep stages, and temperature sensing for cycle tracking. With Crash Detection and Fall Detection, help is always just a tap away. The Always-On Retina display makes it easy to see your progress at a glance, whether you're at the gym or in a meeting.",
    images: [
      'https://images.unsplash.com/photo-1434493907317-a46b53b81822?w=800',
      'https://images.unsplash.com/photo-1434493721556-9430c7667ff4?w=800',
    ],
    specifications: {
      display: '1.9"',
      battery: '18 hours',
      sensors: 'ECG, Blood Oxygen, Temperature',
      waterResistant: '50m',
      connectivity: 'GPS + Cellular',
    },

    brandId: 1,
    categoryId: 4,
  },
  {
    name: 'Galaxy Watch 6',
    price: 299.99,
    description:
      'Meet your new fitness partner, the Samsung Galaxy Watch 6. Featuring a larger, more vibrant display and a sleek, thinner bezel, this smartwatch is designed to look as good as it performs. Advanced sleep coaching helps you build better sleep habits, while personalized Heart Rate Zones optimize every workout. With BIA (Bioelectrical Impedance Analysis) sensor, you can track body fat and skeletal muscle to monitor your progress more accurately. Seamlessly integrated with the Galaxy ecosystem, you can control your smartphone camera, stream music, and receive notifications right from your wrist. Its classic design and durable build make it perfect for any occasion.',
    images: [
      'https://images.unsplash.com/photo-1508685096489-7as65842d762?w=800',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    ],
    specifications: {
      display: '1.5"',
      battery: '40 hours',
      sensors: 'ECG, BIA, Temperature',
      waterResistant: '50m',
      connectivity: 'Bluetooth',
    },

    brandId: 2,
    categoryId: 4,
  },
  {
    name: 'Pixel Watch 2',
    price: 349.99,
    description:
      'The Google Pixel Watch 2 combines the best of Google and Fitbit to help you stay healthy and productive. Featuring three new advanced sensors for more accurate heart rate tracking, skin temperature monitoring, and stress management, the Pixel Watch 2 gives you a complete picture of your health. With Wear OS 4, experience Google apps like Maps, Gmail, and Calendar redesigned for your wrist. Safety features like Fall Detection and Emergency SOS provide peace of mind wherever you go. The elegant, domed circular design is crafted from 100% recycled aluminum, making it as sustainable as it is sophisticated.',
    images: [
      'https://images.unsplash.com/photo-1508685096489-78b30f8a383a?w=800',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
    ],
    specifications: {
      display: '1.2"',
      battery: '24 hours',
      sensors: 'ECG, cEDA, Temperature',
      waterResistant: '50m',
      connectivity: 'GPS + LTE',
    },

    brandId: 11,
    categoryId: 4,
  },

  // Headphones
  {
    name: 'AirPods Pro 2',
    price: 249.99,
    description:
      "Experience sound like never before with AirPods Pro (2nd generation). Powered by the H2 chip, ANC is up to 2x more effective than the previous generation, letting you focus on your music or podcasts in any environment. Transparency Mode lets you hear the world around you, while Adaptive Audio intelligently blends the two to suit your surroundings. With personalized Spatial Audio and dynamic head tracking, sound is placed all around you for an immersive listening experience. The MagSafe Charging Case features a built-in speaker and lanyard loop, and with four pairs of silicone ear tips, you'll find the perfect fit for all-day comfort.",
    images: [
      'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
    ],
    specifications: {
      type: 'In-ear',
      battery: '6 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      waterResistant: 'IPX4',
      connectivity: 'Bluetooth 5.3',
    },

    brandId: 1,
    categoryId: 5,
  },
  {
    name: 'AirPods Max',
    price: 549.99,
    description:
      "AirPods Max reimagine over-ear headphones, combining high-fidelity audio with the magical AirPods experience. The custom-built driver delivers ultra-low distortion across the entire audible range, providing deep, rich bass, accurate mids, and crisp, clean highs. Industry-leading Active Noise Cancellation blocks out the world, while Transparency mode lets you hear what's happening around you. Featuring a breathable knit mesh canopy and memory foam ear cushions for an exceptional fit, these headphones are designed for uncompromising comfort. With 20 hours of battery life and a sleek Smart Case, take your cinematic sound experience wherever you go.",
    images: [
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800',
      'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=800',
    ],
    specifications: {
      type: 'Over-ear',
      battery: '20 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      audioQuality: 'Spatial Audio',
      connectivity: 'Bluetooth 5.0',
    },

    brandId: 1,
    categoryId: 5,
  },
  {
    name: 'WH-1000XM5',
    price: 399.99,
    description:
      "Sony's WH-1000XM5 headphones redefine silence with industry-leading Noise Cancellation, powered by two processors and eight microphones. Experience exceptional sound quality with High-Resolution Audio support and the Integrated Processor V1. Crystal-clear hands-free calls are guaranteed with four beamforming microphones and AI-based noise reduction. The elegant, lightweight design with soft-fit leather provides all-day comfort, while the 30-hour battery life keeps the music playing through even the longest trips. With intuitive touch controls and Speak-to-Chat technology, managing your audio has never been easier or more sophisticated.",
    images: [
      'https://images.unsplash.com/photo-1618366712010-8c0e29d7d049?w=800',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      type: 'Over-ear',
      battery: '30 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      audioQuality: 'Hi-Res',
      connectivity: 'Bluetooth 5.2',
    },

    brandId: 3,
    categoryId: 5,
  },
  {
    name: 'WH-1000XM5',
    price: 399.99,
    description:
      "Sony's WH-1000XM5 headphones redefine silence with industry-leading Noise Cancellation, powered by two processors and eight microphones. Experience exceptional sound quality with High-Resolution Audio support and the Integrated Processor V1. Crystal-clear hands-free calls are guaranteed with four beamforming microphones and AI-based noise reduction. The elegant, lightweight design with soft-fit leather provides all-day comfort, while the 30-hour battery life keeps the music playing through even the longest trips. With intuitive touch controls and Speak-to-Chat technology, managing your audio has never been easier or more sophisticated.",
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800',
    ],
    specifications: {
      type: 'Over-ear',
      battery: '30 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      audioQuality: 'Hi-Res',
      connectivity: 'Bluetooth 5.2',
    },

    brandId: 3,
    categoryId: 5,
  },
  {
    name: 'QuietComfort Ultra',
    price: 429.99,
    description:
      'Lose yourself in your music with Bose QuietComfort Ultra headphones, featuring world-class noise cancellation and breakthrough spatialized audio. Bose Immersive Audio pushes the boundaries of what it means to listen, taking what you’re hearing out of your head and placing it in front of you for a more natural-sounding experience. CustomTune technology personalizes the sound to your ears, ensuring every note is crisp and clear. With three listening modes—Quiet, Aware, and Immersion—you can adjust the world to your liking. Experience the ultimate in luxury with high-quality materials and up to 24 hours of battery life on a single charge.',
    images: [
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
    ],
    specifications: {
      type: 'Over-ear',
      battery: '24 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      audioQuality: 'Immersive Audio',
      connectivity: 'Bluetooth 5.3',
    },

    brandId: 16,
    categoryId: 5,
  },
  {
    name: 'Galaxy Buds2 Pro',
    price: 229.99,
    description:
      "Galaxy Buds2 Pro deliver studio-quality sound in a compact, ergonomic design. Experience 24-bit Hi-Fi audio for a clear, rich listening experience, and intelligent Active Noise Cancellation that lets you block out even the loudest distractions. With Enhanced 360 Audio and personalized beamforming, calls are crystal clear, and movies feel like you're in the theater. Auto Switch technology allows you to seamlessly transition between your Galaxy phone, tablet, and watch. With an IPX7 water resistance rating and up to 18 hours of battery life with the charging case, your music can keep up with your active lifestyle.",
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
      'https://images.unsplash.com/photo-1590658006244-8as65842d762?w=800',
    ],
    specifications: {
      type: 'In-ear',
      battery: '5 hours (ANC on)',
      noiseControl: 'Active Noise Cancellation',
      audioQuality: '360 Audio',
      connectivity: 'Bluetooth 5.3',
    },

    brandId: 2,
    categoryId: 5,
  },
  {
    name: 'Studio3 Wireless',
    price: 349.99,
    description:
      'Immerse yourself in rich, dynamic sound with Beats Studio3 Wireless headphones. Featuring Pure Adaptive Noise Cancelling (Pure ANC) technology, these headphones actively block external noise while using real-time audio calibration to preserve clarity, range, and emotion. The Apple W1 chip provides seamless setup and switching for your Apple devices, and Class 1 Bluetooth connectivity offers extended range with fewer dropouts. With up to 22 hours of battery life for all-day wireless play, and Fast Fuel technology that gives you 3 hours of playback from a 10-minute charge, the music never has to stop. Experience the iconic Beats sound and style.',
    images: [
      'https://images.unsplash.com/photo-1520170350707-b2da59970118?w=800',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800',
    ],
    specifications: {
      type: 'Over-ear',
      battery: '22 hours (ANC on)',
      noiseControl: 'Pure Adaptive Noise Cancelling',
      audioQuality: 'Fine-tuned acoustics',
      connectivity: 'Bluetooth',
    },

    brandId: 25,
    categoryId: 5,
  },

  // Speakers
  {
    name: 'HomePod',
    price: 299.99,
    description:
      'The HomePod is a powerhouse of a speaker, delivering deep, rich bass and stunning high frequencies. Apple-engineered audio technology and advanced software deliver high-fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or wherever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound unbelievable. With Siri integrated, you can manage your smart home, get answers to your questions, and control your music with just your voice. Pair two HomePod speakers for a true stereo experience, or connect multiple speakers for a multi-room audio system.',
    images: [
      'https://images.unsplash.com/photo-1483054719142-034eb3c411a0?w=800',
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800',
    ],
    specifications: {
      type: 'Smart Speaker',
      drivers: 'High-excursion woofer, 5 tweeters',
      smartAssistant: 'Siri',
      connectivity: 'WiFi, Bluetooth',
      audioQuality: 'Spatial Audio',
    },

    brandId: 1,
    categoryId: 6,
  },
  {
    name: 'Charge 5',
    price: 179.99,
    description:
      'Take the party with you wherever you go with the JBL Charge 5. This portable Bluetooth speaker delivers bold JBL Original Pro Sound, featuring an optimized long-excursion driver, separate tweeter, and dual pumping JBL bass radiators. With up to 20 hours of playtime and a built-in power bank, you can keep your devices charged and the music going all night long. Its IP67 waterproof and dustproof rating means it can handle the pool, the park, or even a sudden rain shower. Connect multiple JBL PartyBoost-enabled speakers for a sound big enough for any crowd. Experience the ultimate in durable, high-performance audio.',
    images: [
      'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800',
      'https://images.unsplash.com/photo-1543512214-318c7553f230?w=800',
    ],
    specifications: {
      type: 'Portable Speaker',
      battery: '20 hours',
      waterResistant: 'IP67',
      connectivity: 'Bluetooth 5.1',
      powerBank: 'Yes',
    },

    brandId: 17,
    categoryId: 6,
  },
  {
    name: 'Flip 6',
    price: 129.99,
    description:
      'The JBL Flip 6 is engineered to deliver powerful JBL Original Pro Sound with exceptional clarity, thanks to its 2-way speaker system consisting of an optimized racetrack-shaped driver, separate tweeter, and dual pumping bass radiators. This compact yet powerful speaker is easy to carry and features an IP67 waterproof and dustproof design, making it perfect for any adventure. With up to 12 hours of playtime on a single charge, the Flip 6 keeps the music moving as long as you do. Use PartyBoost to link multiple compatible speakers and amplify your listening experience. Bold sound meets bold design in this ultimate portable companion.',
    images: [
      'https://images.unsplash.com/photo-1612441304227-36ed4205042b?w=800',
      'https://images.unsplash.com/photo-1589256469067-ea99122bbec4?w=800',
    ],
    specifications: {
      type: 'Portable Speaker',
      battery: '12 hours',
      waterResistant: 'IP67',
      connectivity: 'Bluetooth 5.1',
      weight: '550g',
    },

    brandId: 17,
    categoryId: 6,
  },
  {
    name: 'SoundLink Revolve+',
    price: 329.99,
    description:
      "Experience true 360-degree sound with the Bose SoundLink Revolve+ II, our best-performing portable Bluetooth speaker. This speaker is engineered to deliver deep, loud, and immersive sound in every direction, so everyone gets the same experience. Place it in the center of the room or near a wall to let the sound reflect and surround you. Its flexible handle and durable, water-resistant design (IP55) make it easy to take your music anywhere. With up to 17 hours of battery life and a built-in microphone for taking calls or accessing your phone's voice assistant, the Revolve+ II is the ultimate versatile speaker for any environment.",
    images: [
      'https://images.unsplash.com/photo-1545453330-1170a4a6b53b81822?w=800',
      'https://images.unsplash.com/photo-1545453721556-9430c7667ff4?w=800',
    ],
    specifications: {
      type: 'Portable Speaker',
      battery: '17 hours',
      waterResistant: 'IPX4',
      connectivity: 'Bluetooth',
      audioQuality: '360-degree sound',
    },

    brandId: 16,
    categoryId: 6,
  },

  // Cameras
  {
    name: 'EOS R5',
    price: 3899.99,
    description:
      'The Canon EOS R5 is a professional full-frame mirrorless camera that redefines versatility. Featuring a groundbreaking 45MP CMOS sensor and the DIGIC X processor, it captures stunningly detailed still images and revolutionary 8K RAW video at up to 30fps. The advanced Dual Pixel CMOS AF II system provides lightning-fast and precise autofocus with 1,053 zones, while the 5-axis In-Body Image Stabilizer offers up to 8 stops of shake correction. With a durable, weather-sealed body and high-speed continuous shooting up to 20fps, the EOS R5 is the ultimate tool for photographers and videographers who demand the best in performance and image quality.',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
      'https://images.unsplash.com/photo-1512790182412-b19e6d12bf45?w=800',
    ],
    specifications: {
      sensor: '45MP Full-Frame CMOS',
      video: '8K RAW',
      iso: '100-51200',
      autofocus: 'Dual Pixel CMOS AF II',
      fps: '20fps',
    },

    brandId: 18,
    categoryId: 7,
  },
  {
    name: 'EOS R6 Mark II',
    price: 2499.99,
    description:
      'The Canon EOS R6 Mark II is the ultimate versatile camera for enthusiasts and professional creators alike. Featuring a 24.2MP full-frame sensor and the powerful DIGIC X processor, it delivers exceptional image quality and performance in any situation. Experience incredibly fast continuous shooting at up to 40fps with the electronic shutter, and capture stunning 4K 60p video oversampled from 6K. The Dual Pixel CMOS AF II system with advanced subject tracking ensures your subjects are always in sharp focus. With improved low-light performance and 5-axis In-Body Image Stabilization, the EOS R6 Mark II is built to handle the most demanding creative challenges with ease.',
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
      'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800',
    ],
    specifications: {
      sensor: '24.2MP Full-Frame CMOS',
      video: '6K RAW',
      iso: '100-102400',
      autofocus: 'Dual Pixel CMOS AF II',
      fps: '40fps',
    },

    brandId: 18,
    categoryId: 7,
  },
  {
    name: 'Z9',
    price: 5499.99,
    description:
      "The Nikon Z9 is Nikon's most advanced flagship mirrorless camera, designed for professionals who push the boundaries of what's possible. Featuring a 45.7MP stacked CMOS sensor and the EXPEED 7 image-processing engine, the Z9 delivers unparalleled speed and performance. Experience blackout-free shooting with the revolutionary electronic viewfinder, and capture 8K 60p video for extended periods. The advanced AF system significantly improves subject detection and tracking, while the rugged, weather-sealed body ensures reliability in the toughest conditions. With high-speed continuous shooting up to 120fps (at 11MP), the Nikon Z9 is the ultimate choice for sports, wildlife, and commercial photography.",
    images: [
      'https://images.unsplash.com/photo-1616423642151-51829e2479f6?w=800',
      'https://images.unsplash.com/photo-1563823245319-35758cf14571?w=800',
    ],
    specifications: {
      sensor: '45.7MP Full-Frame Stacked CMOS',
      video: '8K 60p',
      iso: '64-25600',
      autofocus: '493-point AF',
      fps: '120fps',
    },

    brandId: 19,
    categoryId: 7,
  },
  {
    name: 'Alpha 7R V',
    price: 3899.99,
    description:
      'The Sony Alpha 7R V is a high-resolution masterpiece, featuring a 61MP full-frame Exmor R sensor and a revolutionary AI processing unit dedicated to autofocus. Experience unprecedented subject recognition and tracking performance, ensuring your subjects are captured with razor-sharp precision. The advanced 5-axis In-Body Image Stabilization offers up to 8 stops of compensation, while the new 4-axis multi-angle LCD monitor provides exceptional shooting flexibility. Capture stunning 8K 24p and 4K 60p video with exceptional detail and dynamic range. Crafted for professionals who demand the highest resolution and most advanced AF technology, the Alpha 7R V is the ultimate tool for detail-intensive photography.',
    images: [
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800',
      'https://images.unsplash.com/photo-1621155346337-2d4905950ad.jpg?w=800',
    ],
    specifications: {
      sensor: '61MP Full-Frame Exmor R',
      video: '8K 24p',
      iso: '100-32000',
      autofocus: 'AI-based AF',
      fps: '10fps',
    },

    brandId: 3,
    categoryId: 7,
  },

  // Gaming Consoles
  {
    name: 'PlayStation 5',
    price: 499.99,
    description:
      'Experience the future of gaming with the PlayStation 5. Featuring an ultra-fast custom SSD for near-instant load times and an integrated I/O that redefines what’s possible with a console. Immerse yourself in stunning 4K graphics at up to 120fps, with support for Ray Tracing that provides true-to-life reflections and shadows. The revolutionary DualSense wireless controller offers immersive haptic feedback and dynamic adaptive triggers, making every action feel more impactful. With 3D Audio technology and an incredible lineup of exclusive titles, the PS5 delivers an unparalleled gaming experience that pushes the boundaries of imagination.',
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800',
      'https://images.unsplash.com/photo-1606813907291-d86ebb9c94ad?w=800',
    ],
    specifications: {
      processor: 'AMD Zen 2',
      gpu: 'AMD RDNA 2',
      storage: '825GB SSD',
      resolution: '4K 120Hz',
      rayTracing: 'Yes',
    },

    brandId: 3,
    categoryId: 8,
  },
  {
    name: 'Xbox Series X',
    price: 499.99,
    description:
      'The Xbox Series X is the fastest, most powerful Xbox ever, designed for a generation of console gaming that places you at the center. With 12 teraflops of processing power and Xbox Velocity Architecture, experience 4K gaming at up to 120fps and near-instant load times. Quick Resume allows you to switch seamlessly between multiple games and pick up right where you left off. Immerse yourself in rich, dynamic worlds with support for DirectX Ray Tracing and spatial 3D audio. With thousands of games across four generations of Xbox available through backward compatibility and Xbox Game Pass, the Series X is the ultimate machine for discovering and playing the games you love.',
    images: [
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800',
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800',
    ],
    specifications: {
      processor: 'AMD Zen 2',
      gpu: 'AMD RDNA 2',
      storage: '1TB SSD',
      resolution: '4K 120Hz',
      rayTracing: 'Yes',
    },

    brandId: 10,
    categoryId: 8,
  },

  // Monitors
  {
    name: 'UltraFine 5K',
    price: 1299.99,
    description:
      'The LG UltraFine 5K Display is the ultimate tool for Mac users and creative professionals. Featuring a breathtaking 5120x2880 resolution on a 27-inch IPS panel, it delivers incredibly sharp text and lifelike images with its P3 wide color gamut and 500 nits of brightness. With Thunderbolt 3 connectivity, you can charge your MacBook and transfer data through a single cable. The integrated stereo speakers, camera, and microphone allow for a rich media experience and effortless video calls. Designed for absolute precision, this display ensures your creative vision is represented with stunning accuracy and clarity.',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
      'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800',
    ],
    specifications: {
      size: '27"',
      resolution: '5120x2880',
      panel: 'IPS',
      refreshRate: '60Hz',
      brightness: '500 nits',
    },

    brandId: 4,
    categoryId: 9,
  },
  {
    name: 'Predator X27U',
    price: 899.99,
    description:
      'Elevate your gaming experience with the Acer Predator X27U, a 27-inch OLED gaming monitor that combines stunning 4K resolution with a blazing-fast 240Hz refresh rate. Experience incredible depth and contrast with VESA DisplayHDR True Black 400, while the 0.03ms response time ensures your movements are fluid and instantaneous. With 99% DCI-P3 color gamut, every world you explore is rendered with vibrant, cinematic color. AMD FreeSync Premium technology eliminates screen tearing and stutter for a smooth, uninterrupted gameplay. The sleek, ergonomic design and built-in KVM switch make it the ultimate centerpiece for any high-performance gaming setup.',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      'https://images.unsplash.com/photo-1552831344-f919ff57adfe?w=800',
    ],
    specifications: {
      size: '27"',
      resolution: '3840x2160',
      panel: 'IPS',
      refreshRate: '160Hz',
      hdr: 'DisplayHDR 400',
    },

    brandId: 9,
    categoryId: 9,
  },
  {
    name: 'ROG Swift PG32UQX',
    price: 2999.99,
    description:
      "The ASUS ROG Swift PG32UQX is the world's first 32-inch 4K HDR gaming monitor with mini-LED backlighting. Featuring 1152 independent LED zones, it delivers a peak brightness of 1400 nits and an incredible contrast ratio for the most realistic HDR visuals. The 144Hz refresh rate and G-SYNC Ultimate technology provide buttery-smooth, tear-free gaming at the highest settings. With its 10-bit color and 98% DCI-P3 coverage, experience professional-grade color accuracy. The built-in LiveDash OLED on the bottom bezel displays hardware info or custom logos, while Aura Sync lighting provides an immersive gaming ambient. Truly the pinnacle of gaming display technology.",
    images: [
      'https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=800',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    ],
    specifications: {
      size: '32"',
      resolution: '3840x2160',
      panel: 'Mini-LED',
      refreshRate: '144Hz',
      hdr: 'DisplayHDR 1400',
    },

    brandId: 8,
    categoryId: 9,
  },

  // Keyboards & Mice
  {
    name: 'MX Keys',
    price: 99.99,
    description:
      'The Logitech MX Keys is a premium wireless keyboard designed for precision, comfort, and stability. Its Perfect Stroke keys are shaped for your fingertips, providing a natural and fluid typing experience. Smart illumination automatically lights up the keys the moment your hands approach and adjusts to the ambient lighting conditions. Connect to up to three devices via Bluetooth or the included Logi Bolt receiver and switch between them with the tap of a button. With its solid, single-metal plate construction, MX Keys is built for stability and focus, allowing you to master your next big project with ease.',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=800',
      'https://images.unsplash.com/photo-1618384881928-1b6baf30?w=800',
    ],
    specifications: {
      type: 'Wireless Keyboard',
      switches: 'Scissor',
      connectivity: 'Bluetooth/USB',
      battery: '5 months',
      backlit: 'Yes',
    },

    brandId: 21,
    categoryId: 10,
  },
  {
    name: 'BlackWidow V4 Pro',
    price: 229.99,
    description:
      'Unleash peak performance with the Razer BlackWidow V4 Pro, a full-blown mechanical gaming keyboard built for gamers and enthusiasts. Featuring Razer Green Mechanical Switches for a tactile and clicky feel, every keystroke is satisfying and responsive. The keyboard is adorned with per-key Razer Chroma RGB and a striking 3-sided underglow that syncs with your games. The multi-function roller and 8 dedicated macro keys provide total control at your fingertips. With a magnetic plush leatherette wrist rest and two-step kickstands, experience uncompromising comfort during even the most intense gaming marathons. Truly the master of your battlestation.',
    images: [
      'https://images.unsplash.com/photo-1612117515154-1a20484d2569?w=800',
      'https://images.unsplash.com/photo-1629019725048-73238612984a?w=800',
    ],
    specifications: {
      type: 'Mechanical Gaming Keyboard',
      switches: 'Razer Green',
      connectivity: 'Wired/Wireless',
      rgb: 'Per-key Chroma',
      media: 'Roller & Keys',
    },

    brandId: 20,
    categoryId: 10,
  },
  {
    name: 'MX Master 3S',
    price: 99.99,
    description:
      'Logitech MX Master 3S is an iconic mouse remastered for ultimate precision and feel. Experience the silence of Quiet Clicks and the incredible speed and precision of the 8000 DPI track-on-glass sensor. The MagSpeed Electromagnetic scroll wheel is fast enough to scroll 1000 lines in a second and precise enough to stop on a pixel. Its ergonomic silhouette is crafted for your palm, ensuring your hand stays comfortable throughout the day. With customizable buttons and app-specific profiles, the MX Master 3S streamlines your workflow across multiple computers and operating systems. Experience the gold standard of productivity mice.',
    images: [
      'https://images.unsplash.com/photo-1615663248861-c80b4cb5b434?w=800',
      'https://images.unsplash.com/photo-1527864550417-7as65842d762?w=800',
    ],
    specifications: {
      type: 'Wireless Mouse',
      sensor: '8000 DPI',
      connectivity: 'Bluetooth/USB',
      battery: '70 days',
      buttons: '7',
    },

    brandId: 21,
    categoryId: 11,
  },
  {
    name: 'DeathAdder V3 Pro',
    price: 149.99,
    description:
      'Experience the pinnacle of competitive gaming with the Razer DeathAdder V3 Pro. Rethought and reforged with the help of top pro gamers, its iconic ergonomic shape is now 25% lighter than its predecessor, weighing only 63g. Powered by the Razer Focus Pro 30K Optical Sensor, experience flawless tracking on a wider variety of surfaces, including glass. The Razer Optical Mouse Switches Gen-3 eliminate double-clicking issues and provide a lightning-fast 0.2ms response time. With up to 90 hours of battery life and high-speed HyperSpeed Wireless connectivity, the DeathAdder V3 Pro is the ultimate weapon for those who refuse to lose.',
    images: [
      'https://images.unsplash.com/photo-1615663248861-2d180705cd2c?w=800',
      'https://images.unsplash.com/photo-1527814732105-9358efb132d53d?w=800',
    ],
    specifications: {
      type: 'Wireless Gaming Mouse',
      sensor: '30000 DPI',
      connectivity: 'HyperSpeed Wireless',
      battery: '90 hours',
      weight: '63g',
    },

    brandId: 20,
    categoryId: 11,
  },

  // External Storage
  {
    name: 'T7 Shield 2TB',
    price: 229.99,
    description:
      "The Samsung T7 Shield is a rugged, portable SSD built for durability and performance. It features an IP65 rating for water and dust resistance and can withstand drops of up to 3 meters. With read/write speeds of up to 1,050/1,000 MB/s, it allows for fast transfers of large files, whether you're on a film set or in the office. The rubberized exterior provides a secure grip and prevents the drive from sliding on surfaces. With AES 256-bit hardware encryption and password protection, your data stays secure. The T7 Shield is the perfect companion for adventurers and professionals who need reliable storage in any environment.",
    images: [
      'https://images.unsplash.com/photo-1597740985671-2ed9a4886505?w=800',
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800',
    ],
    specifications: {
      capacity: '2TB',
      interface: 'USB 3.2 Gen 2',
      speed: '1050 MB/s',
      durability: 'IP65',
      encryption: 'Yes',
    },

    brandId: 2,
    categoryId: 12,
  },
  {
    name: 'SanDisk Extreme Pro 4TB',
    price: 499.99,
    description:
      'The SanDisk Extreme Pro Portable SSD V2 is designed for professionals who need ultra-fast, reliable storage on the go. Featuring NVMe technology, it delivers blazing-fast read and write speeds of up to 2,000 MB/s, allowing you to save and transfer photos and videos in seconds. Its forged aluminum chassis acts as a heatsink to maintain higher sustained speeds, while its rugged design offers IP55 water and dust resistance and up to 3-meter drop protection. With a handy carabiner loop, you can easily secure it to your belt or backpack. Keep your private content private with the included password protection featuring 256-bit AES hardware encryption.',
    images: [
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800',
      'https://images.unsplash.com/photo-1597740985671-2d180705cd2c?w=800',
    ],
    specifications: {
      capacity: '4TB',
      interface: 'USB 3.2 Gen 2x2',
      speed: '2000 MB/s',
      durability: 'IP55',
      encryption: 'Yes',
    },

    brandId: 2,
    categoryId: 12,
  },

  // Power Banks
  {
    name: 'PowerCore 26800',
    price: 65.99,
    description:
      "Never run out of power with the Anker PowerCore 26800. This high-capacity portal charger features three USB output ports and PowerIQ tech, allowing you to charge three devices simultaneously at high speeds. With enough capacity to charge most phones over 6 times, it's the ultimate companion for long trips and busy days. The dual input ports allow for 2x faster recharging, so you can fill up the massive capacity in as little as 6 hours with a dual adapter. Built with Anker's MultiProtect safety system, it ensures complete protection for you and your devices. Stay connected and productive with the power bank that doesn't quit.",
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365591277a?w=800',
      'https://images.unsplash.com/photo-1583305739951-dc798b83aca2?w=800',
    ],
    specifications: {
      capacity: '26800mAh',
      output: '3 USB ports',
      charging: 'PowerIQ 2.0',
      weight: '500g',
      led: 'Indicator',
    },

    brandId: 24,
    categoryId: 13,
  },
  {
    name: 'PowerCore 10000',
    price: 29.99,
    description:
      "The Anker PowerCore 10000 is one of the world's smallest and lightest 10000mAh portable chargers. Its compact design fits easily into any pocket or bag, making it the perfect everyday carry for staying powered on the go. Despite its small size, it packs enough power to charge most flagship phones two to three times. Equipped with Anker's exclusive PowerIQ and VoltageBoost technologies, it ensures the fastest possible charge for your devices. The durable, matte-finish exterior resists fingerprints and scratches, while the MultiProtect safety system provides peace of mind. Power up your day with the compact charger that delivers big results.",
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5334b1618f?w=800',
      'https://images.unsplash.com/photo-1609091839311-d5365591277a?w=800',
    ],
    specifications: {
      capacity: '10000mAh',
      output: '1 USB port',
      charging: 'PowerIQ',
      weight: '180g',
      led: 'Indicator',
    },

    brandId: 24,
    categoryId: 13,
  },

  // Drones
  {
    name: 'Mavic 3 Pro',
    price: 2199.99,
    description:
      "The DJI Mavic 3 Pro redefines aerial imaging with its revolutionary triple-camera system. Featuring a 4/3 CMOS Hasselblad camera and two tele cameras, it offers three different focal lengths (24mm, 70mm, and 166mm) for unparalleled creative freedom. Capture stunning 5.1K 50fps video with incredible detail and a 12.8-stop dynamic range. With up to 43 minutes of flight time and omnidirectional obstacle sensing, fly with confidence and focus on your shot. The O3+ transmission system provides a 15km range and 1080p/60fps live feed for crystal-clear monitoring. Whether you're a professional filmmaker or a hobbyist, the Mavic 3 Pro is the ultimate drone for capturing the world from above.",
    images: [
      'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800',
    ],
    specifications: {
      camera: 'Hasselblad 4/3 CMOS',
      video: '5.1K 50fps',
      flightTime: '43 min',
      range: '15 km',
      sensors: 'Omnidirectional',
    },

    brandId: 23,
    categoryId: 14,
  },
  {
    name: 'Mini 4 Pro',
    price: 759.99,
    description:
      "The DJI Mini 4 Pro is our most advanced mini drone to date, packing professional-level features into a compact, foldable design weighing under 249g. Featuring omnidirectional obstacle sensing and ActiveTrack 360, it's the safest and easiest mini drone to fly. The 1/1.3-inch CMOS sensor captures stunning 4K 60fps HDR video and 48MP photos with exceptional detail. With up to 34 minutes of flight time and a 10km range, explore your surroundings without limits. Intelligent features like MasterShots and Waypoint Flight allow you to capture cinematic shots with ease. The Mini 4 Pro is the perfect companion for travel, offering pro-level performance without the bulk.",
    images: [
      'https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=800',
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800',
    ],
    specifications: {
      camera: '1/1.3" CMOS',
      video: '4K 60fps',
      flightTime: '34 min',
      range: '10 km',
      weight: '249g',
    },

    brandId: 23,
    categoryId: 14,
  },
  {
    name: 'HERO12 Black',
    price: 399.99,
    description:
      "Meet the GoPro HERO12 Black, the most powerful and versatile HERO camera yet. Featuring high-dynamic range (HDR) for both videos (5.3K and 4K) and photos, it captures every detail even in challenging lighting. HyperSmooth 6.0 stabilization delivers incredibly smooth footage, while the new Bluetooth audio support allows you to connect your AirPods or other headphones for wireless audio recording and voice control. With a rugged, waterproof design up to 33ft, it's built for any adventure. The powerful Enduro battery ensures longer recording times, even in cold conditions. Capture your wildest moments with the ultimate action camera that pushes the limits of performance.",
    images: [
      'https://images.unsplash.com/photo-1563823245319-35758cf14571?w=800',
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800',
    ],
    specifications: {
      camera: '27MP',
      video: '5.3K 60fps',
      waterproof: '10m',
      stabilization: 'HyperSmooth 6.0',
      battery: '1720mAh',
    },

    brandId: 22,
    categoryId: 14,
  },
];

// Customers
export const customersData = [
  {
    lastName: 'Johnson',
    firstName: 'Michael',
    email: 'michael.johnson@email.com',
    address: '123 Main St',
    phone: '+1-555-0101',
    birthday: '1990-05-15',
  },
  {
    lastName: 'Smith',
    firstName: 'Emily',
    email: 'emily.smith@email.com',
    address: '456 Oak Avenue',
    phone: '+1-555-0102',
    birthday: '1988-08-22',
  },
  {
    lastName: 'Williams',
    firstName: 'David',
    email: 'david.williams@email.com',
    address: '789 Pine Road',
    phone: '+1-555-0103',
    birthday: '1995-03-10',
  },
  {
    lastName: 'Brown',
    firstName: 'Sarah',
    email: 'sarah.brown@email.com',
    address: '321 Elm Street',
    phone: '+1-555-0104',
    birthday: '1992-11-28',
  },
  {
    lastName: 'Jones',
    firstName: 'James',
    email: 'james.jones@email.com',
    address: '654 Maple Drive',
    phone: '+1-555-0105',
    birthday: '1985-07-03',
  },
  {
    lastName: 'Garcia',
    firstName: 'Maria',
    email: 'maria.garcia@email.com',
    address: '987 Cedar Lane',
    phone: '+1-555-0106',
    birthday: '1993-12-17',
  },
  {
    lastName: 'Martinez',
    firstName: 'Juan',
    email: 'juan.martinez@email.com',
    address: '147 Birch Court',
    phone: '+1-555-0107',
    birthday: '1989-04-25',
  },
  {
    lastName: 'Davis',
    firstName: 'Jessica',
    email: 'jessica.davis@email.com',
    address: '258 Willow Way',
    phone: '+1-555-0108',
    birthday: '1991-09-08',
  },
  {
    lastName: 'Rodriguez',
    firstName: 'Carlos',
    email: 'carlos.rodriguez@email.com',
    address: '369 Spruce Street',
    phone: '+1-555-0109',
    birthday: '1987-01-14',
  },
  {
    lastName: 'Lee',
    firstName: 'Sophia',
    email: 'sophia.lee@email.com',
    address: '741 Aspen Boulevard',
    phone: '+1-555-0110',
    birthday: '1994-06-20',
  },
  {
    lastName: 'Wilson',
    firstName: 'Christopher',
    email: 'chris.wilson@email.com',
    address: '852 Cherry Avenue',
    phone: '+1-555-0111',
    birthday: '1986-10-12',
  },
  {
    lastName: 'Anderson',
    firstName: 'Emma',
    email: 'emma.anderson@email.com',
    address: '963 Walnut Street',
    phone: '+1-555-0112',
    birthday: '1996-02-28',
  },
  {
    lastName: 'Thomas',
    firstName: 'Daniel',
    email: 'daniel.thomas@email.com',
    address: '159 Hickory Drive',
    phone: '+1-555-0113',
    birthday: '1990-08-05',
  },
  {
    lastName: 'Taylor',
    firstName: 'Olivia',
    email: 'olivia.taylor@email.com',
    address: '357 Poplar Lane',
    phone: '+1-555-0114',
    birthday: '1992-03-19',
  },
  {
    lastName: 'Moore',
    firstName: 'Matthew',
    email: 'matthew.moore@email.com',
    address: '753 Magnolia Court',
    phone: '+1-555-0115',
    birthday: '1988-12-23',
  },
];

// Payment Methods
export const paymentMethodsData = [
  { id: 'CREDIT_CARD', name: 'Credit Card', requireAdvancePayment: true },
  { id: 'DEBIT_CARD', name: 'Debit Card', requireAdvancePayment: true },
  { id: 'PAYPAL', name: 'PayPal', requireAdvancePayment: true },
  { id: 'APPLE_PAY', name: 'Apple Pay', requireAdvancePayment: true },
  { id: 'GOOGLE_PAY', name: 'Google Pay', requireAdvancePayment: true },
  {
    id: 'CASH_ON_DELIVERY',
    name: 'Cash on Delivery',
    requireAdvancePayment: false,
  },
  { id: 'BANK_TRANSFER', name: 'Bank Transfer', requireAdvancePayment: true },
  { id: 'INSTALLMENT', name: 'Installment Plan', requireAdvancePayment: false },
];

// Inventory (sample - you can expand this)
export const inventoryData = [
  { address: '1000 Technology Way', district: 'Downtown', city: 'New York' },
  { address: '2500 Market Street', district: 'Mission', city: 'San Francisco' },
  { address: '3000 Commerce Blvd', district: 'Tech District', city: 'Austin' },
  {
    address: '4500 Innovation Drive',
    district: 'Silicon Valley',
    city: 'Palo Alto',
  },
];

// Product Variants (associating products with color and inventory/quantity)
export const productVariantsData = [
  // Smartphones
  {
    productId: 1,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 150,
  },
  {
    productId: 2,
    inventoryId: 1,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 200,
  },
  {
    productId: 3,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 180,
  },
  {
    productId: 4,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 95,
  },
  {
    productId: 5,
    inventoryId: 3,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 110,
  },
  {
    productId: 6,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 85,
  },
  {
    productId: 7,
    inventoryId: 2,
    colorHex: '#87CEEB',
    colorName: 'Sky Blue',
    priceModifier: 0,
    quantity: 75,
  },
  {
    productId: 8,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 50,
  },
  {
    productId: 9,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 40,
  },
  {
    productId: 10,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 60,
  },

  // Laptops
  {
    productId: 11,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 60,
  },
  {
    productId: 12,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 80,
  },
  {
    productId: 13,
    inventoryId: 3,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 45,
  },
  {
    productId: 14,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 35,
  },
  {
    productId: 15,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 25,
  },
  {
    productId: 16,
    inventoryId: 1,
    colorHex: '#0000FF',
    colorName: 'Blue',
    priceModifier: 0,
    quantity: 40,
  },
  {
    productId: 17,
    inventoryId: 3,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 30,
  },

  // Tablets
  {
    productId: 18,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 55,
  },
  {
    productId: 19,
    inventoryId: 1,
    colorHex: '#87CEEB',
    colorName: 'Sky Blue',
    priceModifier: 0,
    quantity: 70,
  },
  {
    productId: 20,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 40,
  },
  {
    productId: 21,
    inventoryId: 3,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 30,
  },

  // Smartwatches
  {
    productId: 22,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 130,
  },
  {
    productId: 23,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 140,
  },
  {
    productId: 24,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 85,
  },
  {
    productId: 25,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 110,
  },

  // Headphones
  {
    productId: 26,
    inventoryId: 1,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 200,
  },
  {
    productId: 27,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 95,
  },
  {
    productId: 28,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 110,
  },
  {
    productId: 29,
    inventoryId: 2,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 105,
  },
  {
    productId: 30,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 75,
  },
  {
    productId: 31,
    inventoryId: 3,
    colorHex: '#800080',
    colorName: 'Purple',
    priceModifier: 0,
    quantity: 50,
  },
  {
    productId: 32,
    inventoryId: 1,
    colorHex: '#FF0000',
    colorName: 'Red',
    priceModifier: 0,
    quantity: 40,
  },

  // Speakers
  {
    productId: 33,
    inventoryId: 1,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 80,
  },
  {
    productId: 34,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 120,
  },
  {
    productId: 35,
    inventoryId: 2,
    colorHex: '#0000FF',
    colorName: 'Blue',
    priceModifier: 0,
    quantity: 95,
  },
];

// Orders (timestamps will be auto-generated by the database)
export const ordersData = [
  {
    customerId: 1,
    productId: 1,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 1,
    productId: 26,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 2,
    productId: 11,
    paymentMethodId: 'APPLE_PAY',
  },
  {
    customerId: 3,
    productId: 4,
    paymentMethodId: 'PAYPAL',
  },
  {
    customerId: 4,
    productId: 22,
    paymentMethodId: 'GOOGLE_PAY',
  },
  {
    customerId: 5,
    productId: 18,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 6,
    productId: 28,
    paymentMethodId: 'CASH_ON_DELIVERY',
  },
  {
    customerId: 7,
    productId: 13,
    paymentMethodId: 'BANK_TRANSFER',
  },
  {
    customerId: 8,
    productId: 6,
    paymentMethodId: 'INSTALLMENT',
  },
  {
    customerId: 9,
    productId: 41,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 10,
    productId: 12,
    paymentMethodId: 'APPLE_PAY',
  },
  {
    customerId: 11,
    productId: 27,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 12,
    productId: 19,
    paymentMethodId: 'PAYPAL',
  },
  {
    customerId: 13,
    productId: 55,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    customerId: 14,
    productId: 48,
    paymentMethodId: 'GOOGLE_PAY',
  },
];

// Order Details (items in each order)
export const orderDetailsData = [
  // Order 1 - Customer 1 bought iPhone and AirPods
  { orderId: 1, productId: 1, quantity: 1 },
  { orderId: 2, productId: 26, quantity: 1 },

  // Order 2 - Customer 2 bought MacBook
  { orderId: 3, productId: 11, quantity: 1 },

  // Order 3 - Customer 3 bought Galaxy S24
  { orderId: 4, productId: 4, quantity: 1 },

  // Order 4 - Customer 4 bought Apple Watch
  { orderId: 5, productId: 22, quantity: 1 },

  // Order 5 - Customer 5 bought iPad Pro
  { orderId: 6, productId: 18, quantity: 1 },

  // Order 6 - Customer 6 bought Sony headphones
  { orderId: 7, productId: 28, quantity: 1 },

  // Order 7 - Customer 7 bought Dell XPS
  { orderId: 8, productId: 13, quantity: 1 },

  // Order 8 - Customer 8 bought Pixel 8 Pro
  { orderId: 9, productId: 6, quantity: 1 },

  // Order 9 - Customer 9 bought PS5 + extra controller (accessories)
  { orderId: 10, productId: 41, quantity: 1 },

  // Order 10 - Customer 10 bought MacBook Air + accessories
  { orderId: 11, productId: 12, quantity: 1 },
  { orderId: 11, productId: 46, quantity: 1 }, // keyboard
  { orderId: 11, productId: 48, quantity: 1 }, // mouse

  // Order 11 - Customer 11 bought AirPods Max
  { orderId: 12, productId: 27, quantity: 1 },

  // Order 12 - Customer 12 bought iPad Air
  { orderId: 13, productId: 19, quantity: 1 },

  // Order 13 - Customer 13 bought DJI Mavic
  { orderId: 14, productId: 55, quantity: 1 },

  // Order 14 - Customer 14 bought Logitech mouse
  { orderId: 15, productId: 48, quantity: 2 },
];
