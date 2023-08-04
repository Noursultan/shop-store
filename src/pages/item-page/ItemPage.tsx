import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getItem } from '../../redux/slices/ItemPageSlice'

const ItemPage = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const { itemData, load } = useAppSelector((state) => state.itemSlice)

    console.log('id', id)

    useEffect(() => {
        if (id) {
            dispatch(getItem(Number(id))); 
        }
    }, [dispatch, id]);

    console.log('item', itemData)
    
    return (
        <div>
            
        </div>
    )
}

export default ItemPage
