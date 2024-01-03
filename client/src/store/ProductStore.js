import {create} from 'zustand'
import axios from 'axios'

const ProductStore = create((set) =>({
    BrandList:[],
    CategoryList:[],
    SliderList:[],
    ListByBrand:[],
    ListByCategory:[],
    ListByRemark:[],
    ListBySmilier:[],
    Details:[],
    ListByKeyword:[],
    ReviewList:[],
    ProductList:[],



    ProductListRequest:async() =>{
        let res = await axios.get('/api/AllProduct')
        if(res.data['status'] === 'success'){
            set({ProductList:res.data['data']})
        }
    },
    BrandListRequest:async() =>{
        let res = await axios.get('/api/ProductBrandList')
        if(res.data['status'] === 'success'){
            set({BrandList:res.data['data']})
        }
    },
    CategoryListRequest:async()=>{
        let res = await axios.get('/api/ProductCategoryList')
        if(res.data['status']==='success'){
            set({CategoryList:res.data['data']})
        }
    },
    SliderListRequest:async()=>{
        let res = await axios.get('/api/ProductSliderList')
        if(res.data['status']==='success'){
            set({SliderList:res.data['data']})
        }
    },
    ListByBrandRequest:async(BrandID)=>{
        let res = await axios.get(`/api/ProductListByBrand/${BrandID}`)
        if(res.data['status']==='success'){
            set({ListByCategory:res.data['data']})
        }
    },
    ListByRemarkRequest:async(Remark)=>{
        let res = await axios.get(`/api/ProductListByRemark/${Remark}`)
        if(res.data['status']==='success'){
            set({ListByRemark:res.data['data']})
        }
    },
    ListBySmilierRequest:async(CategoryID)=>{
        let res = await axios.get(`/api/ProductListBySmilier/${CategoryID}`)
        if(res.data['status']==='success'){
            set({ListBySmilier:res.data['data']})
        }
    },
    DetailsRequest:async(ProductID)=>{
        let res = await axios.get(`/api/ProductDetails/${ProductID}`)
        if(res.data['status']==='success'){
            set({Details:res.data['data']})
        }
    },
    ListByKeywordRequest:async(Keyword)=>{
        let res = await axios.get(`/api/ProductListByKeyword/${Keyword}`)
        if(res.data['status']==='success'){
            set({ListByKeyword:res.data['data']})
        }
    },
    ReviewListRequest:async(ProductID)=>{
        let res = await axios.get(`/api/ProductReviewList/${ProductID}`)
        if(res.data['status']==='success'){
            set({ReviewList:res.data['data']})
        }
    },
}))

export default ProductStore