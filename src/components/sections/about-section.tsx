import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === "about-image");

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-screen-2xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            About Us
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Digital Excellence
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Company G has been at the forefront of digital innovation, helping businesses build strong online presences. We believe in partnership, passion, and perfection.
          </p>
          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="text-muted-foreground">To empower businesses through transformative digital solutions that drive growth and create lasting value.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold">Our Vision</h3>
                <p className="text-muted-foreground">To be the leading digital partner for companies aiming for market leadership and innovation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={800}
              height={600}
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
