import { AnimatePresence, motion } from 'framer-motion'
import {
	Ban,
	Bell,
	Bot,
	Gift,
	Map,
	MessageCircle,
	Package,
	PenLine,
	Search,
	ShieldCheck,
	Star,
	Target,
	TrendingUp,
	Trophy,
	UserCog,
} from 'lucide-react'
import { useState } from 'react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const tabs = [
	{
		label: 'Senioren',
		emoji: '👵',
		features: [
			{
				icon: PenLine,
				title: 'Profil bearbeiten',
				desc: 'Möglichkeit zur Bearbeitung der eigenen Profildaten',
			},
			{
				icon: MessageCircle,
				title: 'Real-Time Chat',
				desc: 'Direkte Kommunikation mit Helfern',
			},
			{
				icon: Star,
				title: 'Helfer bewerten',
				desc: 'Seniorinnen und Senioren bewerten die Helfer nach der Unterstützung',
			},
			{
				icon: Gift,
				title: 'Punkte & Belohnungen',
				desc: 'System für Anerkennung und Prämien für Engagement',
			},
			{
				icon: Bot,
				title: 'KI-Assistent',
				desc: 'Kontextsensitive Hilfe via Groq',
			},
			{
				icon: PenLine,
				title: 'Anfrageformular ausfüllen',
				desc: 'Seniorinnen und Senioren füllen ein einfaches Formular für die Hilfsanfrage aus',
			},
		],
	},
	{
		label: 'Helfer',
		emoji: '🙋',
		description:
			'Studenten, Arbeitslose, arbeitende Freiwillige (ab 16 Jahren) – ehrenamtliche Freiwillige, keine Angestellten',
		features: [
			{
				icon: ShieldCheck,
				title: 'Admin-Verifizierung',
				desc: 'Werden vom Administrator verifiziert',
			},
			{
				icon: Search,
				title: 'Hilfe bei Alltag',
				desc: 'Einkäufen, Spaziergängen, Arztbesuchen',
			},
			{
				icon: Target,
				title: 'Punkte sammeln',
				desc: 'Sammeln Punkte für jede Hilfe (KEIN GELD!)',
			},
			{
				icon: Trophy,
				title: 'Reputation aufbauen',
				desc: 'Reputation in der Community aufbauen',
			},
			{
				icon: Gift,
				title: 'Belohnungen tauschen',
				desc: 'Punkte gegen symbolische Belohnungen tauschen',
			},
			{
				icon: Map,
				title: 'Kartenansicht',
				desc: 'Geo-basierte Anfragen visualisieren',
			},
		],
	},
	{
		label: 'Angehörige',
		emoji: '👪',
		features: [
			{
				icon: UserCog,
				title: 'Profil verwalten',
				desc: 'Senior-Profil anlegen und pflegen',
			},
			{
				icon: PenLine,
				title: 'Anfragen erstellen',
				desc: 'Im Namen der Senioren buchen',
			},
			{
				icon: Bell,
				title: 'Benachrichtigungen',
				desc: 'Updates über Status & Aktivitäten',
			},
		],
	},
	{
		label: 'Admin',
		emoji: '🛡️',
		features: [
			{
				icon: ShieldCheck,
				title: 'Helper verifizieren',
				desc: 'Dokumentenprüfung & Freigabe',
			},
			{
				icon: ShieldCheck,
				title: 'Registrierung bestätigen',
				desc: 'Bestätigt Registrierungsanfragen nach erfolgreicher Prüfung',
			},
			{
				icon: UserCog,
				title: 'Senioren & Helfer einsehen',
				desc: 'Sieht alle Profil- und Anfragedaten von Senioren und Helfern',
			},
			{
				icon: TrendingUp,
				title: 'Statistiken',
				desc: 'Plattform-weite Metriken',
			},
			{
				icon: Ban,
				title: 'Senioren & Helfer löschen',
				desc: 'Kann Senioren- und Helfer-Accounts bei Bedarf entfernen',
			},
			{
				icon: Package,
				title: 'Belohnungen',
				desc: 'Rewards erstellen und verwalten',
			},
		],
	},
]

const FeaturesSection = () => {
	const [active, setActive] = useState(0)
	const currentTab = tabs[active]

	return (
		<SectionWrapper id='features'>
			<SectionTitle subtitle='Maßgeschneiderte Funktionen für jede Nutzergruppe'>
				Features
			</SectionTitle>

			<div className='flex flex-wrap gap-2 justify-center mb-10'>
				{tabs.map((t, i) => (
					<button
						key={i}
						onClick={() => setActive(i)}
						className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
							active === i
								? 'gradient-btn'
								: 'bg-muted text-muted-foreground hover:text-foreground'
						}`}
					>
						{t.emoji} {t.label}
					</button>
				))}
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={active}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					transition={{ duration: 0.25 }}
				>
					{currentTab.description && (
						<p className='text-sm text-muted-foreground text-center mb-6 max-w-2xl mx-auto'>
							{currentTab.description}
						</p>
					)}
					<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
						{currentTab.features.map((f, i) => (
							<div key={i} className='card-warm p-5'>
								<f.icon className='w-6 h-6 text-accent mb-3' />
								<h4 className='font-semibold text-foreground mb-1'>
									{f.title}
								</h4>
								<p className='text-sm text-muted-foreground'>{f.desc}</p>
							</div>
						))}
					</div>
				</motion.div>
			</AnimatePresence>
		</SectionWrapper>
	)
}

export default FeaturesSection
