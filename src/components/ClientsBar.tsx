import { motion } from "framer-motion";
import clientTiptop from "@/assets/client-tiptop.png";
import clientGanimTovim from "@/assets/client-ganim-tovim.jpg";

type Client = {
  name: string;
  instagram: string;
  logo?: string;
};

const clients: Client[] = [
  { name: "טיפטוף", instagram: "https://www.instagram.com/tiftuf.gardening.center/", logo: clientTiptop },
  { name: "Client 2", instagram: "https://instagram.com/" },
  { name: "Client 3", instagram: "https://instagram.com/" },
  { name: "Client 4", instagram: "https://instagram.com/" },
  { name: "Client 5", instagram: "https://instagram.com/" },
  { name: "Client 6", instagram: "https://instagram.com/" },
  { name: "Client 7", instagram: "https://instagram.com/" },
  { name: "Client 8", instagram: "https://instagram.com/" },
];

const ClientLogo = ({ client }: { client: Client }) => (
  <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-muted border border-border flex items-center justify-center shrink-0 p-3">
    {client.logo ? (
      <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
    ) : (
      <span className="text-xs text-muted-foreground font-medium">{client.name}</span>
    )}
  </div>
);

const ClientsBar = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container mb-8">
        <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center">
          הלקוחות שלנו
        </h3>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {doubled.map((client, i) => (
            <a
              key={i}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all duration-500 ease-out shrink-0"
            >
              <ClientLogo client={client} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsBar;
