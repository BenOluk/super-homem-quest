import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/chNvGE2', '_blank');
  };

  return (
    <section id="oferta-final" className="py-20 md:py-32 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--accent))] mb-4">
          Acesso imediato
        </p>
        
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
          Sua energia não deveria depender de uma lata.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Foco real. Clareza mental. Energia sustentável. Tudo o que você precisa está no seu próprio corpo.
        </p>
        
        <div className="mb-10 p-8 bg-card rounded-3xl border border-border">
          <div className="grid grid-cols-2 gap-4 text-left mb-8">
            {[
              "7 lições práticas",
              "Protocolos baseados em ciência",
              "21 minutos por dia",
              "Acesso vitalício",
              "Suporte por email",
              "Garantia de 120 dias"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
              Investimento único
            </p>
            <p className="text-2xl font-semibold text-foreground">
              Resultados permanentes
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-lg px-12 py-7 rounded-full font-medium shadow-lg shadow-[hsl(var(--accent)/0.25)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.3)]"
        >
          Começar Agora
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Pagamento seguro e criptografado</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
