import {
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	chat_gpt,
	cns_portfolio,
	css,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	e_commerce,
	eventlify,
	flutter,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	javascript,
	linkedin,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	typescript,
	vite,
	webpack,
} from '../assets';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
const linkedinUser = "rupeshbaral";
const discordUser = "baburup";

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Flutter',
		icon: flutter,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'Qwik',
		icon: qwik,
	},
	{
		name: 'Astro',
		icon: astro,
	},
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Tailwind',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	// {
	// 	name: 'Webpack',
	// 	icon: webpack,
	// },
	{
		name: 'Vite',
		icon: vite,
	},
];

const experiences = [
	{
		title: 'Senior Associate,',
		company_name: 'Accounting Specialist Horne – Ridgeland, MS',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: '09/2021 – 01/12/2024',
		points: [
			"Review client/company documentation by analyzing financial data to identify irregularities and incidents of fraud, providing business administration guidance, and generatingfinancial/operational reports to ensure data accuracy.",
			'Calculating and analyzing client funding requests, estimating fund requests from clients, andawarded Sixty-five million funds to the clients.',
			"Auditing data information to check entries and funding codes by data verification andoptimization and eliminating the unnecessary cost and providing better and timely funding to the clients.",
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Doctor At Work',
	// 	icon: doctoratwork1,
	// 	iconBg: '#E6DEDD',
	// 	date: 'September 2020 - February 2021',
	// 	points: [
	// 		'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 	],
	// },
	{
		title: 'Financial Consultant',
		company_name: 'A and A LLC | Greeley CO.',
		icon: freelance,
		iconBg: '#383E56',
		date: '11/2018 – 08/2021',
		points: [
			"Prepared client accuracy and statements by reconciling all charts of accounts, checking financial data accuracy, and complying with GAAP to generate the Financial reports.",
			"Developed a sales growth model of the client’s business, analyzed financial data, identified key growth drivers, trends, and patterns, and increased sales by 20% Year over Year for 2 years.",
			"Improved and expanded more business network to the client’s portfolio by conducting extensive market and competition research hence increased 10% on their ROIC.",
			"Automated and created Dashboard of all accounting and Financial reporting in EXCEL, enhancing Client’s decision-making.",
		],
	},
	{
		title: 'Financial Analyst',
		company_name: 'UPS Franchise (DBA) | Centennial , Colorado.',
		icon: freelance,
		iconBg: '#383E56',
		date: '1/2015 – 09/2018',
		points: [
			"Improved Operating Procedures by performing risk analysis and identifying inefficiencies in daily processes, increasing operational efficiency by 15%.",
  "Evaluated new projects and financing options by developing future cash flow models and debt models, and expanded more stores in their network.",
  "Maintained all accounting records and bookkeeping, prepared and reconciled income statements and balance sheet accounts.",
  "Identified areas of growth and process improvement opportunities, enhancing operating efficiencies and effectiveness.",
  "Extracted and manipulated sales data from UPS software to Excel, created power query, and Dashboard in Power BI.",
		],
	},
	{
		title: 'Financial Retail Management',
		company_name: 'Circle K | Denver, Colorado.',
		icon: freelance,
		iconBg: '#383E56',
		date: '1/2009 – 12/2014',
		points: [
			"Managed working capital and day-to-day operations of Retail and Food Service locations.",
  			"Increased revenue by 20% year after year through cross-selling.",
  			"Performed complete financial statements, ratio analysis, and trend analysis, and recommended actions to executives.",
  			"Assisted executives in expanding Food Service locations and contributed to the strategy to maintain sales.",
		],
	},
];

const projects = [
	{
		name: 'Regression Analysis',
		description:
			'I conducted a comprehensive financial analysis case study, utilizing regression analysis and other statistical tools to provide actionable insights, improve decision-making, and drive successful financial outcomes for the client.',
		tags: [
			{
				name: 'Financial Analysis',
				color: 'blue-text-gradient',
			},
			{
				name: 'Regression Analysis',
				color: 'green-text-gradient',
			},
			{
				name: 'DecisionMakingInsights',
				color: 'pink-text-gradient',
			},
			{
				name: 'FinancialOutcomesOptimization',
				color: 'yellow-text-gradient',
			},
		],
		image: e_commerce,
		//source_code_link: 'https://github.com/exslym/ecommerce/',
		//website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
	{
		name: '3D Tiny World',
		description:
			'A thorough financial prediction and analysis tool, the OXY Financial Model is intended to evaluate the financial performance and well-being of the OXY company. This model is a dynamic framework that may be used to forecast and analyze several financial measures over a given time period, usually one to five years.',
		tags: [
			{
				name: 'OXYFinancialAnalysis',
				color: 'blue-text-gradient',
			},
			{
				name: 'FinancialModeling',
				color: 'green-text-gradient',
			},
			{
				name: 'StrategicPlanning',
				color: 'pink-text-gradient',
			},
			{
				name: 'BusinessForecasting',
				color: 'yellow-text-gradient',
			},
		],
		image: tiny_world_3d,
		source_code_link: 'https://docs.google.com/spreadsheets/d/130pAorihSAjFS2Al1HYTVcj_xqG38w2N/edit?usp=sharing&ouid=106500014072644820695&rtpof=true&sd=true',
		website_link: 'https://docs.google.com/spreadsheets/d/130pAorihSAjFS2Al1HYTVcj_xqG38w2N/edit?usp=sharing&ouid=106500014072644820695&rtpof=true&sd=true',
	},
	/*{
		name: 'Eventlify',
		description:
			'The events web application stands as a comprehensive, full-stack platform for managing events taking place globally. With this app you have the capability to purchase tickets for any event published there or even initiate and manage your own events.',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'next14',
				color: 'yellow-text-gradient',
			},
		],
		image: eventlify,
		source_code_link: 'https://github.com/exslym/eventlify/',
		website_link: 'https://eventlify-exs.vercel.app/',
	},
	{
		name: '3D T-Shirts AI Design',
		description:
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your t-shirt truly unique.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_3d_tshirts,
		source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	{
		name: 'Cryptocurrency Prices',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
		tags: [
			{
				name: 'dart',
				color: 'blue-text-gradient',
			},
			{
				name: 'flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'bloc',
				color: 'pink-text-gradient',
			},
			{
				name: 'firebase',
				color: 'yellow-text-gradient',
			},
		],
		image: currency_list,
		source_code_link: 'https://github.com/exslym/Crypto-Coins-List/',
		website_link: 'https://cryptocurrency-prices-exslym.vercel.app/',
	},
	{
		name: 'AI Article Summarizer',
		description:
			'This minimalistic cozy color app is an AI article summarizer that transforms lengthy articles into clear and concise summaries, using an article extractor and summarizer by RapidAPI, powered by openAI GPT-4.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_summarizer,
		source_code_link: 'https://github.com/exslym/AI-Summarizer/',
		website_link: 'https://exslym.github.io/AI-Summarizer/',
	},
	{
		name: 'D-Creative Studio',
		description:
			'An outstanding animate-on-scroll landing for Creative Studio - a team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'animations',
				color: 'yellow-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/exslym/D-Creative-Studio/',
		website_link: 'https://exslym.github.io/D-Creative-Studio/',
	},
	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'canvas',
				color: 'yellow-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},
	{
		name: '2048 [Game]',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'htnl',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'algorithms',
				color: 'yellow-text-gradient',
			},
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://exslym.github.io/2048-Game/',
	},
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-kohl.vercel.app/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },*/
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'Instagram',
		icon: discord,
		link: `https://instagram.com/${discordUser}/`,
	},
];

export { experiences, projects, socials, technologies };
