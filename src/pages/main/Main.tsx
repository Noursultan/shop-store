import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getClothes } from '../../redux/slices/allOutfitSlice';
import { Link } from 'react-router-dom';

const Main = () => {
  const clothesData = useAppSelector((state) => state.allOutfitSlice.clothesData);
  const [expand, setExpand] = useState(false)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  const handleExpand = () => {
    setExpand(true)
  }

  return (
    <div className='bg-neutral-50 p-2'>

        <div className='text-center mb-3'>
            <div>
            <img src="/src/assets/logo.svg" alt="logo" className='rounded-full p-2 h-40 w-40 mx-auto' />
            </div>
            <h1 className=' text-amber-950 font-bold'>Baira</h1>
            <p className=' text-amber-900 font-bold w-full max-w-2xl mx-auto'>Одежда с этнической принадлежностью кыргызских кочевников и других культур Средней Азии</p>
            <div className='mt-4 flex align-middle justify-center'>
            <input type="text" placeholder='Поиск одежды' className='w-full max-w-sm h-9 bg-slate-500 text-white p-2 rounded-s-lg focus:outline-none font-semibold' />
            <button className='w-10 h-9 bg-amber-900 rounded-e-lg'><img src="/src/assets/search.svg" alt="search logo" className='mx-auto' /></button>
            </div>
        </div>

        {clothesData.length > 0 && (
            <div>
                {clothesData.slice(0, 10).map((item) => (
                    <div key={item.id} className='mt-7'>
                        <Link to={`/item-page/${item.id}`}><img src={item.img} alt={item.title} className='h-72 w-full max-w-md mx-auto ees:h-96' /></Link>
                        <h2 className='text-black text-center m-1 font-semibold w-full max-w-md mx-auto'>{item.title}</h2>
                        <div className='flex flex-column gap-1 justify-center'>
                            <p className='font-bold'>{item.price}</p><span>сом</span>
                        </div>
                        <div className='flex justify-center mt-1'>
                            <button className='p-3 bg-zinc-800 text-white w-60 bb:w-full max-w-sm'>Добавить в корзину</button>
                        </div>
                        <div className='flex justify-center mt-1 text-center'>
                            <Link to={`/item-page/${item.id}`} className='p-3 bg-zinc-800 text-white w-60 bb:w-full max-w-sm'>Подробнее</Link>
                        </div>
                    </div> 
                ))}
            </div>
        )}

        {expand === false && <div className='text-center mt-4 pb-5'>
            <button className='p-3 bg-orange-600 text-white w-60 bb:w-full max-w-sm' onClick={handleExpand}>Смотреть все</button>
        </div>}

        {expand === true && clothesData && (
            <div>
                {clothesData.slice(10).map((item) => (
                    <div key={item.id} className='mt-7'>
                        <Link to={`/item-page/${item.id}`}><img src={item.img} alt={item.title} className='h-72 w-full max-w-md mx-auto ees:h-96' /></Link>
                        <h2 className='text-black text-center m-1 font-semibold w-full max-w-md mx-auto'>{item.title}</h2>
                        <div className='flex flex-column gap-1 justify-center'>
                            <p className='font-bold'>{item.price}</p><span>сом</span>
                        </div>
                        <div className='flex justify-center mt-1'>
                            <button className='p-3 bg-zinc-800 text-white w-60 bb:w-full max-w-sm'>Добавить в корзину</button>
                        </div>
                        <div className='flex justify-center mt-1 text-center'>
                            <Link to={`/item-page/${item.id}`} className='p-3 bg-zinc-800 text-white w-60 bb:w-full max-w-sm'>Подробнее</Link>
                        </div>
                    </div> 
                ))}
            </div>
        )}

    </div>
  )
}

export default Main;
