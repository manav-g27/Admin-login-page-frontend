import React, { useEffect, useState } from 'react'
import axios from "axios";
import './index.css'
import Tokenexp from '../token_expired';
const HomePage = () => {

  const [name,setName] = useState("")
  const [err,setErr] = useState("")
  const receiver = async() =>{
    const token = localStorage.getItem('token')
    try
    {
      const {data}= await axios.get("/home",{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setName(data.name)
    }
    catch(err)
    {
      setErr(err.response.data);
    }
  }

 useEffect(()=>{
  receiver()
 },[])

  return (
    <div id='home-div'>
      <div>{err?<Tokenexp/>:<h1>Hello {name}</h1>}</div>
    </div>
  )
}

export default HomePage