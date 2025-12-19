import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useState } from 'react'
import styles from './CreateProjectPage.module.css'

// Типы для данных формы
interface IReward {
	id: number
	amount: string
	title: string
	description: string
	delivery: string
	quantity: string
}

interface IFormData {
	// Step 1
	title: string
	shortDescription: string
	category: string
	location: string
	// Step 2
	fullDescription: string
	// Step 3
	goalAmount: string
	duration: string
	fundingType: 'all-or-nothing' | 'flexible'
	// Step 4
	rewards: IReward[]
}

const STEPS = [
	{ id: 1, label: 'Основная информация' },
	{ id: 2, label: 'Описание и медиа' },
	{ id: 3, label: 'Финансирование' },
	{ id: 4, label: 'Вознаграждение' },
]

export const CreateProjectPage = () => {
	const [currentStep, setCurrentStep] = useState(1)

	// Общее состояние формы
	const [formData, setFormData] = useState<IFormData>({
		title: '',
		shortDescription: '',
		category: '',
		location: '',
		fullDescription: '',
		goalAmount: '',
		duration: '',
		fundingType: 'all-or-nothing',
		rewards: [
			{
				id: 1,
				amount: '',
				title: '',
				description: '',
				delivery: '',
				quantity: '',
			},
		],
	})

	// Хендлеры
	const handleNext = () => {
		if (currentStep < 4) setCurrentStep(prev => prev + 1)
	}

	const handleBack = () => {
		if (currentStep > 1) setCurrentStep(prev => prev - 1)
	}

	const handleChange = <K extends keyof IFormData>(
		field: K,
		value: IFormData[K]
	) => {
		setFormData(prev => ({ ...prev, [field]: value }))
	}

	// Логика для вознаграждений
	const updateReward = (id: number, field: keyof IReward, value: string) => {
		setFormData(prev => ({
			...prev,
			rewards: prev.rewards.map(r =>
				r.id === id ? { ...r, [field]: value } : r
			),
		}))
	}

	const addReward = () => {
		const newId = Math.max(...formData.rewards.map(r => r.id), 0) + 1
		setFormData(prev => ({
			...prev,
			rewards: [
				...prev.rewards,
				{
					id: newId,
					amount: '',
					title: '',
					description: '',
					delivery: '',
					quantity: '',
				},
			],
		}))
	}

	const removeReward = (id: number) => {
		setFormData(prev => ({
			...prev,
			rewards: prev.rewards.filter(r => r.id !== id),
		}))
	}

	// --- Рендер шагов ---

	const renderStep1 = () => (
		<div className={styles.stepContainer}>
			<h2 className={styles.stepTitle}>Основная информация</h2>
			<p className={styles.stepSubtitle}>
				Начните с базовых деталей вашего проекта
			</p>

			<div className={styles.formGroup}>
				<label className={styles.label}>Название проекта *</label>
				<input
					className={styles.input}
					placeholder='Введите название проекта'
					value={formData.title}
					onChange={e => handleChange('title', e.target.value)}
				/>
				<span className={styles.helperText}>Максимум 60 символов</span>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Краткое описание *</label>
				<input
					className={styles.input}
					placeholder='Одна строка о вашем проекте'
					value={formData.shortDescription}
					onChange={e => handleChange('shortDescription', e.target.value)}
				/>
				<span className={styles.helperText}>Максимум 135 символов</span>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Категория *</label>
				<select
					className={styles.select}
					value={formData.category}
					onChange={e => handleChange('category', e.target.value)}
				>
					<option value=''>Выберите категорию</option>
					<option value='tech'>Технологии</option>
					<option value='art'>Искусство</option>
				</select>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Местоположение *</label>
				<input
					className={styles.input}
					placeholder='Город, Страна'
					value={formData.location}
					onChange={e => handleChange('location', e.target.value)}
				/>
			</div>
		</div>
	)

	const renderStep2 = () => (
		<div className={styles.stepContainer}>
			<h2 className={styles.stepTitle}>Описание и медиа</h2>
			<p className={styles.stepSubtitle}>
				Расскажите подробнее о вашем проекте и загрузите медиа
			</p>

			<div className={styles.formGroup}>
				<label className={styles.label}>Обложка проекта *</label>
				<div className={styles.dropzone}>
					<span className={styles.dropzoneText}>
						Перетащите изображение или нажмите для загрузки
					</span>
					<span className={styles.dropzoneSub}>
						Рекомендуемый размер: 1920x1080px
					</span>
				</div>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Полное описание *</label>
				<textarea
					className={styles.textarea}
					placeholder='Расскажите о вашем проекте подробно...'
					rows={6}
					value={formData.fullDescription}
					onChange={e => handleChange('fullDescription', e.target.value)}
				/>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Дополнительные изображение</label>
				<button className={styles.addButtonBasic}>
					<AddIcon fontSize='small' /> Добавить изображение
				</button>
			</div>
		</div>
	)

	const renderStep3 = () => (
		<div className={styles.stepContainer}>
			<h2 className={styles.stepTitle}>Финансирование</h2>
			<p className={styles.stepSubtitle}>
				Установите цель финансирования и сроки
			</p>

			<div className={styles.formGroup}>
				<label className={styles.label}>Цель финансирование *</label>
				<div className={styles.inputWrapper}>
					<input
						className={styles.input}
						placeholder='500000'
						value={formData.goalAmount}
						onChange={e => handleChange('goalAmount', e.target.value)}
					/>
					<span className={styles.currencyIcon}>₽</span>
				</div>
				<span className={styles.helperText}>Минимальная сумма: 50,000 ₽</span>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Длительность кампании *</label>
				<select
					className={styles.select}
					value={formData.duration}
					onChange={e => handleChange('duration', e.target.value)}
				>
					<option value=''>30 дней</option>
					<option value='60'>60 дней</option>
				</select>
			</div>

			<div className={styles.formGroup}>
				<label className={styles.label}>Тип финансирования *</label>

				<div
					className={`${styles.radioCard} ${
						formData.fundingType === 'all-or-nothing'
							? styles.radioCardActive
							: ''
					}`}
					onClick={() => handleChange('fundingType', 'all-or-nothing')}
				>
					<div className={styles.radioIndicator}>
						{formData.fundingType === 'all-or-nothing' && (
							<div className={styles.radioDot} />
						)}
					</div>
					<div>
						<div className={styles.radioTitle}>Все или ничего</div>
						<div className={styles.radioDesc}>
							Средства передаются только при достижении цели
						</div>
					</div>
				</div>

				<div
					className={`${styles.radioCard} ${
						formData.fundingType === 'flexible' ? styles.radioCardActive : ''
					}`}
					onClick={() => handleChange('fundingType', 'flexible')}
				>
					<div className={styles.radioIndicator}>
						{formData.fundingType === 'flexible' && (
							<div className={styles.radioDot} />
						)}
					</div>
					<div>
						<div className={styles.radioTitle}>Гибкое финансирование</div>
						<div className={styles.radioDesc}>
							Вы получаете собранные средства независимо от достижения цели
						</div>
					</div>
				</div>
			</div>

			<div className={styles.infoBox}>
				<strong>Комиссия платформы</strong>
				<br />
				5% от собранной суммы + 3% комиссия платежной системы
			</div>
		</div>
	)

	const renderStep4 = () => (
		<div className={styles.stepContainer}>
			<h2 className={styles.stepTitle}>Вознаграждение</h2>
			<p className={styles.stepSubtitle}>
				Создайте привлекательные вознаграждения для инвесторов
			</p>

			{formData.rewards.map((reward, index) => (
				<div key={reward.id} className={styles.rewardCard}>
					<div className={styles.rewardHeader}>
						<span>Вознаграждение #{index + 1}</span>
						<button
							className={styles.deleteBtn}
							onClick={() => removeReward(reward.id)}
							disabled={formData.rewards.length === 1}
						>
							<DeleteOutlineIcon
								color={formData.rewards.length === 1 ? 'disabled' : 'error'}
							/>
						</button>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.label}>Сумма взноса *</label>
						<div className={styles.inputWrapper}>
							<input
								className={styles.input}
								placeholder='1000'
								value={reward.amount}
								onChange={e =>
									updateReward(reward.id, 'amount', e.target.value)
								}
							/>
							<span className={styles.currencyIcon}>₽</span>
						</div>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.label}>Название *</label>
						<input
							className={styles.input}
							placeholder='Название...'
							value={reward.title}
							onChange={e => updateReward(reward.id, 'title', e.target.value)}
						/>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.label}>Описание *</label>
						<input
							className={styles.input}
							placeholder='Что получит инвестор за эту сумму?'
							value={reward.description}
							onChange={e =>
								updateReward(reward.id, 'description', e.target.value)
							}
						/>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.label}>Предполагаемая доставка *</label>
						<input
							className={styles.input}
							placeholder='-------- ---- г.'
							type='date'
							value={reward.delivery}
							onChange={e =>
								updateReward(reward.id, 'delivery', e.target.value)
							}
						/>
					</div>

					<div className={styles.formGroup}>
						<label className={styles.label}>Количество (опционально)</label>
						<input
							className={styles.input}
							placeholder='Неограничено'
							value={reward.quantity}
							onChange={e =>
								updateReward(reward.id, 'quantity', e.target.value)
							}
						/>
					</div>
				</div>
			))}

			<button className={styles.addRewardBtn} onClick={addReward}>
				<AddIcon fontSize='small' /> Добавить вознаграждение
			</button>
		</div>
	)

	return (
		<div className={styles.page}>
			{/* Header / Stepper */}
			<div className={styles.header}>
				<div className={styles.headerContent}>
					<div className={styles.pageTitle}>Создание проекта</div>

					<div className={styles.stepper}>
						{STEPS.map((step, index) => {
							const isActive = step.id === currentStep
							const isCompleted = step.id < currentStep
							const isLast = index === STEPS.length - 1

							return (
								<div key={step.id} className={styles.stepItemWrapper}>
									<div className={styles.stepItem}>
										<div
											className={`${styles.stepCircle} ${
												isActive || isCompleted ? styles.stepCircleActive : ''
											}`}
										>
											{step.id}
										</div>
										<span
											className={`${styles.stepLabel} ${
												isActive || isCompleted ? styles.stepLabelActive : ''
											}`}
										>
											{step.label}
										</span>
									</div>
									{!isLast && (
										<div
											className={`${styles.stepLine} ${
												isCompleted ? styles.stepLineActive : ''
											}`}
										/>
									)}
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className={styles.main}>
				<div className={styles.container}>
					{currentStep === 1 && renderStep1()}
					{currentStep === 2 && renderStep2()}
					{currentStep === 3 && renderStep3()}
					{currentStep === 4 && renderStep4()}

					<div className={styles.footer}>
						<button
							className={styles.btnBack}
							onClick={handleBack}
							disabled={currentStep === 1}
						>
							Назад
						</button>

						<span className={styles.stepIndicator}>Шаг {currentStep} из 4</span>

						<button
							className={`${styles.btnNext} ${
								currentStep === 4 ? styles.btnSubmit : ''
							}`}
							onClick={handleNext}
						>
							{currentStep === 4 ? 'Отправить на проверку' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
