import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const clientIds = ["client-1", "client-2", "client-3", "client-4", "client-5"];

export function ClientsSection() {
  const clientLogos = clientIds
    .map(id => PlaceHolderImages.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section id="clients" className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            We've had the privilege of working with a diverse range of clients.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clientLogos.map((logo) => (
              <Image
                key={logo.id}
                src={logo.imageUrl}
                alt={logo.description}
                width={150}
                height={75}
                className="aspect-[2/1] object-contain"
                data-ai-hint={logo.imageHint}
              />
          ))}
        </div>
      </div>
    </section>
  );
}
