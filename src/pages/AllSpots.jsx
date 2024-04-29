
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
const AllSpots = () => {
    const allSpots = useLoaderData()
   
    const [sorted, setSorted] = useState(null)
   
    // console.log(allSpots)
    const handleSort = ()=>{
        const costSorting =  allSpots.sort((a, b)=>{
            const sortedA = parseInt(a.cost)
            const sortedB = parseInt(b.cost)
            if(sortedA > sortedB){
                return 1
            }
            else if(sortedA < sortedB){
                return -1
            }
            else{
                return 0
            }   
        })
        setSorted(costSorting) 
        console.log(allSpots)
    }

    const handleUnSort  = ()=>{
        window.location.reload()
    }


  
    console.log(sorted)
    return (
        <div className="pt-32" >
            <div>
                <h1 className="text-center heading text-5xl">All Tourist Spots</h1>
                <div className=" w-max mx-auto my-8">
                <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 bg-orange-200">Sort By <FaChevronDown /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={handleUnSort}><a>All</a></li>
    <li onClick={handleSort}><a>Average Cost (low to high)</a></li>
   
    
  </ul>
</div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12">
            {
                (sorted || allSpots).map(spot=> <div key={spot._id} className="mx-auto">
                    <div className="max-w-xs p-6 rounded-md shadow-md ">
	<img src={spot.photo} alt="" className="object-cover object-center w-full rounded-md h-72 " />
	<div className="mt-6 mb-2">
		<span className="block text-sm font-medium tracking-widest uppercase text-orange-600 ">{spot.countryName}</span>
		<h2 className="text-xl font-semibold tracking-wide">{spot.name}</h2>
	</div>
        <p> {spot.seasonality}</p>
        
    
	<p className="">Visitors per year: {spot.visitors}</p>
    <p>Cost: {spot.cost}$</p>
    <Link to={`/details/${spot._id}`}  className="btn w-full mt-4 bg-orange-100 text-black hover:bg-orange-300 duration-700 ">Details</Link>
</div>
                </div>)
            }
        </div>
        </div>
    );
};

export default AllSpots;