import { Github, ExternalLink } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 border-t border-border">
    <div className="section-container text-center">
      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-6">
        <span className="text-primary-foreground font-heading font-bold text-2xl">O</span>
      </div>

      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Oma Netz Kassel</h3>
      <p className="text-sm text-muted-foreground mb-1">
        Entwickelt von: <span className="font-medium text-foreground">Valeriia Kovalenko &amp; Yevhenii Riabokon</span>
      </p>
      <p className="text-sm text-muted-foreground mb-1">
        Abschlussprojekt DCI Full-Stack Bootcamp 2026
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        Kassel, Deutschland
      </p>


      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub Repository
        </a>
        <a
          href="https://oma-netz-kassel.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">
          Lizenz: MIT
        </p>
        <p className="text-xs text-muted-foreground font-medium">
          Ein nicht-kommerzielles Studentenprojekt
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
