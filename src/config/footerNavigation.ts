// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Blocmin',
		aboutText:
			'Blocmin es un software ERP basado en la nube, cuenta con modulos demandantes como Facturación, Logística, Compras, Ventas, y más.',
		logo: {
			src: '/logo.png',
			alt: 'Blocmin logo',
			text: 'Blocmin'
		}
	},
	footerColumns: [
		{
			category: 'Productos',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Precios',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Cambios',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Términos',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Acerca de',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
			]
		},
		{
			category: 'Contacto',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Soporte',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Blocmin ' + new Date().getFullYear()
	}
}
