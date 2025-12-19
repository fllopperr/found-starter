import { Outlet } from 'react-router-dom'
import './assets/global.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import ScrollToTop from './utils/ScrollToTop'

const App = () => {
	return (
		<div className='wrapper'>
			<ScrollToTop />
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default App
