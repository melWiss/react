import React , {useEffect, useState}from 'react'
import products from '../products';
import Product from '../components/Product'
import {Row , Col} from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../consts/api';

const HomeScreen = () => {
  const [products , setPoducts]= useState([])
  useEffect(()=>{
    const fetchProducts = async() =>{
      const {data} = await axios.get(`${BASE_URL}/api/products`)
      setPoducts(data)
    }
    fetchProducts()
  },[])
  return (
    <>
    <h1>latest products </h1>
    <Row>
        {products.map(product=>(
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product}></Product>
        </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen