import instructorImage from "@/assets/lucas-bueno.jpg";

const Bio = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 md:order-1">
            <img 
              src={instructorImage} 
              alt="Lucas Bueno" 
              className="rounded-3xl shadow-xl w-full max-w-sm mx-auto object-cover aspect-[3/4]" 
            />
          </div>
          
          {/* Conteúdo */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--accent))] mb-4">
              Quem criou
            </p>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Lucas Bueno
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Limitações físicas desde o nascimento me forçaram a estudar o corpo humano de forma obsessiva.
              </p>
              
              <p>
                Descobri que a maioria das pessoas opera com 30% da sua capacidade energética real — não por falta de potencial, mas por <span className="text-foreground font-medium">desregulação bioquímica.</span>
              </p>
              
              <p>
                Este protocolo é o resultado de 15 anos testando o que funciona — em mim e em centenas de pessoas.
              </p>
            </div>
            
            {/* Stats minimalistas */}
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-2xl font-semibold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Anos de pesquisa</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Pessoas transformadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
