import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Landon';

export const lastName = 'Hadre';

export const description =
	'Hey, I\'m Landonーa passionate computer science student who enjoys building things!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Fakkiie' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/landonhadre/'
	},
	
	{
		platform: Platform.Email,
		link: 'hadrel@uwindsor.ca'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs','ts', 'python');
