import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="font-headline text-5xl font-black tracking-tight md:text-7xl">
            Company G
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Crafting professional narratives with elegance and precision. We are a full-service digital agency dedicated to helping businesses of all sizes establish a powerful online presence and achieve their strategic goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
