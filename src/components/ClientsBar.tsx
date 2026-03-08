import { useState } from "react";
// CSS animation-based marquee
import clientTiptop from "@/assets/client-tiptop-new.jpeg";
import clientGanimTovim from "@/assets/client-ganim-tovim-new.jpg";

type Client = {
  name: string;
  instagram: string;
  logo?: string;
};

const clients: Client[] = [
{ name: "טיפטוף", instagram: "https://www.instagram.com/tiftuf.gardening.center/", logo: clientTiptop },
{ name: "גנים טובים", instagram: "https://instagram.com/", logo: clientGanimTovim }];


const ClientLogo = ({ client }: {client: Client;}) =>
<div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-muted border-border shrink-0 p-3 px-[2px] py-px shadow-2xl border-0 flex items-center justify-center">
    {client.logo ?
  <img src={client.logo} alt={client.name} className="w-full h-full object-contain" /> :

  <span className="text-xs text-muted-foreground font-medium">{client.name}</span>
  }
  </div>;


const ClientsBar = () => {
  const doubled = clients;
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mb-8">
        <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center">
          הלקוחות שלנו
        </h3>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {doubled.map((client, i) =>
          <a
            key={i}
            href={client.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-all duration-500 ease-out shrink-0">
              <ClientLogo client={client} />
            </a>
          )}
        </div>
      </div>
    </section>);
};

export default ClientsBar;