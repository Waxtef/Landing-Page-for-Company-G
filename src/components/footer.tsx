import { Logo } from "./logo";
import { Mail, Phone, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-secondary">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo width={32} height={32} />
            <span className="text-xl font-bold">Company G</span>
          </Link>
          <p className="text-muted-foreground">
            helping everyone reach their full potential
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="#team" className="text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> company_g@email.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (234) 567-890</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container mx-auto flex max-w-screen-2xl flex-col items-center justify-between px-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Company G. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
