const Guarantee = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--accent)/0.1)] mb-8">
          <svg 
            className="w-8 h-8 text-[hsl(var(--accent))]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            />
          </svg>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
          Risco zero. Garantia de 120 dias.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Se você não sentir diferença real na sua energia e foco, devolvemos 100% do valor. Sem perguntas, sem burocracia.
        </p>
        
        <div className="p-6 bg-card rounded-2xl border border-border inline-block">
          <p className="text-sm text-muted-foreground mb-2">
            Para solicitar reembolso:
          </p>
          <a 
            href="mailto:eulucasplatao@gmail.com" 
            className="text-[hsl(var(--accent))] hover:underline font-medium"
          >
            eulucasplatao@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
