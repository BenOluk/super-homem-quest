import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/chNvGE2', '_blank');
  };

  return (
    <section id="oferta-final" className="py-20 md:py-32 px-6 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--accent)/0.1)] via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--accent)/0.1)] blur-[150px] rounded-full" />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] rounded text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))] mb-6">
          Acesso imediato
        </span>
        
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Sua energia não deveria depender de <span className="text-[hsl(var(--accent))]">uma lata.</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Foco real. Clareza mental. Energia brutal. <span className="text-foreground font-semibold">Tudo já está no seu corpo.</span>
        </p>
        
        <div className="mb-10 p-8 bg-card rounded-xl border border-[hsl(var(--accent)/0.3)]">
          <div className="grid grid-cols-2 gap-3 text-left mb-8">
            {[
              "7 lições práticas",
              "Base científica",
              "21 min/dia",
              "Acesso vitalício",
              "Suporte direto",
              "Garantia 120 dias"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-3 py-2 bg-secondary rounded">
                <span className="text-[hsl(var(--accent))] font-bold">✓</span>
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">
              Investimento único
            </p>
            <p className="text-2xl font-black text-foreground uppercase">
              Resultados permanentes
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-xl px-14 py-8 rounded font-bold uppercase tracking-wide shadow-lg shadow-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.5)] hover:scale-[1.02]"
        >
          Quero o Protocolo →
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm">
          <svg className="w-4 h-4 text-[hsl(var(--accent))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Pagamento 100% seguro</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
