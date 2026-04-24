export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured?: boolean;
}

export const CATEGORIES = ["Electronics", "Fashion", "Home & Tech", "Accessories"];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Noise-Cancelling Headphones Pro",
    description: "Experience silence with our industry-leading noise cancellation technology. Premium sound quality and comfortable fit for all-day listening.",
    price: 299000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    stock: 45,
    featured: true,
  },
  {
    id: "2",
    name: "Minimalist Smartwatch Gen 4",
    description: "Track your fitness, receive notifications, and look stylish with this sleek smart watch. Battery lasts up to 7 days.",
    price: 199500,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    stock: 20,
    featured: true,
  },
  {
    id: "3",
    name: "Classic Leather Backpack",
    description: "Durable and stylish. Perfect for daily commutes or weekend getaways. Features a padded laptop sleeve.",
    price: 89000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    stock: 15,
    featured: true,
  },
  {
    id: "4",
    name: "Mechanical Keyboard X",
    description: "Tactile feedback, RGB backlighting, and a compact design. The ultimate tool for developers and gamers.",
    price: 149000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop",
    stock: 5,
    featured: true,
  },
  {
    id: "5",
    name: "Ceramic Coffee Pour-Over",
    description: "Brew the perfect cup of coffee every morning with this elegant ceramic pour-over set.",
    price: 35000,
    category: "Home & Tech",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    stock: 100,
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Fast-charge your devices without the clutter of cables. Sleek aluminum finish.",
    price: 45000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=800&auto=format&fit=crop",
    stock: 30,
  },
];
