import { create } from 'zustand'
import axios from 'axios'
import { getEmail, setEmail, unauthorized } from '../utility/utility'
import Cookie from "js-cookie"

const BaseUrl = "https://ecommerce-rest-pzwl6djjy-mahi17.vercel.app"
 
const UserStore = create((set) =>({

    isLogin:()=>{
        return !!Cookie.get('token')
    },

    LoginFormData: {email: ""},
    LoginFormOnChange:(name, value)=>{
        set((state) => ({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },
    // mobinulislammahi@gmail.com
    isFormSubmit:false,
    UserOtpRequest: async(email) => {
       try{
        set({isFormSubmit: true})
        await axios.get(`/api/userOtp/${email}`)
        setEmail(email)
        set({isFormSubmit: false})
        return res.status === 'success'

       }catch(err){
        set({isFormSubmit: false})
        return false;
       }
    },

    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }
        }))
    },

    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email = getEmail();
        let res = await axios.get(`/api/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },

    UserLogoutRequest: async()=> {
        set({isFormSubmit: true})
        let res = await axios.get(`/api/UserLogout`)
        set({isFormSubmit: false})
        return res.data['status'] === "success";
    },

   
    

    ProfileForm:{
        cus_add:"",
        cus_city:"",
        cus_country:"",
        cus_fax:"",
        cus_name:"",
        cus_phone:"",
        cus_postcode:"",
        cus_state:"",
        ship_add:"",
        ship_city:"",
        ship_country:"",
        ship_name:"",
        ship_phone:"",
        ship_postcode:"",
        ship_state:""
    },
    ProfileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },


    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try {
            let res=await axios.get(`/api/ReadProfile`);
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data'][0]})
                set({ProfileForm:res.data['data'][0]})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },
 
    ProfileSaveRequest:async(PostBody)=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.post(`/api/UpdateProfile`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    }



}))
export default UserStore