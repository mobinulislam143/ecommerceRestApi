import axios from "axios";
import {create} from "zustand"
import { unauthorized } from "../utility/utility";

const CartStore = create((set) => ({
    isCartSubmit: false,

   
    CartSaveRequest: async(postBody, productID)=> {
        try{
            set({isCartSubmit: true})
            postBody.productID = productID
            let res = await axios.post(`/api/SaveCartList`, postBody)
            return res.data['status'] === "success";
        }catch(err){
            unauthorized(err.response.status)
        }finally{
            set({isCartSubmit: false})
        }
    }, 

    CartList: null,
    CartCount: 0,
    CartListRequest: async () => {
        try {
            let res = await axios.get('/api/CartList');
            set({ CartList: res.data['data'] });
            set({ CartCount: res.data['data'].length });
        } catch (e) {
            if (e.response && e.response.status) {
                unauthorized(e.response.status);
            } else {
                console.error("Error in CartListRequest:", e);
            }
        } finally {
            set({ isCartSubmit: false });
        }
    },
    

    RemoveCartListRequest : async (cartId, productId) => {
        try {
            const res = await axios.post('/api/RemoveCartList', { _id: cartId, productID: productId });
            console.log('RemoveCartListRequest Response:', res.data);
            return res.data['status'] === 'success';
        } catch (error) {
            console.error('Error while removing cart list:', error);
            throw error;
        }
    },

    CreateInvoiceRequest: async()=>{
        try{
            set({isCartSubmit: true})
            let res =await axios.get(`/api/CreateInvoice`);
            window.location.href = res.data['data']['GatewayPageURL']
        }catch(err){
            unauthorized(e.response.status)
        }finally{
            set({isCartSubmit: false})
        }
    }


}))

export default CartStore