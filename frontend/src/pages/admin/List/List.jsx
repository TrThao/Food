import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);

  const url = "http://localhost:4000";
  const fetchList = async ()=>{
    const res = await axios.get(`${url}/api/food/list`);
    if(res.data.success){
      setList(res.data.data);
    }
    else{
      toast.error("Xảy ra lỗi "); 
    }
  }
  useEffect(() => {
   fetchList();
  },[])

  const removeFood = async (foodId) => {
    const res = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (res.data.success) {
      toast.success("Xóa món ăn thành công");  
    } else {
      toast.error("Xảy ra lỗi "); 
    }
  }
  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
         <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
         </div>
         {list.map((item,index)=>{
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)}>x</p>
            </div>
          )
         })}
      </div>
    </div>
  )
}

export default List
