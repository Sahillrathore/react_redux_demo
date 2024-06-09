import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const OrderDetails = () => {

    const [state, setState] = useState([]);
    const [del, setDel] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:3004/ProDetails")
        .then((res) => res.json())
        .then((json) => setState(json))
        
    }, [del])

    const deleteData = (id) => {
        axios.delete("http://localhost:3004/ProDetails/"+id)

        setDel((prev) => !prev);
    }
  return (
    <>
        <div className='px-12 py-6 bg-zinc-100 w-screen'>
            <div className='flex justify-between mb-4 items-center'>
                <h1 className='text-2xl font-semibold text-reddish m-0'>Order Tracking</h1>
                <NavLink className='bg-blue-600 text-white py-2 px-4 rounded-lg' to='add-data'>
                    Add Data
                </NavLink>
            </div>

            <table className='table-auto border-collapse border border-gray-400 w-full bg-zinc-100'>
                <thead>
                    <tr>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Order Id</th>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Customer</th>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Product</th>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Address</th>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Status</th>
                        <th className='px-4 py-2 text-start border border-gray-500 bg-zinc-300'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.map((data, idx) => (
                        <tr key={idx}>
                            <td className="px-4 py-2 border border-gray-500">{data.id}</td>
                            <td className="px-4 py-2 border border-gray-500">{data.customer}</td>
                            <td className="px-4 py-2 border border-gray-500">{data.product}</td>
                            <td className="px-4 py-2 border border-gray-500">{data.address}</td>
                            <td className="px-4 py-2 border border-gray-500">{data.status}</td>
                            <td className="px-4 py-2 border border-gray-400 flex action-btn">
                                <img src="https://img.icons8.com/?size=80&id=102350&format=png" alt="" onClick={()=>{deleteData(data.id)}}/>
                                <img src="https://img.icons8.com/?size=48&id=12082&format=png" alt="nnn"/>
                            </td>
                        </tr>
                    ))
                    
                }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default OrderDetails