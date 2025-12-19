import BoltIcon from '@mui/icons-material/Bolt'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SecurityIcon from '@mui/icons-material/Security'
import VisibilityIcon from '@mui/icons-material/Visibility'
import type { FC } from 'react'
import styles from './FeatureCard.module.css'

interface Feature {
	icon: JSX.Element
	title: string
	description: string
}

const features: Feature[] = [
	{
		icon: <SecurityIcon fontSize='large' className={styles.icon} />,
		title: 'Безопасность',
		description:
			'Все платежи защищены. Средства передаются только после успешного финансирования.',
	},
	{
		icon: <VisibilityIcon fontSize='large' className={styles.icon} />,
		title: 'Прозрачность',
		description:
			'Полная отчётность по всем проектам. Отслеживайте прогресс в реальном времени.',
	},
	{
		icon: <BoltIcon fontSize='large' className={styles.icon} />,
		title: 'Быстрый запуск',
		description:
			'Создайте кампанию за 10 минут. Простой интерфейс и понятные инструкции.',
	},
	{
		icon: <CheckCircleIcon fontSize='large' className={styles.icon} />,
		title: 'Поддержка 24/7',
		description:
			'Наша команда всегда готова помочь вам на любом этапе проекта.',
	},
]

export const FeatureCard: FC = () => {
	return (
		<ul className={styles.list}>
			{features.map((feature, index) => (
				<li key={index} className={styles.item}>
					<div className={styles.card}>
						<div className={styles.iconWrapper}>{feature.icon}</div>
						<h3 className={styles.title}>{feature.title}</h3>
						<p className={styles.description}>{feature.description}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
