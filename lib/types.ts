export interface BazarPrice {
  name: string;
  price: number;
}

export interface Product {
  id: string;

  name: string;

  slug: string;

  emoji: string;


  icon?: string;
  category: string;

  categoryName: string;

  unit: string;
  currentPrice: number;

  minPrice: number;

  maxPrice: number;

  avgPrice: number;
  changePercentage: number;

  bazarPrices: BazarPrice[];

}

export interface Category {

  id: string;

  name: string;

  slug: string;

  emoji: string;

  icon?: string;

  description: string;

  
}
