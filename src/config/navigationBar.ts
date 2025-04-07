// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'Blocmin logo',
		text: 'Blocmin'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Precios', link: '/pricing' },
		{ name: 'Características', link: '/features' },
		{ name: 'Blog', link: '/blog' },
		// {
		// 	name: 'Recursos',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Ingresar', link: '/', style: 'primary', size: 'lg' }]
}
