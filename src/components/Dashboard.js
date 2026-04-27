import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import ProductCard from './ProductCard'

const Dashboard = () => {
    const [productList,setProductList] = useState([])
    const [filtered, setFiltered] = useState([])
    const [category,setCategory] = useState("all")
    useEffect(()=> {
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://fakestoreapi.com/products/");
                setProductList(res?.data)
                setFiltered(res?.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    useEffect(()=>{
        if(category === "all"){
            setFiltered(productList)
        }else{
            setFiltered(productList.filter((p)=>p.category === category))
        }
    },[category,productList])

    if (!productList.length) return <p>Loading...</p>;  


  return (
    <>  
        <Header/>
        <div className='px-6 pt-4 flex justify-end'>
            <select
            className="p-2 border rounded-md bg-white shadow-sm"
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="all">All</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            </select>
        </div>
        <div className="grid grid-cols-5 gap-4 p-4">
        {filtered.map((item) => (
            <ProductCard key={item.id} item={item}/>
        ))}
        </div>
    </>

  )
}

export default Dashboard