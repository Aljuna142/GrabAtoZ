
  

  



  


  // products.js

/*export const products = [
    {
      id: 1,
      name: 'Lenovo IdeaCentre AIO 3 24ALC6 (2021) Desktop',
      specs: 'AMD Ryzen 3-5300U / 23.8inch FHD / 256GB SSD / 4GB RAM / Shared AMD Radeon Graphics / Windows 11 Home / English & Arabic Keyboard / Black / Middle East Version',
      price: '500',
      discount: '10% off',
      description: 'A compact all-in-one desktop with a sleek design and powerful performance.',
      ratings: 4.5,
      seller: 'Lenovo Store',
      longDescription: 'This Lenovo IdeaCentre AIO 3 is perfect for both work and play. With its AMD Ryzen 3-5300U processor and 23.8-inch FHD display, it delivers stunning visuals and smooth performance. The 256GB SSD ensures fast boot times and quick access to your files, while the 4GB RAM allows for seamless multitasking. The shared AMD Radeon Graphics provide enhanced graphics for casual gaming and multimedia editing. It comes with Windows 11 Home pre-installed and features a dual-language keyboard for convenience. Available in Black, it is designed for the Middle East market.',
      reviews: [
        'Great performance and value for money.',
        'Sleek design and easy to set up.',
        'The display quality is fantastic.',
      ],
    },
    {
      id: 2,
      name: 'Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color',
      specs: 'Intel Core I5-1135G7 / 8GB RAM / 1TB HDD / Nvidia MX350 2GB / 15.6″ FHD / Windows 11 / ENG-ARB Keyboard / Silver Color',
      price: '600',
      description: 'A versatile laptop with powerful performance and graphics capability, suitable for everyday use.',
      ratings: 4.0,
      seller: 'Acer Official Store',
      longDescription: 'The Acer Aspire 3 is equipped with an Intel Core I5-1135G7 processor and 8GB of RAM for smooth multitasking. It features a 15.6-inch Full HD display and Nvidia MX350 graphics card, making it suitable for light gaming and multimedia tasks. With 1TB of HDD storage, you have ample space for your files. It comes with Windows 11 pre-installed and a bilingual keyboard for convenience. Available in a stylish Silver Color.',
      reviews: [
        'Good performance for the price.',
        'Solid build quality.',
        'Decent battery life.',
      ],
    },
    {
      id: 3,
      name: 'MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey',
      specs: 'Apple M2 Chip / 8-Core CPU / 10-Core GPU / 256GB SSD / 15-Inch Display / macOS',
      price: '1200',
      description: 'The MacBook Air with the powerful Apple M2 chip offers exceptional performance and a stunning display.',
      ratings: 4.8,
      seller: 'Apple Store',
      longDescription: 'The MacBook Air MQKP3 features the latest Apple M2 chip with an 8-core CPU and 10-core GPU, providing exceptional performance for professional tasks and creative work. It comes with a vibrant 15-inch display and a sleek Space Grey design. With 256GB of SSD storage, it offers fast access to your files. Perfect for those who value performance and portability.',
      reviews: [
        'Incredible performance and battery life.',
        'Beautiful display and lightweight design.',
        'Efficient cooling system.',
      ],
    },
    {
      id: 4,
      name: 'ASUS TUF A15 FA507RE-HN049W Gaming Laptop AMD R7-6800H 16GB Ram 512GB SSD Nvidia RTX 3050TI 4GB 15.6″ FHD 144Hz Win11',
      specs: 'AMD R7-6800H / 16GB RAM / 512GB SSD / Nvidia RTX 3050TI 4GB / 15.6″ FHD 144Hz / Windows 11',
      price: '1100',
      description: 'A powerful gaming laptop designed for high-performance gaming and multitasking.',
      ratings: 4.6,
      seller: 'ASUS Official Store',
      longDescription: 'The ASUS TUF A15 FA507RE-HN049W is powered by an AMD R7-6800H processor and 16GB of RAM, making it ideal for gaming and demanding applications. It features a fast 512GB SSD and Nvidia RTX 3050TI 4GB graphics for smooth gameplay on its 15.6-inch Full HD display with a 144Hz refresh rate. It comes pre-installed with Windows 11 and is designed for gamers who need powerful performance and reliability.',
      reviews: [
        'Excellent gaming performance.',
        'Robust build quality.',
        'Effective cooling system.',
      ],
    },
    {
      id: 5,
      name: 'HP VICTUS 15-Fa1093dx Core™ I5-13420H, 512GB SSD 8GB 15.6″ (1920×1080) 144Hz IPS WIN11 NVIDIA® RTX 3050 6144MB 6GB GRAPHICS Blue Backlit Keyboard',
      specs: 'Core™ I5-13420H / 512GB SSD / 8GB RAM / 15.6″ (1920×1080) 144Hz IPS / Windows 11 / NVIDIA® RTX 3050 6GB GRAPHICS / Blue Backlit Keyboard',
      price: '900',
      description: 'HP VICTUS gaming laptop with powerful hardware and high-refresh-rate display for immersive gaming experience.',
      ratings: 4.4,
      seller: 'HP Official Store',
      longDescription: 'The HP VICTUS 15-Fa1093dx is equipped with a Core™ I5-13420H processor and 8GB of RAM, providing powerful performance for gaming and multitasking. It features a 15.6-inch Full HD IPS display with a 144Hz refresh rate, ideal for smooth gaming visuals. With a 512GB SSD and NVIDIA® RTX 3050 6GB graphics, it offers fast storage and graphics processing capabilities. It comes with Windows 11 pre-installed and a Blue Backlit Keyboard for enhanced gaming aesthetics.',
      reviews: [
        'Great value for gaming performance.',
        'Excellent display quality.',
        'Comfortable keyboard and good build quality.',
      ],
    },
    {
      id: 6,
      name: 'Lenovo Thinkpad T14 G2 Intel Core I7-1185G7 VPro 16GB RAM 256GB SSD 14” Touch FHD IPS Win11Pro English Keyboard',
      specs: 'Intel Core I7-1185G7 VPro / 16GB RAM / 256GB SSD / 14” Touch FHD IPS / Windows 11 Pro / English Keyboard',
      price: '1300',
      description: 'The Lenovo Thinkpad T14 G2 combines powerful performance with business-oriented features and a touchscreen display.',
      ratings: 4.7,
      seller: 'Lenovo Official Store',
      longDescription: 'The Lenovo Thinkpad T14 G2 features an Intel Core I7-1185G7 VPro processor and 16GB of RAM, delivering robust performance for business tasks and multitasking. It comes with a 256GB SSD for fast storage and a 14-inch Touch FHD IPS display for enhanced productivity. With Windows 11 Pro pre-installed, it offers advanced security features and business-oriented software compatibility. Perfect for professionals who need reliable performance and versatility.',
      reviews: [
        'Exceptional build quality and durability.',
        'Responsive touchscreen and smooth performance.',
        'Long-lasting battery life.',
      ],
    },
    {
      id: 7,
      name: 'Acer Aspire 3 Intel Core I5-1235U 8GB Ram 512GB SSD Intel Iris Xe Graphics 15.6″ FHD Win11 ENG Keyboard Silver Color',
      specs: 'Intel Core I5-1235U / 8GB RAM / 512GB SSD / Intel Iris Xe Graphics / 15.6″ FHD / Windows 11 / ENG Keyboard / Silver Color',
      price: '700',
      description: 'The Acer Aspire 3 offers reliable performance with a sleek design and Intel Iris Xe graphics.',
      ratings: 4.2,
      seller: 'Acer Official Store',
      longDescription: 'The Acer Aspire 3 is powered by an Intel Core I5-1235U processor and 8GB of RAM, providing reliable performance for everyday tasks. It features a 15.6-inch Full HD display and Intel Iris Xe graphics for enhanced visual performance. With a 512GB SSD, it offers ample storage space and fast data access. It comes pre-installed with Windows 11 and is available in a stylish Silver Color, making it suitable for both work and entertainment.',


      reviews: [
        { id: 1, text: 'Great performance and value for money.', rating: 5 },
        { id: 2, text: 'Sleek design and easy to set up.', rating: 4 },
        { id: 3, text: 'The display quality is fantastic.', rating: 4.5 },
      ],

      
    },
  ];
  




export const similarProducts = [
  {
    id: 8,
    title: 'Similar Product 1',
    image: require('../assets/similar/s1.jpg'),
    // Add more details as needed
  },
  {
    id: 9,
    title: 'Similar Product 2',
    image: require('../assets/similar/s2.jpg'),
    // Add more details as needed
  },
  // Add more similar products
];*/


// products.js

export const products = [
  {
    id: 1,
    name: 'Lenovo IdeaCentre AIO 3 24ALC6 (2021) Desktop',
    specs: 'AMD Ryzen 3-5300U / 23.8inch FHD / 256GB SSD / 4GB RAM / Shared AMD Radeon Graphics / Windows 11 Home / English & Arabic Keyboard / Black / Middle East Version',
    price: '500',
    discount: '10% off',
    description: 'A compact all-in-one desktop with a sleek design and powerful performance.',
    ratings: 4.5,
    seller: 'Lenovo Store',
    longDescription: 'This Lenovo IdeaCentre AIO 3 is perfect for both work and play. With its AMD Ryzen 3-5300U processor and 23.8-inch FHD display, it delivers stunning visuals and smooth performance. The 256GB SSD ensures fast boot times and quick access to your files, while the 4GB RAM allows for seamless multitasking. The shared AMD Radeon Graphics provide enhanced graphics for casual gaming and multimedia editing. It comes with Windows 11 Home pre-installed and features a dual-language keyboard for convenience. Available in Black, it is designed for the Middle East market.',
    reviews: [
      { id: 1, text: 'Great performance and value for money.', rating: 5 },
      { id: 2, text: 'Sleek design and easy to set up.', rating: 4 },
      { id: 3, text: 'The display quality is fantastic.', rating: 4.5 },
    ],
  },
  {
    id: 2,
    name: 'Acer Aspire 3 Intel Core I5-1135G7 8GB Ram 1TB HDD Nvidia MX350 2GB 15.6″ FHD Win11 ENG-ARB Keyboard Silver Color',
    specs: 'Intel Core I5-1135G7 / 8GB RAM / 1TB HDD / Nvidia MX350 2GB / 15.6″ FHD / Windows 11 / ENG-ARB Keyboard / Silver Color',
    price: '600',
    description: 'A versatile laptop with powerful performance and graphics capability, suitable for everyday use.',
    ratings: 4.0,
    seller: 'Acer Official Store',
    longDescription: 'The Acer Aspire 3 is equipped with an Intel Core I5-1135G7 processor and 8GB of RAM for smooth multitasking. It features a 15.6-inch Full HD display and Nvidia MX350 graphics card, making it suitable for light gaming and multimedia tasks. With 1TB of HDD storage, you have ample space for your files. It comes with Windows 11 pre-installed and a bilingual keyboard for convenience. Available in a stylish Silver Color.',
    reviews: [
      { id: 1, text: 'Good performance for the price.', rating: 4 },
      { id: 2, text: 'Solid build quality.', rating: 4 },
      { id: 3, text: 'Decent battery life.', rating: 4 },
    ],
  },
  {
    id: 3,
    name: 'MacBook Air MQKP3 15-Inch Display, Apple M2 Chip With 8-Core CPU And 10-Core GPU, 256GB SSD, English Keyboard Space Grey',
    specs: 'Apple M2 Chip / 8-Core CPU / 10-Core GPU / 256GB SSD / 15-Inch Display / macOS',
    price: '1200',
    description: 'The MacBook Air with the powerful Apple M2 chip offers exceptional performance and a stunning display.',
    ratings: 4.8,
    seller: 'Apple Store',
    longDescription: 'The MacBook Air MQKP3 features the latest Apple M2 chip with an 8-core CPU and 10-core GPU, providing exceptional performance for professional tasks and creative work. It comes with a vibrant 15-inch display and a sleek Space Grey design. With 256GB of SSD storage, it offers fast access to your files. Perfect for those who value performance and portability.',
    reviews: [
      { id: 1, text: 'Incredible performance and battery life.', rating: 5 },
      { id: 2, text: 'Beautiful display and lightweight design.', rating: 5 },
      { id: 3, text: 'Efficient cooling system.', rating: 4.5 },
    ],
  },
  {
    id: 4,
    name: 'ASUS TUF A15 FA507RE-HN049W Gaming Laptop AMD R7-6800H 16GB Ram 512GB SSD Nvidia RTX 3050TI 4GB 15.6″ FHD 144Hz Win11',
    specs: 'AMD R7-6800H / 16GB RAM / 512GB SSD / Nvidia RTX 3050TI 4GB / 15.6″ FHD 144Hz / Windows 11',
    price: '1100',
    description: 'A powerful gaming laptop designed for high-performance gaming and multitasking.',
    ratings: 4.6,
    seller: 'ASUS Official Store',
    longDescription: 'The ASUS TUF A15 FA507RE-HN049W is powered by an AMD R7-6800H processor and 16GB of RAM, making it ideal for gaming and demanding applications. It features a fast 512GB SSD and Nvidia RTX 3050TI 4GB graphics for smooth gameplay on its 15.6-inch Full HD display with a 144Hz refresh rate. It comes pre-installed with Windows 11 and is designed for gamers who need powerful performance and reliability.',
    reviews: [
      { id: 1, text: 'Excellent gaming performance.', rating: 5 },
      { id: 2, text: 'Robust build quality.', rating: 4.5 },
      { id: 3, text: 'Effective cooling system.', rating: 4.5 },
    ],
  },
  {
    id: 5,
    name: 'HP VICTUS 15-Fa1093dx Core™ I5-13420H, 512GB SSD 8GB 15.6″ (1920×1080) 144Hz IPS WIN11 NVIDIA® RTX 3050 6144MB 6GB GRAPHICS Blue Backlit Keyboard',
    specs: 'Core™ I5-13420H / 512GB SSD / 8GB RAM / 15.6″ (1920×1080) 144Hz IPS / Windows 11 / NVIDIA® RTX 3050 6GB GRAPHICS / Blue Backlit Keyboard',
    price: '900',
    description: 'HP VICTUS gaming laptop with powerful hardware and high-refresh-rate display for immersive gaming experience.',
    ratings: 4.4,
    seller: 'HP Official Store',
    longDescription: 'The HP VICTUS 15-Fa1093dx is equipped with a Core™ I5-13420H processor and 8GB of RAM, providing powerful performance for gaming and multitasking. It features a 15.6-inch Full HD IPS display with a 144Hz refresh rate, ideal for smooth gaming visuals. With a 512GB SSD and NVIDIA® RTX 3050 6GB graphics, it offers fast storage and graphics processing capabilities. It comes with Windows 11 pre-installed and a Blue Backlit Keyboard for enhanced gaming aesthetics.',
    reviews: [
      { id: 1, text: 'Great value for gaming performance.', rating: 4 },
      { id: 2, text: 'Excellent display quality.', rating: 4.5 },
      { id: 3, text: 'Comfortable keyboard and good build quality.', rating: 4.5 },
    ],
  },
  {
    id: 6,
    name: 'Lenovo Thinkpad T14 G2 Intel Core I7-1185G7 VPro 16GB RAM 256GB SSD 14” Touch FHD IPS Win11Pro English Keyboard',
    specs: 'Intel Core I7-1185G7 VPro / 16GB RAM / 256GB SSD / 14” Touch FHD IPS / Windows 11 Pro / English Keyboard',
    price: '1300',
    description: 'The Lenovo Thinkpad T14 G2 combines powerful performance with business-oriented features and a touchscreen display.',
    ratings: 4.7,
    seller: 'Lenovo Official Store',
    longDescription: 'The Lenovo Thinkpad T14 G2 features an Intel Core I7-1185G7 VPro processor and 16GB of RAM, delivering robust performance for business tasks and multitasking. It comes with a 256GB SSD for fast storage and a 14-inch Touch FHD IPS display for enhanced productivity. With Windows 11 Pro pre-installed, it offers advanced security features and business-oriented software compatibility. Perfect for professionals who need reliable performance and versatility.',
    reviews: [
      { id: 1, text: 'Exceptional build quality and durability.', rating: 5 },
      { id: 2, text: 'Responsive touchscreen and smooth performance.', rating: 4.5 },
      { id: 3, text: 'Long-lasting battery life.', rating: 4.5 },
    ],
  },
  {
    id: 7,
    name: 'Acer Aspire 3 Intel Core I5-1235U 8GB Ram 512GB SSD Intel Iris Xe Graphics 15.6″ FHD WinWin11 ENG Keyboard Silver Color',
      specs: 'Intel Core I5-1235U / 8GB RAM / 512GB SSD / Intel Iris Xe Graphics / 15.6″ FHD / Windows 11 / ENG Keyboard / Silver Color',
      price: '700',
      description: 'The Acer Aspire 3 offers reliable performance with a sleek design and Intel Iris Xe graphics.',
      ratings: 4.2,
      seller: 'Acer Official Store',
      longDescription: 'The Acer Aspire 3 is powered by an Intel Core I5-1235U processor and 8GB of RAM, providing reliable performance for everyday tasks. It features a 15.6-inch Full HD display and Intel Iris Xe graphics for enhanced visual performance. With a 512GB SSD, it offers ample storage space and fast data access. It comes pre-installed with Windows 11 and is available in a stylish Silver Color, making it suitable for both work and entertainment.',


      reviews: [
        { id: 1, text: 'Great performance and value for money.', rating: 5 },
        { id: 2, text: 'Sleek design and easy to set up.', rating: 4 },
        { id: 3, text: 'The display quality is fantastic.', rating: 4.5 },
      ],

      
    },
  ];
  




export const similarProducts = [
  {
    id: 8,
    title: 'Similar Product 1',
    image: require('../assets/similar/s1.jpg'),
    // Add more details as needed
  },
  {
    id: 9,
    title: 'Similar Product 2',
    image: require('../assets/similar/s2.jpg'),
    // Add more details as needed
  },
  // Add more similar products
];




  
  