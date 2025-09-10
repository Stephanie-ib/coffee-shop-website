import type { Product } from "../types";

export const products: Product[] = [
  { id: 1, name: "Ethiopian Arabica", category: "coffee", price: 12.99, description: "Rich, fruity notes with wine-like acidity", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop", rating: 4.8 },
  { id: 2, name: "Belgian Dark Roast", category: "coffee", price: 14.99, description: "Full-bodied with chocolate undertones", image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&h=200&fit=crop", rating: 4.9 },
  { id: 3, name: "Vanilla Latte", category: "beverages", price: 5.99, description: "Smooth espresso with vanilla and steamed milk", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop", rating: 4.7 },
  { id: 4, name: "Croissant", category: "pastries", price: 3.99, description: "Buttery, flaky French pastry", image: "https://images.unsplash.com/photo-1710220988376-16dbd51fd1de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 4.6 },
  { id: 5, name: "Cappuccino", category: "beverages", price: 4.99, description: "Perfect balance of espresso, steamed milk, and foam", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop", rating: 4.8 },
  { id: 6, name: "Chocolate Muffin", category: "pastries", price: 4.49, description: "Rich chocolate chip muffin", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop", rating: 4.5 },
  { id: 7, name: "Cold Brew", category: "beverages", price: 4.99, description: "Smooth, less acidic coffee brewed cold", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop", rating: 4.7 },
  { id: 8, name: "Colombian Single Origin", category: "coffee", price: 13.99, description: "Bright, clean taste with caramel sweetness", image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&h=200&fit=crop", rating: 4.9 }
];

export const locations = [
  { name: "Downtown Brussels", address: "Grand Place 1, 1000 Brussels", phone: "+32 2 123 4567", hours: "6:00 AM - 10:00 PM" },
  { name: "European Quarter", address: "Rue de la Loi 200, 1049 Brussels", phone: "+32 2 234 5678", hours: "7:00 AM - 9:00 PM" },
  { name: "Ixelles District", address: "Chaussée d'Ixelles 100, 1050 Ixelles", phone: "+32 2 345 6789", hours: "6:30 AM - 11:00 PM" }
];
