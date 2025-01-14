import { useEffect, useState } from "react";
import useAuth from "../customHooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const {auth } = useAuth()
    
    const user = auth.currentUser
    
    const [newSpots, setNewSpots] = useState([])
    useEffect(()=>{
        fetch(`https://travelia-server-ten.vercel.app/spots/myList/${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            setNewSpots(data)   
        })

    } , [user])

    const  handleDelete = id=>{
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Delete this item',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: 'red',
            cancelButtonText: 'Cancel',
            
        })
        .then((result)=>{
            if(result.isConfirmed){
                fetch(`https://travelia-server-ten.vercel.app/spots/${id}`, {
        method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setNewSpots(newSpots.filter(spot=> spot._id != id))
        })
            }
            
        })
        
        
        
    }
    return (
        <div className="pt-32" >
        <div>
            <h1 className="text-center heading text-5xl">My Tourist Spots</h1>
        </div>
        <div className=" mt-10 w-full">
        <table  className="border w-full text-center">
            <thead className="border">
                <th>Name</th>
                <th>Location</th>
                <th>Cost</th>
                <th></th>
                <th></th>
            </thead>
            <tbody >
        {
            newSpots.map(spot=>
                <tr key={spot._id} className="h-24">
                    <td>{spot.name}</td>
                    <td>{spot.location}</td>
                    <td>{spot.cost}$</td>
                    
                    <td><Link to={`/update/${spot._id}`} className="btn bg-orange-200 text-black hover:bg-orange-300">Update</Link></td>
                    <td><button onClick={()=>handleDelete(spot._id)} className="btn bg-red-500 text-white hover:bg-orange-700">Delete</button></td>
                </tr>
        )
    }
    </tbody>
        </table> 
    </div>
    
    </div>
    );
};

export default MyList;