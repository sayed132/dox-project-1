import { Link } from "react-router-dom";

const Login = () => {
    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-teal-100 rounded-md'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={''}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            
                            className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                           
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                       
                    </div>
                </form>
                <p className="mt-2">dont have account?<Link className='text-secondary' to="/signup">Create new Account</Link></p>
                
                
            </div>
        </div>
    );
};

export default Login;