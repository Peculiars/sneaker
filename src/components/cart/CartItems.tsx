import { decrementQuantity, incrementQuantity, clearCart, removeItem } from "@/store/reducers/cartReducer";
import { UseDispatch, useSelector } from "react-redux";
const CartItems = () =>{

    const productData = useSelector((state)=>state.cart.cartState)
    return(
        <aside>

        </aside>
    )
}

export default CartItems