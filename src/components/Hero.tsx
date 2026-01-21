import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.png";

const Hero = () => {
  const handleCTAClick = () => {
    document.getElementById('oferta-final')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 py-12 md:py-16">
        
        {/* Conteúdo de texto */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Desafio do <span className="text-[hsl(var(--accent))]">Super-Homem</span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl mb-5 font-semibold text-slate-50">
            Tenha vitalidade, energia e libido como se tivesse 25 anos
          </p>
          
          {/* Destaques principais - 7 dias e 21 minutos */}
          <div className="flex flex-row justify-center lg:justify-start gap-3 mb-5">
            <div className="bg-[hsl(var(--accent))] px-4 py-2 md:px-6 md:py-3 rounded-lg">
              <span className="text-xl md:text-2xl font-bold text-white">7 DIAS</span>
            </div>
            <div className="bg-secondary/80 border border-[hsl(var(--accent))] px-4 py-2 md:px-6 md:py-3 rounded-lg">
              <span className="text-xl md:text-2xl font-bold text-white">21 MIN/DIA</span>
            </div>
          </div>
          
          <p className="text-sm md:text-base mb-5 text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Para homens ocupados que querem acessar a energia da juventude com <span className="text-[hsl(var(--accent))] font-semibold">práticas ancestrais</span>
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span className="text-[hsl(var(--accent))]">✓</span>
              <span>Sem métodos complexos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[hsl(var(--accent))]">✓</span>
              <span>Resultados imediatos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[hsl(var(--accent))]">✓</span>
              <span>Acesso vitalício</span>
            </div>
          </div>
          
          <Button 
            onClick={handleCTAClick} 
            size="lg" 
            className="w-full sm:w-auto bg-[hsl(var(--cta-primary))] hover:bg-[hsl(var(--cta-primary-hover))] text-white text-base md:text-lg px-8 py-5 md:py-6 rounded-lg font-bold shadow-2xl transform transition hover:scale-105"
          >
            Ingresse Agora no Desafio
          </Button>
        </div>
        
        {/* Imagem do atleta */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[hsl(var(--accent)/0.3)] blur-3xl rounded-full scale-75" />
            <img 
              src={heroAthlete} 
              alt="Atleta demonstrando força e vitalidade" 
              className="relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
