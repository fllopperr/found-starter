import type { ICategory } from '../../types/category.types'
import styles from './CategoryCard.module.css'

interface CategoryCardProps {
	category: ICategory
}

export function CategoryCard({ category }: CategoryCardProps) {
	const { icon: Icon, name, count } = category
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.iconWrapper}>
					<Icon fontSize='large' />
				</div>

				<div className={styles.text}>
					<h3 className={styles.title}>{name}</h3>
					<p className={styles.count}>{count} проектов</p>
				</div>
			</div>
		</div>
	)
}
