import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import type { ProjectListResponse } from '../../types/projects';

import useHttp from '../../hooks/use-http';
import styles from './Projects.module.css';

export const ProjectsPage: React.FC = () => {
	const [projects, setProjects] = useState<ProjectListResponse>([
		{ id: 123, name: 'something', updateAt: 'sdf' },
		{ id: 1231, name: 'something', updateAt: 'sdf' },
	]);

	const { sendRequest: getProjects } = useHttp();

	const fetchProjects = (pjs: ProjectListResponse) => {
		console.log(pjs);
		const fetchedPjs: ProjectListResponse = [];
		for (const key in pjs) {
			fetchedPjs.push({
				id: pjs[key].id,
				name: pjs[key].name,
				updateAt: pjs[key].updateAt,
			});
		}
		setProjects(fetchedPjs);
	};

	useEffect(() => {
		getProjects({ url: '' }, fetchProjects);
	}, []);

	return (
		<section className={styles.projects}>
			<ul>
				{projects.map((pj) => (
					<li className={styles.item} key={pj.id}>
						<Link to={`/project/${pj.id}`}>{pj.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
