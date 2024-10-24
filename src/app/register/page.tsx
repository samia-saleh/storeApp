"use client"
import { useState } from 'react';
import Forminput from "../inputs/Forminput"
import PrimaryButton from "../buttons/primaryButton"

const Page = () => {
  const [formData, setFormData] = useState({
    name:'',
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
      <form className="form"  onSubmit={handleSubmit}>
        <label>تسجيل محل جديد </label>
        <div className="txtboxContainer">
        <label> الاسم :</label>
        <Forminput Type={"text"}  Value={formData.name} OnChang={(event)=>{setFormData({...formData,name:event.target.value})}}/>
         </div>
        <div className="txtboxContainer">
        <label>رقم الجوال : </label>
        <Forminput Type={"text"}  Value={formData.phoneNumber} OnChang={(event)=>{setFormData({...formData,phoneNumber:event.target.value})}}/>
        </div>
        <div className="txtboxContainer">
        <label>  كلمة المرور :</label>
        <input type="password" className="Inputs"  />  
         </div>
        <PrimaryButton txt={"تسجيل"}/>
      </form>
    </div>
  )
}

export default Page
