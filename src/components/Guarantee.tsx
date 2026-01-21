const Guarantee = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block p-3 md:p-4 bg-[hsl(var(--accent))] rounded-full mb-6 md:mb-8">
          <svg 
            className="w-10 h-10 md:w-16 md:h-16 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            />
          </svg>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 px-2">
          Garantia de <span className="text-[hsl(var(--accent))]">120 Dias</span>
        </h2>
        
        <div className="p-6 md:p-8 bg-card rounded-lg border-2 border-[hsl(var(--accent))]">
          <p className="text-base md:text-xl leading-relaxed mb-4 md:mb-6">
            Se em 120 dias você não sentir a transformação, devolvo 100% do seu investimento.
          </p>
          
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Sem perguntas. Sem burocracia.
          </p>
          
          <div className="p-4 md:p-6 bg-secondary rounded-lg">
            <p className="text-sm md:text-base font-bold mb-2">
              Para reembolso:
            </p>
            <a 
              href="mailto:eulucasplatao@gmail.com" 
              className="text-base md:text-lg text-[hsl(var(--accent))] hover:underline font-bold break-all"
            >
              eulucasplatao@gmail.com
            </a>
          </div>
          
          <p className="text-sm md:text-base mt-6">
            Eu assumo o risco. Você só tem a ganhar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
