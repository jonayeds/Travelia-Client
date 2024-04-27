import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData()
    console.log(allSpots)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-32">
            {
                allSpots.map(spot=> <div key={spot._id} className="mx-auto">
                    <div className="max-w-xs p-6 rounded-md shadow-md ">
	<img src={spot.photo} alt="" className="object-cover object-center w-full rounded-md h-72 " />
	<div className="mt-6 mb-2">
		<span className="block text-sm font-medium tracking-widest uppercase text-orange-600 ">{spot.location}</span>
		<h2 className="text-xl font-semibold tracking-wide">{spot.name}</h2>
	</div>
        <p> {spot.countryName}</p>
        
    
	<p className="">Seasonality: {spot.seasonality}</p>
    <p>Cost: {spot.cost}$</p>
    <button className="btn w-full mt-4 bg-orange-100 text-black hover:bg-orange-300 duration-700 ">Details</button>
</div>
                </div>)
            }
        </div>
    );
};

export default AllSpots;