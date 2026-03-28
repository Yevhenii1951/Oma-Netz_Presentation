import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Shield, UserCheck, Lock, Ban } from "lucide-react";

const roles = [
  { name: "SENIOR", desc: "Hilfesuchende Senioren (65+)", color: "bg-accent/15 text-accent" },
  { name: "HELPER", desc: "Verifizierte junge Helfer (ab 16)", color: "bg-success/15 text-success" },
  { name: "RELATIVE", desc: "Angehörige, buchen für Senioren", color: "bg-info/15 text-info" },
  { name: "ADMIN", desc: "Plattform-Moderation & Verifizierung", color: "bg-warning/15 text-warning" },
];

const authFlow = [
  "Credentials-basierte Anmeldung (Email + Passwort)",
  "Bcrypt Password Hashing (Salt Rounds: 10)",
  "JWT Token mit 60-Minuten Expiry",
  "Automatic Session Refresh bei aktiver Nutzung",
];

const security = [
  { icon: Lock, text: "Password Hashing mit Bcrypt" },
  { icon: Shield, text: "JWT Signierung mit 32+ Zeichen Secret" },
  { icon: Ban, text: "Ban-System für missbräuchliche Accounts" },
  { icon: UserCheck, text: "Role-Based Access Control (RBAC)" },
];

const AuthSection = () => (
  <SectionWrapper id="auth" className="bg-card/50">
    <SectionTitle subtitle="NextAuth.js 5 mit Credentials Provider, JWT Strategy und Prisma Adapter">
      Authentifizierung & Rollen
    </SectionTitle>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Roles */}
      <div>
        <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Rollen-System</h3>
        <div className="space-y-3">
          {roles.map((r) => (
            <div key={r.name} className="card-warm p-4 flex items-center gap-4">
              <span className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold ${r.color}`}>{r.name}</span>
              <span className="text-sm text-muted-foreground">{r.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Auth flow + Security */}
      <div className="space-y-8">
        <div>
          <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Auth Flow</h3>
          <ol className="space-y-2">
            {authFlow.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-foreground mb-4 text-lg">Security</h3>
          <div className="space-y-3">
            {security.map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <s.icon className="w-4 h-4 text-accent shrink-0" />
                {s.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default AuthSection;
