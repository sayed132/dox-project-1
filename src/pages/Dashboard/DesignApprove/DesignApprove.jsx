import axios from "axios";
import { useState } from "react";

const DesignApprove = () => {

    const [formApplication, setFormApplication] = useState({
        license_number: "",
        date: "",
        type: "",
        first_app_date: "",
        approve_date_ho: "",
        approve_ho_number: "",


    });

    //On Change Form

    const onChangeForm = (label, event) => {
        switch (label) {
            case "license_number":
                setFormApplication({ ...formApplication, license_number: event.target.value });
                break;
            case "date":
                setFormApplication({ ...formApplication, date: event.target.value });
                break;
            case "type":
                setFormApplication({ ...formApplication, type: event.target.value });
                break;
            case "first_app_date":
                setFormApplication({ ...formApplication, first_app_date: event.target.value });
                break;
            case "approve_date_ho":
                setFormApplication({ ...formApplication, approve_date_ho: event.target.value });
                break;
            case "approve_ho_number":
                setFormApplication({ ...formApplication, approve_ho_number: event.target.value });
                break;

        }
    };

    //   Submit handler

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formApplication);

        await axios
            .post("http://103.49.200.66:8080/activities/designapprove", formApplication)
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
        <>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn" onClick={() => window.my_modal_4.showModal()}>Design Approve</button>
            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl" onSubmit={onSubmitHandler}>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="license_number" className="label"> <span className="label-text font-semibold">লাইসেন্স নম্বর</span></label>
                        <input type="text" id="license_number" onChange={(event) => { onChangeForm("license_number", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে লাইসেন্স নম্বর লিখুন " />

                    </div>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="date" className="label"> <span className="label-text font-semibold">তারিখ</span></label>
                        <input type="text" id="date" onChange={(event) => { onChangeForm("date", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="তারিখ লিখুন " />

                    </div>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="type" className="label"> <span className="label-text font-semibold">লাইসেন্স ধরন</span></label>
                        <input type="text" id="type" onChange={(event) => { onChangeForm("type", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে লাইসেন্স ধরন লিখুন " />

                    </div>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="first_app_date" className="label"> <span className="label-text font-semibold">১ম অ্যাপ এর তারিখ</span></label>
                        <input type="text" id="first_app_date" onChange={(event) => { onChangeForm("first_app_date", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="১ম অ্যাপ এর তারিখ লিখুন " />

                    </div>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="approve_date_ho" className="label"> <span className="label-text font-semibold">অনুমোদন তারিখ হো</span></label>
                        <input type="text" id="approve_date_ho" onChange={(event) => { onChangeForm("approve_date_ho", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="অনুমোদন_তারিখ_হো" />

                    </div>
                    <div className="form-control grid grid-cols-5 mb-4">
                        <label htmlFor="approve_ho_number" className="label"> <span className="label-text font-semibold">অনুমোদন হো নম্বর</span></label>
                        <input type="text" id="approve_ho_number" onChange={(event) => { onChangeForm("approve_ho_number", event); }} className="input input-bordered col-span-4 shadow-sm" placeholder="অনুমোদন হো নম্বর লিখুন" />

                    </div>
                    <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </>
    );
};

export default DesignApprove;