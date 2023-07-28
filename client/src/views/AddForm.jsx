import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
const AddForm = ({isEdit,setIsEdit, errors, setErrors}) => {
  useEffect(()=>{
    setIsEdit (false)
  },[])
  return (
    <div>
        <Nav/>
        <br/>
        
        <span>Add a new store!</span>
        <Form 
          isEdit={isEdit}
          errors={errors}
          setErrors ={setErrors}
          />
    </div>
  )
}

export default AddForm