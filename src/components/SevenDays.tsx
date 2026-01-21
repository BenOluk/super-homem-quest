import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SevenDays = () => {
  const days = [
    {
      day: 1,
      title: "Mente Heróica",
      description: "Descubra como ordenar sua mente e eliminar pensamentos negativos. Cultive foco, atenção e clareza mental."
    },
    {
      day: 2,
      title: "O Segredo da Testosterona",
      description: "7 técnicas ancestrais para otimizar testosterona naturalmente. Acorde com foco, energia e motivação."
    },
    {
      day: 3,
      title: "Estoicismo Moderno",
      description: "Aprenda COMO pensar, não o que pensar. Uma atualização do seu sistema operacional mental."
    },
    {
      day: 4,
      title: "Dopamina sob Controle",
      description: "Os mecanismos para se sentir bem de verdade, sem vícios que estão te destruindo."
    },
    {
      day: 5,
      title: "Modo Predador",
      description: "O passo a passo para tomar decisões e sair de onde você está para onde quer chegar."
    },
    {
      day: 6,
      title: "O Ingrediente Secreto",
      description: "O segredo por trás da energia infinita que me permitiu levantar 240kg no terra."
    },
    {
      day: 7,
      title: "Integração Total",
      description: "Protocolo completo para manter energia, testosterona e clareza mental pelo resto da vida."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-2">
          <span className="text-[hsl(var(--accent))]">7 Lições</span> do Desafio
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {days.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              className="bg-card border border-border rounded-lg px-4 hover:border-[hsl(var(--accent))] transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-lg md:text-xl font-bold text-white">
                    {day.day}
                  </div>
                  <span className="text-base md:text-lg font-bold">{day.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 pl-14 md:pl-16">
                {day.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SevenDays;
