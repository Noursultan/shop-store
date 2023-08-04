import background from './../../assets/login/background.jpg'

const Login = () => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
        height: '100vh',
        backgroundSize: 'cover'
    };

  return (
    <div className='text-center pt-20' style={backgroundStyle}>
        <h2 className='text-white text-xl mb-4'>Войти</h2>
        <form>
            <div className='flex flex-col gap-2 items-center'>
                <input 
                    type="text" 
                    placeholder='Введите свой логин' 
                    className='border-2 border-amber-700 rounded-2xl p-2 text-center w-52 focus:text-slate-700 outline-none' 
                />
                <input 
                    type="text" 
                    placeholder='Введите свой пароль' 
                    className='border-2 border-amber-700 rounded-2xl p-2 text-center w-52 focus:text-slate-700 outline-none'
                />
            </div>
            <button className='text-white border-2 border-amber-700 rounded-2xl p-2 bg-black bg-opacity-70 mt-1 w-36 
             focus:bg-amber-700 hover:bg-amber-700'>Войти
            </button>
        </form>
        <button className='text-white border-2 border-amber-700 rounded-2xl p-2 bg-black bg-opacity-70 mt-4 
            focus:bg-amber-700 hover:bg-amber-700'>
            Зарегистрироваться
        </button>
    </div>
  )
}

export default Login