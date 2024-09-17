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
	
];

export const title = 'Experience';
