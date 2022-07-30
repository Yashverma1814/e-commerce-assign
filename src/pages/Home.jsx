import axios from 'axios'
import { useDispatch } from 'react-redux'
import {products} from '../redux/action'
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'

export const Home = () => {

  const [product,setProduct] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    axios({
      method:"get",
      url:"http://localhost:8080/products"
    }).then(res=>setProduct(res.data))
  },[])
  dispatch(products(product));
  console.log(product)
  return (
    <div>
      <h2>Products</h2>
      <div className='product-cards'>
        {product.map((el)=>{
          return(
            <div key={el.id} className='productCard'>
              <ProductCard item = {el}/>
            </div>
          )
        })

        }
      </div>
    </div>
  )
}
