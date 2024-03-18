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
			"Review client/company/government service’s documentation, analyze financial data, calculate and estimate client’s funding request, distinguish irregularities and fraud, and award more than sixty- five million dollars of assistance to the clients.",
			'Auditing data information to check entries and funding codes by data verification and optimization, reduced unnecessary costs, and awarded better and prompt funding to clients.',
			"Supplied business administration guidance, developed a data model, and ensured quality control and quality assurance",
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
	/*{
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
	},*/
	{
		title: 'Financial Analyst',
		company_name: 'UPS Franchise (DBA) | Centennial , Colorado.',
		icon: freelance,
		iconBg: '#383E56',
		date: '1/2015 – 09/2018',
		points: [
			"Prepared monthly finalization of financial books and records with attention to detail and adherence to internal control. Reconciled monthly reports , accruals entries, charts of accounts, and Prepaid financial statements in compliance with GGAP",
  "Managed daily cash flow and projected cash flow at weekly and monthly intervals, thereby enhancing operating efficiency.",
  "Identified growth opportunities to acquire more stores by leveraging the interest rates -from 2018 to 2020 through bank debt financing, resulting in a 20% increase in packaged delivery and printing sales and an overall improvement in financial performance.",
 
		],
	},
	{
		title: 'Financial Retail Management',
		company_name: 'Circle K | Denver, Colorado.',
		icon: freelance,
		iconBg: '#383E56',
		date: '1/2009 – 12/2014',
		points: [
			"Managed and oversaw all accounting aspects of the convenience store operations, including budgeting, forecasting, and Financial reporting.",
"Monitor inventory levels, analyze inventory turnover, ensure inventory auditing, and analyze variance to prevent the shrinkage using PDI ERP system.",
"Communicate and Collaborate with store management and category management team to drive sales initiatives and promote sales growth.",
"Coached and communicated with associates, Guiding sales, Inventory management, and overall financial operations.",
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
		name: 'OXY Financial Analysis',
		description:
			'A thorough financial prediction and analysis method, the OXY Financial Model is intended to evaluate the financial performance and well-being of the OXY company. This model is a dynamic framework that may be used to forecast and analyze several financial measures over a given time period, usually one to five years.',
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
	{
		name: 'Retail Sales Analysis',
		description:
			'Analyzing retail trends in Colorado, we observe a surge in mobile-integrated furniture sales, highlighting evolving consumer preferences and market opportunities',
		tags: [
			{
				name: 'RetailAnalysis',
				color: 'blue-text-gradient',
			},
			{
				name: 'ColoradoTrends',
				color: 'green-text-gradient',
			},
			{
				name: 'FurnitureSales',
				color: 'pink-text-gradient',
			},
			{
				name: 'MarketInsights',
				color: 'yellow-text-gradient',
			},
		],
		image: eventlify,
		source_code_link: '',
		website_link: 'https://docs.google.com/spreadsheets/d/14fzaaqXKQiWFu7_AEyuIZr7RTKb-e7kN/edit?usp=sharing&ouid=106500014072644820695&rtpof=true&sd=true',
	},
	/*{
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
