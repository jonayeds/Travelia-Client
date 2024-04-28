import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/countries')
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setCountries(data)
        })
    }, [])


    return (
        <div className="mt-32" >
            <div>
                <h1 className="text-7xl heading text-center mb-24">Countries</h1>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
           {
                countries.map(country=> <Link to={`/country/${country.name}`} key={country._id} className="mx-auto">
                    <div className="card hover:scale-105 duration-700 cursor-pointer w-96 h-96 bg-base-100 shadow-xl image-full ">
  <figure><img src={country.image} alt="Shoes" className="w-full h-full" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-3xl mt-20">{country.name}</h2>
    <p className="mt-6">{country.description}</p>
   
  </div>
</div>
                </Link>)
            }
           </div>
        </div>
    );
};

export default Countries;