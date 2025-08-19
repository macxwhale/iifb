
const SB8J1SponsorBar = () => {
  return (
    <div className="bg-muted/30 py-8 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-muted-foreground font-medium">Sponsored by</p>
          <a 
            href="https://iifb-indigenous.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="/src/assets/iifb-logo.png" 
              alt="International Indigenous Forum on Biodiversity (IIFB)"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SB8J1SponsorBar;
