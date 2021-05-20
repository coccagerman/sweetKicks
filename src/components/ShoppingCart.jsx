import { useContext } from 'react';
import { Link } from "react-router-dom";
import Context from './Context';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart () {

    // Hook used to access context
    const context = useContext(Context)

    // Function that displays the items in the shopping cart
    const showShoppingCartItem = () => context.shoppingCart.map((item) => (
        <ShoppingCartItem shoppingCartItem={item} item={item.item} brand={item.item.brand} model={item.item.model} price={item.item.price} mainImage={item.item.mainImage} quantity={item.quantity} size={item.size}/>
        )
    )
    
    return (
        <section className='shoppingCart'>
            {context.shoppingCart.length !== 0 ?
                <>
                    <h1>Buy and walk your dreams.</h1>
                    {showShoppingCartItem()}
                    <div>
                        <div className='details'>
                            <p>Total items: {context.shoppingCart.length}</p>
                            <p>Total price: ${context.addNumberThousandSeparator(context.shoppingCart.map((item) => (item.item.price)).reduce((a, b) => a + b, 0))}</p>
                        </div>
                        <div className='btns'>
                            <button className='btn-tertiary'onClick={() => context.emptyShoppingCart()}>Empty cart</button>
                            <Link to={{
                                pathname:'/gallery',
                            }} >
                                <button className='btn-secondary'>Keep buying</button>
                            </Link>
                            <button className='btn-primary'>Check out</button>
                        </div>
                    </div>
                </> :
                <> 
                    <h1>Sorry mate, you have no items in your shopping cart yet.</h1>
                    <div className='btns'>
                        <Link to={{
                            pathname:'/gallery',
                        }} >
                            <button className='btn-primary'>Go to gallery</button>
                        </Link>
                    </div>
                </>
            }
        </section>
    )
}

export default ShoppingCart