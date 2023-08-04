import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer/Footer'

const index = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default index
