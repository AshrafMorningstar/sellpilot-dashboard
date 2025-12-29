import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star, Plus } from "lucide-react";

const products = [
    { name: "Neon Hoodie", price: "$59.00", rating: 4.8, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80" },
    { name: "Urban Cap", price: "$24.00", rating: 4.5, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" },
    { name: "Pro Backpack", price: "$89.99", rating: 4.9, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" },
    { name: "Sneaker X", price: "$120.00", rating: 4.7, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
    { name: "Classic Tee", price: "$29.50", rating: 4.3, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
    { name: "Sport Watch", price: "$199.00", rating: 5.0, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80" },
];

export default function Store() {
  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
             <h1 className="text-2xl font-bold tracking-tight text-foreground">Store</h1>
             <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                 <Plus size={16} /> Add Product
             </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {products.map((product, i) => (
                 <Card key={i} hoverEffect className="group cursor-pointer">
                     <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                         <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                             <Star size={12} className="fill-amber-400 text-amber-400" /> {product.rating}
                         </div>
                     </div>
                     <CardContent className="p-5">
                         <div className="flex justify-between items-start">
                             <div>
                                 <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                                 <p className="text-muted-foreground text-sm mt-1">Fashion</p>
                             </div>
                             <span className="font-bold text-lg">{product.price}</span>
                         </div>
                         <button className="w-full mt-4 py-2 rounded-lg border border-border bg-transparent hover:bg-secondary text-sm font-medium transition-colors flex items-center justify-center gap-2">
                             <ShoppingBag size={16} /> View Details
                         </button>
                     </CardContent>
                 </Card>
             ))}
        </div>
    </div>
  )
}
