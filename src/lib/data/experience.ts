import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'grounds-crew',
		company: 'Seven Lakes Championship Golf & Estates',
		description: 'Assisted in maintaining the golf course, including mowing, landscaping, and keeping greens and fairways in top condition, while also providing excellent customer service by managing tee times, greeting guests, and addressing inquiries.',
		contract: ContractType.FullTime,
		type: '',
		location: 'Windsor',
		period: { from: new Date('2022-04-01'), to: new Date() },
		skills: getSkills(''),
		name: 'Grounds Crew',
		color: 'blue',
		links: [],
		logo: Assets.Seven,
		shortDescription: 'Maintain the grounds for the golf course'
	},
	{
		slug: 'stocker',
		company: 'Freshco',
		description: 'Put prodcuts on the wall and assist customers in need of finding products. Maintain a standard level on cleanliness on the floor and in the back.',
		contract: ContractType.PartTime,
		type: '',
		location: 'Windsor',
		period: { from: new Date('2022-09-01'), to: new Date() },
		skills: getSkills(''),
		name: 'Stocker',
		color: 'green',
		links: [],
		logo: Assets.Freshco,
		shortDescription: 'Stock shelves and help customers'
	},
	{
		slug: 'developer',
		company: 'John Simpson Odette Student Investment Fund',
		description: 'I am actively involved in migrating the organization’s website from Wix to React, focusing on modernizing the interface and improving performance. As part of the project, I am creating team-specific dashboards to enhance internal engagement through tailored content. Additionally, I developed a React frontend featuring a graph to visualize risk and return trade-offs based on ticket weights. To streamline dynamic content updates for the user portal, I integrated API endpoints with the frontend and implemented an efficient database structure to optimize query performance for data retrieval.',
		contract: ContractType.PartTime,
		type: '',
		location: 'Windsor',
		period: { from: new Date('2024-11-04'), to: new Date() },
		skills: getSkills('reactjs','js','tailwind','python','nodejs','postgressql'),
		name: 'Junior Software Developer',
		color: 'white',
		links: [],
		logo: Assets.JSOSIF,
		shortDescription: 'Programmer for the school investment fund'
	},
	
	
];

export const title = 'Experience';
