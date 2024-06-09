import axios from 'axios';
import React, { useState } from 'react'

const AddData = () => {

    const [formData, setFormData] = useState({
        customer: "",
        product: "",
        address: "",
        status: ""
    });
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:3004/ProDetails", formData)
    }
    const handler = (e) => {
        console.log(e.target.value);
        const {name,value} = e.target;
        setFormData({...formData, [name]:value})
    }

    return (
        <>
            <form className='bg-zinc-100 w-full p-12' onSubmit={submitHandler} >

               <div className="row1 flex justify-center gap-4">
                    <input className='w-1/3  rounded-lg' type="text" name='customer' placeholder='Name' onChange={handler}/>
                    <input className='w-1/3 rounded-lg' type="text" name='product' placeholder='Product' onChange={handler}/>
               </div>
               <div className="div text-center mt-4">
                    <input className='w-2/3 rounded-lg' type="text" name='address' placeholder='Address' onChange={handler}/>
               </div>

               <div className="div text-center mt-4">
                    <input className='w-2/3 rounded-lg' type="text" name='status' placeholder='Status' onChange={handler}/>
               </div>

               <div className="div text-center mt-4">
                    <button className='bg-blue-600 text-white py-2 px-4 rounded-lg'>Submit</button>
               </div>
            </form>
        </>
    )
}

export default AddData