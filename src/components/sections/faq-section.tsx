import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of digital services, including brand strategy, web development, digital marketing, SEO optimization, data analytics, and cyber security. Our goal is to provide everything your business needs to succeed online."
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline for a project varies depending on its scope and complexity. A simple website might take 4-6 weeks, while a full branding and marketing campaign could take several months. We'll provide a detailed timeline after our initial consultation."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is tailored to the specific needs of each client. We offer project-based pricing as well as monthly retainers. Contact us for a custom quote based on your requirements."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love working with innovative startups to build their brand from the ground up. We also partner with established enterprises to help them innovate and stay ahead of the curve."
  },
  {
    question: "What makes Company G?",
    answer: "Our key differentiators are our partnership approach, our passion for digital excellence, and our commitment to delivering measurable results. We don't just complete projects; we build long-term relationships to help our clients achieve sustained growth."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
            FAQ
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
