import Item from './Item';
import GalleryHeader from './GalleryHeader';

function Gallery ({productsArray, setwishListcounter, wishListcounter}) {

    // Function that displays the available items
    const showItems = () => {

        return productsArray.map((item) => (
            <article>
                <Item brand={item.brand} model={item.model} color={item.color} price={item.price} stock={item.stock} imgUrl={item.imgUrl} wishListcounter={wishListcounter} setwishListcounter={setwishListcounter}/>
            </article>
            )
        )
    }   

    return (
        <section className='gallery'>
            <GalleryHeader />
            <section className='items-container'>
                {showItems()}
            </section>
        </section>
    )
}

export default Gallery