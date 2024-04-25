
const Register = () => {
    return (
        <div className="w-max mx-auto">
            <form noValidate="" action="" className="space-y-8">
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
				<input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
			</div>
			<div className="space-y-2">
				<label htmlFor="photo" className="block text-sm">Photo</label>
				<input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md  outline-none  text-gray-600 bg-gray-200  " />
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
<span className="relative">Register</span>
</button>
	</form>
        </div>
    );
};

export default Register;