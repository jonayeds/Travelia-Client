import { Link, useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData()
    console.log(allSpots)
    
    return (
        <div className="pt-32" >
            <div>
                <h1 className="text-center heading text-5xl">All Tourist Spots</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
            {
                allSpots.map(spot=> <div key={spot._id} className="mx-auto">
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