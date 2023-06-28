import React from 'react'
import { Button } from './styles'
import axios from 'axios'

export default function ProductComponent(props: any) {
  const handlePost = async () => {
    try {
      const product = {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 10.00,
        quantity: 10,
    }
  
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/product`, product)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleGet = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/product`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleGetAll = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handlePut = async () => {
    try {
      const product = {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 5.00,
        quantity: 10,
    }
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/product/1`, product)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handlePatch = async () => {
    try {
      const product = {
        description: "Description 1",
        price: 10.00,
    }
      const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/product/1`, product)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/product/1`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }
  return (
    <div>
      <h2>Product Routes</h2>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Button onClick={handlePost}>POST</Button>
        <Button onClick={handleGet}>GET</Button>
        <Button onClick={handleGetAll}>GET ALL</Button>
        <Button onClick={handlePut}>PUT</Button>
        <Button onClick={handlePatch}>PATCH</Button>
        <Button onClick={handleDelete}>DELETE</Button>
      </div>
    </div>
  )
}
