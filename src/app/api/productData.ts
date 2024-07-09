// import image1 from '../../../public/assets/images/newCollection/image 1.png'
// import image2 from '../../../public/assets/images/newCollection/image2.png';
// import image3 from '../../../public/assets/images/newCollection/image3.png';
// import image4 from '../../../public/assets/images/newCollection/image4.png';
// import image5 from '../../../public/assets/images/newCollection/image5.png';

import { ShoeModel } from "../../../types";

// import image6 from '../../../public/assets/images/bestSellers/bestImg1.png';
// import image7 from '../../../public/assets/images/bestSellers/bestImg2.png';
// import image8 from '../../../public/assets/images/bestSellers/bestImg3.png';
// import image9 from '../../../public/assets/images/bestSellers/bestImg4.png';
// import image10 from '../../../public/assets/images/bestSellers/bestImg5.png';
// import image11 from '../../../public/assets/images/bestSellers/bestImg6.png';
// import image12 from '../../../public/assets/images/bestSellers/bestImg7.png';
// import image13 from '../../../public/assets/images/bestSellers/bestImg8.png';


//     export const productData = [
//         {id: '1', name: 'Zephyr Swiftstrike Pro', image: image1, category: 'Men’s Shoes', color: '1 colour', price: '₦ 140,540'},
//         { id: '2', name: 'Novaweave Phantom Pulse', image: image2, category: 'Men’s Shoes', color: '3 colours', price: '₦ 100,540'},
//         {id: '3', name: 'Atlas Ascent GTX', image: image3, category: 'Women’s Shoes', color: '4 colours', price: '₦ 260,000'},
//         {id: '4', name: 'Hyperflight Terraform X', image: image4, category: 'Kid’s Shoes', color: '4 colours', price: '₦ 60,000'},
//         {id: '5', name: 'Eclipse Shadowstrike SE', image: image5, category: 'Kid’s Shoes', color: '3 colours', price: '₦ 90,000'},
//         {id: '6', name: 'Surge Conduit Bioflex', image: image6, category: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         { id: '7', name: 'Legacy Cipher Codebreaker', image: image7, category: 'Men’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '8', name: 'Apex Terrain Conqueror', image: image8, category: 'Women’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '9', name: 'Novaflash Pulseweave', image: image9, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '10', name: 'Hypershift Chasers', image: image10, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '11', name: 'Radiant Propulsion Labs', image: image11, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '12', name: 'Spectral Shift Navigators', image: image12, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
//         {id: '13', name: 'Biometric Agility Trainers', image: image13, category: 'Kid’s Shoes', color: '1 colour', price: '₦ 40,540'},
//     ];

export const shoeData: ShoeModel[] = [
    {
      id: 'shoe-1',
      name: 'Zephyr Swiftstrike Pro',
      category: "Men's shoe",
      price: 140540,
      variants: [
        {
          color: 'green',
          mainImage: '/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (1).jpeg',
          additionalImages: [
            '/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (1).jpeg',
            '/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (2).jpeg',
            '/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (3).jpeg',
            '/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (4).jpeg'
            // ... up to 7 images
          ]
        },
        // Add yellow and black variants here
      ]
        },
    

    {
        id: 'shoe-2',
        name: 'Novaweave Phantom Pulse',
        category: "Men's shoe",
        price: 100540,
        variants: [
          {
            color: 'red',
            mainImage: '/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz.png',
            additionalImages: [
              '/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
              '/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (3).png',
              '/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (4).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'black',
            mainImage: '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (4).png',
            additionalImages: [
              '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
              '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (3).png',
              '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (5).png',
              '/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (6).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'green',
            mainImage: '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
            additionalImages: [
              '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz.jpeg',
              '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz.png',
              '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).jpeg',
              '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).jpeg'
              // ... up to 7 images
            ]
          },
          // Add yellow and black variants here
        ]
      },

    {
        id: 'shoe-3',
        name: 'Atlas Ascent GTX',
        category: "Women's shoe",
        price: 260000,
        variants: [
          {
            color: 'yellow',
            mainImage: '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (1).jpeg',
            additionalImages: [
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (1).png',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (2).jpeg',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (2).png',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (3).jpeg',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (3).png',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (4).png',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (4).jpeg',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (5).png',
              '/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (5).jpeg',
              // ... up to 7 images
            ]
          },
          // Add yellow and black variants here
        ]
      },

    {
        id: 'shoe-4',
        name: 'Zephyr Swiftstrike Pro',
        category: "Men's shoe",
        price: 140540,
        variants: [
          {
            color: 'white',
            mainImage: '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (4).png',
            additionalImages: [
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (1).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (2).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (3).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (5).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (6).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (7).png',
              '/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr.png',
              // ... up to 7 images
            ]
          },
          // Add yellow and black variants here
        ]
      },

    {
        id: 'shoe-5',
        name: 'Novaweave Phantom Pulse',
        category: "Men's shoe",
        price: 100540,
        variants: [
          {
            color: 'blue',
            mainImage: '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn.jpeg',
            additionalImages: [
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (1).jpeg',
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (1).png',
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (2).jpeg',
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (2).png',
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (3).png',
              '/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (4).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'red',
            mainImage: '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (4).jpeg',
            additionalImages: [
              '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (1).jpeg',
              '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (1).png',
              '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (2).jpeg',
              '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (2).png',
              '/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (3).jpeg',
            ]
          },
          
          // Add yellow and black variants here
        ]
      },

    {
        id: 'shoe-6',
        name: 'Atlas Ascent GTX',
        category: "Women's shoe",
        price: 260000,
        variants: [
          {
            color: 'blue',
            mainImage: '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (4).png',
            additionalImages: [
              '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (1).png',
              '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (1).jpeg',
              '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (2).png',
              '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (3).png',
              '/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (5).png'
            ]
          },
          // Add yellow and black variants here
        ]
      },

    {
        id: 'shoe-7',
        name: 'Zephyr Swiftstrike Pro',
        category: "Women's shoe",
        price: 140540,
        variants: [
          {
            color: 'black',
            mainImage: '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (4).png',
            additionalImages: [
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).png',
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).jpeg',
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (2).png',
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (3).png',
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (5).png',
              '/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (6).png'
            ]
          },
          {
            color: 'gold',
            mainImage: '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (3).png',
            additionalImages: [
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (1).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (2).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (4).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (5).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (6).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (7).png',
              '/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (8).png'
            ]
          },
        ]
      },

    {
        id: 'shoe-8',
        name: 'Novaweave Phantom Pulse',
        category: "Women's shoe",
        price: 100540,
        variants: [
          {
            color: 'pink',
            mainImage: '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT.png',
            additionalImages: [
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (1).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (2).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (3).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (4).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (5).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (6).png',
              '/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT.jpeg',
            ]
          },
        ]
      },

    {
        id: 'shoe-9',
        name: 'Atlas Ascent GTX',
        category: "Women's shoe",
        price: 260000,
        variants: [
          {
            color: 'white',
            mainImage: '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm.png',
            additionalImages: [
              '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png',
              '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (2).png',
              '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (3).png',
            '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (4).png',
            '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (5).png',
            '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (6).png',
            '/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (7).png',
            ]
          },
          {
            color: 'black',
            mainImage: '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm.png',
            additionalImages: [
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (2).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (3).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (4).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (5).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (6).png',
              '/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (7).png'
            ]
          },
        ]
      },
  ];