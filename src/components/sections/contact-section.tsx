import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ContactSection() {
  const address = "New York City, Avenger Tower,Floor 26";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const companyImage = PlaceHolderImages.find(p => p.id === "hero-image");

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-screen-2xl items-start gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Contact Us
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Let's Grow Together
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Have a project in mind or just want to say hello? We alwaysare listening.
          </p>
          <div className="space-y-4 rounded-lg border bg-card p-6">
            <h3 className="text-2xl font-bold">Our Office</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{address}</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:company_g@email.com" className="hover:text-primary">company_g@email.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <a href="mailto:copmany_g@email.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4"/>
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex h-full min-h-[400px] w-full items-center justify-center overflow-hidden rounded-xl">
          {companyImage && (
            <Image
              src={companyImage.imageUrl}
              alt={companyImage.description}
              fill
              className="object-cover"
              data-ai-hint={companyImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative flex flex-col items-center justify-center space-y-4 text-center text-white">
            <h3 className="text-3xl font-bold">Find Us</h3>
            <p className="max-w-xs text-white/90">
              Visit our office (Here a Photo of the office).
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                See Location
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
