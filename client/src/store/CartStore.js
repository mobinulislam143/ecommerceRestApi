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
    CartTotal: 0,
    CartVatTotal:0,
    CartPayableTotal: 0,

    CartListRequest: async () => {
        try {
            let res = await axios.get('/api/CartList');
            set({ CartList: res.data['data'] });
            set({ CartCount: res.data['data'].length });
            let total = 0;
            let vat = 0;
            let payable = 0
            res.data['data'].forEach((item,i)=>{
                if(item['product']['discount']===true){
                    total = total+parseInt(item['qty'])*parseInt(item['product']['discountPrice'])
                }else{
                    total = total+parseInt(item['qty'])*parseInt(item['product']['price'])
                }
            })

            vat = total*0.05
            payable = vat+total
            set({CartTotal: total})
            set({CartVatTotal: vat})
            set({CartPayableTotal: payable})

        } catch (e) {
                unauthorized(e.response.status);
           
        } 
    },
    

    RemoveCartListRequest : async (cartId) => {
        try {
            set({CartList: null})
            const res = await axios.post('/api/RemoveCartList', { _id: cartId });
        } catch (error) {
            console.error('Error while removing cart list:', error);
            unauthorized(e.response.status)
        }
    },

    CreateInvoiceRequest: async()=>{
        try{
            set({isCartSubmit: true})
            let res =await axios.get(`/api/CreateInvoice`);
            window.location.href = res.data['data']['GatewayPageURL']
        }catch(err){
            unauthorized(err.response.status)
        }finally{
            set({isCartSubmit: false})
        }
    },

    InvoiceList: null,
    InvoiceListRequest: async()=>{
        try{
            let res =await axios.get(`/api/InvoiceListService`)
            set({InvoiceList: res.data['data']})

        }catch(e){
            unauthorized(e.response.status)
            
        }
    },

    InvoiceDetails: null,
    InvoiceDetailsRequest: async(id)=> {
        try{
            let res =await axios.get(`/api/invoiceProductList/${id}`);
            set({InvoiceDetails: res.data['data']})
        }catch(e){
            unauthorized(e.response.status)

        }
    }


}))

export default CartStore