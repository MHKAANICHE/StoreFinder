import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


const DetailView = () => {
  const[store, setStore]=useState({})
  const {id_store} = useParams()
  
  useEffect(()=>{
    console.log("id_store ",id_store)
    axios
    .get(`http://localhost:8000/api/${id_store}`)
    .then((res)=>{
      console.log(res.data)
      setStore(res.data)
    })
    .catch((err)=>{
      console.log('GetOne - Error ',err)
    })
  },[])

  return (
    <div>
        <Nav/>
        <br/>
        
        <h1>My Store {store.name}</h1>
        <h1>Store Number {store.number}</h1>
        <h1>{store.qualif ? "Open" : "Closed"}</h1>
        <br/>
        <Link to={`/stores/edit/${store._id}`}>Edit Store Details</Link>
    </div>
  )
}

export default DetailView