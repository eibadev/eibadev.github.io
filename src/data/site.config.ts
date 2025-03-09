interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog.eiba.dev/', // Write here your website url
	author: 'eibadev', // Site author
	title: 'blog.eiba.dev', // Site title.
	description: 'A blog about tech and other fun things.',
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Take a look at this post from eibadev', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
