import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Tools', slug: 'tool' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'N/A',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: 'orange',
		description:
			'N/A',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'N/A',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'N/A',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'tool'
	}),
	defineSkill({
		slug: 'aws',
		color: 'brown',
		description:
			'N/A',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'tool'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'white',
		description:
			'N/A',
		logo: Assets.GCP,
		name: 'GCP',
		category: 'tool'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description:
			'N/A',
		logo: Assets.Git,
		name: 'Git',
		category: 'tool'
	}),
	defineSkill({
		slug: 'postgressql',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.PostgreSQL,
		name: 'Postgres',
		category: 'tool'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'N/A',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'tool'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'N/A',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'N/A',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description:
			'N/A',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'tool'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.C,
		name: 'C/C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description:
			'N/A',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'white',
		description:
			'N/A',
		logo: Assets.NextJS,
		name: 'Next.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'yellow',
		description:
			'N/A',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'library'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'N/A',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'library'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Used in hackathon projecy',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'black',
		description:
			'N/A',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'pytorch',
		color: 'red',
		description:
			'N/A',
		logo: Assets.Pytorch,
		name: 'Pytorch',
		category: 'library'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'N/A',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'Markup & Style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'Markup & Style'
	}),
	defineSkill({
		slug: 'reactnative',
		color: 'blue',
		description:
			'N/A',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'library'
	}),
	defineSkill({
		slug: 'threejs',
		color: 'white',
		description:
			'N/A',
		logo: Assets.ThreeJS,
		name: 'ThreeJS',
		category: 'library'
	}),
	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
