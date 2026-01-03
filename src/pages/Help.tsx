/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, HelpCircle, FileText, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    { question: "How do I upgrade my plan?", answer: "You can upgrade your plan at any time from the Settings > Billing page. We offer pro-rated refunds for mid-billing cycle upgrades." },
    { question: "Can I manage multiple stores?", answer: "Yes! Use the store switcher in the top left corner to manage up to 10 distinct stores under one account." },
    { question: "How does the API integration work?", answer: "Our efficient API allows you to sync inventory, orders, and customer data in real-time. Check our Developer Docs for implementation guides." },
    { question: "Where can I find my invoices?", answer: "Invoices are automatically emailed to the account owner at the end of each billing cycle and are also available in Settings > Billing." },
];

export default function Help() {
  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
        <div className="relative text-center py-12 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-background border border-primary/10 overflow-hidden mb-8">
             <div className="relative z-10 space-y-4 px-4">
                 <h1 className="text-4xl font-bold tracking-tight text-foreground">How can we help?</h1>
                 <p className="text-lg text-muted-foreground max-w-xl mx-auto">Search our knowledge base or get in touch with our award-winning support team.</p>
                 
                 <div className="max-w-md mx-auto relative mt-6">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                     <input 
                        type="text" 
                        placeholder="Search for answers..."
                        className="w-full pl-12 pr-4 py-3 rounded-2xl border border-primary/20 bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 outline-none shadow-xl shadow-primary/5 transition-all text-sm font-medium" 
                     />
                 </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <SupportOption icon={FileText} title="Documentation" description="Detailed guides and API references." />
            <SupportOption icon={MessageCircle} title="Live Chat" description="Talk to a support agent now." highlight />
            <SupportOption icon={Phone} title="Phone Support" description="+1 (888) 123-4567" />
        </div>

        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-4">
                {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </div>
  )
}

function SupportOption({ icon: Icon, title, description, highlight = false }: { icon: any, title: string, description: string, highlight?: boolean }) {
    return (
        <Card hoverEffect className={`text-center group cursor-pointer ${highlight ? 'border-primary/50 shadow-lg shadow-primary/5' : ''}`}>
            <CardContent className="pt-6 pb-6">
                <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <Icon size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Card className="overflow-hidden border-border/60">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-secondary/30 transition-colors"
            >
                {question}
                <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    )
}
