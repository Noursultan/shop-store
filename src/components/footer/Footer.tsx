import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="px-2 pt-6 pb-6 bg-black text-white">
            <div>
                <h3 className="mb-1">О нас</h3>
                <ul className="font-thin flex gap-2">
                    <li><Link to='/about-us'>Миссия</Link></li>
                    <li><a href="mailto:bairafashion@gmail.com">Сотрудничество</a></li> 
                    <li><Link to='vacancies'>Вакансии</Link></li>
                </ul>
            </div>
            <div className="mt-9">
                <h3 className="mb-2">Контакты</h3>
                <ul className="flex gap-2 items-center">
                    <li><a href="!#"><img src="/src/assets/footer/email.svg" alt="email icon" /></a></li>
                    <li><a href="!#"><img src="/src/assets/footer/whatsapp.svg" alt="whatsapp icon" /></a></li>
                </ul>
            </div>
            <div className="mt-9">
                <h3 className="mb-2">Одежда</h3>
                <ul className="flex gap-2 items-center font-thin">
                    <li>Мужская</li>
                    <li>Женская</li>
                </ul>
            </div>
            <div className="mt-9">
                <h3>Адрес</h3>
                <div className="flex gap-1 mb-2">
                    <img src="/src/assets/footer/exclamation.svg" alt="exclamation mark" />
                    <p>Проспект Чуй, 120-122</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8899876842866!2d74.62530407583876!3d42.87516610240374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7bad14ab9c9%3A0xec03f7e9893eaab6!2s120%20Chuy%20Ave%2C%20Bishkek!5e0!3m2!1sen!2skg!4v1691110492113!5m2!1sen!2skg"
                    width="225"
                    height="96"
                    style={{ borderRadius: '8px', cursor: 'grab' }}
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    )
}

export default Footer
