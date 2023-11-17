import { memo } from 'react'
import './itemListContainer.css'
import { useAsync } from '../../hooks/useAsync'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'


const MemoizedItemList = memo(ItemList)

const ItemListContainer = () => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <div><h1>Loading...</h1>
        <div id='loader-wrapper'>
        <div id="loader"></div>
        <div className='loader-section section-left'></div>
        <div className='loader-section section-right'></div>
         </div></div>        
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }

    return (
        <div className='listado'>         
            <MemoizedItemList products={products}/>
        </div>
    )
}

export default ItemListContainer