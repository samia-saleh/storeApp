"use client"
import Bill from "../dialog/Bill"
import Shippin from "../dialog/Shippin"
import Print from "../dialog/Print"
import { useState } from "react"

const PreparOrder = () => {


  const [isBillModalOpen, setIsBillModalOpen] = useState(false);
  const openBillModal = () =>{
    if(isShippinModalOpen){
      setIsShippingModalOpen(false);
      setIsBillModalOpen(true);;
    }
    else if(isPrintModalOpen){
      setIsPrintModalOpen(false);
      setIsBillModalOpen(true);;

    }
    else{
      setIsBillModalOpen(true);;
    }
  } 
  const closeBillModal = () => setIsBillModalOpen(false);

  const [isShippinModalOpen, setIsShippingModalOpen] = useState(false);
  const openShippingModal = () => {
    if(isBillModalOpen){
      setIsBillModalOpen(false);
      setIsShippingModalOpen(true);
    }
    else if(isPrintModalOpen){
      setIsPrintModalOpen(false);
      setIsShippingModalOpen(true);

    }
    else{
      setIsShippingModalOpen(true);
    }
  }
  const closeShippingModal = () => setIsShippingModalOpen(false);

  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const openPrintModal = () =>{
    if(isShippinModalOpen){
      setIsShippingModalOpen(false);
      setIsPrintModalOpen(true);
    }
    else if(isBillModalOpen){
      setIsBillModalOpen(false);
      setIsPrintModalOpen(true)

    }
    else{
      setIsPrintModalOpen(true);
    }
  } ;
  const closePrintModal = () => setIsPrintModalOpen(false);

  return (
    <div>
      <h1 className="text-4xl text-center my-5">تجهيز الطلب</h1>
      <div className="flex gap-x-3 z-index: 0;">
      <button className="submitbutton "  onClick={openBillModal}>الفاتورة</button>
      <button className="submitbutton" onClick={openShippingModal}>ارسال الطلب</button>
      <button className="submitbutton" onClick={openPrintModal}>طباعة عنوان الطلب</button>
      </div>
     <div >
     <Bill  isOpen={isBillModalOpen} onClose={closeBillModal}/>
      <Shippin  isOpen={isShippinModalOpen} onClose={closeShippingModal}/>
      <Print  isOpen={isPrintModalOpen} onClose={closePrintModal} />
    
     </div>

    </div>
  )
}

export default PreparOrder
