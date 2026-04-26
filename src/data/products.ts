export type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  badge?: "Coming Soon" | "Limited";
};

export const products: Product[] = [
  {
    id: "hoodie-black",
    name: "KARL Hoodie — Black",
    price: "Coming soon",
    imageUrl: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
    badge: "Coming Soon",
  },
  {
    id: "tee-chrome",
    name: "KARL Tee — Chrome",
    price: "Coming soon",
    imageUrl: "https://images.unsplash.com/photo-1520975682071-a0a24945a890?auto=format&fit=crop&w=1200&q=80",
    badge: "Coming Soon",
  },
  {
    id: "cap-night",
    name: "KARL Cap — Night",
    price: "Coming soon",
    imageUrl: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80",
    badge: "Coming Soon",
  },
];
