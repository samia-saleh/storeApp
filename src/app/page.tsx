import Dropdown from "./inputs/dropdown";
import Orders from "./table/Orders";
import SearchInput from "./inputs/search";
// import Bill from "./dialog/Bill";
export default function Home() {
  return (
    
      <main dir="rtl" >

       <div className="SearchContainer">
      
       <SearchInput Placeholder={"البحث عن طلب"}/>
       <Dropdown></Dropdown>
       </div>
        <Orders></Orders>
      </main>
     

  );
}
