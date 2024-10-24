
import SearchInput from "../inputs/search"
import ProductsTable from "../table/Products"
import ProductsDropdown from "../inputs/ProductsDropdown"
import SecondaryButton from "../buttons/secondaryButton"
const Products = () => {
  return (
    <div dir="rtl" >
      
    <div className="SearchContainer">
   
    <SearchInput Placeholder={"بحث عن منتج"}></SearchInput>
    <ProductsDropdown />
    </div>
    <div className="flex justify-center">
    <ProductsTable></ProductsTable>
    </div>
   <div className="text-center">
   <SecondaryButton txt={"اضافة منتج"}></SecondaryButton>
   </div>
    </div>
  )
}

export default Products
