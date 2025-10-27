import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  { name: "Alice Kinyong", role: "Legal Manager", imageId: "team-1" },
  { name: "Bob Williams", role: "CEO & Founder", imageId: "team-2" },
  { name: "Charlie Brown", role: "Lead Designer", imageId: "team-3" },
  { name: "Diana Miller", role: "Marketing Director", imageId: "team-4" },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">
            Our Team
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            The Minds Behind the Magic
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the dedicated professionals who bring passion and expertise to every project.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Card key={member.name} className="overflow-hidden text-center">
                <CardHeader className="p-0">
                  {memberImage && (
                    <div className="overflow-hidden">
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        width={400}
                        height={400}
                        className="aspect-square w-full object-cover"
                        data-ai-hint={memberImage.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-2 p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="font-semibold text-primary">{member.role}</p>
                  <div className="flex justify-center space-x-4 pt-2">
                    <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
