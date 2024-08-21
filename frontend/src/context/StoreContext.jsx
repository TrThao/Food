import axios from "axios";
import { createContext, useEffect, useState } from "react"
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem,setCartItem] = useState({});
    const [token,setToken] = useState("");
    const url = "http://localhost:4000"
    const [food_list,setFoodList] = useState([])
    const addToCart = (itemId) => {
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem)
        {
            if(cartItem[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }
    const fetchFoodList = async () => {
        const res = await axios.get(url+"/api/food/list");
        console.log(res.data.data);
        setFoodList(res.data.data)
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
       food_list,
       cartItem,
       setCartItem,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
