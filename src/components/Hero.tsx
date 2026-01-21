import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.png";

const Hero = () => {
  const handleCTAClick = () => {
    document.getElementById('oferta-final')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Aggressive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.15)] via-transparent to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--accent)/0.08)] blur-[120px]" />
      
      <div className="relative w-full max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 py-16 md:py-20">
        
        {/* Conteúdo de texto */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))]">Protocolo de 7 dias</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[0.95] tracking-tight text-foreground uppercase">
            Chega de depender de <span className="text-[hsl(var(--accent))]">lixo químico</span> pra funcionar.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Energia brutal. Foco inabalável. Clareza absoluta. <span className="text-foreground font-semibold">Sem energético. Sem café. Sem muleta.</span>
          </p>
          
          {/* Destaques principais */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded border border-border">
              <span className="text-[hsl(var(--accent))] font-bold">21</span>
              <span className="text-muted-foreground">min/dia</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded border border-border">
              <span className="text-[hsl(var(--accent))] font-bold">7</span>
              <span className="text-muted-foreground">dias</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded border border-border">
              <span className="text-[hsl(var(--accent))] font-bold">100%</span>
              <span className="text-muted-foreground">garantido</span>
            </div>
          </div>
          
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-lg px-10 py-7 rounded font-bold uppercase tracking-wide shadow-lg shadow-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.5)] hover:scale-[1.02]"
          >
            Quero o Protocolo →
          </Button>
          
          <p className="mt-4 text-xs text-muted-foreground">
            Garantia incondicional de 120 dias. Sem perguntas.
          </p>
        </div>
        
        {/* Imagem */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--accent)/0.3)] to-transparent blur-3xl rounded-full scale-125" />
            <div className="absolute -inset-1 bg-gradient-to-tr from-[hsl(var(--accent))] to-transparent opacity-20 rounded-2xl" />
            <img 
              src={heroAthlete} 
              alt="Alta performance e energia" 
              className="relative w-full max-w-sm lg:max-w-md h-auto object-cover rounded-xl border border-[hsl(var(--accent)/0.3)]"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
