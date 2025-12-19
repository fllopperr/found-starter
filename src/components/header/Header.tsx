import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<NavLink to='/'>
				<h1 className={styles.logo}>FoundStarter</h1>
			</NavLink>
			<nav className={styles.nav}>
				<ul>
					<li>
						<NavLink to='/projects'>Проекты</NavLink>
					</li>
					<li>
						<a href='#creator'>Авторам</a>
					</li>
					<li>
						<a href='#investor'>Участникам</a>
					</li>
				</ul>
			</nav>
			<div className={styles.search}>
				<SearchIcon sx={{ color: ['#1d4ed8'] }} />
				<input type='text' placeholder='Найти проект...' />
			</div>
			<NavLink to='/create-project'>
				<button>Создать проект</button>
			</NavLink>
			<div className={styles.user}>
				<p>Войти</p>
				<PersonIcon
					sx={{ color: ['#ffffff'], fontSize: '35px' }}
					className={styles.icon}
				/>
			</div>
		</header>
	)
}
