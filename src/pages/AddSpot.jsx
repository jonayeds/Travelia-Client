import Swal from "sweetalert2";
import useAuth from "../customHooks/useAuth";


const AddSpot = () => {
    const {auth} = useAuth()
    const user = auth.currentUser
    const email = user?.email
    const displayName = user?.displayName
    const handleAddSpot = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const countryName = form.countryName.value
        const location = form.location.value
        const cost = form.cost.value
        const seasonality = form.seasonality.value
        const details = form.details.value
        const photo = form.photo.value
        const time = form.time.value
        const visitors = form.visitors.value
        const newSpot = {name, countryName, location, cost, seasonality, details, photo, time, visitors, email, displayName}
        console.log(newSpot)
        fetch('https://travelia-server-ten.vercel.app/spots', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
			Swal.fire({
				title: 'Successful',
				text: 'Spot Added',
				icon: 'success',
				confirmButtonText: 'OK'
			})
			form.reset()
        })
    }
    return (
        <div className="">
            <form  onSubmit={handleAddSpot}  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  mt-32">
			<div className=" text-center lg:col-span-1 flex  flex-col justify-center  col-span-full ">
				<p className="font-semibold text-4xl heading">Add a New Spot</p>
				<p className="text-xs">Express where you want to visit</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Tourist Spot Name</label>
					<input required  name="name" type="text" placeholder="Enter Spot name" className="w-full p-2 rounded-md  border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Country Name</label>
					<input required name="countryName" type="text" placeholder="Enter Country Name" className="w-full p-2 rounded-md   border " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Location</label>
					<input  required name="location" type="text" placeholder="Enter Location" className="w-full p-2 rounded-md   border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Average Cost</label>
					<input required  name="cost" type="number" placeholder="Enter Average Cost" className="w-full p-2 rounded-md   border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Seasonality</label>
					<input  name="seasonality" type="text" placeholder="Enter Seasonality" className="w-full p-2 rounded-md   border " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Short Description</label>
					<input  name="details" type="text" placeholder="Enter Spot Details" className="w-full p-2 rounded-md   border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Photo</label>
					<input  name="photo" type="text" placeholder="Enter Photo URL" className="w-full p-2 rounded-md   border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Travel Time</label>
					<input  name="time" type="number" placeholder="Enter Travel Time" className="w-full p-2 rounded-md   border" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Visitors Per year</label>
					<input  name="visitors" type="number" placeholder="Visitors Count" className="w-full p-2 rounded-md   border" />
				</div>
				
				
                <button type="submit" className="btn col-span-6 bg-orange-100 border-none duration-300 hover:bg-orange-200">Add Spot</button>
			</div>
		</fieldset>
		
	</form>
        </div>
    );
};

export default AddSpot;