import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const points = [
  { action: "Erfolgreiche Hilfe abgeschlossen", pts: "+10" },
  { action: "Bewertung erhalten", pts: "+5" },
  { action: "5 erfolgreiche Hilfen (Meilenstein)", pts: "+20" },
  { action: "20 erfolgreiche Hilfen (Super Helper)", pts: "+50" },
];

const rewards = [
  { emoji: "🎁", title: "Gutscheine", desc: "Lokale Geschäfte in Kassel" },
  { emoji: "🎫", title: "Veranstaltungstickets", desc: "Kultur & Events" },
  { emoji: "🏅", title: "Exklusive Badges", desc: "Digitale Auszeichnungen" },
  { emoji: "📦", title: "Überraschungspakete", desc: "Monatliche Goodies" },
];

const noItems = [
  "KEINE Geldzahlungen",
  "KEINE Bezahlung für Dienstleistungen",
  "KEIN Geldverdienen",
  "KEINE finanziellen Transaktionen",
];

const yesItems = [
  "Punkte für Hilfe (virtuell)",
  "Reputation in der Community",
  "Symbolische Belohnungen von Partnern",
  "Anerkennung und Dankbarkeit",
];

const AnerkennungPraemienSection = () => (
  <SectionWrapper id="anerkennung-praemien" className="bg-card/50">
    <SectionTitle subtitle="Punkte sammeln, Meilensteine erreichen, Belohnungen einlösen">
      Anerkennung & Prämien
    </SectionTitle>

    {/* Non-commercial warning */}
    <motion.div
      className="max-w-3xl mx-auto mb-10 rounded-2xl border-2 border-yellow-500/40 bg-yellow-50/60 dark:bg-yellow-900/10 p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading font-bold text-foreground text-lg mb-4 flex items-center gap-2">
        ⚠️ WICHTIG: Nicht-kommerzielle Plattform
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          {noItems.map((item, i) => (
            <p key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-red-500 font-bold shrink-0">❌</span> {item}
            </p>
          ))}
        </div>
        <div className="space-y-2">
          {yesItems.map((item, i) => (
            <p key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="text-green-600 font-bold shrink-0">✅</span> {item}
            </p>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Oma Netz Kassel ist eine komplett kostenlose Plattform. Hier verdient niemand Geld. Das Motivationssystem basiert auf Punkten und Reputation, die gegen symbolische Belohnungen von Projektpartnern getauscht werden können.
      </p>
    </motion.div>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Points */}
      <div>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Punktevergabe</h3>
        <div className="space-y-3">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="card-warm p-4 flex items-center justify-between"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-sm text-muted-foreground">{p.action}</span>
              <span className="font-mono font-bold text-accent text-sm">{p.pts}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rewards */}
      <div>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Belohnungen</h3>
        <div className="grid grid-cols-2 gap-3">
          {rewards.map((r, i) => (
            <motion.div
              key={i}
              className="card-warm p-5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-3xl mb-2 block">{r.emoji}</span>
              <h4 className="font-semibold text-foreground text-sm mb-1">{r.title}</h4>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AnerkennungPraemienSection;
