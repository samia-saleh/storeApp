
import { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
const Print = ({isOpen,onClose}) => {
  const [formData, setFormData] = useState({
    printer: '',
    copyNumber: '',
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
    <div className='Printmodel' dir="rtl">
      <div className="text-start">
      <button onClick={onClose} className="closeicon"><TfiClose /></button>
      </div>
    <div className='modelTitel'>
     <h1> طباعة العنوان</h1>
    </div>
    <form onSubmit={handleSubmit}>
    <div className='modelBody'>
    <div>
    <label>عدد النسخ</label>
    <input type='text' value={formData.copyNumber} onChange={(event)=>{setFormData({...formData,copyNumber:event.target.value})}}></input>
    </div>
     <div>
     <label> الطابعة </label>
     <input type='text' value={formData.printer} onChange={(event)=>{setFormData({...formData,printer:event.target.value})}}></input>
     </div>
    </div>
    <button className="submitbutton">طباعة</button>
    </form>
    <button className="submitbutton">مشاركة ملفpdf</button>
     </div>
  )
}

export default Print
