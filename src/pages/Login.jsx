import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {
    return (
        <div className="max-w-max mx-auto">
           <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  ">
	<h2 className="mb-3 text-3xl font-semibold text-center text-orange-800">Login to your account</h2>
	<p className="text-sm text-center text-gray-500 ">Dont have account?
		<Link to={'/register'}  rel="noopener noreferrer" className="text-orange-800 ml-2 hove:underline hover:underline">Sign up here</Link>
	</p>
	<div className="my-6 space-y-4 ">
		<button  type="button" className="flex group items-center justify-center w-full p-4 space-x-4 border-[1px] border-solid border-gray-500  rounded-md   ">
        <FaGoogle className="text-orange-700 group-hover:text-orange-500 duration-300 text-2xl" />
			<p>Login with Google</p>
		</button>
		<button  type="button" className="flex group items-center justify-center w-full p-4 space-x-4 border-[1px] border-solid border-gray-500  rounded-md  ">
        <FaFacebookF className="text-orange-700 group-hover:text-orange-500 duration-300 text-2xl" />
			<p>Login with Facebook</p>
		</button>
		<button  type="button" className="flex group items-center justify-center w-full p-4 space-x-4 border-[1px] border-solid border-gray-500  rounded-md  ">
        <FaGithub className="text-orange-700 group-hover:text-orange-500 duration-300 text-2xl"/>
			<p>Login with Google</p>
		</button>
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full text-gray-400 dark:text-gray-600" />
		<p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
		<hr  className="w-full text-gray-400 dark:text-gray-600" />
	</div>
	<form noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
		</div>
		<button type="submit" className="rounded w-full overflow-hidden relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-300 to-orange-400 border-orange-700 text-orange-50 hover:text-orange-700 duration-500">
<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-32 opacity-30"></span>
<span className="relative">Log In</span>
</button>
	</form>
</div>
        </div>
    );
};

export default Login;