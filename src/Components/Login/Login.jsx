import { useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/dashboard';
    const [formApplication, setFormApplication] = useState({
        email: "",
        password: "",


    });

    //On Change Form

    const onChangeForm = (label, event) => {
        switch (label) {
            case "email":
                setFormApplication({ ...formApplication, email: event.target.value });
                break;
            case "password":
                setFormApplication({ ...formApplication, password: event.target.value });
                break;
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (formApplication.email === "dox@gmail.com" && formApplication.password === "1234") {
            console.log("welcome user", formApplication)
            navigate(from, { replace: true });
           }
           else{
            alert("oh man it's not valid user")
           }
    };



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-teal-100 rounded-md'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="email" className="label"> <span className="label-text">Email</span></label>
                        <input type="text" id="email" onChange={(event) => { onChangeForm("email", event); }}
                             defaultValue={'dox@gmail.com'}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label htmlFor="password" className="label"> <span className="label-text">Password</span></label>
                        <input type="password" defaultValue={'1234'} id="password" onChange={(event) => { onChangeForm("password", event); }} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full text-white' value="Login" type="submit" />
                    <div>

                    </div>
                </form>



            </div>
        </div>
    );
};

export default Login;