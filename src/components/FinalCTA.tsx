import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/chNvGE2', '_blank');
  };

  return (
    <section id="oferta-final" className="py-12 md:py-20 px-4 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
          Transforme Sua Vida <span className="text-[hsl(var(--accent))]">Agora</span>
        </h2>
        
        <p className="text-base md:text-xl mb-6 md:mb-8 text-muted-foreground px-2">
          Energia, vitalidade e clareza mental como aos 25 anos.
        </p>
        
        <div className="mb-8 p-6 md:p-8 bg-secondary/50 backdrop-blur rounded-lg border border-border">
          <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            O que você leva:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left mb-6">
            {[
              "7 lições transformadoras",
              "Protocolos ancestrais",
              "O ingrediente secreto",
              "Acesso vitalício",
              "21 minutos por dia",
              "Garantia de 120 dias"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[hsl(var(--accent))] text-xl">✓</span>
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl font-bold text-[hsl(var(--accent))]">
            Investimento único. Resultados para a vida.
          </p>
        </div>
        
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 rounded-lg font-bold shadow-2xl transform transition hover:scale-105 mb-6"
        >
          Acesse o Desafio Agora
        </Button>
        
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm md:text-base">
          <svg className="w-5 h-5 text-[hsl(var(--accent))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Pagamento 100% seguro</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
