
import { FaLock } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaUnlock } from "react-icons/fa6";
const Products = () => {
  return (
    <div>
      <table className="OrdersTable shadow-md" dir='rtl'>
  <thead>
    <tr>
    <th>#</th>
      <th>اسم  المنتج :</th>
      <th>وصف المنتج  :</th>
      <th> سعر المنتج :</th>
      <th>   العرض :</th>
      <th>   ايقاف منتج :</th>
      <th> تعديل منتج :</th>
    </tr>
  </thead>
  <tbody >
  <tr>
       <td>1</td>
      <td>ابريق زجاجي</td>
      <td>براد شاي مع امكانية التفاف النص براد شاي مع امكانية التفاف النص </td>
      <td>5000 ريال </td>
      <td>50%</td>
      <td><a href="#"><FaUnlock className="inline" /></a></td>
      <td><a href="#"><MdEdit  className="inline"/></a></td>
    </tr>
    <tr className="locked">
       <td>1</td>
      <td>ابريق زجاجي</td>
      <td>براد شاي مع امكانية التفاف النص براد شاي مع امكانية التفاف النص </td>
      <td>5000 ريال </td>
      <td>50%</td>
      <td><a href="#"><FaLock className="inline" /></a></td>
      <td><a href="#"><MdEdit  className="inline"/></a></td>
    </tr>
    <tr>
       <td>1</td>
      <td>ابريق زجاجي</td>
      <td>براد شاي مع امكانية التفاف النص براد شاي مع امكانية التفاف النص </td>
      <td>5000 ريال </td>
      <td>50%</td>
      <td><a href="#"><FaUnlock  className="inline" /></a></td>
      <td><a href="#"><MdEdit  className="inline"/></a></td>
    </tr>
    <tr className="locked">
       <td>1</td>
      <td>ابريق زجاجي</td>
      <td>براد شاي مع امكانية التفاف النص براد شاي مع امكانية التفاف النص </td>
      <td>5000 ريال </td>
      <td>50%</td>
      <td><a href="#"><FaLock className="inline" /></a></td>
      <td><a href="#"><MdEdit  className="inline"/></a></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Products
