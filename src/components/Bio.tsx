import instructorImage from "@/assets/lucas-bueno.jpg";

const Bio = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[hsl(var(--accent)/0.05)] blur-[120px]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[hsl(var(--accent))] to-transparent opacity-20 rounded-xl blur-sm" />
              <img 
                src={instructorImage} 
                alt="Lucas Bueno" 
                className="relative rounded-xl w-full max-w-sm mx-auto object-cover aspect-[3/4] border border-[hsl(var(--accent)/0.3)]" 
              />
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="order-1 md:order-2">
            <span className="inline-block px-4 py-1.5 bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] rounded text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))] mb-4">
              Quem criou
            </span>
            
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
              Lucas Bueno
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nasci com limitações que me forçaram a estudar o corpo humano de forma <span className="text-foreground font-bold">obsessiva.</span>
              </p>
              
              <p>
                Descobri que a maioria opera com 30% da capacidade real — não por falta de potencial, mas por <span className="text-[hsl(var(--accent))] font-bold">desregulação bioquímica.</span>
              </p>
              
              <p>
                Este protocolo é o resultado de 15 anos testando o que funciona.
              </p>
            </div>
            
            {/* Stats agressivos */}
            <div className="flex gap-6 mt-8">
              <div className="px-4 py-3 bg-secondary rounded border border-border">
                <p className="text-2xl font-black text-[hsl(var(--accent))]">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-bold">Anos</p>
              </div>
              <div className="px-4 py-3 bg-secondary rounded border border-border">
                <p className="text-2xl font-black text-[hsl(var(--accent))]">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-bold">Pessoas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
