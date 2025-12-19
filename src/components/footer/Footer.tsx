import TelegramIcon from '@mui/icons-material/Telegram'
import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.logoColumn}>
						<div className={styles.title}>FundStarter</div>
						<p className={styles.textGray}>
							Краудфандинговая платформа для воплощения креативных идей и
							инновационных проектов в жизнь.
						</p>
					</div>
					<div className={styles.column}>
						<h4 className={styles.title}>О компании</h4>
						<ul className={styles.textGray}>
							{['О нас', 'Как это работает', 'Команда', 'Карьера'].map(item => (
								<li key={item}>
									<a href='#' className={styles.link}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.column}>
						<h4 className={styles.title}>Помощь</h4>
						<ul className={styles.textGray}>
							{['FAQ', 'Поддержка', 'Правила', 'Блог'].map(item => (
								<li key={item}>
									<a href='#' className={styles.link}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.column}>
						<h4 className={styles.title}>Контакты</h4>
						<ul className={styles.textGray}>
							{[
								'Связаться с нами',
								'Политика конфиденциальности',
								'Условия использования',
							].map(item => (
								<li key={item}>
									<a href='#' className={styles.link}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.bottomBar}>
					<p className={styles.textGray}>
						© 2025 FundStarter. Все права защищены.
					</p>
					<div className={styles.socialLinks}>
						<a href='#' className={styles.socialIcon} aria-label='Telegram'>
							<TelegramIcon fontSize='small' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
