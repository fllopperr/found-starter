import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to='/'>
				<h1 className={styles.logo}>FoundStarter</h1>
			</NavLink>

			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink
							to='/projects'
							className={({ isActive }) => (isActive ? styles.active : '')}
						>
							Проекты
						</NavLink>
					</li>
				</ul>
			</nav>

			<div className={styles.search}>
				<SearchIcon sx={{ color: '#1d4ed8' }} />
				<input
					type='text'
					placeholder='Найти проект...'
					aria-label='Поиск проекта'
				/>
			</div>

			<NavLink to='/create-project'>
				<button type='button'>Создать проект</button>
			</NavLink>

			<div className={styles.user}>
				<p>Войти</p>
				<PersonIcon
					sx={{ color: '#ffffff', fontSize: '35px' }}
					className={styles.icon}
				/>
			</div>
		</header>
	)
}
