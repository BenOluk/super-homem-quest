import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o protocolo?",
      answer: "São 7 lições sequenciais, uma por dia. Cada lição inclui práticas de 21 minutos que você pode fazer em qualquer horário. Tudo é direto ao ponto."
    },
    {
      question: "Preciso parar de tomar café?",
      answer: "Não obrigatoriamente. O objetivo é eliminar a dependência, não o consumo eventual. Você aprende a ter energia sem precisar de cafeína."
    },
    {
      question: "Quanto tempo até ver resultados?",
      answer: "A maioria percebe diferença já nos primeiros 3 dias. A transformação completa acontece ao longo das 7 lições e se consolida nas semanas seguintes."
    },
    {
      question: "É baseado em ciência?",
      answer: "Sim. O protocolo é fundamentado em neurociência, fisiologia do estresse e regulação do sistema nervoso autônomo. Nada de misticismo."
    },
    {
      question: "Funciona para quem trabalha muito?",
      answer: "Foi criado exatamente para isso. 21 minutos é menos tempo do que você gasta procurando energia em energéticos e café."
    },
    {
      question: "O acesso é permanente?",
      answer: "Sim. Uma vez que você entra, tem acesso vitalício a todo o conteúdo e atualizações futuras."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[hsl(var(--accent)/0.15)] border border-[hsl(var(--accent)/0.3)] rounded text-xs font-bold uppercase tracking-widest text-[hsl(var(--accent))] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Perguntas frequentes
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded px-5 hover:border-[hsl(var(--accent))] transition-all duration-200 group"
            >
              <AccordionTrigger className="text-left text-sm font-bold uppercase tracking-wide hover:text-[hsl(var(--accent))] hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
