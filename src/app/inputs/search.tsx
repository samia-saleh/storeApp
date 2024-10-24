// import Image from "next/image"
import { IoSearch } from "react-icons/io5";
export default function SearchInput({Placeholder}){
    return(
        <div className="serchInpout">
            <input type="text" placeholder={Placeholder} />
            <IoSearch className="IoSearch" />
        </div>
    )
}