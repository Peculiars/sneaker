import NewCollection from '@/components/main/product/newCollection/NewCollection';
import img from '../public/assets/Sneaker 9/Black Color/air-zoom-arcadia-2-big-kids-road-running-shoes-gRPsFm (1).png'
import { ReactNode } from "react";
import BestSellers from '@/components/main/product/bestSellers/BestSellers';
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
    men?: string,
    women?: string,
    kids?: string,
    newCollection?: string,
    bestCollection?: string,
    variants: ShoeVariant[];
  }


  interface ShoeThumbProps {
    shoe: ShoeModel;
    onColorSelect: (shoe: ShoeModel, color: string) => void;
  }
  
