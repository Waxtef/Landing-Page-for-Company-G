import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Megaphone, PenTool, Code, ShieldCheck, Search } from "lucide-react";

const services = [
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Brand Strategy",
    description: "We define and build powerful brand identities that resonate with your target audience and stand out in the market.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Crafting bespoke, high-performance websites that deliver exceptional user experiences and drive conversions.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: "Digital Marketing",
    description: "Our data-driven marketing campaigns are designed to increase your visibility, engagement, and ROI.",
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and attract organic traffic with our expert SEO strategies.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Data Analytics",
    description: "Unlock actionable insights from your data to make smarter business decisions and fuel growth.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Cyber Security",
    description: "Protect your digital assets with our comprehensive security solutions and expert guidance.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">
            Our Services
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            What We Offer
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A comprehensive suite of digital services designed to elevate your business from every angle.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
