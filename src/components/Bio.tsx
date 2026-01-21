import instructorImage from "@/assets/lucas-bueno.jpg";

const Bio = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Quem é o <span className="text-[hsl(var(--accent))]">Platão</span>
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          {/* Imagem */}
          <div className="w-full max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--accent))] to-transparent opacity-20 rounded-lg"></div>
              <img 
                src={instructorImage} 
                alt="Lucas Bueno treinando" 
                className="rounded-lg shadow-2xl w-full object-cover aspect-[3/4]" 
              />
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Lucas Bueno</h3>
            
            <p className="text-lg md:text-xl font-bold text-[hsl(var(--accent))] mb-6">
              A limitação me forçou a descobrir o que ninguém mais ensina.
            </p>
            
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              <p>
                Nasci com os dois pés tortos. Enquanto outras crianças corriam, eu mal conseguia andar.
              </p>
              
              <p>
                Isso me forçou a descobrir variáveis que pessoas "normais" nunca exploram — <span className="font-bold text-foreground">segredos de testosterona, dopamina e cortisol.</span>
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 my-8 max-w-md mx-auto">
              <div className="p-3 md:p-4 bg-[hsl(var(--stats-bg))] rounded-lg border border-[hsl(var(--accent))] text-center">
                <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--accent))]">240kg</p>
                <p className="text-xs md:text-sm text-muted-foreground">Terra</p>
              </div>
              
              <div className="p-3 md:p-4 bg-[hsl(var(--stats-bg))] rounded-lg border border-[hsl(var(--accent))] text-center">
                <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--accent))]">180kg</p>
                <p className="text-xs md:text-sm text-muted-foreground">Agachamento</p>
              </div>
              
              <div className="p-3 md:p-4 bg-[hsl(var(--stats-bg))] rounded-lg border border-[hsl(var(--accent))] text-center">
                <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--accent))]">170kg</p>
                <p className="text-xs md:text-sm text-muted-foreground">Supino</p>
              </div>
            </div>
            
            <p className="text-base md:text-lg font-bold mb-6">
              O mesmo protocolo que me transformou já mudou a vida de centenas de homens.
            </p>
            
            <a 
              href="#oferta-final" 
              className="inline-block w-full sm:w-auto bg-[hsl(var(--accent))] text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-[hsl(var(--accent))]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero Acessar o Desafio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
