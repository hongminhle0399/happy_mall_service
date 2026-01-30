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
    brandId: 1,
    categoryId: 1,
  },

  {
    name: 'Galaxy S24 Ultra',
    price: 1199.99,
    description:
      "Unleash ultimate mobile power with the Galaxy S24 Ultra, Samsung's most advanced smartphone yet. The revolutionary 200MP camera system with AI-enhanced processing captures every detail with breathtaking clarity, while the integrated S Pen transforms your phone into a creative powerhouse. Powered by the Snapdragon 8 Gen 3 processor optimized for Galaxy, experience buttery-smooth performance whether you're gaming, multitasking, or creating content. The stunning 6.8-inch Dynamic AMOLED 2X display with adaptive 120Hz refresh rate offers vivid colors and deep blacks, protected by Corning Gorilla Armor.",
    brandId: 2,
    categoryId: 1,
  },

  {
    name: 'Pixel 8 Pro',
    price: 899.99,
    description:
      'Discover the future of smartphone photography with the Google Pixel 8 Pro, where cutting-edge AI meets exceptional hardware. The Google Tensor G3 chip powers incredible computational photography features like Magic Eraser, Best Take, and Audio Magic Eraser, making every shot perfect. The 50MP main camera with advanced Super Res Zoom delivers stunning detail even at distance, while Night Sight captures brilliant photos in low light. Enjoy the pure Android experience with instant updates, five years of security patches, and exclusive Google features. The bright 6.7-inch LTPO OLED display with up to 2400 nits peak brightness ensures clarity even in direct sunlight.',
    brandId: 11,
    categoryId: 1,
  },

  {
    name: 'Xperia 1 V',
    price: 1399.99,
    description:
      "Elevate your mobile experience with the Sony Xperia 1 V, crafted for creators and entertainment enthusiasts. The world's first smartphone with a true 4K 120Hz HDR OLED display delivers cinema-quality visuals in your palm. Backed by Sony's legendary camera expertise from Alpha series, capture professional-grade photos and videos with the triple-lens system featuring ZEISS optics and real-time eye autofocus. The advanced audio system with front-facing stereo speakers and LDAC support provides studio-quality sound. Designed for gamers, the dedicated Game Enhancer mode optimizes performance while the advanced cooling system maintains peak performance during intensive sessions.",
    brandId: 3,
    categoryId: 1,
  },
  {
    name: 'OnePlus 12',
    price: 799.99,
    description:
      'Redefine flagship performance with the OnePlus 12, the ultimate flagship killer that delivers premium features at an incredible value. Experience blazing-fast 100W SUPERVOOC charging that powers your device to 100% in just 26 minutes. The stunning 6.7-inch AMOLED display with LTPO 4.0 technology intelligently adjusts refresh rates from 1Hz to 120Hz for optimal battery efficiency. Powered by Snapdragon 8 Gen 3, tackle demanding tasks and games with ease. The Hasselblad-tuned camera system captures natural, true-to-life colors with exceptional dynamic range, while OxygenOS provides a clean, fast, and customizable user experience.',
    brandId: 14,
    categoryId: 1,
  },
  {
    name: 'Xiaomi 14 Pro',
    price: 899.99,
    description:
      "Capture life's moments in stunning detail with the Xiaomi 14 Pro, featuring a revolutionary Leica-engineered camera system. The professional-grade triple camera setup includes a 50MP main sensor with variable aperture, delivering outstanding performance in any lighting condition. HyperOS provides a seamless, intelligent user experience with powerful AI features and deep system optimization. The massive 4880mAh battery supports blazing-fast 120W wired and 50W wireless charging, eliminating battery anxiety. The gorgeous 6.73-inch AMOLED display with Dolby Vision and HDR10+ brings your content to life with vivid colors and incredible contrast.",
    brandId: 12,
    categoryId: 1,
  },

  // Laptops
  {
    name: 'MacBook Pro 16"',
    price: 2499.99,
    description:
      'Unleash your creativity with the MacBook Pro 16", powered by the revolutionary M3 Pro chip that delivers extraordinary performance for demanding professional workflows. The stunning 16.2-inch Liquid Retina XDR display features over 1000 nits of sustained brightness for HDR content, mini-LED backlighting with 100,000:1 contrast ratio, and P3 wide color gamut. With up to 22 hours of battery life, advanced thermal architecture, and a phenomenal six-speaker sound system with Spatial Audio, this is the ultimate tool for video editors, 3D artists, developers, and creative professionals who refuse to compromise.',
    brandId: 1,
    categoryId: 2,
  },
  {
    name: 'MacBook Air M2',
    price: 1199.99,
    description:
      'Remarkably thin, incredibly powerful - the MacBook Air with M2 chip redefines what a laptop can be. At just 2.7 pounds and 11.3mm thin, it delivers astonishing performance with an 8-core CPU and up to 10-core GPU. The all-new fanless design stays completely silent while handling intensive tasks. The 13.6-inch Liquid Retina display supports one billion colors with 500 nits of brightness. Enjoy all-day battery life with up to 18 hours of video playback, MagSafe charging, and the peace of mind that comes with the advanced security of Touch ID. Perfect for students, travelers, and anyone who values portability without sacrificing capability.',
    brandId: 1,
    categoryId: 2,
  },
  {
    name: 'XPS 15',
    price: 1799.99,
    description:
      'Experience premium Windows computing with the Dell XPS 15, featuring stunning InfinityEdge display technology that maximizes your screen real estate. Powered by 13th Gen Intel Core i7 processor and available with NVIDIA RTX graphics, it handles everything from creative work to gaming with ease. The precision-machined aluminum chassis with carbon fiber palm rest provides both durability and comfort. The 15.6-inch FHD+ display with Dolby Vision delivers lifelike color and contrast. Advanced cooling technology keeps performance consistent under load, while the massive 86Wh battery provides all-day productivity.',
    brandId: 5,
    categoryId: 2,
  },
  {
    name: 'ThinkPad X1 Carbon',
    price: 1599.99,
    description:
      "The ThinkPad X1 Carbon Gen 11 is the gold standard for business ultrabooks, combining ultra-portable design with legendary durability. Crafted from aerospace-grade carbon fiber, this 2.4-pound powerhouse passes military-grade tests for reliability. Featuring a world-class spill-resistant keyboard and a stunning 14-inch 16:10 display, it's built for maximum productivity. Integrated AI-driven security features protect your most sensitive data, while the 360-degree microphones and Dolby Voice ensure crystal-clear communication during conference calls. With ultra-long battery life and rapid charging, the X1 Carbon is the ultimate companion for the modern professional on the move.",
    brandId: 7,
    categoryId: 2,
  },
  {
    name: 'ROG Zephyrus G14',
    price: 1899.99,
    description:
      'The ROG Zephyrus G14 redefines portable gaming, packing immense power into a compact 14-inch magnesium-alloy chassis. Powered by the latest AMD Ryzen 9 processor and NVIDIA GeForce RTX 4070 graphics, this ultra-portable laptop delivers stunning high-frame-rate performance in the latest AAA titles. The gorgeous ROG Nebula Display features a 165Hz refresh rate and 100% DCI-P3 color coverage for cinematic visuals. Featuring the iconic AniMe Matrix LED display on the lid, express your personality through custom animations. With high-efficiency liquid metal cooling and a massive battery, the G14 is the ultimate gaming machine that you can take anywhere.',
    brandId: 8,
    categoryId: 2,
  },
  {
    name: 'Surface Laptop 5',
    price: 1299.99,
    description:
      "Effortless style meets exceptional performance with the Surface Laptop 5. This sleek, ultra-thin laptop features a vibrant 13.5-inch PixelSense touchscreen that makes navigation and creativity intuitive. Powered by 12th Gen Intel Core i7 processors built on the Intel Evo platform, it delivers lightning-fast multitasking and all-day battery life. The signature Alcantara palm rest provides a warm, comfortable typing experience, while the OmniSonic speakers with Dolby Atmos offer immersive cinematic sound. With a brilliant 720p HD camera and dual far-field Studio Mics, you'll always look and sound your best on video calls.",
    brandId: 10,
    categoryId: 2,
  },
  {
    name: 'Spectre x360',
    price: 1499.99,
    description:
      'The HP Spectre x360 is a masterclass in premium convertible design, featuring precision gem-cut edges and a versatile 360-degree hinge. Switch seamlessly between laptop, tablet, tent, and stand modes to suit any task. The stunning 13.5-inch 3K2K OLED touchscreen display offers breathtaking contrast and vivid colors, protected by Corning Gorilla Glass. Powered by 13th Gen Intel Core processors, it delivers exceptional performance for creation and productivity. Integrated security features like an IR camera for facial recognition and a physical camera shutter ensure your privacy is always protected. With the included HP Tilt Pen, let your creativity flow naturally.',
    brandId: 6,
    categoryId: 2,
  },

  // Tablets
  {
    name: 'iPad Pro 12.9"',
    price: 1099.99,
    description:
      'Experience the pinnacle of tablet productivity with the iPad Pro 12.9". Driven by the groundbreaking M2 chip, this device offers laptop-class performance in an impossibly thin design. The stunning Liquid Retina XDR display features 1,000,000:1 contrast ratio and 1600 nits of peak brightness for breathtaking HDR visuals. With support for Apple Pencil (2nd gen) featuring hover functionality and the Magic Keyboard, the iPad Pro becomes a versatile workstation for artists and professionals. The advanced camera system with LiDAR scanner enables pro-level photography and immersive AR experiences, while Thunderbolt connectivity allows for high-speed data transfer and external display support.',
    brandId: 1,
    categoryId: 3,
  },
  {
    name: 'iPad Air',
    price: 599.99,
    description:
      "Powerful, colorful, and impossibly versatile - the iPad Air with M1 chip brings incredible capability to a light and portable design. The stunning 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an anti-reflective coating for an immersive viewing experience. With a 12MP Ultra Wide front camera featuring Center Stage, you'll always stay perfectly framed during video calls. Support for Apple Pencil (2nd gen) and Magic Keyboard transforms the iPad Air into your notepad, canvas, and mobile office. Available in five gorgeous colors, it's the perfect blend of performance and portability.",
    brandId: 1,
    categoryId: 3,
  },
  {
    name: 'Galaxy Tab S9',
    price: 799.99,
    description:
      'Reinvent your productivity with the Samsung Galaxy Tab S9, featuring a breathtaking 11-inch Dynamic AMOLED 2X display with a smooth 120Hz refresh rate. Powered by the Snapdragon 8 Gen 2 processor, experience blazing-fast performance for gaming, creation, and multitasking. The included S Pen, featuring ultra-low latency, provides a natural writing and drawing experience and attaches magnetically for wireless charging. With an IP68 rating for water and dust resistance, the Tab S9 is built to go wherever inspiration takes you. Samsung DeX mode provides a desktop-like experience, making it a true laptop replacement when paired with the Book Cover Keyboard.',
    brandId: 2,
    categoryId: 3,
  },
  {
    name: 'Surface Pro 9',
    price: 999.99,
    description:
      '2-in-1 tablet that runs full Windows with laptop-class performance.',
    brandId: 10,
    categoryId: 3,
  },

  // Smartwatches
  {
    name: 'Apple Watch Series 9',
    price: 399.99,
    description:
      "The Apple Watch Series 9 is your essential companion for a healthy life, now even more powerful with the S9 SiP. Experience a magical new way to interact with your watch without touching the screen, a brighter-than-ever display, and the first Apple product combination that's carbon neutral. Advanced health sensors provide deep insights into your physical and mental well-being, including ECG, heart rate, sleep stages, and temperature sensing for cycle tracking. With Crash Detection and Fall Detection, help is always just a tap away. The Always-On Retina display makes it easy to see your progress at a glance, whether you're at the gym or in a meeting.",
    brandId: 1,
    categoryId: 4,
  },

  {
    name: 'Galaxy Watch 6',
    price: 299.99,
    description:
      'Meet your new fitness partner, the Samsung Galaxy Watch 6. Featuring a larger, more vibrant display and a sleek, thinner bezel, this smartwatch is designed to look as good as it performs. Advanced sleep coaching helps you build better sleep habits, while personalized Heart Rate Zones optimize every workout. With BIA (Bioelectrical Impedance Analysis) sensor, you can track body fat and skeletal muscle to monitor your progress more accurately. Seamlessly integrated with the Galaxy ecosystem, you can control your smartphone camera, stream music, and receive notifications right from your wrist. Its classic design and durable build make it perfect for any occasion.',
    brandId: 2,
    categoryId: 4,
  },
  {
    name: 'Pixel Watch 2',
    price: 349.99,
    description:
      'The Google Pixel Watch 2 combines the best of Google and Fitbit to help you stay healthy and productive. Featuring three new advanced sensors for more accurate heart rate tracking, skin temperature monitoring, and stress management, the Pixel Watch 2 gives you a complete picture of your health. With Wear OS 4, experience Google apps like Maps, Gmail, and Calendar redesigned for your wrist. Safety features like Fall Detection and Emergency SOS provide peace of mind wherever you go. The elegant, domed circular design is crafted from 100% recycled aluminum, making it as sustainable as it is sophisticated.',
    brandId: 11,
    categoryId: 4,
  },

  // Headphones
  {
    name: 'AirPods Pro 2',
    price: 249.99,
    description:
      "Experience sound like never before with AirPods Pro (2nd generation). Powered by the H2 chip, ANC is up to 2x more effective than the previous generation, letting you focus on your music or podcasts in any environment. Transparency Mode lets you hear the world around you, while Adaptive Audio intelligently blends the two to suit your surroundings. With personalized Spatial Audio and dynamic head tracking, sound is placed all around you for an immersive listening experience. The MagSafe Charging Case features a built-in speaker and lanyard loop, and with four pairs of silicone ear tips, you'll find the perfect fit for all-day comfort.",
    brandId: 1,
    categoryId: 5,
  },
  {
    name: 'AirPods Max',
    price: 549.99,
    description:
      "AirPods Max reimagine over-ear headphones, combining high-fidelity audio with the magical AirPods experience. The custom-built driver delivers ultra-low distortion across the entire audible range, providing deep, rich bass, accurate mids, and crisp, clean highs. Industry-leading Active Noise Cancellation blocks out the world, while Transparency mode lets you hear what's happening around you. Featuring a breathable knit mesh canopy and memory foam ear cushions for an exceptional fit, these headphones are designed for uncompromising comfort. With 20 hours of battery life and a sleek Smart Case, take your cinematic sound experience wherever you go.",
    brandId: 1,
    categoryId: 5,
  },
  {
    name: 'WH-1000XM5',
    price: 399.99,
    description:
      "Sony's WH-1000XM5 headphones redefine silence with industry-leading Noise Cancellation, powered by two processors and eight microphones. Experience exceptional sound quality with High-Resolution Audio support and the Integrated Processor V1. Crystal-clear hands-free calls are guaranteed with four beamforming microphones and AI-based noise reduction. The elegant, lightweight design with soft-fit leather provides all-day comfort, while the 30-hour battery life keeps the music playing through even the longest trips. With intuitive touch controls and Speak-to-Chat technology, managing your audio has never been easier or more sophisticated.",
    brandId: 3,
    categoryId: 5,
  },

  {
    name: 'QuietComfort Ultra',
    price: 429.99,
    description:
      'Lose yourself in your music with Bose QuietComfort Ultra headphones, featuring world-class noise cancellation and breakthrough spatialized audio. Bose Immersive Audio pushes the boundaries of what it means to listen, taking what you’re hearing out of your head and placing it in front of you for a more natural-sounding experience. CustomTune technology personalizes the sound to your ears, ensuring every note is crisp and clear. With three listening modes—Quiet, Aware, and Immersion—you can adjust the world to your liking. Experience the ultimate in luxury with high-quality materials and up to 24 hours of battery life on a single charge.',
    brandId: 16,
    categoryId: 5,
  },
  {
    name: 'Galaxy Buds2 Pro',
    price: 229.99,
    description:
      "Galaxy Buds2 Pro deliver studio-quality sound in a compact, ergonomic design. Experience 24-bit Hi-Fi audio for a clear, rich listening experience, and intelligent Active Noise Cancellation that lets you block out even the loudest distractions. With Enhanced 360 Audio and personalized beamforming, calls are crystal clear, and movies feel like you're in the theater. Auto Switch technology allows you to seamlessly transition between your Galaxy phone, tablet, and watch. With an IPX7 water resistance rating and up to 18 hours of battery life with the charging case, your music can keep up with your active lifestyle.",
    brandId: 2,
    categoryId: 5,
  },
  {
    name: 'Studio3 Wireless',
    price: 349.99,
    description:
      'Immerse yourself in rich, dynamic sound with Beats Studio3 Wireless headphones. Featuring Pure Adaptive Noise Cancelling (Pure ANC) technology, these headphones actively block external noise while using real-time audio calibration to preserve clarity, range, and emotion. The Apple W1 chip provides seamless setup and switching for your Apple devices, and Class 1 Bluetooth connectivity offers extended range with fewer dropouts. With up to 22 hours of battery life for all-day wireless play, and Fast Fuel technology that gives you 3 hours of playback from a 10-minute charge, the music never has to stop. Experience the iconic Beats sound and style.',
    brandId: 25,
    categoryId: 5,
  },

  // Speakers
  {
    name: 'HomePod',
    price: 299.99,
    description:
      'The HomePod is a powerhouse of a speaker, delivering deep, rich bass and stunning high frequencies. Apple-engineered audio technology and advanced software deliver high-fidelity sound throughout the room. It intelligently adapts to whatever it’s playing — or wherever it’s playing — and surrounds you in immersive audio that makes everything you listen to sound unbelievable. With Siri integrated, you can manage your smart home, get answers to your questions, and control your music with just your voice. Pair two HomePod speakers for a true stereo experience, or connect multiple speakers for a multi-room audio system.',
    brandId: 1,
    categoryId: 6,
  },
  {
    name: 'Charge 5',
    price: 179.99,
    description:
      'Take the party with you wherever you go with the JBL Charge 5. This portable Bluetooth speaker delivers bold JBL Original Pro Sound, featuring an optimized long-excursion driver, separate tweeter, and dual pumping JBL bass radiators. With up to 20 hours of playtime and a built-in power bank, you can keep your devices charged and the music going all night long. Its IP67 waterproof and dustproof rating means it can handle the pool, the park, or even a sudden rain shower. Connect multiple JBL PartyBoost-enabled speakers for a sound big enough for any crowd. Experience the ultimate in durable, high-performance audio.',
    brandId: 17,
    categoryId: 6,
  },
  {
    name: 'Flip 6',
    price: 129.99,
    description:
      'The JBL Flip 6 is engineered to deliver powerful JBL Original Pro Sound with exceptional clarity, thanks to its 2-way speaker system consisting of an optimized racetrack-shaped driver, separate tweeter, and dual pumping bass radiators. This compact yet powerful speaker is easy to carry and features an IP67 waterproof and dustproof design, making it perfect for any adventure. With up to 12 hours of playtime on a single charge, the Flip 6 keeps the music moving as long as you do. Use PartyBoost to link multiple compatible speakers and amplify your listening experience. Bold sound meets bold design in this ultimate portable companion.',
    brandId: 17,
    categoryId: 6,
  },
  {
    name: 'SoundLink Revolve+',
    price: 329.99,
    description:
      "Experience true 360-degree sound with the Bose SoundLink Revolve+ II, our best-performing portable Bluetooth speaker. This speaker is engineered to deliver deep, loud, and immersive sound in every direction, so everyone gets the same experience. Place it in the center of the room or near a wall to let the sound reflect and surround you. Its flexible handle and durable, water-resistant design (IP55) make it easy to take your music anywhere. With up to 17 hours of battery life and a built-in microphone for taking calls or accessing your phone's voice assistant, the Revolve+ II is the ultimate versatile speaker for any environment.",
    brandId: 16,
    categoryId: 6,
  },

  // Cameras
  {
    name: 'EOS R5',
    price: 3899.99,
    description:
      'The Canon EOS R5 is a professional full-frame mirrorless camera that redefines versatility. Featuring a groundbreaking 45MP CMOS sensor and the DIGIC X processor, it captures stunningly detailed still images and revolutionary 8K RAW video at up to 30fps. The advanced Dual Pixel CMOS AF II system provides lightning-fast and precise autofocus with 1,053 zones, while the 5-axis In-Body Image Stabilizer offers up to 8 stops of shake correction. With a durable, weather-sealed body and high-speed continuous shooting up to 20fps, the EOS R5 is the ultimate tool for photographers and videographers who demand the best in performance and image quality.',
    brandId: 18,
    categoryId: 7,
  },
  {
    name: 'EOS R6 Mark II',
    price: 2499.99,
    description:
      'The Canon EOS R6 Mark II is the ultimate versatile camera for enthusiasts and professional creators alike. Featuring a 24.2MP full-frame sensor and the powerful DIGIC X processor, it delivers exceptional image quality and performance in any situation. Experience incredibly fast continuous shooting at up to 40fps with the electronic shutter, and capture stunning 4K 60p video oversampled from 6K. The Dual Pixel CMOS AF II system with advanced subject tracking ensures your subjects are always in sharp focus. With improved low-light performance and 5-axis In-Body Image Stabilization, the EOS R6 Mark II is built to handle the most demanding creative challenges with ease.',
    brandId: 18,
    categoryId: 7,
  },
  {
    name: 'Z9',
    price: 5499.99,
    description:
      "The Nikon Z9 is Nikon's most advanced flagship mirrorless camera, designed for professionals who push the boundaries of what's possible. Featuring a 45.7MP stacked CMOS sensor and the EXPEED 7 image-processing engine, the Z9 delivers unparalleled speed and performance. Experience blackout-free shooting with the revolutionary electronic viewfinder, and capture 8K 60p video for extended periods. The advanced AF system significantly improves subject detection and tracking, while the rugged, weather-sealed body ensures reliability in the toughest conditions. With high-speed continuous shooting up to 120fps (at 11MP), the Nikon Z9 is the ultimate choice for sports, wildlife, and commercial photography.",
    brandId: 19,
    categoryId: 7,
  },
  {
    name: 'Alpha 7R V',
    price: 3899.99,
    description:
      'The Sony Alpha 7R V is a high-resolution masterpiece, featuring a 61MP full-frame Exmor R sensor and a revolutionary AI processing unit dedicated to autofocus. Experience unprecedented subject recognition and tracking performance, ensuring your subjects are captured with razor-sharp precision. The advanced 5-axis In-Body Image Stabilization offers up to 8 stops of compensation, while the new 4-axis multi-angle LCD monitor provides exceptional shooting flexibility. Capture stunning 8K 24p and 4K 60p video with exceptional detail and dynamic range. Crafted for professionals who demand the highest resolution and most advanced AF technology, the Alpha 7R V is the ultimate tool for detail-intensive photography.',
    brandId: 3,
    categoryId: 7,
  },

  // Gaming Consoles
  {
    name: 'PlayStation 5',
    price: 499.99,
    description:
      'Experience the future of gaming with the PlayStation 5. Featuring an ultra-fast custom SSD for near-instant load times and an integrated I/O that redefines what’s possible with a console. Immerse yourself in stunning 4K graphics at up to 120fps, with support for Ray Tracing that provides true-to-life reflections and shadows. The revolutionary DualSense wireless controller offers immersive haptic feedback and dynamic adaptive triggers, making every action feel more impactful. With 3D Audio technology and an incredible lineup of exclusive titles, the PS5 delivers an unparalleled gaming experience that pushes the boundaries of imagination.',
    brandId: 3,
    categoryId: 8,
  },
  {
    name: 'Xbox Series X',
    price: 499.99,
    description:
      'The Xbox Series X is the fastest, most powerful Xbox ever, designed for a generation of console gaming that places you at the center. With 12 teraflops of processing power and Xbox Velocity Architecture, experience 4K gaming at up to 120fps and near-instant load times. Quick Resume allows you to switch seamlessly between multiple games and pick up right where you left off. Immerse yourself in rich, dynamic worlds with support for DirectX Ray Tracing and spatial 3D audio. With thousands of games across four generations of Xbox available through backward compatibility and Xbox Game Pass, the Series X is the ultimate machine for discovering and playing the games you love.',
    brandId: 10,
    categoryId: 8,
  },

  // Monitors
  {
    name: 'UltraFine 5K',
    price: 1299.99,
    description:
      'The LG UltraFine 5K Display is the ultimate tool for Mac users and creative professionals. Featuring a breathtaking 5120x2880 resolution on a 27-inch IPS panel, it delivers incredibly sharp text and lifelike images with its P3 wide color gamut and 500 nits of brightness. With Thunderbolt 3 connectivity, you can charge your MacBook and transfer data through a single cable. The integrated stereo speakers, camera, and microphone allow for a rich media experience and effortless video calls. Designed for absolute precision, this display ensures your creative vision is represented with stunning accuracy and clarity.',
    brandId: 4,
    categoryId: 9,
  },
  {
    name: 'Predator X27U',
    price: 899.99,
    description:
      'Elevate your gaming experience with the Acer Predator X27U, a 27-inch OLED gaming monitor that combines stunning 4K resolution with a blazing-fast 240Hz refresh rate. Experience incredible depth and contrast with VESA DisplayHDR True Black 400, while the 0.03ms response time ensures your movements are fluid and instantaneous. With 99% DCI-P3 color gamut, every world you explore is rendered with vibrant, cinematic color. AMD FreeSync Premium technology eliminates screen tearing and stutter for a smooth, uninterrupted gameplay. The sleek, ergonomic design and built-in KVM switch make it the ultimate centerpiece for any high-performance gaming setup.',
    brandId: 9,
    categoryId: 9,
  },
  {
    name: 'ROG Swift PG32UQX',
    price: 2999.99,
    description:
      "The ASUS ROG Swift PG32UQX is the world's first 32-inch 4K HDR gaming monitor with mini-LED backlighting. Featuring 1152 independent LED zones, it delivers a peak brightness of 1400 nits and an incredible contrast ratio for the most realistic HDR visuals. The 144Hz refresh rate and G-SYNC Ultimate technology provide buttery-smooth, tear-free gaming at the highest settings. With its 10-bit color and 98% DCI-P3 coverage, experience professional-grade color accuracy. The built-in LiveDash OLED on the bottom bezel displays hardware info or custom logos, while Aura Sync lighting provides an immersive gaming ambient. Truly the pinnacle of gaming display technology.",
    brandId: 8,
    categoryId: 9,
  },

  // Keyboards & Mice
  {
    name: 'MX Keys',
    price: 99.99,
    description:
      'The Logitech MX Keys is a premium wireless keyboard designed for precision, comfort, and stability. Its Perfect Stroke keys are shaped for your fingertips, providing a natural and fluid typing experience. Smart illumination automatically lights up the keys the moment your hands approach and adjusts to the ambient lighting conditions. Connect to up to three devices via Bluetooth or the included Logi Bolt receiver and switch between them with the tap of a button. With its solid, single-metal plate construction, MX Keys is built for stability and focus, allowing you to master your next big project with ease.',
    brandId: 21,
    categoryId: 10,
  },
  {
    name: 'BlackWidow V4 Pro',
    price: 229.99,
    description:
      'Unleash peak performance with the Razer BlackWidow V4 Pro, a full-blown mechanical gaming keyboard built for gamers and enthusiasts. Featuring Razer Green Mechanical Switches for a tactile and clicky feel, every keystroke is satisfying and responsive. The keyboard is adorned with per-key Razer Chroma RGB and a striking 3-sided underglow that syncs with your games. The multi-function roller and 8 dedicated macro keys provide total control at your fingertips. With a magnetic plush leatherette wrist rest and two-step kickstands, experience uncompromising comfort during even the most intense gaming marathons. Truly the master of your battlestation.',
    brandId: 20,
    categoryId: 10,
  },
  {
    name: 'MX Master 3S',
    price: 99.99,
    description:
      'Logitech MX Master 3S is an iconic mouse remastered for ultimate precision and feel. Experience the silence of Quiet Clicks and the incredible speed and precision of the 8000 DPI track-on-glass sensor. The MagSpeed Electromagnetic scroll wheel is fast enough to scroll 1000 lines in a second and precise enough to stop on a pixel. Its ergonomic silhouette is crafted for your palm, ensuring your hand stays comfortable throughout the day. With customizable buttons and app-specific profiles, the MX Master 3S streamlines your workflow across multiple computers and operating systems. Experience the gold standard of productivity mice.',
    brandId: 21,
    categoryId: 11,
  },
  {
    name: 'DeathAdder V3 Pro',
    price: 149.99,
    description:
      'Experience the pinnacle of competitive gaming with the Razer DeathAdder V3 Pro. Rethought and reforged with the help of top pro gamers, its iconic ergonomic shape is now 25% lighter than its predecessor, weighing only 63g. Powered by the Razer Focus Pro 30K Optical Sensor, experience flawless tracking on a wider variety of surfaces, including glass. The Razer Optical Mouse Switches Gen-3 eliminate double-clicking issues and provide a lightning-fast 0.2ms response time. With up to 90 hours of battery life and high-speed HyperSpeed Wireless connectivity, the DeathAdder V3 Pro is the ultimate weapon for those who refuse to lose.',
    brandId: 20,
    categoryId: 11,
  },

  // External Storage
  {
    name: 'T7 Shield 2TB',
    price: 229.99,
    description:
      "The Samsung T7 Shield is a rugged, portable SSD built for durability and performance. It features an IP65 rating for water and dust resistance and can withstand drops of up to 3 meters. With read/write speeds of up to 1,050/1,000 MB/s, it allows for fast transfers of large files, whether you're on a film set or in the office. The rubberized exterior provides a secure grip and prevents the drive from sliding on surfaces. With AES 256-bit hardware encryption and password protection, your data stays secure. The T7 Shield is the perfect companion for adventurers and professionals who need reliable storage in any environment.",
    brandId: 2,
    categoryId: 12,
  },
  {
    name: 'SanDisk Extreme Pro 4TB',
    price: 499.99,
    description:
      'The SanDisk Extreme Pro Portable SSD V2 is designed for professionals who need ultra-fast, reliable storage on the go. Featuring NVMe technology, it delivers blazing-fast read and write speeds of up to 2,000 MB/s, allowing you to save and transfer photos and videos in seconds. Its forged aluminum chassis acts as a heatsink to maintain higher sustained speeds, while its rugged design offers IP55 water and dust resistance and up to 3-meter drop protection. With a handy carabiner loop, you can easily secure it to your belt or backpack. Keep your private content private with the included password protection featuring 256-bit AES hardware encryption.',
    brandId: 2,
    categoryId: 12,
  },

  // Power Banks
  {
    name: 'PowerCore 26800',
    price: 65.99,
    description:
      "Never run out of power with the Anker PowerCore 26800. This high-capacity portal charger features three USB output ports and PowerIQ tech, allowing you to charge three devices simultaneously at high speeds. With enough capacity to charge most phones over 6 times, it's the ultimate companion for long trips and busy days. The dual input ports allow for 2x faster recharging, so you can fill up the massive capacity in as little as 6 hours with a dual adapter. Built with Anker's MultiProtect safety system, it ensures complete protection for you and your devices. Stay connected and productive with the power bank that doesn't quit.",
    brandId: 24,
    categoryId: 13,
  },
  {
    name: 'PowerCore 10000',
    price: 29.99,
    description:
      "The Anker PowerCore 10000 is one of the world's smallest and lightest 10000mAh portable chargers. Its compact design fits easily into any pocket or bag, making it the perfect everyday carry for staying powered on the go. Despite its small size, it packs enough power to charge most flagship phones two to three times. Equipped with Anker's exclusive PowerIQ and VoltageBoost technologies, it ensures the fastest possible charge for your devices. The durable, matte-finish exterior resists fingerprints and scratches, while the MultiProtect safety system provides peace of mind. Power up your day with the compact charger that delivers big results.",
    brandId: 24,
    categoryId: 13,
  },

  // Drones
  {
    name: 'Mavic 3 Pro',
    price: 2199.99,
    description:
      "The DJI Mavic 3 Pro redefines aerial imaging with its revolutionary triple-camera system. Featuring a 4/3 CMOS Hasselblad camera and two tele cameras, it offers three different focal lengths (24mm, 70mm, and 166mm) for unparalleled creative freedom. Capture stunning 5.1K 50fps video with incredible detail and a 12.8-stop dynamic range. With up to 43 minutes of flight time and omnidirectional obstacle sensing, fly with confidence and focus on your shot. The O3+ transmission system provides a 15km range and 1080p/60fps live feed for crystal-clear monitoring. Whether you're a professional filmmaker or a hobbyist, the Mavic 3 Pro is the ultimate drone for capturing the world from above.",
    brandId: 23,
    categoryId: 14,
  },
  {
    name: 'Mini 4 Pro',
    price: 759.99,
    description:
      "The DJI Mini 4 Pro is our most advanced mini drone to date, packing professional-level features into a compact, foldable design weighing under 249g. Featuring omnidirectional obstacle sensing and ActiveTrack 360, it's the safest and easiest mini drone to fly. The 1/1.3-inch CMOS sensor captures stunning 4K 60fps HDR video and 48MP photos with exceptional detail. With up to 34 minutes of flight time and a 10km range, explore your surroundings without limits. Intelligent features like MasterShots and Waypoint Flight allow you to capture cinematic shots with ease. The Mini 4 Pro is the perfect companion for travel, offering pro-level performance without the bulk.",
    brandId: 23,
    categoryId: 14,
  },
  {
    name: 'HERO12 Black',
    price: 399.99,
    description:
      "Meet the GoPro HERO12 Black, the most powerful and versatile HERO camera yet. Featuring high-dynamic range (HDR) for both videos (5.3K and 4K) and photos, it captures every detail even in challenging lighting. HyperSmooth 6.0 stabilization delivers incredibly smooth footage, while the new Bluetooth audio support allows you to connect your AirPods or other headphones for wireless audio recording and voice control. With a rugged, waterproof design up to 33ft, it's built for any adventure. The powerful Enduro battery ensures longer recording times, even in cold conditions. Capture your wildest moments with the ultimate action camera that pushes the limits of performance.",
    brandId: 22,
    categoryId: 14,
  },
];

// Customers
export const usersData = [
  {
    username: 'mjohnson',
    lastName: 'Johnson',
    firstName: 'Michael',
    email: 'michael.johnson@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'esmith',
    lastName: 'Smith',
    firstName: 'Emily',
    email: 'emily.smith@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'dwilliams',
    lastName: 'Williams',
    firstName: 'David',
    email: 'david.williams@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'sbrown',
    lastName: 'Brown',
    firstName: 'Sarah',
    email: 'sarah.brown@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'jjones',
    lastName: 'Jones',
    firstName: 'James',
    email: 'james.jones@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'mgarcia',
    lastName: 'Garcia',
    firstName: 'Maria',
    email: 'maria.garcia@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'jmartinez',
    lastName: 'Martinez',
    firstName: 'Juan',
    email: 'juan.martinez@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'jdavis',
    lastName: 'Davis',
    firstName: 'Jessica',
    email: 'jessica.davis@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'crodriguez',
    lastName: 'Rodriguez',
    firstName: 'Carlos',
    email: 'carlos.rodriguez@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'slee',
    lastName: 'Lee',
    firstName: 'Sophia',
    email: 'sophia.lee@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'cwilson',
    lastName: 'Wilson',
    firstName: 'Christopher',
    email: 'chris.wilson@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'eanderson',
    lastName: 'Anderson',
    firstName: 'Emma',
    email: 'emma.anderson@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'dthomas',
    lastName: 'Thomas',
    firstName: 'Daniel',
    email: 'daniel.thomas@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'otaylor',
    lastName: 'Taylor',
    firstName: 'Olivia',
    email: 'olivia.taylor@email.com',
    password: 'password123',
    isActive: true,
  },
  {
    username: 'mmoore',
    lastName: 'Moore',
    firstName: 'Matthew',
    email: 'matthew.moore@email.com',
    password: 'password123',
    isActive: true,
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

export const productVariantsData = [
  // iPhone 15 Pro - Different storage capacities with color options
  {
    productId: 1,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black Titanium 256GB',
    priceModifier: 0,
    quantity: 47,
    images: [
      'https://images.unsplash.com/photo-1696446702969-d2930f17d2e7?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "display": "6.1\"",
      "camera": "48MP",
      "battery": "3274mAh",
      "processor": "A17 Pro"
    },
  },
  {
    productId: 1,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'White Titanium 512GB',
    priceModifier: 200,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1696446702969-d2930f17d2e7?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.1\"",
      "camera": "48MP",
      "battery": "3274mAh",
      "processor": "A17 Pro"
    },
  },
  {
    productId: 1,
    inventoryId: 2,
    colorHex: '#0000FF',
    colorName: 'Blue Titanium 1TB',
    priceModifier: 400,
    quantity: 22,
    images: [
      'https://images.unsplash.com/photo-1696446702969-d2930f17d2e7?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    ],
    specifications: {
      "storage": "1TB",
      "display": "6.1\"",
      "camera": "48MP",
      "battery": "3274mAh",
      "processor": "A17 Pro"
    },
  },

  // Galaxy S24 Ultra - Different storage and RAM configurations
  {
    productId: 2,
    inventoryId: 4,
    colorHex: '#4169E1',
    colorName: 'Titanium Blue 512GB',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.8\"",
      "camera": "200MP",
      "battery": "5000mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },
  {
    productId: 2,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Titanium Gray 1TB',
    priceModifier: 250,
    quantity: 44,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800',
    ],
    specifications: {
      "storage": "1TB",
      "display": "6.8\"",
      "camera": "200MP",
      "battery": "5000mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },

  // Pixel 8 Pro - Storage variants
  {
    productId: 3,
    inventoryId: 3,
    colorHex: '#808080',
    colorName: 'Bay Blue 256GB',
    priceModifier: 0,
    quantity: 62,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "display": "6.7\"",
      "camera": "50MP",
      "battery": "5050mAh",
      "processor": "Google Tensor G3"
    },
  },
  {
    productId: 3,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'Porcelain 512GB',
    priceModifier: 150,
    quantity: 40,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.7\"",
      "camera": "50MP",
      "battery": "5050mAh",
      "processor": "Google Tensor G3"
    },
  },

  // Xperia 1 V - Premium color options
  {
    productId: 4,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black 256GB',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "display": "6.5\" 4K",
      "camera": "50MP",
      "battery": "5000mAh",
      "processor": "Snapdragon 8 Gen 2"
    },
  },
  {
    productId: 4,
    inventoryId: 1,
    colorHex: '#FFD700',
    colorName: 'Platinum Gold 512GB',
    priceModifier: 200,
    quantity: 40,
    images: [
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.5\" 4K",
      "camera": "50MP",
      "battery": "5000mAh",
      "processor": "Snapdragon 8 Gen 2"
    },
  },

  // OnePlus 12 - Different storage tiers
  {
    productId: 5,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Flowy Emerald 256GB',
    priceModifier: 0,
    quantity: 80,
    images: [
      'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800',
      'https://images.unsplash.com/photo-1706550136594-6efbc803171d?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "display": "6.7\"",
      "camera": "50MP",
      "battery": "5400mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },
  {
    productId: 5,
    inventoryId: 3,
    colorHex: '#C0C0C0',
    colorName: 'Silky Black 512GB',
    priceModifier: 150,
    quantity: 70,
    images: [
      'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800',
      'https://images.unsplash.com/photo-1706550136594-6efbc803171d?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.7\"",
      "camera": "50MP",
      "battery": "5400mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },
  {
    productId: 5,
    inventoryId: 1,
    colorHex: '#FFFFFF',
    colorName: 'Glacial White 1TB',
    priceModifier: 300,
    quantity: 50,
    images: [
      'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800',
      'https://images.unsplash.com/photo-1706550136594-6efbc803171d?w=800',
    ],
    specifications: {
      "storage": "1TB",
      "display": "6.7\"",
      "camera": "50MP",
      "battery": "5400mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },

  // Xiaomi 14 Pro - Storage and color variants
  {
    productId: 6,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black 512GB',
    priceModifier: 0,
    quantity: 65,
    images: [
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800',
      'https://images.unsplash.com/photo-1678911820864-e5c67c6e3a66?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.73\"",
      "camera": "50MP",
      "battery": "4880mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },
  {
    productId: 6,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'White 1TB',
    priceModifier: 200,
    quantity: 44,
    images: [
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800',
      'https://images.unsplash.com/photo-1678911820864-e5c67c6e3a66?w=800',
    ],
    specifications: {
      "storage": "1TB",
      "display": "6.73\"",
      "camera": "50MP",
      "battery": "4880mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },
  {
    productId: 6,
    inventoryId: 4,
    colorHex: '#00FF00',
    colorName: 'Jade Green 512GB',
    priceModifier: 50,
    quantity: 53,
    images: [
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=800',
      'https://images.unsplash.com/photo-1678911820864-e5c67c6e3a66?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "display": "6.73\"",
      "camera": "50MP",
      "battery": "4880mAh",
      "processor": "Snapdragon 8 Gen 3"
    },
  },

  // MacBook Pro 16" - Different chip and storage configs
  {
    productId: 7,
    inventoryId: 4,
    colorHex: '#808080',
    colorName: 'Space Gray M3 Pro 512GB',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
    ],
    specifications: {
      "processor": "M3 Pro",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "16.2\" Liquid Retina XDR"
    },
  },
  {
    productId: 7,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Silver M3 Pro 1TB',
    priceModifier: 400,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
    ],
    specifications: {
      "processor": "M3 Pro",
      "storage": "1TB SSD",
      "ram": "16GB",
      "display": "16.2\" Liquid Retina XDR"
    },
  },
  {
    productId: 7,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Space Black M3 Max 2TB',
    priceModifier: 1200,
    quantity: 25,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
    ],
    specifications: {
      "processor": "M3 Max",
      "storage": "2TB SSD",
      "ram": "16GB",
      "display": "16.2\" Liquid Retina XDR"
    },
  },

  // MacBook Air M2 - Storage and color options
  {
    productId: 8,
    inventoryId: 1,
    colorHex: '#4169E1',
    colorName: 'Midnight 256GB',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "256GB SSD",
      "ram": "16GB",
      "display": "13.6\" Liquid Retina"
    },
  },
  {
    productId: 8,
    inventoryId: 3,
    colorHex: '#FFD700',
    colorName: 'Starlight 512GB',
    priceModifier: 200,
    quantity: 47,
    images: [
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "13.6\" Liquid Retina"
    },
  },

  // XPS 15 - Different configurations
  {
    productId: 9,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Platinum Silver i7 512GB',
    priceModifier: 0,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    ],
    specifications: {
      "processor": "i7",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },
  {
    productId: 9,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Graphite i9 1TB RTX 4050',
    priceModifier: 600,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
    ],
    specifications: {
      "processor": "i9",
      "storage": "1TB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },

  // ThinkPad X1 Carbon - Business configurations
  {
    productId: 10,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Black i7 512GB',
    priceModifier: 0,
    quantity: 50,
    images: [
      'https://images.unsplash.com/photo-1588702547313-2dc04f981ddb?w=800',
      'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800',
    ],
    specifications: {
      "processor": "i7",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },
  {
    productId: 10,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black i7 1TB 32GB RAM',
    priceModifier: 400,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1588702547313-2dc04f981ddb?w=800',
      'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800',
    ],
    specifications: {
      "processor": "i7",
      "storage": "1TB SSD",
      "ram": "32GB",
      "display": "15.6\" FHD+"
    },
  },

  // ROG Zephyrus G14 - Gaming configs
  {
    productId: 11,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'Moonlight White RTX 4060',
    priceModifier: 0,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },
  {
    productId: 11,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Eclipse Gray RTX 4070',
    priceModifier: 300,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },

  // Surface Laptop 5 - Color and storage variants
  {
    productId: 12,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Matte Black 512GB',
    priceModifier: 0,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },
  {
    productId: 12,
    inventoryId: 1,
    colorHex: '#87CEEB',
    colorName: 'Ice Blue 1TB',
    priceModifier: 300,
    quantity: 32,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "1TB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },

  // Spectre x360 - Premium variants
  {
    productId: 13,
    inventoryId: 3,
    colorHex: '#4169E1',
    colorName: 'Nightfall Black 512GB',
    priceModifier: 0,
    quantity: 34,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "512GB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },
  {
    productId: 13,
    inventoryId: 2,
    colorHex: '#B87333',
    colorName: 'Natural Silver 1TB OLED',
    priceModifier: 400,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "processor": "Standard",
      "storage": "1TB SSD",
      "ram": "16GB",
      "display": "15.6\" FHD+"
    },
  },

  // iPad Pro 12.9" - Storage tiers
  {
    productId: 14,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Space Gray 256GB WiFi',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "connectivity": "WiFi",
      "display": "12.9\" Liquid Retina XDR"
    },
  },
  {
    productId: 14,
    inventoryId: 4,
    colorHex: '#C0C0C0',
    colorName: 'Silver 512GB WiFi+5G',
    priceModifier: 350,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "connectivity": "WiFi+5G",
      "display": "12.9\" Liquid Retina XDR"
    },
  },
  {
    productId: 14,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Space Gray 1TB WiFi+5G',
    priceModifier: 650,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "1TB",
      "connectivity": "WiFi+5G",
      "display": "12.9\" Liquid Retina XDR"
    },
  },

  // iPad Air - Storage and connectivity
  {
    productId: 15,
    inventoryId: 1,
    colorHex: '#87CEEB',
    colorName: 'Sky Blue 64GB WiFi',
    priceModifier: 0,
    quantity: 60,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "64GB",
      "connectivity": "WiFi",
      "display": "10.9\" Liquid Retina"
    },
  },
  {
    productId: 15,
    inventoryId: 3,
    colorHex: '#FFC0CB',
    colorName: 'Pink 256GB WiFi+5G',
    priceModifier: 250,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "connectivity": "WiFi+5G",
      "display": "10.9\" Liquid Retina"
    },
  },

  // Galaxy Tab S9 - Storage variants
  {
    productId: 16,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Graphite 256GB WiFi',
    priceModifier: 0,
    quantity: 52,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "connectivity": "WiFi",
      "display": "11\" Dynamic AMOLED 2X"
    },
  },
  {
    productId: 16,
    inventoryId: 2,
    colorHex: '#FFC0CB',
    colorName: 'Beige 512GB WiFi+5G',
    priceModifier: 250,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "connectivity": "WiFi+5G",
      "display": "11\" Dynamic AMOLED 2X"
    },
  },

  // Surface Pro 9 - Processor and storage options
  {
    productId: 17,
    inventoryId: 3,
    colorHex: '#C0C0C0',
    colorName: 'Platinum i5 256GB',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "256GB",
      "connectivity": "WiFi",
      "display": "13\" PixelSense Flow"
    },
  },
  {
    productId: 17,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Graphite i7 512GB',
    priceModifier: 400,
    quantity: 32,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "storage": "512GB",
      "connectivity": "WiFi",
      "display": "13\" PixelSense Flow"
    },
  },

  // Apple Watch Series 9 - Case sizes and materials
  {
    productId: 18,
    inventoryId: 2,
    colorHex: '#4169E1',
    colorName: '41mm Aluminum Midnight',
    priceModifier: 0,
    quantity: 65,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "41mm",
      "display": "41mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },
  {
    productId: 18,
    inventoryId: 4,
    colorHex: '#C0C0C0',
    colorName: '45mm Aluminum Starlight',
    priceModifier: 30,
    quantity: 58,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "45mm",
      "display": "45mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },
  {
    productId: 18,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: '45mm Titanium Space Black',
    priceModifier: 350,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "45mm",
      "display": "45mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },

  // Galaxy Watch 6 - Size variants
  {
    productId: 19,
    inventoryId: 4,
    colorHex: '#FFD700',
    colorName: '40mm Gold',
    priceModifier: 0,
    quantity: 70,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "40mm",
      "display": "40mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },
  {
    productId: 19,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: '44mm Graphite',
    priceModifier: 30,
    quantity: 62,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "44mm",
      "display": "44mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },

  // Pixel Watch 2 - Size and connectivity
  {
    productId: 20,
    inventoryId: 4,
    colorHex: '#C0C0C0',
    colorName: 'Polished Silver WiFi',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "41mm",
      "display": "41mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },
  {
    productId: 20,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Matte Black LTE',
    priceModifier: 50,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "size": "41mm",
      "display": "41mm",
      "battery": "18-24 hours",
      "waterResistant": "50m"
    },
  },

  // AirPods Pro 2 - Single variant (no major variations)
  {
    productId: 21,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'White with MagSafe',
    priceModifier: 0,
    quantity: 120,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White with MagSafe"
    },
  },
  {
    productId: 21,
    inventoryId: 4,
    colorHex: '#FFFFFF',
    colorName: 'White with USB-C',
    priceModifier: 0,
    quantity: 95,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White with USB-C"
    },
  },

  // AirPods Max - Color options
  {
    productId: 22,
    inventoryId: 4,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Silver"
    },
  },
  {
    productId: 22,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Space Gray',
    priceModifier: 0,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Space Gray"
    },
  },
  {
    productId: 22,
    inventoryId: 3,
    colorHex: '#87CEEB',
    colorName: 'Sky Blue',
    priceModifier: 0,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Sky Blue"
    },
  },

  // WH-1000XM5 - Color variants
  {
    productId: 23,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 75,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 23,
    inventoryId: 3,
    colorHex: '#C0C0C0',
    colorName: 'Silver',
    priceModifier: 0,
    quantity: 68,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Silver"
    },
  },

  // QuietComfort Ultra - Color options
  {
    productId: 24,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 52,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 24,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'White Smoke',
    priceModifier: 0,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White Smoke"
    },
  },

  // Galaxy Buds2 Pro - Color variants
  {
    productId: 25,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Graphite',
    priceModifier: 0,
    quantity: 85,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Graphite"
    },
  },
  {
    productId: 25,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 78,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White"
    },
  },
  {
    productId: 25,
    inventoryId: 2,
    colorHex: '#800080',
    colorName: 'Bora Purple',
    priceModifier: 0,
    quantity: 72,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Bora Purple"
    },
  },

  // Studio3 Wireless - Color options
  {
    productId: 26,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Matte Black',
    priceModifier: 0,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Matte Black"
    },
  },
  {
    productId: 26,
    inventoryId: 2,
    colorHex: '#FF0000',
    colorName: 'Red',
    priceModifier: 0,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Red"
    },
  },

  // HomePod - Color variants
  {
    productId: 27,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White"
    },
  },
  {
    productId: 27,
    inventoryId: 1,
    colorHex: '#4169E1',
    colorName: 'Midnight',
    priceModifier: 0,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Midnight"
    },
  },

  // JBL Charge 5 - Color options
  {
    productId: 28,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 65,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 28,
    inventoryId: 4,
    colorHex: '#0000FF',
    colorName: 'Blue',
    priceModifier: 0,
    quantity: 58,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Blue"
    },
  },
  {
    productId: 28,
    inventoryId: 2,
    colorHex: '#FF0000',
    colorName: 'Red',
    priceModifier: 0,
    quantity: 52,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Red"
    },
  },

  // JBL Flip 6 - Color variants
  {
    productId: 29,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 70,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 29,
    inventoryId: 3,
    colorHex: '#00FFFF',
    colorName: 'Teal',
    priceModifier: 0,
    quantity: 62,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Teal"
    },
  },

  // SoundLink Revolve+ - Color options
  {
    productId: 30,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Triple Black',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Triple Black"
    },
  },
  {
    productId: 30,
    inventoryId: 1,
    colorHex: '#C0C0C0',
    colorName: 'Lux Silver',
    priceModifier: 0,
    quantity: 40,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Lux Silver"
    },
  },

  // Canon EOS R5 - Body only vs with lens
  {
    productId: 31,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Body Only',
    priceModifier: 0,
    quantity: 25,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Body Only"
    },
  },
  {
    productId: 31,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'with RF 24-70mm f/2.8',
    priceModifier: 1300,
    quantity: 18,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "with RF 24-70mm f/2.8"
    },
  },

  // Canon EOS R6 Mark II - Kit options
  {
    productId: 32,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: 'Body Only',
    priceModifier: 0,
    quantity: 32,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Body Only"
    },
  },
  {
    productId: 32,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'with RF 24-105mm f/4',
    priceModifier: 700,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "with RF 24-105mm f/4"
    },
  },

  // Nikon Z9 - Body configurations
  {
    productId: 33,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: 'Body Only',
    priceModifier: 0,
    quantity: 20,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Body Only"
    },
  },
  {
    productId: 33,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'with Z 24-70mm f/2.8',
    priceModifier: 1200,
    quantity: 15,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "with Z 24-70mm f/2.8"
    },
  },

  // Sony Alpha 7R V - Kit options
  {
    productId: 34,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Body Only',
    priceModifier: 0,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Body Only"
    },
  },
  {
    productId: 34,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'with FE 24-70mm f/2.8 GM II',
    priceModifier: 1400,
    quantity: 22,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "with FE 24-70mm f/2.8 GM II"
    },
  },

  // PlayStation 5 - Storage variants
  {
    productId: 35,
    inventoryId: 4,
    colorHex: '#FFFFFF',
    colorName: 'Standard Edition 825GB',
    priceModifier: 0,
    quantity: 85,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Standard Edition 825GB"
    },
  },
  {
    productId: 35,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'Digital Edition 825GB',
    priceModifier: -100,
    quantity: 72,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Digital Edition 825GB"
    },
  },

  // Xbox Series X - Editions
  {
    productId: 36,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Series X 1TB',
    priceModifier: 0,
    quantity: 68,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Series X 1TB"
    },
  },
  {
    productId: 36,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'Series S 512GB',
    priceModifier: -200,
    quantity: 95,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Series S 512GB"
    },
  },

  // Nintendo Switch - Model variants
  {
    productId: 37,
    inventoryId: 2,
    colorHex: '#FF0000',
    colorName: 'OLED Neon Red/Blue',
    priceModifier: 0,
    quantity: 75,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "OLED Neon Red/Blue"
    },
  },
  {
    productId: 37,
    inventoryId: 1,
    colorHex: '#FFFFFF',
    colorName: 'OLED White',
    priceModifier: 0,
    quantity: 68,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "OLED White"
    },
  },
  {
    productId: 37,
    inventoryId: 4,
    colorHex: '#00FFFF',
    colorName: 'Standard Neon Blue/Red',
    priceModifier: -50,
    quantity: 82,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Standard Neon Blue/Red"
    },
  },

  // Steam Deck - Storage tiers
  {
    productId: 38,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: '256GB NVMe SSD',
    priceModifier: 0,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "256GB NVMe SSD"
    },
  },
  {
    productId: 38,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: '512GB NVMe SSD',
    priceModifier: 130,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "512GB NVMe SSD"
    },
  },
  {
    productId: 38,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: '1TB NVMe SSD',
    priceModifier: 250,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "1TB NVMe SSD"
    },
  },

  // LG C3 OLED - Screen sizes
  {
    productId: 39,
    inventoryId: 4,
    colorHex: '#000000',
    colorName: '55-inch',
    priceModifier: 0,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "55-inch"
    },
  },
  {
    productId: 39,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: '65-inch',
    priceModifier: 500,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "65-inch"
    },
  },
  {
    productId: 39,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: '77-inch',
    priceModifier: 1200,
    quantity: 22,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "77-inch"
    },
  },

  // Dell UltraSharp - Size variants
  {
    productId: 40,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: '27-inch 4K',
    priceModifier: 0,
    quantity: 55,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "27-inch 4K"
    },
  },
  {
    productId: 40,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: '32-inch 4K',
    priceModifier: 200,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "32-inch 4K"
    },
  },

  // MX Keys - Variants
  {
    productId: 41,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Graphite',
    priceModifier: 0,
    quantity: 85,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Graphite"
    },
  },
  {
    productId: 41,
    inventoryId: 4,
    colorHex: '#FFFFFF',
    colorName: 'Pale Gray',
    priceModifier: 0,
    quantity: 78,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Pale Gray"
    },
  },

  // MX Master 3S - Color options
  {
    productId: 42,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Graphite',
    priceModifier: 0,
    quantity: 95,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Graphite"
    },
  },
  {
    productId: 42,
    inventoryId: 3,
    colorHex: '#FFFFFF',
    colorName: 'Pale Gray',
    priceModifier: 0,
    quantity: 88,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Pale Gray"
    },
  },

  // Samsung T7 - Storage capacities
  {
    productId: 43,
    inventoryId: 4,
    colorHex: '#808080',
    colorName: 'Gray 1TB',
    priceModifier: 0,
    quantity: 72,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Gray 1TB"
    },
  },
  {
    productId: 43,
    inventoryId: 1,
    colorHex: '#FF0000',
    colorName: 'Red 2TB',
    priceModifier: 80,
    quantity: 58,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Red 2TB"
    },
  },
  {
    productId: 43,
    inventoryId: 3,
    colorHex: '#0000FF',
    colorName: 'Blue 4TB',
    priceModifier: 200,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Blue 4TB"
    },
  },

  // SanDisk Extreme - Capacity variants
  {
    productId: 44,
    inventoryId: 1,
    colorHex: '#FFA500',
    colorName: '2TB',
    priceModifier: 0,
    quantity: 65,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "2TB"
    },
  },
  {
    productId: 44,
    inventoryId: 3,
    colorHex: '#FFA500',
    colorName: '4TB',
    priceModifier: 150,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "4TB"
    },
  },

  // Anker PowerCore 26800 - Variants
  {
    productId: 45,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 95,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 45,
    inventoryId: 2,
    colorHex: '#FFFFFF',
    colorName: 'White',
    priceModifier: 0,
    quantity: 88,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "White"
    },
  },

  // Anker PowerCore 10000 - Color options
  {
    productId: 46,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Black',
    priceModifier: 0,
    quantity: 110,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Black"
    },
  },
  {
    productId: 46,
    inventoryId: 3,
    colorHex: '#FF0000',
    colorName: 'Red',
    priceModifier: 0,
    quantity: 95,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Red"
    },
  },

  // DJI Mavic 3 Pro - Bundle options
  {
    productId: 47,
    inventoryId: 1,
    colorHex: '#808080',
    colorName: 'Standard',
    priceModifier: 0,
    quantity: 35,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Standard"
    },
  },
  {
    productId: 47,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Fly More Combo',
    priceModifier: 500,
    quantity: 28,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Fly More Combo"
    },
  },

  // DJI Mini 4 Pro - Package variants
  {
    productId: 48,
    inventoryId: 3,
    colorHex: '#808080',
    colorName: 'Standard',
    priceModifier: 0,
    quantity: 48,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Standard"
    },
  },
  {
    productId: 48,
    inventoryId: 2,
    colorHex: '#808080',
    colorName: 'Fly More Combo',
    priceModifier: 200,
    quantity: 42,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Fly More Combo"
    },
  },

  // GoPro HERO12 Black - Bundle options
  {
    productId: 49,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: 'Camera Only',
    priceModifier: 0,
    quantity: 62,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Camera Only"
    },
  },
  {
    productId: 49,
    inventoryId: 1,
    colorHex: '#000000',
    colorName: 'Creator Edition',
    priceModifier: 150,
    quantity: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "Creator Edition"
    },
  },

  // LG C3 OLED - Additional sizes
  {
    productId: 50,
    inventoryId: 3,
    colorHex: '#000000',
    colorName: '48-inch',
    priceModifier: 0,
    quantity: 38,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "48-inch"
    },
  },
  {
    productId: 50,
    inventoryId: 2,
    colorHex: '#000000',
    colorName: '83-inch',
    priceModifier: 2000,
    quantity: 15,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    ],
    specifications: {
      "model": "83-inch"
    },
  }
];

// Orders (timestamps will be auto-generated by the database)
export const ordersData = [
  {
    userId: 1,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 1,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 2,
    paymentMethodId: 'APPLE_PAY',
  },
  {
    userId: 3,
    paymentMethodId: 'PAYPAL',
  },
  {
    userId: 4,
    paymentMethodId: 'GOOGLE_PAY',
  },
  {
    userId: 5,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 6,
    paymentMethodId: 'CASH_ON_DELIVERY',
  },
  {
    userId: 7,
    paymentMethodId: 'BANK_TRANSFER',
  },
  {
    userId: 8,
    paymentMethodId: 'INSTALLMENT',
  },
  {
    userId: 9,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 10,
    paymentMethodId: 'APPLE_PAY',
  },
  {
    userId: 11,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 12,
    paymentMethodId: 'PAYPAL',
  },
  {
    userId: 13,
    paymentMethodId: 'CREDIT_CARD',
  },
  {
    userId: 14,
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

  // Order 13 - Customer 13 bought product
  { orderId: 14, productId: 45, quantity: 1 },

  // Order 14 - Customer 14 bought Logitech mouse
  { orderId: 15, productId: 48, quantity: 2 },
];

// Roles
export const rolesData = [
  { name: 'admin', description: 'Administrator with full access' },
  { name: 'manager', description: 'Manager with operational access' },
  { name: 'customer', description: 'Regular customer' },
];

// Permissions
export const permissionsData = [
  { action: 'products:create', resource: 'products' },
  { action: 'products:read', resource: 'products' },
  { action: 'products:update', resource: 'products' },
  { action: 'products:delete', resource: 'products' },
  { action: 'users:create', resource: 'users' },
  { action: 'users:read', resource: 'users' },
  { action: 'users:update', resource: 'users' },
  { action: 'users:delete', resource: 'users' },
  { action: 'orders:create', resource: 'orders' },
  { action: 'orders:read', resource: 'orders' },
  { action: 'orders:update', resource: 'orders' },
  { action: 'orders:cancel', resource: 'orders' },
];

export const rolePermissionsData = [
  {
    role: 'admin',
    permissions: 'ALL',
  },
  {
    role: 'manager',
    permissions: [
      'products:create', 'products:read', 'products:update', 'products:delete',
      'users:read', 'users:update', 'users:create',
      'orders:create', 'orders:read', 'orders:update', 'orders:cancel'
    ],
  },
  {
    role: 'customer',
    permissions: [
      'products:read',
      'orders:create', 'orders:read', 'orders:cancel'
    ],
  },
];

export const userRolesData = [
  { email: 'michael.johnson@email.com', role: 'admin' },
  { email: 'emily.smith@email.com', role: 'manager' },
];
