import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { motion } from "framer-motion";

const layers = [
  {
    label: "Client Layer",
    items: ["Senior Dashboard", "Helper Dashboard", "Relative / Admin"],
    color: "bg-accent/10 border-accent/30",
  },
  {
    label: "Next.js Application",
    items: ["App Router (Pages)", "API Routes (REST)", "Server Actions"],
    color: "bg-primary/10 border-primary/30",
    sub: "Authentication Layer — NextAuth · JWT · Prisma Adapter · Bcrypt",
  },
];

const services = [
  { name: "PostgreSQL", sub: "Neon.tech", details: ["Users", "Requests", "Offers", "Ratings"] },
  { name: "Pusher", sub: "WebSocket", details: ["Chat", "Notifications", "Realtime"] },
  { name: "Groq AI", sub: "LLM API", details: ["Assistant", "Support", "Streaming"] },
];

const ArchitectureSection = () => (
  <SectionWrapper id="architecture">
    <SectionTitle subtitle="Vom Client über Next.js bis zur Datenbank – ein Überblick über die Systemarchitektur">
      Architektur
    </SectionTitle>

    <div className="max-w-4xl mx-auto space-y-4">
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className={`rounded-xl border p-6 ${l.color}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
        >
          <h4 className="font-heading font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">{l.label}</h4>
          <div className="grid grid-cols-3 gap-3">
            {l.items.map((item) => (
              <div key={item} className="bg-card rounded-lg p-3 text-center text-sm font-medium text-foreground border border-border">
                {item}
              </div>
            ))}
          </div>
          {l.sub && (
            <div className="mt-4 rounded-lg bg-card border border-border p-3 text-center text-sm text-muted-foreground">
              {l.sub}
            </div>
          )}
        </motion.div>
      ))}

      {/* Arrow */}
      <div className="flex justify-center py-2">
        <div className="flex gap-6 text-muted-foreground text-2xl">↓ &nbsp; ↓ &nbsp; ↓</div>
      </div>

      {/* Services */}
      <div className="grid grid-cols-3 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="card-warm p-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-1">{s.name}</h4>
            <span className="text-xs text-accent font-mono">{s.sub}</span>
            <ul className="mt-3 space-y-1">
              {s.details.map((d) => (
                <li key={d} className="text-sm text-muted-foreground">• {d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ArchitectureSection;
