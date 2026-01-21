import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.png";

const Hero = () => {
  const handleCTAClick = () => {
    document.getElementById('oferta-final')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div className="relative w-full max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-16 md:py-24">
        
        {/* Conteúdo de texto */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Protocolo de 7 dias
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-tight text-foreground">
            Pare de depender de <span className="text-[hsl(var(--accent))]">cafeína</span> para funcionar.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Energia real, foco absoluto e clareza mental — sem energéticos, sem crashes, sem dependência química.
          </p>
          
          {/* Destaques principais */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
              <span>21 minutos por dia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
              <span>Resultados em 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
              <span>Base científica</span>
            </div>
          </div>
          
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-base px-8 py-6 rounded-full font-medium shadow-lg shadow-[hsl(var(--accent)/0.25)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(var(--accent)/0.3)]"
          >
            Começar o Protocolo
          </Button>
          
          <p className="mt-4 text-xs text-muted-foreground">
            Garantia incondicional de 120 dias
          </p>
        </div>
        
        {/* Imagem */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--accent)/0.1)] to-transparent blur-3xl rounded-full scale-110" />
            <img 
              src={heroAthlete} 
              alt="Alta performance e energia" 
              className="relative w-full max-w-sm lg:max-w-md h-auto object-cover rounded-3xl shadow-2xl shadow-black/10"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
