import { motion } from 'framer-motion'
import {
	Bell,
	Database,
	FileText,
	Gift,
	Key,
	MessageCircle,
	Star,
	Users,
} from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const tables = [
  { icon: Users, name: "User", fields: "Role, HelperStatus, Location" },
  { icon: FileText, name: "Request", fields: "Category, Status, Location" },
  { icon: FileText, name: "Offer", fields: "Helper → Request" },
  { icon: MessageCircle, name: "Chat & Message", fields: "Real-Time Kommunikation" },
  { icon: Star, name: "Rating", fields: "Bewertungssystem" },
  { icon: Gift, name: "Reward & Redemption", fields: "Prämien" },
  { icon: Bell, name: "Notification", fields: "Push-Benachrichtigungen" },
  { icon: Key, name: "Account / Session", fields: "NextAuth Tabellen" },
];

const relations = [
	'User → Requests (Senior erstellt)',
	'User → Offers (Helper macht Angebot)',
	'Request → Offer (1:n)',
	'Request → Chat (1:1)',
	'Chat → Messages (1:n)',
	'User → Ratings (gegeben & erhalten)',
]

const DatabaseSection = () => (
	<SectionWrapper id='database' className='bg-card/50'>
		<SectionTitle subtitle='Prisma ORM mit PostgreSQL auf Neon.tech'>
			Datenbank Schema
		</SectionTitle>

		<div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
			<div>
				<h3 className='font-heading font-semibold text-foreground mb-4 text-lg flex items-center gap-2'>
					<Database className='w-5 h-5 text-accent' /> Tabellen
				</h3>
				<div className='grid grid-cols-2 gap-3'>
					{tables.map((t, i) => (
						<motion.div
							key={i}
							className='card-warm p-4'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.05 }}
						>
							<t.icon className='w-4 h-4 text-accent mb-2' />
							<h4 className='font-semibold text-foreground text-sm'>
								{t.name}
							</h4>
							<p className='text-xs text-muted-foreground mt-1'>{t.fields}</p>
						</motion.div>
					))}
				</div>
			</div>

			<div>
				<h3 className='font-heading font-semibold text-foreground mb-4 text-lg'>
					Relationen
				</h3>
				<div className='space-y-2'>
					{relations.map((r, i) => (
						<div
							key={i}
							className='flex items-center gap-3 text-sm text-muted-foreground'
						>
							<span className='w-1.5 h-1.5 rounded-full bg-accent shrink-0' />
							{r}
						</div>
					))}
				</div>

				<div className='mt-8'>
					<h3 className='font-heading font-semibold text-foreground mb-4 text-lg'>
						Helper-Verifizierung
					</h3>
					<div className='code-block text-xs'>
						<span className='text-accent'>PENDING_REVIEW</span> → Admin prüft
						Dokumente{'\n'}→ <span className='text-success'>APPROVED</span>{' '}
						(kann Angebote machen){'\n'}→{' '}
						<span className='text-destructive'>REJECTED</span> (erneut bewerben)
					</div>
				</div>
			</div>
		</div>
	</SectionWrapper>
)

export default DatabaseSection
