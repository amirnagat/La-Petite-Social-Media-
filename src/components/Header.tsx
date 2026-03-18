const Header = () =>
<header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <div className="flex flex-col items-start leading-none">
        <span className="text-xl font-black tracking-tight">La' petite</span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wide -ml-1">​</span>
      </div>
      <a
        href="https://www.instagram.com/lapetite_social/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        Instagram
      </a>
    </div>
  </header>;


export default Header;