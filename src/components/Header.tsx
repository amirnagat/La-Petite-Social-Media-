import logo from "@/assets/logo.jpeg";

const Header = () => (
  <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <img src={logo} alt="La'petite Social Media" className="h-10 object-contain" />
      <a
        href="#contact"
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        צרו קשר
      </a>
    </div>
  </header>
);

export default Header;
