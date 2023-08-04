import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeSidebar = () => {
        setIsMenuOpen(false)
    }

  return (
    <div className='text-center flex justify-between bg-amber-900 p-2'>
        <div>
            <Link to='/'>
                <div className='h-10 w-10'>
                    <img src='/src/assets/logo.svg' alt="logo" className='rounded-full' />
                </div>
            </Link>
            <ul className='hidden md:block'>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/about-us'>О нас</Link></li>
                <li><Link to='/categories'>Категории</Link></li>
                <li><Link to='/vacancies'>Вакансии</Link></li>
            </ul>
        </div>
        <Link className='hidden md:block' to='/login' onClick={closeSidebar}>Войти</Link>
        <Link className='hidden md:block' to='/register' onClick={closeSidebar}>Зарегистрироваться</Link>
        <img className='md:hidden cursor-pointer' src="/src/assets/burber_menu.svg" alt="menu-btn" onClick={toggleMenu} />
        {isMenuOpen && <nav className='md:hidden absolute top-0 right-0 bg-slate-600 p-4 text-right h-screen w-2/3'>
            <img src="/src/assets/mobile-exit.svg" alt="exit button" onClick={toggleMenu} className='float-right cursor-pointer' />
            <ul className='mt-12 text-white text-lg'>
                <li className='mb-2 hover:text-xl' onClick={closeSidebar}><Link to='/'>Главная</Link></li>
                <li className='mb-2 hover:text-xl' onClick={closeSidebar}><Link to='/categories'>Категории</Link></li>
                <li className='mb-2 hover:text-xl' onClick={closeSidebar}><Link to='/about-us'>О нас</Link></li>
                <li className='mb-2 hover:text-xl' onClick={closeSidebar}><Link to='/vacancies'>Вакансии</Link></li>
            </ul>
            <Link to='/login' className='text-white text-lg hover:text-xl' onClick={closeSidebar}>Войти</Link>
        </nav>}
    </div>
  )
}

export default Navbar 