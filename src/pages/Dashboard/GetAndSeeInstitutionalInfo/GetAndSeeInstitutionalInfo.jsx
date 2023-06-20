import { useEffect, useState } from "react";
import { data } from '../../../district';
import axios from "axios";

const GetAndSeeInstitutionalInfo = () => {
    const [instInfo, setInstInfo] = useState([])
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazilla, setSelectedUpazilla] = useState("");



    const [formApplication, setFormApplication] = useState({

        inst_id: "",
        inst_name: "",
        designation_of_head: "",
        owner_id: "",
        type_of_inst: "",
        address_of_inst: "",
        road: "",
        district: "",
        upazilla: "",
        thana: "",
        remarks: "",
        trade_license_number: "",
        trade_license_date: "",
        tin_number: "",
        tin_date: "",
        phone_number: "",
        alt_phone_number: "",

    });

    useEffect(() => {
        fetch("http://103.49.200.66:8080/user/getinst/" + 102)
            .then(res => res.json())
            .then(data => setInstInfo(data.result.inst))
    }, []);

    // division and district properties
    const handleDivisionChange = (event) => {
        setSelectedDivision(event.target.value);
        setSelectedDistrict("");
        setSelectedUpazilla("");
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
        setSelectedUpazilla("");
    };

    const handleUpazillaChange = (event) => {
        setSelectedUpazilla(event.target.value);
    };

    //   find selected data source
    const divisions = data.map((entry) => entry.division);

    const divisionOptions = divisions.map((division, index) => (
        <option key={index} value={division}>
            {division}
        </option>
    ));

    const selectedDivisionObj = data.find(
        (entry) => entry.division === selectedDivision
    );

    const districts = selectedDivisionObj ? selectedDivisionObj.name : [];

    const districtOptions = districts.map((district, index) => (
        <option key={index} value={district.district}>
            {district.district}
        </option>
    ));

    const selectedDistrictObj = districts.find(
        (district) => district.district === selectedDistrict
    );

    const upazillas = selectedDistrictObj ? selectedDistrictObj.upazilla : [];

    const upazillaOptions = upazillas.map((upazilla, index) => (
        <option key={index} value={upazilla}>
            {upazilla}
        </option>
    ));

    //On Change Form

    const onChangeForm = (label, event) => {
        switch (label) {
            case "inst_id":
                setFormApplication({ ...formApplication, inst_id: event.target.value });
                break;
            case "inst_name":
                setFormApplication({ ...formApplication, inst_name: event.target.value });
                break;
            case "designation_of_head":
                setFormApplication({ ...formApplication, designation_of_head: event.target.value });
                break;
            case "owner_id":
                setFormApplication({ ...formApplication, owner_id: event.target.value });
                break;
            case "type_of_inst":
                setFormApplication({ ...formApplication, type_of_inst: event.target.value });
                break;
            case "address_of_inst":
                setFormApplication({ ...formApplication, address_of_inst: event.target.value });
                break;
            case "road":
                setFormApplication({ ...formApplication, road: event.target.value });
                break;
            case "division":
                setFormApplication({ ...formApplication, division: event.target.value });
                break;
            case "district":
                setFormApplication({ ...formApplication, district: event.target.value });
                break;
            case "upazilla":
                setFormApplication({ ...formApplication, upazilla: event.target.value });
                break;
            case "thana":
                setFormApplication({ ...formApplication, thana: event.target.value });
                break;
            case "remarks":
                setFormApplication({ ...formApplication, remarks: event.target.value });
                break;
            case "trade_license_number":
                setFormApplication({ ...formApplication, trade_license_number: event.target.value });
                break;
            case "trade_license_date":
                setFormApplication({ ...formApplication, trade_license_date: event.target.value });
                break;
            case "tin_number":
                setFormApplication({ ...formApplication, tin_number: event.target.value });
                break;
            case "tin_date":
                setFormApplication({ ...formApplication, tin_date: event.target.value });
                break;
            case "phone_number":
                setFormApplication({ ...formApplication, phone_number: event.target.value });
                break;
            case "alt_phone_number":
                setFormApplication({ ...formApplication, alt_phone_number: event.target.value });
                break;

        }
    };

    //   Submit handler

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(formApplication);

        await axios
            .post("http://103.49.200.66:8080/user/updateinst", formApplication)
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
            <h2 className="text-2xl">অনুগ্রহ করে আপনার শিক্ষা প্রতিষ্ঠানের তথ্য পরিবর্তন করুন</h2>
            <form className="mt-12" onSubmit={onSubmitHandler}>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="inst_id" className="label"> <span className="label-text font-semibold">ID নম্বর</span></label>
                    <input type="text" defaultValue={instInfo?.inst_id} readOnly
                    id="inst_id" onChange={(event) => { onChangeForm("inst_id", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার শিক্ষা প্রতিষ্ঠানের আইডি নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="inst_name" className="label"> <span className="label-text font-semibold">প্রতিষ্ঠানের নাম</span></label>
                    <input type="text" defaultValue={instInfo?.inst_name}
                    id="inst_name" onChange={(event) => { onChangeForm("inst_name", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার শিক্ষা প্রতিষ্ঠানের নাম লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="designation_of_head" className="label"> <span className="label-text font-semibold">প্রধানের পদবী</span></label>
                    <input type="text" defaultValue={instInfo?.indesignation_of_headst_id}
                    id="indesignation_of_headst_id" onChange={(event) => { onChangeForm("designation_of_head", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="প্রতিষ্ঠান প্রধানের পদবী লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="owner_id" className="label"> <span className="label-text font-semibold">প্রতিষ্ঠান মালিক ID</span></label>
                    <input type="text" defaultValue={instInfo?.owner_id}
                    id="owner_id" onChange={(event) => { onChangeForm("owner_id", event); }} 
                    className="input input-bordered col-span-4 shadow-sm " placeholder="প্রতিষ্ঠানের বা বাক্তিগত ID নম্বর লিখুন" />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label htmlFor="type_of_inst" className="label"> <span className="label-text font-semibold">প্রতিষ্ঠানের ধরন</span></label>
                    <input type="text" defaultValue={instInfo?.type_of_inst}
                    id="type_of_inst" onChange={(event) => { onChangeForm("type_of_inst", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="শিক্ষা প্রতিষ্ঠানের ধরন লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="address_of_inst" className="label"> <span className="label-text font-semibold">ঠিকানা দিন</span></label>
                    <input type="text" defaultValue={instInfo?.address_of_inst}
                    id="address_of_inst" onChange={(event) => { onChangeForm("address_of_inst", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে শিক্ষা প্রতিষ্ঠানের ঠিকানা লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="road" className="label"> <span className="label-text font-semibold">এলাকা/রোড নম্বর</span></label>
                    <input type="text" defaultValue={instInfo?.road}
                    id="road" onChange={(event) => { onChangeForm("road", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে শিক্ষা প্রতিষ্ঠানের এলাকা/রোড নম্বর লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="division" className="label"> <span className="label-text font-semibold">বিভাগ</span></label>
                    <select defaultValue={instInfo?.division} value={selectedDivision} id="division" 
                    // onChange={(event) => { onChangeForm("division", event); }}
                     onChange={handleDivisionChange} onClick={(event) => { onChangeForm("division", event); }}
                        className="select input-bordered col-span-4 shadow-sm">
                        <option  value="">Select Division</option>
                        {divisionOptions}
                    </select>


                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="district" className="label"> <span className="label-text font-semibold">জেলা</span></label>
                    
                    <select defaultValue={instInfo?.district} value={selectedDistrict} id="district" onChange={handleDistrictChange}
                    onClick={(event) => { onChangeForm("district", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option value="">Select District</option>
                        {districtOptions}
                    </select>

                </div>
                <div className="form-control grid grid-cols-5 mb-4 ">
                    <label htmlFor="upazilla" className="label"> <span className="label-text font-semibold">উপজেলা</span></label>


                    <select id="upazilla" defaultValue={instInfo?.upazilla} value={selectedUpazilla}  
                    onChange={handleUpazillaChange}
                    onClick={(event) => { onChangeForm("upazilla", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option value="">Select Upazilla</option>
                        {upazillaOptions}
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="thana" className="label"> <span className="label-text font-semibold">থানা</span></label>
                    <select
                    id="thana" defaultValue={instInfo?.thana} onChange={(event) => { onChangeForm("thana", event); }} 
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>mnjj</option>
                        <option>lkjfhu</option>
                        <option>অন্যান্য</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="remarks" className="label"> <span className="label-text font-semibold">মন্তব্য</span></label>
                    <input type="text" defaultValue={instInfo?.remarks}
                    id="remarks" onChange={(event) => { onChangeForm("remarks", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="মন্তব্য লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="trade_license_number" className="label"> <span className="label-text font-semibold">ট্রেড লাইসেন্স নম্বর</span></label>
                    <input type="text" defaultValue={instInfo?.trade_license_number}
                    id="trade_license_number" onChange={(event) => { onChangeForm("trade_license_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="ট্রেড লাইসেন্স নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="trade_license_date" className="label"> <span className="label-text font-semibold">ট্রেড লাইসেন্স তারিখ</span></label>
                    <input type="text" defaultValue={instInfo?.trade_license_date}
                    id="trade_license_date" onChange={(event) => { onChangeForm("trade_license_date", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="ট্রেড লাইসেন্স তারিখ লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="tin_number" className="label"> <span className="label-text font-semibold">টিআইএন নম্বর</span></label>
                    <input type="text" defaultValue={instInfo?.tin_number}
                    id="tin_number" onChange={(event) => { onChangeForm("tin_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="টিআইএন নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="tin_date" className="label"> <span className="label-text font-semibold">টিআইএন তারিখ</span></label>
                    <input type="text" defaultValue={instInfo?.tin_date}
                    id="tin_date" onChange={(event) => { onChangeForm("tin_date", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="টিআইএন তারিখ লিখুন" />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label htmlFor="phone_number" className="label"> <span className="label-text font-semibold">মোবাইল নাম্বার</span></label>
                    <input type="text" defaultValue={instInfo?.phone_number}
                    id="phone_number" onChange={(event) => { onChangeForm("phone_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="alt_phone_number" className="label"> <span className="label-text font-semibold">২য় মোবাইল নাম্বার</span></label>
                    <input type="number" defaultValue={instInfo?.alt_phone_number}
                    id="alt_phone_number" onChange={(event) => { onChangeForm("alt_phone_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার অন্য আর একটি মোবাইল নাম্বার লিখুন " />

                </div>

                <input className='btn btn-accent w-full mt-4' value="পরিবর্তন করুন" type="submit" />
            </form>
        </div>
    );
};

export default GetAndSeeInstitutionalInfo;