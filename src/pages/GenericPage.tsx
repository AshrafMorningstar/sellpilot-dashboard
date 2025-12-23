
interface PageProps {
    title: string;
}

export default function GenericPage({ title }: PageProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
        <div className="min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-border/60 rounded-2xl bg-secondary/10">
            <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚧</span>
            </div>
            <h3 className="text-lg font-medium text-foreground">Under Construction</h3>
            <p className="text-muted-foreground max-w-sm text-center mt-2">
                The {title} module is currently being built. Check back soon for updates.
            </p>
        </div>
    </div>
  )
}
