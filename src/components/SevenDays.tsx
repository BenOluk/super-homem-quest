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
      title: "Reset Neural",
      description: "Elimine a névoa mental. Técnicas para restaurar sua capacidade de concentração profunda e pensamento claro."
    },
    {
      day: 2,
      title: "Bioquímica do Foco",
      description: "Entenda como dopamina, cortisol e adrenalina funcionam — e como otimizá-los sem substâncias externas."
    },
    {
      day: 3,
      title: "Energia Sustentável",
      description: "O sistema nervoso autônomo é a chave. Aprenda a ativá-lo para energia constante durante todo o dia."
    },
    {
      day: 4,
      title: "Fim da Dependência",
      description: "Protocolos para eliminar a necessidade de cafeína e energéticos. Seu corpo já produz o que você precisa."
    },
    {
      day: 5,
      title: "Performance Cognitiva",
      description: "Técnicas de elite para tomada de decisão rápida, memória de trabalho e processamento de informação."
    },
    {
      day: 6,
      title: "O Catalisador",
      description: "A prática única que multiplica todos os resultados anteriores. Simples, mas transformadora."
    },
    {
      day: 7,
      title: "Sistema Completo",
      description: "Integração de tudo em um protocolo diário de 21 minutos. Resultados permanentes, não temporários."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-[hsl(var(--accent)/0.05)] blur-[100px]" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] rounded text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))] mb-4">
            O Protocolo
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            7 dias. <span className="text-[hsl(var(--accent))]">21 minutos.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Cada lição é um upgrade. O resultado: independência total.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-2">
          {days.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              className="bg-card border border-border rounded px-5 hover:border-[hsl(var(--accent))] transition-all duration-200 group"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-[hsl(var(--accent))] flex items-center justify-center text-sm font-black text-white">
                    {String(day.day).padStart(2, '0')}
                  </div>
                  <span className="text-base font-bold uppercase tracking-wide group-hover:text-[hsl(var(--accent))] transition-colors">{day.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pl-14">
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
