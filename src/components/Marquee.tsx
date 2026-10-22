export default function Marquee() {
    const linha = (
      <div className="flex shrink-0 items-center">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="flex items-center">
            <span className="text-5xl md:text-7xl font-extrabold text-ink-deep px-6 tracking-tight">
              VICENZA
            </span>
            <span className="text-brand text-3xl">◆</span>
          </span>
        ))}
      </div>
    );
  
    return (
      <div className="overflow-hidden bg-sand py-6" aria-hidden="true">
        <div className="marquee-track">
          {linha}
          {linha}
        </div>
      </div>
    );
  }