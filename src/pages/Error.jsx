import { Link } from "react-router-dom";
import error from '../assets/error.png'
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		
        <img src={error} alt="" />
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link to={'/'} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-orange-100 text-black">Back to homepage</Link>
	</div>
</section>
        </div>
    );
};

export default Error;