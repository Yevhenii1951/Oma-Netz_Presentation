import SectionWrapper, { SectionTitle } from './SectionWrapper'

const groups = [
	{
		title: 'Auth',
		endpoints: [
			{
				method: 'POST',
				path: '/api/auth/register',
				desc: 'Benutzer registrieren',
			},
			{
				method: 'POST',
				path: '/api/auth/[…nextauth]',
				desc: 'NextAuth Handler',
			},
			{
				method: 'GET',
				path: '/api/auth/login-check',
				desc: 'Session validieren',
			},
		],
	},
	{
		title: 'Requests',
		endpoints: [
			{
				method: 'GET',
				path: '/api/requests',
				desc: 'Alle Anfragen (gefiltert)',
			},
			{ method: 'POST', path: '/api/requests', desc: 'Neue Anfrage erstellen' },
			{ method: 'GET', path: '/api/requests/[id]', desc: 'Einzelne Anfrage' },
			{
				method: 'PATCH',
				path: '/api/requests/[id]',
				desc: 'Anfrage aktualisieren',
			},
			{ method: 'DELETE', path: '/api/requests/[id]', desc: 'Anfrage löschen' },
		],
	},
	{
		title: 'Offers & Chat',
		endpoints: [
			{ method: 'POST', path: '/api/offers', desc: 'Angebot senden' },
			{
				method: 'POST',
				path: '/api/offers/[id]/accept',
				desc: 'Angebot annehmen',
			},
			{
				method: 'GET',
				path: '/api/chat/[id]/messages',
				desc: 'Nachrichten laden',
			},
			{
				method: 'POST',
				path: '/api/chat/[id]/messages',
				desc: 'Nachricht senden',
			},
		],
	},
	{
		title: 'AI & Admin',
		endpoints: [
			{
				method: 'POST',
				path: '/api/ai/chat',
				desc: 'KI-Chat (Groq Streaming)',
			},
			{
				method: 'GET',
				path: '/api/admin/stats',
				desc: 'Plattform-Statistiken',
			},
			{
				method: 'PATCH',
				path: '/api/admin/helpers/[id]',
				desc: 'Helper verifizieren',
			},
			{
				method: 'PATCH',
				path: '/api/admin/users/[id]',
				desc: 'User verwalten',
			},
		],
	},
]

const methodColor: Record<string, string> = {
	GET: 'bg-success/15 text-success',
	POST: 'bg-info/15 text-info',
	PATCH: 'bg-warning/15 text-warning',
	DELETE: 'bg-destructive/15 text-destructive',
}

const ApiSection = () => (
	<SectionWrapper id='api'>
		<SectionTitle subtitle='RESTful API Endpoints mit Next.js API Routes'>
			API Endpoints
		</SectionTitle>

		<div className='max-w-4xl mx-auto grid sm:grid-cols-2 gap-6'>
			{groups.map(g => (
				<div key={g.title} className='card-warm p-5'>
					<h4 className='font-heading font-semibold text-foreground mb-4'>
						{g.title}
					</h4>
					<div className='space-y-2'>
						{g.endpoints.map((e, i) => (
							<div key={i} className='flex items-start gap-2 text-sm'>
								<span
									className={`px-2 py-0.5 rounded text-xs font-mono font-semibold shrink-0 ${methodColor[e.method]}`}
								>
									{e.method}
								</span>
								<code className='font-mono text-foreground text-xs break-all'>
									{e.path}
								</code>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</SectionWrapper>
)

export default ApiSection
