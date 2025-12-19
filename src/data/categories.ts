import HomeIcon from '@mui/icons-material/Home'
import TechIcon from '@mui/icons-material/Memory'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import type { ICategory } from '../types/category.types'
import { Projects } from './data'

function countProjects(categoryName: string) {
	return Projects.filter(p => p.category === categoryName).length
}

export const Categories: ICategory[] = [
	{ name: 'Технологии', icon: TechIcon, count: countProjects('Технологии') },
	{ name: 'Игры', icon: SportsEsportsIcon, count: countProjects('Игры') },
	{ name: 'Музыка', icon: MusicNoteIcon, count: countProjects('Музыка') },
	{ name: 'Дом', icon: HomeIcon, count: countProjects('Дом') },
]
