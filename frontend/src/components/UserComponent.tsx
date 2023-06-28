import React from 'react'
import { Button } from './styles'
import axios from 'axios'

export default function UserComponent(props: any) {

  const handlePost = async () => {
    try {
      const user = {
        id: 1,
        username: "John",
        email: "john@email.com",
        phone: "12345678900",
        address: "Rua 1, 123",
      }
  
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user`, user)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleGet = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleGetMe = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/me/user`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handleGetAll = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handlePut = async () => {
    try {
      const user = {
        id: 1,
        username: "John",
        email: "john@email.com",
        phone: "12345678900",
        address: "Rua 1, 123",
      }
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/user/1`, user)
      props.setData(res.data)
    } catch (error: any) {
      error.response.data && props.setData(error.response.data)
    }
  }

  const handlePatch = async () => {
    try {
      const user = {
        email: "john@email.com",
        phone: "12345678900",
        address: "Rua 1, 123",
      }
      const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/user/1`, user)
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
      <h2>User Routes</h2>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Button onClick={handlePost}>POST</Button>
        <Button onClick={handleGet}>GET</Button>
        <Button onClick={handleGetAll}>GET ALL</Button>
        <Button onClick={handleGetMe}>GET ME</Button>
        <Button onClick={handlePut}>PUT</Button>
        <Button onClick={handlePatch}>PATCH</Button>
        <Button onClick={handleDelete}>DELETE</Button>
      </div>
    </div>
  )
}
