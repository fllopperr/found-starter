import { LinearProgress } from '@mui/material'
import { NavLink } from 'react-router-dom'
import type { IProject } from '../../types/project.types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
	project: IProject
}

export function ProjectCard({ project }: ProjectCardProps) {
	const { id, title, description, category, price, investor, collected } =
		project
	const percent = Math.floor((collected / price) * 100)

	return (
		<div className={styles.card}>
			<div className={styles.imageWrapper}>
				<img src='./1.jpg' alt={title} />
			</div>

			<div className={styles.info}>
				<div>
					<span className={styles.category}>{category}</span>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{description}</p>

					<div className={styles.progressWrapper}>
						<span className={styles.investor}>{investor} инвесторов</span>
						<span className={styles.percentProject}>{percent}%</span>
						<LinearProgress
							variant='determinate'
							value={(collected / price) * 100}
							className={styles.LinearProgress}
							sx={{
								backgroundColor: 'rgba(0,0,0,0.1)',
								'& .MuiLinearProgress-bar': {
									backgroundColor: '#1D4ED8',
								},
							}}
						/>
						<div className={styles.progressFooter}>
							<span className={styles.currentPriceProject}>{collected} ₽</span>
							<span className={styles.priceProject}>из {price} ₽</span>
						</div>
					</div>
				</div>

				<div className={styles.buttonWrapper}>
					<button className={styles.investBtn}>Поддержать</button>
					<NavLink to={`/project/${id}`}>
						<button className={styles.moreBtn}>Подробнее</button>
					</NavLink>
				</div>
			</div>
		</div>
	)
}
