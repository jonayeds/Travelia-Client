import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import useAuth from "../customHooks/useAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
	const {createUser, update, auth} = useAuth()
	const navigate = useNavigate()
	const [show, setShow] = useState(false)
	const handleShow = ()=>{
		setShow(!show)
	}
	const  handleRegister = e =>{
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const email = form.email.value
		const password = form.password.value
		const photo = form.photo.value
		if(password.length < 6){
            toast.error('password must be at least 6 characters')
            return
        }
        if(!(/[a-z]/.test(password))){
            toast.error('Must have a Lowercase letter in the password')
            return
        }
        if(!(/[A-Z]/.test(password))){
            toast.error('Must have an uppercase letter in the password')
            return
        }
        if(!(/[@$!%*?&#~_-]/.test(password))){
            toast.error('Must have a special character in the password')
            return
        }
		
		createUser(email,  password)
		.then((result) => {
			update(name, photo)
			console.log(auth.currentUser)
			Swal.fire({
				title: 'Successful',
				text: 'User created successfully',
				icon: 'success',
				confirmButtonText: 'OK'
			})
			navigate('/')
			console.log(result)
			
		}).catch((err) => {
			Swal.fire({
				title: 'error',
				text: 'User already exist',
				icon: 'error',
				confirmButtonText: 'OK'
			})
			console.log(err.message)
		});

	}
    return (
        <div className="w-1/2 lg:w-1/3 mx-auto pt-32">
            <form onSubmit={handleRegister} className="space-y-8">
                <div>
                    <h1 className="text-center text-3xl text-orange-700 font-semibold">Register</h1>
                </div>
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input required type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
			<div className="space-y-2">
				<label htmlFor="photo" className="block text-sm">Photo</label>
				<input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<div className="flex items-center">
				<input type={show?'text': 'password'} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
				<div onClick={handleShow} className="text-xl relative right-[30px] text-gray-700 w-0">
					{
						show? <FaEye />: <FaRegEyeSlash />
					}
				</div>
				</div>
					<a rel="noopener noreferrer"  className="text-xs  ">Already have an account? <Link to={'/login'} className="text-orange-700 hover:underline">Login</Link></a>
			</div>
		</div>
		<button  type="submit" className="rounded w-full overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-300 to-orange-400 border-orange-700 text-orange-50 hover:text-orange-700 duration-500">
<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-full group-hover:h-32 opacity-30"></span>
<span className="relative">Register</span>
</button>
	</form>
	<Toaster />
        </div>
    );
};

export default Register;