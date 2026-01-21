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
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-[hsl(var(--accent))] text-center mb-4">
          O Protocolo
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 tracking-tight">
          7 dias. 21 minutos.
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
          Cada lição constrói sobre a anterior. O resultado: independência energética.
        </p>
        
        <Accordion type="single" collapsible className="space-y-3">
          {days.map((day) => (
            <AccordionItem 
              key={day.day} 
              value={`day-${day.day}`}
              className="bg-card border border-border rounded-2xl px-6 hover:border-[hsl(var(--accent)/0.5)] transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-sm font-semibold text-white">
                    {day.day}
                  </div>
                  <span className="text-base font-medium">{day.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-14">
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
