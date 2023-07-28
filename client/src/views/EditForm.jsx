import React, { useEffect , useState} from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import Form from '../components/Form'
import { useNavigate, useParams } from 'react-router-dom'
const EditForm = ({isEdit,setIsEdit, errors, setErrors}) => {

  const navigate = useNavigate();
  
  const [store, setStore]=useState({});
  const {id_store} = useParams();
  useEffect(()=>{
    setIsEdit (true);
    setErrors([]);    
    axios
    .get(`http://localhost:8000/api/${id_store}`)
    .then((res)=>{
      setStore(res.data)
    })
    .catch((err)=>{
      console.log("Error ", err)
    })
  },[])

  const updateHandler = (updatedStore)=>{

    axios
    .put(`http://localhost:8000/api/edit/${id_store}`,updatedStore)
    .then((res=>{
      navigate(`/stores/${id_store}`);
    }))
    .catch((AxiosError) => {
      setErrors(AxiosError.response.data.err.errors)  ;
      if(AxiosError.response.data.err.code === 11000)  {
        errors.number = {message:'Store number already exists'};
        setErrors(errors)
      };
      console.log("Update Errors", AxiosError )  
      console.log("Update Errors - state : ", errors )  
    });


    
  }

  return (
    <div>
        <Nav/>
        <br/>
        
        <span>Edit this store!</span>
        <Form 
          isEdit={isEdit} 
          storeToUpdate = {store} 
          onSubmit={updateHandler}
          errors={errors}
          setErrors ={setErrors}/>
    </div>
  )
}

export default EditForm