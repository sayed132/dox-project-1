import axios from "axios";
import { useState } from "react";

const LicenseInfo = () => {

    const [formApplication, setFormApplication] = useState({

       
        license_number: "",
        owner_type: "",
        owner_id: "",
        mouza: "",
        jl_number: "",
        mutation_number: "",
        plot_number: "",
        capacity: 0,

    });

    //On Change Form

    const onChangeForm = (label, event) => {
        switch (label) {
            case "license_number":
                setFormApplication({ ...formApplication, license_number: event.target.value });
                break;
            case "owner_type":
                setFormApplication({ ...formApplication, owner_type: event.target.value });
                break;
            case "owner_id":
                setFormApplication({ ...formApplication, owner_id: event.target.value });
                break;
            case "mouza":
                setFormApplication({ ...formApplication, mouza: event.target.value });
                break;
            case "jl_number":
                setFormApplication({ ...formApplication, jl_number: event.target.value });
                break;
            case "mutation_number":
                setFormApplication({ ...formApplication, mutation_number: event.target.value });
                break;
            case "plot_number":
                setFormApplication({ ...formApplication, plot_number: event.target.value });
                break;
            case "capacity":
                setFormApplication({ ...formApplication, capacity: event.target.value });
                break;
            

        }
    };

    //   Submit handler

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formApplication);

        await axios
            .post("http://103.49.200.66:8080/license/cha", formApplication)
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
        <div className=' p-7 shadow-lg rounded-lg'>
            <h2 className="text-2xl">লাইসেন্সনের জন্য সঠিক তথ্য প্রদান করুন</h2>
            <form className="mt-12" onSubmit={onSubmitHandler}>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="license_number" className="label"> <span className="label-text font-semibold">লাইসেন্স নম্বর</span></label>
                    <input type="text" 
                    id="license_number" onChange={(event) => { onChangeForm("license_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার লাইসেন্স নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="owner_type" className="label"> <span className="label-text font-semibold">মালিকের ধরন</span></label>
                    <input type="text"
                    id="owner_type" onChange={(event) => { onChangeForm("owner_type", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার প্রতিষ্ঠান মালিকের ধরন লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="owner_id" className="label"> <span className="label-text font-semibold">প্রতিষ্ঠান মালিক ID</span></label>
                    <input type="text"
                    id="owner_id" onChange={(event) => { onChangeForm("owner_id", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="প্রতিষ্ঠান মালিকের ID নম্বর লিখুন" />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label htmlFor="mouza" className="label"> <span className="label-text font-semibold">মৌজা</span></label>
                    <input type="text"
                    id="mouza" onChange={(event) => { onChangeForm("mouza", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে মৌজা লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="jl_number" className="label"> <span className="label-text font-semibold">জেএল নম্বর</span></label>
                    <input type="text"
                    id="jl_number" onChange={(event) => { onChangeForm("jl_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে জেএল নম্বর লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="mutation_number" className="label"> <span className="label-text font-semibold">মিউটেশন নম্বর</span></label>
                    <input type="text"
                    id="mutation_number" onChange={(event) => { onChangeForm("mutation_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে মিউটেশন নম্বর লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="plot_number" className="label"> <span className="label-text font-semibold">প্লট নম্বর</span></label>
                    <input type="text"
                    id="plot_number" onChange={(event) => { onChangeForm("plot_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="প্লট নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="capacity" className="label"> <span className="label-text font-semibold">ক্ষমতা সংখ্যা</span></label>
                    <input type="number"
                    id="capacity" onChange={(event) => { onChangeForm("capacity", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="ক্ষমতা সংখ্যা/capacity লিখুন" />

                </div>
               

                <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
            </form>
        </div>
    );
};

export default LicenseInfo;