import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import "Routes" here
import Home from "./views/Home";
import AddForm from "./views/AddForm";
import DetailView from "./views/DetailView"
import EditForm from "./views/EditForm";
function App() {
  const [isEdit, setIsEdit]= useState(false)
  const [errors, setErrors] = useState([]);
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/stores/add' element={
            <AddForm 
              isEdit={isEdit} 
              setIsEdit={setIsEdit}
              errors = {errors}
              setErrors = {setErrors}/>}  />
        <Route path='/stores/:id_store' element={<DetailView/>}  />
        <Route path='/stores/edit/:id_store' element={
            <EditForm 
              isEdit={isEdit} 
              setIsEdit={setIsEdit}
              errors = {errors}
              setErrors = {setErrors}/>}  />
      </Routes>
    </div>
  );
}

export default App;
