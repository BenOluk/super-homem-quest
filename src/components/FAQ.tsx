import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o desafio?",
      answer: "7 lições, uma por dia. Cada uma com práticas de 21 minutos. Resultados imediatos na energia e clareza mental."
    },
    {
      question: "Preciso de experiência prévia?",
      answer: "Não. Práticas simples e diretas para qualquer homem. Se você tem 21 minutos por dia, consegue fazer."
    },
    {
      question: "Quando verei resultados?",
      answer: "Muitos sentem diferença já no primeiro dia. A transformação completa acontece ao longo dos 7 dias."
    },
    {
      question: "O que é o 'ingrediente secreto'?",
      answer: "Uma prática que poucos conhecem e que mudou minha vida. Você descobre nos dias 6 e 7."
    },
    {
      question: "Preciso de equipamentos?",
      answer: "Não. Técnicas ancestrais que só precisam do seu corpo e 21 minutos."
    },
    {
      question: "Tenho acesso para sempre?",
      answer: "Sim! Acesso vitalício. Refaça quantas vezes quiser."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Perguntas <span className="text-[hsl(var(--accent))]">Frequentes</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-4 md:px-6 hover:border-[hsl(var(--accent))] transition-all"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-bold hover:text-[hsl(var(--accent))] hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4">
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
