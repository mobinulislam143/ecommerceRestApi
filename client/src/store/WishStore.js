import {create} from 'zustand'
import axios from 'axios'
import { unauthorized } from '../utility/utility'

const WishStore = create((set) => ({
    isWishSubmit: false,

   SaveWishListRequest : async(productId)=>{
        try{
            set({isWishSubmit: true})
            let res = await axios.post('/api/saveWishList/',{productID: productId})
            return res.data['status'] === "success";
        }catch(e){
            unauthorized(e.response.status)
        }
        finally {
            set({isWishSubmit:false})
        }
    },
    
    WishList: null,
    WishCount: 0,
    WishTotal: 0,
    WishListRequest: async()=>{
        try{
            let res = await axios.get('/api/WishList')
            set({WishList: res.data['data']})
            set({WishCount: (res.data['data']).length})
        }catch(e){
            unauthorized(e.response.status)

        }
    },
    RemoveWishListRequest: async(productID) => {
        try{
            set({WishList: null})
            await axios.post(`/api/RemoveWishList/`, {"productID":productID});

        }
        catch(e){
            unauthorized(e.response.status)

        }
    }




}))

export default WishStore