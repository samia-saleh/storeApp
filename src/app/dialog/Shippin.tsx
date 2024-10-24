"use client"
import { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
const Shippin = ({isOpen,onClose}) => {
  const [formData, setFormData] = useState({
    date: '',
    billNumber: '',
    shippinCompany:'',
  });



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can handle the form submission, like sending data to an API
  };

  if(!isOpen){
    return(<></>)
  }
  return (
    <div className='Shippinmodel' dir="rtl">
       <div className="text-start">
      <button onClick={onClose} className="closeicon"><TfiClose /></button>
      </div>
    <div className='modelTitel'>
     <h1> بيانات الشحن</h1>
    </div>
    <form onSubmit={handleSubmit} >
    <div className='modelBody'>
    <div>
    <label>التاريخ</label>
    <input type='text' value={formData.date} onChange={(event)=>{setFormData({...formData,date:event.target.value})}}></input>
    </div>
     <div>
     <label>رقم فاتورة الشحن </label>
     <input type='text' value={formData.billNumber} onChange={(event)=>{setFormData({...formData,billNumber:event.target.value})}}></input>
     </div>
    <div>
    <label> شركة النقل</label>
    <input type='text' value={formData.shippinCompany} onChange={(event)=>{setFormData({...formData,shippinCompany:event.target.value})}}></input>
    </div>
    
    <div>
    <label>صورة الفاتورة</label>
    <input type="file" ></input>
    </div>
 
    </div>
    <button className="submitbutton" type="submit">تاكيد</button>
    </form>
   

     </div>
  )
}

export default Shippin
