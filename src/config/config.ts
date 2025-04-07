// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'CCore',
	siteDescription:
		'CCore es un software ERP basado en la nube, cuenta con modulos demandantes como Facturación, Logística, Compras, Ventas, y más.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.png',
		alt: 'CCore logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
