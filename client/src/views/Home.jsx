import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../Home.css'; 

const Home = () => {

  const[allStores, setAllStores]=useState([]);
  const[refresh, setRefresh]=useState(false)

  useEffect(()=>{
    axios
    .get('http://localhost:8000/api/findAll')
    .then((res)=>{
      // console.log(res.data)
      const sortedStores = res.data.sort((a, b) => a.number - b.number);
      setAllStores(sortedStores)
    })
    .catch((err)=>{
      console.log('Home : findAll - Error ',)
    })
  },[refresh])

  const handleDelete = (id)=>{  
    // console.log("id",id)
    axios
    .delete(`http://localhost:8000/api/delete/${id}`)
    .then((res)=>{
      setAllStores((prevStores) => prevStores.filter((store) => store.id !== id))
      setRefresh(!refresh)
    })
    .catch((err)=>{
      console.log('Home : DeleteOne - Error ',err)
    })
  }

  return (
    <div>
      <h1>Store Finder</h1>
      <br/>

      <h3>Find stores in your area!</h3>
      <table className="store-table">
        <thead>
          <tr>
            <td>Store</td>
            <td>Store Number</td>
            <td>Open</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {allStores.map((store)=>(
              <tr className="alternate-row" key={store._id} >
              <td>
                <Link to={`/stores/${store._id}`}>{store.name}</Link>
              </td>
              <td>{store.number}</td>
              {store.qualif ? (
                    <>
                      <td>True</td>
                      <td>
                        <button onClick={()=>{handleDelete(store._id)}}>Delete</button>
                      </td>
                    </>
                  ) : (
                    <><td>False</td><td></td></>
                    
                  )}
            </tr>
          ))}

          
        </tbody>
      </table>
      <Link to="/stores/add">Can't find your store?</Link>
    </div>
  );
};

export default Home;
