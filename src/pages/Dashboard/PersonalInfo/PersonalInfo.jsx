import { useState } from "react";
import axios from "axios";


const PersonalInfo = () => {

    const [formApplication, setFormApplication] = useState({
        client_id: "",
        name: "",
        f_name: "",
        address: "",
        district: "",
        upazilla: "",
        remarks: "",
        nid_number: "",
        dob: "",
        phone_number: "",
        alt_phone_number: "",
        sex: "",
        user_photo: "",

    });

    //On Change Form

    const onChangeForm = (label, event) => {
        switch (label) {
            case "client_id":
                setFormApplication({ ...formApplication, client_id: event.target.value });
                break;
            case "name":
                setFormApplication({ ...formApplication, name: event.target.value });
                break;
            case "f_name":
                setFormApplication({ ...formApplication, f_name: event.target.value });
                break;
            case "address":
                setFormApplication({ ...formApplication, address: event.target.value });
                break;
            case "district":
                setFormApplication({ ...formApplication, district: event.target.value });
                break;
            case "upazilla":
                setFormApplication({ ...formApplication, upazilla: event.target.value });
                break;
            case "remarks":
                setFormApplication({ ...formApplication, remarks: event.target.value });
                break;
            case "nid_number":
                setFormApplication({ ...formApplication, nid_number: event.target.value });
                break;
            case "dob":
                setFormApplication({ ...formApplication, dob: event.target.value });
                break;
            case "phone_number":
                setFormApplication({ ...formApplication, phone_number: event.target.value });
                break;
            case "alt_phone_number":
                setFormApplication({ ...formApplication, alt_phone_number: event.target.value });
                break;
            case "sex":
                setFormApplication({ ...formApplication, sex: event.target.value });
                break;
            case "user_photo":
                setFormApplication({ ...formApplication, user_photo: event.target.value });
                break;

        }
    };

    //   Submit handler

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formApplication);

        await axios
            .post("http://103.49.200.66:8080/user/addclient", formApplication)
            .then(() => {
                console.log(formApplication);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((error) => {
                console.log(error);

            });
    };

    return (
        <div className=' p-7 '>
            <h2 className="text-2xl">অনুগ্রহ করে সঠিক তথ্য লিখুন</h2>
            <form className="mt-12" onSubmit={onSubmitHandler}>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="client_id" className="label"> <span className="label-text font-semibold">ক্লায়েন্ট ID</span></label>
                    <input type="text" id="client_id" onChange={(event) => { onChangeForm("client_id", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার নিজের নাম লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="name" className="label"> <span className="label-text font-semibold">আপনার নাম</span></label>
                    <input type="text" id="name" onChange={(event) => { onChangeForm("name", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার নিজের নাম লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="f_name" className="label"> <span className="label-text font-semibold">পিতার নাম</span></label>
                    <input type="text" id="f_name" onChange={(event) => { onChangeForm("f_name", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার পিতার নাম লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="address" className="label"> <span className="label-text font-semibold">স্থায়ী ঠিকানা</span></label>
                    <input type="text" id="address" onChange={(event) => { onChangeForm("address", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার স্থায়ী ঠিকানা লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="district" className="label"> <span className="label-text font-semibold">বিভাগ</span></label>
                    <select id="district" onChange={(event) => { onChangeForm("district", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>

                </div>
                {/* <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">জেলা</span></label>
                    <select

                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>

                </div> */}
                <div className="form-control grid grid-cols-5 mb-4 ">
                    <label htmlFor="upazilla" className="label"> <span className="label-text font-semibold">উপজেলা</span></label>


                    <select id="upazilla" onChange={(event) => { onChangeForm("upazilla", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="remarks" className="label"> <span className="label-text font-semibold">মন্তব্য</span></label>
                    <input type="text" id="remarks" onChange={(event) => { onChangeForm("remarks", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="মন্তব্য লিখুন" />

                </div>
                
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="nid_number" className="label"> <span className="label-text font-semibold">NID কার্ড নাম্বার</span></label>
                    <input type="number" id="nid_number" onChange={(event) => { onChangeForm("nid_number", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার NID কার্ড নাম্বার লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="dob" className="label"> <span className="label-text font-semibold">জন্ম তারিখ</span></label>
                    <input type="date" id="dob" onChange={(event) => { onChangeForm("dob", event); }} className="input input-bordered col-span-4 shadow-sm " placeholder="এখানে আপনার নিজের জন্ম তারিখ লিখুন " />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label htmlFor="phone_number" className="label"> <span className="label-text font-semibold">মোবাইল নাম্বার</span></label>
                    <input type="number" id="phone_number" onChange={(event) => { onChangeForm("phone_number", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="alt_phone_number" className="label"> <span className="label-text font-semibold">২য় মোবাইল নাম্বার</span></label>
                    <input type="number" id="alt_phone_number" onChange={(event) => { onChangeForm("alt_phone_number", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার অন্য আর একটি মোবাইল নাম্বার লিখুন " />

                </div>

                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="sex" className="label"> <span className="label-text font-semibold">লিঙ্গ</span></label>
                    <select id="sex" onChange={(event) => { onChangeForm("sex", event); }}
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>পুরুষ</option>
                        <option>মহিলা</option>
                        <option>অন্যান্য</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="user_photo" className="label"> <span className="label-text font-semibold">আপনার ছবি দিন</span></label>
                    <input type="file" id="user_photo" onChange={(event) => { onChangeForm("user_photo", event); }} className="input input-bordered col-span-4 shadow-sm" />

                </div>
                <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
            </form>
        </div>
    );
};

export default PersonalInfo;