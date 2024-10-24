import { PiPackageLight } from "react-icons/pi";

const OrdersTable = () => {
  return (
<div className="flex justify-center">
    
<table className="OrdersTable shadow-md" dir='rtl'>
  <thead >
    <tr >
    <th ><label>#</label></th>
      <th><label> رقم الطلب :</label></th>
      <th>  <label>التاريخ : </label></th>
      <th> <label> عدد الاصناف :</label></th>
      <th><label> حالة الطلب :</label></th>
      <th><label>تجهيز  الطلب :</label> </th>
    </tr>
  </thead>
  <tbody >
  <tr>
       <td> <label>1</label></td>
      <td><label>65596</label></td>
      <td><label>1/1/2024</label></td>
      <td><label>5</label></td>
      <td ><label className="new">جديدة</label></td>
      <td><a href="/preparOrder"><PiPackageLight className="inline" /></a></td>
    </tr>
    <tr>
       <td> <label>1</label></td>
      <td><label>65596</label></td>
      <td><label>1/1/2024</label></td>
      <td><label>5</label></td>
      <td ><label className="urgent">مستعجلة</label></td>
      <td><a href="/preparOrder"><PiPackageLight className="inline" /></a></td>
    </tr>
    <tr>
       <td> <label>1</label></td>
      <td><label>65596</label></td>
      <td><label>1/1/2024</label></td>
      <td><label>5</label></td>
      <td ><label className="previous">سابقة</label></td>
      <td><a href="/preparOrder"><PiPackageLight className="inline " /></a></td>
    </tr>
    <tr>
       <td> <label>1</label></td>
      <td><label>65596</label></td>
      <td><label>1/1/2024</label></td>
      <td><label>5</label></td>
      <td ><label className="cancled">ملغية</label></td>
      <td><a href="/preparOrder"><PiPackageLight className="inline" /></a></td>
    </tr>
  
  </tbody>
</table>
</div>

  )
}

export default OrdersTable
