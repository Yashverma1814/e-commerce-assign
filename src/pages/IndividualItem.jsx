import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const IndividualItem = () => {

    const [product,setProduct] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        console.log("inside useEffect")
        axios({
          method:"get",
          url:"http://localhost:8080/products"
        }).then(res=>setProduct(res.data))
      },[])

  return (
    <div>
        <>product {id}</>
        {   
            product.filter((elem)=>{
                return elem.id===id
            }).map((el)=>{
                <div key={el.id}>
                    <h2>Name : {el.title}</h2>
                    <h4>Description : {el.desc}</h4>
                    <h4>Price : {el.price}</h4>
                    <h4>Rating : {el.rating}</h4>
                    <h4>Category : {el.category}</h4>
                </div>
            })
        }
    </div>
  )
}
