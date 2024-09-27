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
		slug: 'startup',
		company: 'DevDesk',
		description: 'Currently building a virtual co-working space platform for collaboration, coding, and interviews.\n Leading the front-end development using React and tailwind CSS, while implementing the back end with JavaScript (Node.js) to ensure a scalable and efficient server-side architecture.\n Developing key features such as real-time collaboration, user management, and room creation with admin controls for enhanced user experience.\n Overseeing cloud deployment, continuous integration, and delivery pipelines to ensure smooth and reliable platform updates. \nActively involved in shaping the business model, focusing on user acquisition, future monetization strategies, and aligning technical development with the company’s long-term vision.',
		contract: ContractType.SelfEmployed,
		type: '',
		location: 'Remote',
		period: { from: new Date('2024-09-04'), to: new Date() },
		skills: getSkills(''),
		name: 'Co-Founder & Full-Stack Engineer',
		color: 'black',
		links: [],
		logo: Assets.DevDesk,
		shortDescription: 'A collaborative virtual space for developers and educators to work together seamlessly'
	},
	
	
];

export const title = 'Experience';
