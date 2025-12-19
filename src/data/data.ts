import type { IProject } from '../types/project.types'

export const Projects: IProject[] = [
	{
		id: 1,
		title: 'Умный дом',
		category: 'Технологии',
		description:
			'Полная система автоматизации дома: управление освещением, климатом и безопасностью.',
		price: 3500000,
		investor: 150,
		collected: 1500000,
	},
	{
		id: 2,
		title: 'Игровая приставка',
		category: 'Игры',
		description:
			'Современная консоль с мощной графикой и поддержкой VR, для полного погружения в игры.',
		price: 2500000,
		investor: 150,
		collected: 1500000,
	},
	{
		id: 3,
		title: 'Умный плеер',
		category: 'Музыка',
		description:
			'Носимый плеер с высокоточными датчиками для контроля здоровья и звука.',
		price: 1000000,
		investor: 150,
		collected: 500000,
	},
	{
		id: 4,
		title: 'Умный чайник',
		category: 'Технологии',
		description:
			'Электрочайник с точным поддержанием температуры и дистанционным управлением.',
		price: 500000,
		investor: 150,
		collected: 250000,
	},
]
