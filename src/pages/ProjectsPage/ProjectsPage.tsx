import { useState } from 'react'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Projects } from '../../data/data'
import type { IProject } from '../../types/project.types'
import styles from './ProjectsPage.module.css'

const PROJECTS_PER_PAGE = 6

export const ProjectsPage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)

	const totalPages: number = Math.ceil(Projects.length / PROJECTS_PER_PAGE)

	const startIndex: number = (currentPage - 1) * PROJECTS_PER_PAGE
	const endIndex: number = startIndex + PROJECTS_PER_PAGE

	const currentProjects: IProject[] = Projects.slice(startIndex, endIndex)

	const goToPage = (page: number): void => {
		if (page < 1 || page > totalPages) return
		setCurrentPage(page)
	}

	return (
		<>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.page}>
					<h2 className={styles.title}>Все проекты</h2>
					<p className={styles.subtitle}>
						Откройте для себя тысячи креативных проектов
					</p>
				</div>
			</div>

			<div className={styles.page}>
				{/* Controls */}
				<div className={styles.controls}>
					<select className={styles.select}>
						<option value='popular'>Популярные</option>
						<option value='newest'>Новые</option>
						<option value='ending'>Заканчиваются</option>
					</select>
				</div>

				{/* Categories */}
				<ul className={styles.categories}>
					<li className={`${styles.category} ${styles.categoryActive}`}>
						Технологии
					</li>
					<li className={styles.category}>Игры</li>
					<li className={styles.category}>Музыка</li>
					<li className={styles.category}>Дом</li>
				</ul>

				{/* Count */}
				<p className={styles.count}>Найдено проектов: {Projects.length}</p>

				{/* Projects */}
				<div className={styles.projects}>
					{currentProjects.map((project: IProject) => (
						<div key={project.id} className={styles.projectItem}>
							<ProjectCard project={project} />
						</div>
					))}
				</div>

				{/* Pagination */}
				<div className={styles.pagination}>
					<button
						onClick={() => goToPage(currentPage - 1)}
						disabled={currentPage === 1}
						className={styles.pageButton}
					>
						Назад
					</button>

					{Array.from(
						{ length: totalPages },
						(_, index: number) => index + 1
					).map((page: number) => (
						<button
							key={page}
							onClick={() => goToPage(page)}
							className={`${styles.pageButton} ${
								page === currentPage ? styles.pageButtonActive : ''
							}`}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => goToPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						className={styles.pageButton}
					>
						Далее
					</button>
				</div>
			</div>
		</>
	)
}
