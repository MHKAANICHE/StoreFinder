import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Form = ({ isEdit, storeToUpdate, onSubmit, errors, setErrors }) => {
  const navigate = useNavigate();
  const { id_store } = useParams();

  const [name, setName] = useState(storeToUpdate?.name || '');
  const [number, setNumber] = useState(storeToUpdate?.number || '');
  const [qualif, setQualif] = useState(storeToUpdate?.qualif || false);

  useEffect(() => {
    setErrors([]);
    if (storeToUpdate) {
      setName(storeToUpdate.name || '');
      setNumber(storeToUpdate.number || '');
      setQualif(storeToUpdate.qualif || false);
    }
   
  }, [storeToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log("handleSubmit setErrors - state : ", errors ) 
    const newStore = {
      name,
      number,
      qualif,
    };
    console.log("handleSubmit - newStore :",newStore)
    storeToUpdate && storeToUpdate._id ? onSubmit(newStore) : onCreate(newStore);
  };

  const onCreate = (newStore) => {
    // console.log("Create - newStore :",newStore)
    axios
      .post('http://localhost:8000/api/add', newStore)
      .then((res) => {
        // console.log("Create - res :",newStore)
        navigate(`/stores/${res.data._id}`);
      })
      .catch((AxiosError) => {
        setErrors(AxiosError.response.data.err.errors)  ;
        if(AxiosError.response.data.err.code === 11000)  {
          errors.number = {message:'Store number already exists'};
          setErrors(errors)
        };
        console.log("Create Errors - AxiosError : ", AxiosError )   
        console.log("Create Errors - state : ", errors )   
      });
  };

  return (
    <div>
      <fieldset>
        <form onSubmit={handleSubmit}>          
          <label>Store Name  </label> 
          {errors?Object.keys(errors).map((key) => (key === 'name' && ( <span style={{ color: 'red' }} key={key}> {errors[key].message} </span>))):null}
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <label>Store Number   </label>
          {errors?Object.keys(errors).map((key) => (key === 'number' && ( <span style={{ color: 'red' }} key={key}> {errors[key].message} </span>))):null}
          <br />
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} /><br />
          <input type="checkbox" checked={qualif} onChange={(e) => setQualif(e.target.checked)} /><label>Open?</label><br />
          <input type='submit' value={isEdit ? 'Edit Store' : 'Add a new Store'} />
        </form>
      </fieldset>
    </div>
  );
};

export default Form;
