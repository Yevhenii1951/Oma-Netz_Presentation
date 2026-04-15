import { Heart, MapPin, Shield, Users } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const points = [
	{
		icon: Users,
		title: 'Zielgruppe',
		desc: 'Senioren (65+) und freiwillige Helfer in Kassel und Umgebung',
	},
	{
		icon: Heart,
		title: 'Kernproblem',
		desc: 'Einsamkeit im Alter, Alltagsaufgaben und mangelnde digitale Barrierefreiheit',
	},
	{
		icon: Shield,
		title: 'Lösung',
		desc: 'Community-basierte Plattform mit Prämien, die Generationen verbindet',
	},
	{
		icon: MapPin,
		title: 'Standort',
		desc: 'Lokaler Fokus auf Kassel mit kartenbasierter Hilfsangebot-Suche',
	},
]

const OverviewSection = () => (
	<SectionWrapper id='overview'>
		<SectionTitle subtitle='Oma Netz Kassel verbindet Senioren mit freiwilligen Helfern aus der Nachbarschaft – durch eine intuitive, barrierefreie Plattform mit Echtzeit-Chat, KI-Unterstützung und Prämien.'>
			Projektübersicht
		</SectionTitle>

		<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
			{points.map((p, i) => (
				<div key={i} className='card-warm p-6 text-center'>
					<div className='w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4'>
						<p.icon className='w-6 h-6 text-accent' />
					</div>
					<h3 className='font-heading font-semibold text-foreground mb-2'>
						{p.title}
					</h3>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						{p.desc}
					</p>
				</div>
			))}
		</div>
	</SectionWrapper>
)

export default OverviewSection
