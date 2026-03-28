import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Real-Time Chat",
    problem: "WebSocket-Verbindung stabil halten",
    solution: "Pusher mit Auto-Reconnect, Fallback auf Polling",
  },
  {
    title: "Location-Based Queries",
    problem: "Effiziente geografische Filterung",
    solution: "Lat/Lng in DB, Haversine-Formula für Distanzberechnung",
  },
  {
    title: "AI Streaming",
    problem: "Lange Wartezeiten bei KI-Responses",
    solution: "Groq LPU für schnelle Inference, Vercel AI SDK Streaming",
  },
  {
    title: "Role-Based UI",
    problem: "Unterschiedliche Views pro Rolle",
    solution: "Server-side Session Check, Conditional Rendering",
  },
];

const future = [
  { emoji: "📱", text: "Native Mobile Apps (React Native)" },
  { emoji: "🔔", text: "Telegram / WhatsApp Integration" },
  { emoji: "📧", text: "Email Notifications (Resend)" },
  { emoji: "🌐", text: "Mehrsprachigkeit (i18n)" },
  { emoji: "📊", text: "Erweiterte Analytics" },
  { emoji: "🤝", text: "Partner mit lokalen Organisationen" },
];

const ChallengesSection = () => (
  <SectionWrapper id="challenges" className="bg-card/50">
    <SectionTitle subtitle="Technische Hürden und kreative Lösungen">
      Herausforderungen & Zukunft
    </SectionTitle>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Challenges & Lösungen</h3>
        <div className="space-y-4">
          {challenges.map((c, i) => (
            <motion.div
              key={i}
              className="card-warm p-5"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-semibold text-foreground text-sm mb-2">{c.title}</h4>
              <p className="text-xs text-muted-foreground mb-1">
                <span className="font-semibold text-destructive">Problem:</span> {c.problem}
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-success">Lösung:</span> {c.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Zukunftspläne</h3>
        <div className="space-y-3">
          {future.map((f, i) => (
            <motion.div
              key={i}
              className="card-warm p-4 flex items-center gap-3"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-xl">{f.emoji}</span>
              <span className="text-sm text-muted-foreground">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ChallengesSection;
