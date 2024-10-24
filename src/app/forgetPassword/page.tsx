import Forminput from "../inputs/Forminput"
import PrimaryButton from "../register/primaryButton"

const page = () => {
  return (
    <div className="FormContainer" >
    <form className="form">
      <label>  طلب كلمة مرور جديدة   </label>
      <div className="txtboxContainer">
      <label>رقم الجوال : </label>
      <Forminput Type={"text"}/>
      </div>
      <PrimaryButton txt={"  ارسال"}/>
    </form>
  </div>
  )
}

export default page
