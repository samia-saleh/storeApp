import OffersTable from "../table/OffersTable"
import SecondaryButton from "../buttons/secondaryButton"
const offers = () => {
  return (
    <div dir="rtl">
      <div  className="flex justify-center">
       <OffersTable></OffersTable></div>
       <div className="text-center">
   <SecondaryButton txt={"اضافة عرض"}></SecondaryButton>
   </div>
    </div>

  )
}

export default offers
