import LinearProgress from '@mui/material/LinearProgress'
import styles from './HomePage.module.css'

import { NavLink } from 'react-router-dom'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { FeatureCard } from '../../components/FeatureCard/FeatureCard'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Categories } from '../../data/categories'
import { Projects } from '../../data/data'

export const HomePage = () => {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.leftSide}>
					<h2 className={styles.title}>Воплотите свои идеи в жизнь</h2>
					<p className={styles.description}>
						Краудфандинговая платформа для креативных проектов и инноваций
					</p>

					<div className={styles.info}>
						<div className={styles.successComp}>
							<span>11,342</span>
							<p>успешных компаний</p>
						</div>
						<div className={styles.price}>
							<span>2.8 млн ₽</span>
							<p>привлечено средств</p>
						</div>
						<div className={styles.percent}>
							<span>68%</span>
							<p>Достигают цели</p>
						</div>
					</div>

					<button className={styles.favoriteBtn}>Избранные проекты</button>
					<NavLink to='/create-project'>
						<button className={styles.projectBtn}>Начать проект</button>
					</NavLink>
				</div>

				<div className={styles.rightSide}>
					<img src='./1.jpg' alt='project' />

					<div className={styles.rightSideInfo}>
						<h3>Инновационный гаджет</h3>
						<p>Революционное устройство для вашего дома</p>

						<LinearProgress
							variant='determinate'
							value={50}
							sx={{
								width: 440,
								height: 6,
								borderRadius: 2,
								backgroundColor: 'rgba(255, 255, 255, 0.2)',
								'& .MuiLinearProgress-bar': {
									borderRadius: 2,
									backgroundColor: '#ffffff',
								},
							}}
						/>

						<span className={styles.currentPriceProject}>2 500 000 ₽</span>
						<span className={styles.priceProject}>из 5 000 000 ₽</span>
						<span className={styles.percentProject}>50%</span>
					</div>
				</div>
			</section>

			<section className={styles.category}>
				<div className={styles.categoryHeader}>
					<h2>Популярные категории</h2>
					<p>Найдите проекты, которые вас вдохновляют</p>
				</div>

				<div className={styles.categoryList}>
					{Categories.map(category => (
						<CategoryCard key={category.name} category={category} />
					))}
				</div>
			</section>
			<section className={styles.favoriteProject}>
				<div>
					<div className={styles.textCenter}>
						<h2 className={styles.favoriteTitle}>Популярные проекты</h2>
						<p className={styles.textGray}>
							Проекты, которые заслуживают вашего внимания
						</p>
					</div>

					<div className={styles.projects}>
						{Projects.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>

					<div className={styles.textCenter}>
						<NavLink to='/projects'>
							<button className={styles.buttonPrimary}>
								Посмотреть все проекты
							</button>
						</NavLink>
					</div>
				</div>
			</section>
			<section className={styles.featuresSection}>
				<div className={styles.container}>
					<div className={styles.textCenter}>
						<h2>Почему выбирают нас</h2>
						<p>Мы создаем лучшие условия для ваших проектов</p>
					</div>
					<div className={styles.featuresGrid}>
						<FeatureCard />
					</div>
				</div>
			</section>
		</>
	)
}
