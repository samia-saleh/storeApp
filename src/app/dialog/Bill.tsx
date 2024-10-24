"use client"
import { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
const Bill = ({isOpen,onClose} ) => {
  const [formData, setFormData] = useState({
    date: '',
    billNumber: '',
    billValue:'',
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
    return( 
    <div className='Billmodel' dir="rtl">
      <div className="text-start">
      <button onClick={onClose} className="closeicon"><TfiClose /></button>
      </div>
      <div className='modelTitel'>
       <h1>بيانات الفاتورة</h1>
      </div>
      <form  onSubmit={handleSubmit}>
      <div className='modelBody'>
      <div>
      <label>التاريخ</label>
      <input type='text'  value={formData.date} onChange={(event)=>{setFormData({...formData,date:event.target.value})}}></input>
      </div>
       <div>
       <label>رقم الفاتورة</label>
       <input type='text'  value={formData.billNumber} onChange={(event)=>{setFormData({...formData,billNumber:event.target.value})}}></input>
       </div>
      <div>
      <label>قيمة الفاتورة</label>
      <input type='text' value={formData.billValue} onChange={(event)=>{setFormData({...formData,billValue:event.target.value})}}></input>
      </div>
      <div>
      <label>صورة الفاتورة</label>
      <input type="file"></input>
      </div>
      </div>
      <button className="submitbutton">تاكيد</button>
      </form>
       </div>
       )
  
}

export default Bill
