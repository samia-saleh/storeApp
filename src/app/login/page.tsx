"use client"
import Forminput from "../inputs/Forminput"
import PrimaryButton from "../buttons/primaryButton"
import { useState } from 'react';

const login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
  });
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can handle the form submission, like sending data to an API
  };
  return (
    <div className="FormContainer" >
    <form className="form" onSubmit={handleSubmit}>
      <label >تسجيل الدخول   </label>
      <div className="txtboxContainer">
      <label>رقم الجوال : </label>
      <Forminput Type={"text"} Value={formData.phoneNumber} OnChang={(event)=>{setFormData({...formData,phoneNumber:event.target.value})}}/>
      </div>
      <div className="txtboxContainer">
      <label>  كلمة المرور :</label>
      <input type="password" className="Inputs"  />  </div>
      <PrimaryButton txt={" تسجيل الدخول"}/>
    </form>
  </div>
  )
}

export default login
