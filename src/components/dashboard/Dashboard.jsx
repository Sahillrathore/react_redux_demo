import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import './Dashboard.css'
import { Link, NavLink } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const Dashboard = () => {
    const [state, setState] = useState([]);
    const [category, setCategory] = useState([]);

    const getAllData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setState(res.data))
    }

    const getCategory = () => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => setCategory(res.data))
    }

    const sortByCategory = (cate) => {
        // let categoryValue = e.target.value;
        axios.get("https://fakestoreapi.com/products/category/" + cate)
            .then((res) => setState(res.data))
    }

    useEffect(() => {
        getAllData();
        getCategory();
    }, [])

    setTimeout(() => {
        document.querySelector(".overlay").style.display = "none";
    }, 1000);

    const dispatch = useDispatch();

    const addtocart = (data)=>{
        dispatch(addToCart(data))
    }

    const sidemenuToggle = () => {
        const sidemenu = document.querySelector(".sidemenu");
        sidemenu.classList.toggle("block")
        sidemenu.classList.remove("sticky")
        sidemenu.classList.add("fixed")
        sidemenu.classList.add("z-10")
        console.log("systummm");

    }

    return (
        <>
            <div className="flex items-center justify-center bg-zinc-900 h-screen w-full fixed top-0 z-10 overlay dark:bg-gray-800">
                <div className="z-10 loader1"></div>
                <span className='text-zinc-100 ml-2'>Loading...</span>
            </div>

            <div className="box flex dark:bg-gray-900">

                <div className="sidemenu-toggler z-20 sticky top-14 h-fit dark:invert" onClick={sidemenuToggle}>
                    <img src="https://img.icons8.com/?size=100&id=21969&format=png&color=000000" alt="" className='h-10 w-14' />
                </div>

                <div className="sidemenu bg-gray-100 w-60 p-6 pl-4 list-none sticky top-12 h-full dark:bg-gray-900 dark:text-zinc-300">

                    <li className='p-1 rounded-lg cursor-default mb-2 opacity-90 text-reddish dark:text-red-500 text-right md:text-left'>Browse By Category</li>

                    <li className='p-1 pl-3 rounded-lg mb-1 hover:bg-gray-400 cursor-pointer capitalize border-b-2 border-gray-400 dark:hover:bg-gray-800' onClick={() => { getAllData() }}>All</li>
                    {
                        category.map((cate, idx) => (
                            <li className='p-1 pl-3 rounded-lg mb-1 hover:bg-gray-400 cursor-pointer capitalize border-b-2 border-gray-400 dark:hover:bg-gray-800' onClick={() => { sortByCategory(cate) }} key={idx}>{cate}</li>
                        ))
                    }
                </div>


                <div className="w-full flex flex-wrap bg-zinc-00 md:justify-start justify-center md:pl-8 pl-0 py-8 gap-6 cards-wrapper">
                    {
                        state.map((data, idx) => (
                            <Card key={idx}
                            raised 
                                sx={{
                                    
                                    // margin: "0 auto",
                                    padding: "0.1em",
                                    border: "1px solid rgba(0, 0, 0, 0.329)",
                                }}
                                className='dark:bg-gray-800 w-72 md:w-80'>
                                <CardMedia
                                    component="img"
                                    alt="product img"
                                    height="140"
                                    image={data.image}
                                    sx={{padding: "1em 1em 0 1em", objectFit: "contain", height: "200px", width: "100%"}}
                                />
                                <CardContent
                                className='pb-0 pt-2 dark:text-zinc-200'
                                // sx={{padding: "4rem"}}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        {data.title.slice(0,22)}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='dark:text-zinc-300'>
                                        {data.description.slice(0,60)+ "..."}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    className='flex justify-between'
                                >
                                    <div className="flex items-center">
                                        <img src="https://img.icons8.com/?size=50&id=23169&format=png" alt="" style={{height: "34px", width: "29px", borderRadius: "8px 0 0 8px", filter: "invert(100%)", backgroundColor: "#11ffb9", padding: "4px 2px"}}/>

                                        <button
                                        
                                         className='bg-zinc-100 border border-gray-800  py-1.5 px-2 text-zinc-800 text-sm  block pr-4  hover:bg-zinc-200 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700  active:bg-gray-400 transition-colors' style={{borderRadius: "0 8px 8px 0", textDecoration: "none", outline: "none", borderLeft: "none"}} onClick={()=>{addtocart(data)}}>
                                         Add
                                        </button>
                                    </div>

                                    <Button size="small">
                                        <NavLink to={`Product/${data.id}`} 
                                            className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-lg border border-gray-800 dark:bg-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                            style={{padding: "5px 10px"}}
                                        >
                                            View Details
                                        </NavLink>
                                    </Button>
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard

