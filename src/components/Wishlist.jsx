import { useContext } from 'react';
import Context from './Context';
import WishlistItem from './WishlistItem';

function Wishlist () {

    // Hook used to access wishlist and modify it
    const context = useContext(Context)

    // Function that displays the items in the wishlist
    const showWishlistItem = () => context.wishList.map((item) => (
            <WishlistItem item={item} brand={item.brand} model={item.model} price={item.price} mainImage={item.mainImage} />
        )
    )

    return (
        <section className='wishlist'>
            {context.wishList.length !== 0 ? <h1>Stop wishing, start enjoying.</h1> : <h1>Sorry mate, you have no items in your wish list yet.</h1> }
            {showWishlistItem()}
            {/* {context.wishList.length === 0 ? <p className='details'>Sorry mate, you have no items in your wish list yet.</p> : showWishlistItem()} */}
            {context.wishList.length !== 0 ? <p className='details'>Wished items: {context.wishList.length}</p> : null}
        </section>
    )
}

export default Wishlist