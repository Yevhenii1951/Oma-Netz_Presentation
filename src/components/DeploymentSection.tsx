import SectionWrapper, { SectionTitle } from "./SectionWrapper";
import { Cloud, Database, GitBranch, CheckCircle } from "lucide-react";

const stack = [
  { icon: Cloud, name: "Vercel", desc: "Frontend + API Deployment" },
  { icon: Database, name: "Neon.tech", desc: "Serverless PostgreSQL" },
  { icon: GitBranch, name: "GitHub Actions", desc: "CI/CD Pipeline" },
];

const pipeline = [
  "Pull Request → main Branch",
  "Node.js 24 Setup",
  "npm ci (Dependencies)",
  "npm run lint (ESLint)",
  "npm run build (Next.js + Prisma)",
  "Automatisches Deployment bei Success",
];

const envVars = [
  "DATABASE_URL", "AUTH_SECRET", "PUSHER_*", "GROQ_API_KEY", "RESEND_API_KEY", "TELEGRAM_BOT_TOKEN",
];

const DeploymentSection = () => (
  <SectionWrapper id="deployment">
    <SectionTitle subtitle="Automatisiertes Deployment mit Vercel, Neon und GitHub Actions">
      Deployment & CI/CD
    </SectionTitle>

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
      {stack.map((s, i) => (
        <div key={i} className="card-warm p-6 text-center">
          <s.icon className="w-8 h-8 text-accent mx-auto mb-3" />
          <h4 className="font-semibold text-foreground">{s.name}</h4>
          <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="card-warm p-6">
        <h4 className="font-heading font-semibold text-foreground mb-4">CI/CD Pipeline</h4>
        <div className="space-y-2">
          {pipeline.map((step, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success shrink-0" />
              {step}
            </div>
          ))}
        </div>
      </div>

      <div className="card-warm p-6">
        <h4 className="font-heading font-semibold text-foreground mb-4">Environment Variables</h4>
        <div className="code-block space-y-1">
          {envVars.map((v) => (
            <div key={v}>
              <span className="text-accent">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default DeploymentSection;
