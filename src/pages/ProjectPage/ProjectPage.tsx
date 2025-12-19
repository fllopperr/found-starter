import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import GroupIcon from '@mui/icons-material/Group'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useParams } from 'react-router-dom'
import { Projects } from '../../data/data'
import type { IProject } from '../../types/project.types'
import styles from './ProjectPage.module.css'

export const ProjectPage = () => {
	const { id } = useParams<{ id: string }>()

	const project: IProject | undefined = Projects.find(
		p => p.id === parseInt(id || '1', 10)
	)

	if (!project) {
		return (
			<div style={{ padding: 40, textAlign: 'center' }}>Проект не найден</div>
		)
	}

	const percent = Math.floor((project.collected / project.price) * 100)

	const rewards = [
		{
			price: 1000,
			title: 'Базовый комплект',
			desc: 'Один продукт + доставка по России + благодарность. Доставка: Апрель 2025',
			backers: 243,
		},
		{
			price: 5000,
			title: 'Продвинутый набор',
			desc: 'Расширенный комплект сенсоров + хаб управления. Доставка: Май 2025',
			backers: 115,
		},
		{
			price: 15000,
			title: 'Полный дом',
			desc: 'Максимальная комплектация для 3-комнатной квартиры под ключ.',
			backers: 42,
		},
	]

	return (
		<main className={styles.page}>
			<div className={styles.container}>
				<div className={styles.flexContainer}>
					<div className={styles.mainContent}>
						<div className={styles.projectImageWrapper}>
							<img
								src='/1.jpg'
								alt={project.title}
								className={styles.projectImage}
							/>
						</div>

						<div className={styles.tabs}>
							<button className={`${styles.tab} ${styles.tabActive}`}>
								Описание
							</button>
							<button className={styles.tab}>Обновление (1)</button>
							<button className={styles.tab}>Комментарии (1)</button>
						</div>

						<div className={styles.contentBody}>
							<h3 className={styles.sectionTitle}>О проекте</h3>
							<div className={styles.textBlock}>
								<p>
									Наш умный дом — это не просто набор гаджетов. Это
									интегрированная система, которая понимает ваши привычки,
									предугадывает желания и создаёт идеальный микроклимат в каждой
									комнате.
								</p>
								<br />
								<strong>Ключевые возможности:</strong>
								<ul>
									<li>Автоматическая регулировка температуры и освещения</li>
									<li>Голосовое управление на русском языке</li>
									<li>Интеграция с популярными smart-устройствами</li>
									<li>Мобильное приложение для iOS и Android</li>
									<li>Экономия до 40% на коммунальных платежах</li>
								</ul>
							</div>

							<h3 className={styles.sectionTitle}>
								Как мы будем использовать средства
							</h3>
							<div className={styles.budgetList}>
								<div className={styles.budgetItem}>
									<span>Разработка ПО</span>
									<span>40%</span>
								</div>
								<div className={styles.budgetItem}>
									<span>Производство</span>
									<span>30%</span>
								</div>
								<div className={styles.budgetItem}>
									<span>Маркетинг</span>
									<span>20%</span>
								</div>
								<div className={styles.budgetItem}>
									<span>Логистика</span>
									<span>10%</span>
								</div>
							</div>

							<h3 className={styles.sectionTitle}>Команда проекта</h3>
							<p className={styles.textBlock}>
								Наша команда состоит из 15 специалистов с опытом работы в
								ведущих технологических компаниях. Мы уже 3 года разрабатываем
								решения для умного дома и готовы представить вам результат нашей
								работы.
							</p>
						</div>
					</div>

					<aside className={styles.sidebar}>
						<div className={styles.fundingCard}>
							<div className={styles.fundingHeader}>
								<div className={styles.currentAmount}>
									{project.collected.toLocaleString('ru-RU')} ₽
								</div>
								<div className={styles.targetAmount}>
									из {project.price.toLocaleString('ru-RU')} ₽
									<span className={styles.targetHighlight}>40% от цели</span>
								</div>
							</div>

							<div className={styles.progressBar}>
								<div
									className={styles.progressFill}
									style={{ width: `${percent > 100 ? 100 : percent}%` }}
								/>
							</div>

							<div className={styles.statsGrid}>
								<div className={styles.statItem}>
									<span className={styles.statValue}>152</span>
									<span className={styles.statLabel}>инвестора</span>
								</div>
								<div className={styles.statItem}>
									<span className={styles.statValue}>25</span>
									<span className={styles.statLabel}>дней осталось</span>
								</div>
							</div>

							<button className={styles.mainButton}>Поддержать проект</button>

							<div className={styles.secondaryActions}>
								<button className={styles.secondaryButton}>Поддержать</button>
								<button className={styles.secondaryButton}>Поделиться</button>
							</div>
						</div>

						<div className={styles.projectInfo}>
							<div className={styles.badge}>
								{project.category || 'Технологии'}
							</div>

							<div>
								<h1 className={styles.title}>{project.title}</h1>
								<p className={styles.subtitle}>
									Революционная система управления домом с искусственным
									интеллектом, которая делает вашу жизнь комфортнее и экономит
									энергию.
								</p>
							</div>

							<div className={styles.authorBlock}>
								<div className={styles.avatar}></div>
								<div className={styles.authorInfo}>
									<span className={styles.authorName}>Александр Алексей</span>
									<span className={styles.authorSub}>Создатель 3 проекта</span>
								</div>
							</div>

							<div className={styles.metaInfo}>
								<div className={styles.metaItem}>
									<LocationOnIcon fontSize='small' style={{ fontSize: 18 }} />
									Москва, Россия
								</div>
								<div className={styles.metaItem}>
									<CalendarTodayIcon
										fontSize='small'
										style={{ fontSize: 18 }}
									/>
									Запущен 7 декабря 2025
								</div>
							</div>
						</div>

						<div>
							<h3 className={styles.rewardsSectionTitle}>Вознаграждение</h3>
							{rewards.map((reward, index) => (
								<div key={index} className={styles.rewardCard}>
									<div className={styles.rewardHeader}>
										<span className={styles.rewardPrice}>{reward.price} ₽</span>
										<span className={styles.rewardBackers}>
											<GroupIcon style={{ fontSize: 16 }} /> {reward.backers}
										</span>
									</div>
									<div className={styles.rewardTitle}>{reward.title}</div>
									<div className={styles.rewardDesc}>{reward.desc}</div>
									<button className={styles.rewardButton}>Выбрать</button>
								</div>
							))}
						</div>
					</aside>
				</div>
			</div>
		</main>
	)
}
