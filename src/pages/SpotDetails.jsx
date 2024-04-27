import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const spot = useLoaderData()
    console.log(spot)
    return (
        <div className="py-32">
            <div className="p-5 mx-auto sm:p-10 md:p-16">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={spot.photo} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-black text-white ">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-3xl font-semibold md:text-5`xl heading">{spot.name}</a>
                <p className="text-orange-600 text-lg font-semibold ">{spot.countryName}</p>
				<p className="text-xs  ">By {spot.displayName}
				</p>
                <div className="flex justify-between opacity-80">
                    <p>Average Cost:  {spot.cost}$</p>
                    <p>Average Visitors (<span className="text-sm">per year</span>): {spot.visitors}</p>

                </div>
                    <div className="opacity-85">
                    <p>Location: {spot.location}</p>
                    <p>Travel Time: {spot.time} Days</p>
                    </div>
			</div>
			<div >
				<p className="opacity-80">{spot.details}</p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default SpotDetails;