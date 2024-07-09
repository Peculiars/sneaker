import img from '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png'
import { ReactNode } from "react";
declare interface ContainerProps{
    className?: string,
    children: ReactNode,
}

interface ShoeVariant {
    color: string;
    mainImage: string;
    additionalImages: string[];
  }
  
  interface ShoeModel {
    id: string;
    name: string;
    category: string,
    price: number;
    variants: ShoeVariant[];
  }
  
  const shoeData: ShoeModel[] = [
    {
      id: 'shoe-1',
      name: 'Zephyr Swiftstrike Pro',
      category: "Men's shoe",
      price: 140540,
      variants: [
        {
          color: 'green',
          mainImage: '../public/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (1).jpeg',
          additionalImages: [
            '../public/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (1).jpeg',
            '../public/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (2).jpeg',
            '../public/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (3).jpeg',
            '../public/assets/Sneaker 1/air-jordan-4-retro-oxidized-green-mens-shoes-PNtDJp (4).jpeg'
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
            mainImage: '../public/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz.png',
            additionalImages: [
              '../public/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '../public/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
              '../public/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (3).png',
              '../public/assets/Sneaker 2/Red sneaker/jumpman-mvp-mens-shoes-gzmjDz (4).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'black',
            mainImage: '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (4).png',
            additionalImages: [
              '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
              '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (3).png',
              '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (5).png',
              '../public/assets/Sneaker 2/Black sneaker/jumpman-mvp-mens-shoes-gzmjDz (6).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'green',
            mainImage: '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).png',
            additionalImages: [
              '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz.jpeg',
              '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz.png',
              '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).jpeg',
              '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (1).png',
              '../public/assets/Sneaker 2/Green sneaker/jumpman-mvp-mens-shoes-gzmjDz (2).jpeg'
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
            mainImage: '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (1).jpeg',
            additionalImages: [
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (1).png',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (2).jpeg',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (2).png',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (3).jpeg',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (3).png',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (4).png',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (4).jpeg',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (5).png',
              '../public/assets/Sneaker 3/air-jordan-3-retro-tex-desert-camo-womens-shoes-FMR3S0 (5).jpeg',
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
            mainImage: '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (4).png',
            additionalImages: [
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (1).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (2).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (3).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (5).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (6).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr (7).png',
              '../public/assets/Sneaker 4/jordan-spizike-low-big-kids-shoes-XFRzcr.png',
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
            mainImage: '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn.jpeg',
            additionalImages: [
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (1).jpeg',
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (1).png',
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (2).jpeg',
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (2).png',
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (3).png',
              '../public/assets/Sneaker 5/Blue color/air-jordan-1-low-mens-shoes-0LXhbn (4).png'
              // ... up to 7 images
            ]
          },

          {
            color: 'red',
            mainImage: '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (4).jpeg',
            additionalImages: [
              '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (1).jpeg',
              '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (1).png',
              '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (2).jpeg',
              '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (2).png',
              '../public/assets/Sneaker 5/Red color/air-jordan-1-low-mens-shoes-0LXhbn (3).jpeg',
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
            mainImage: '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (4).png',
            additionalImages: [
              '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (1).png',
              '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (1).jpeg',
              '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (2).png',
              '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (3).png',
              '../public/assets/Sneaker 6/air-jordan-legacy-312-low-little-kids-shoes-LVHB6Z (5).png'
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
            mainImage: '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (4).png',
            additionalImages: [
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).png',
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (1).jpeg',
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (2).png',
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (3).png',
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (5).png',
              '../public/assets/Sneaker 7/Black/jordan-spizike-low-big-kids-shoes-t6s9lN (6).png'
            ]
          },
          {
            color: 'gold',
            mainImage: '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (3).png',
            additionalImages: [
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (1).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (2).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (4).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (5).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (6).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (7).png',
              '../public/assets/Sneaker 7/Gold/jordan-spizike-low-big-kids-shoes-t6s9lN (8).png'
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
            mainImage: '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT.png',
            additionalImages: [
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (1).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (2).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (3).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (4).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (5).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT (6).png',
              '../public/assets/Sneaker 8/air-zoom-arcadia-2-little-kids-shoes-jQ4nZT.jpeg',
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
            mainImage: '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm.png',
            additionalImages: [
              '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png',
              '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (2).png',
              '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (3).png',
            '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (4).png',
            '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (5).png',
            '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (6).png',
            '../public/assets/Sneaker 9/White Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (7).png',
            ]
          },
          {
            color: 'black',
            mainImage: '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm.png',
            additionalImages: [
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (2).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (3).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (4).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (5).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (6).png',
              '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (7).png'
            ]
          },
        ]
      },
  ];


  interface ShoeThumbProps {
    shoe: ShoeModel;
    onColorSelect: (shoe: ShoeModel, color: string) => void;
  }
  
