import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { PenLine, Map, MessageCircle, Star, Gift, Bot, Search, BarChart3, Trophy, Target, UserCog, Bell, ShieldCheck, TrendingUp, Ban, Package } from "lucide-react";

const tabs = [
  {
    label: "Senioren",
    emoji: "👵",
    features: [
      { icon: PenLine, title: "Hilfegesuche erstellen", desc: "7 Kategorien wie Einkauf, Technik, Begleitung" },
      { icon: Map, title: "Interaktive Karte", desc: "Helfer und Anfragen in der Nähe finden" },
      { icon: MessageCircle, title: "Real-Time Chat", desc: "Direkte Kommunikation mit Helfern" },
      { icon: Star, title: "Helfer bewerten", desc: "Bewertungssystem für Vertrauen" },
      { icon: Gift, title: "Punkte & Belohnungen", desc: "Gamification-System für Engagement" },
      { icon: Bot, title: "KI-Assistent", desc: "Kontextsensitive Hilfe via Groq" },
    ],
  },
  {
    label: "Helfer",
    emoji: "🙋",
    description: "Studenten, Arbeitslose, arbeitende Freiwillige (ab 16 Jahren) – ehrenamtliche Freiwillige, keine Angestellten",
    features: [
      { icon: ShieldCheck, title: "Admin-Verifizierung", desc: "Werden vom Administrator verifiziert" },
      { icon: Search, title: "Hilfe bei Alltag", desc: "Einkäufen, Spaziergängen, Arztbesuchen" },
      { icon: Target, title: "Punkte sammeln", desc: "Sammeln Punkte für jede Hilfe (KEIN GELD!)" },
      { icon: Trophy, title: "Reputation aufbauen", desc: "Reputation in der Community aufbauen" },
      { icon: Gift, title: "Belohnungen tauschen", desc: "Punkte gegen symbolische Belohnungen tauschen" },
      { icon: Map, title: "Kartenansicht", desc: "Geo-basierte Anfragen visualisieren" },
    ],
  },
  {
    label: "Angehörige",
    emoji: "👪",
    features: [
      { icon: UserCog, title: "Profil verwalten", desc: "Senior-Profil anlegen und pflegen" },
      { icon: PenLine, title: "Anfragen erstellen", desc: "Im Namen der Senioren buchen" },
      { icon: Bell, title: "Benachrichtigungen", desc: "Updates über Status & Aktivitäten" },
    ],
  },
  {
    label: "Admin",
    emoji: "🛡️",
    features: [
      { icon: ShieldCheck, title: "Helper verifizieren", desc: "Dokumentenprüfung & Freigabe" },
      { icon: TrendingUp, title: "Statistiken", desc: "Plattform-weite Metriken" },
      { icon: Ban, title: "User verwalten", desc: "Accounts bannen oder entsperren" },
      { icon: Package, title: "Belohnungen", desc: "Rewards erstellen und verwalten" },
    ],
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);
  const currentTab = tabs[active];

  return (
    <SectionWrapper id="features">
      <SectionTitle subtitle="Maßgeschneiderte Funktionen für jede Nutzergruppe">
        Features
      </SectionTitle>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              active === i ? "gradient-btn" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {currentTab.description && (
            <p className="text-sm text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
              {currentTab.description}
            </p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTab.features.map((f, i) => (
              <div key={i} className="card-warm p-5">
                <f.icon className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-1">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default FeaturesSection;
