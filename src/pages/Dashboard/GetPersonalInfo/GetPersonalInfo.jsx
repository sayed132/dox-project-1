// import axios from "axios";
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";

// import { useQuery } from "react-query";


const GetPersonalInfo = () => {
    const [userInfo, setUserInfo] = useState([])
    // const [selectedDivision, setSelectedDivision] = useState("");
    // const [selectedDistrict, setSelectedDistrict] = useState("");
    // const [selectedUpazilla, setSelectedUpazilla] = useState("");
    
    useEffect(() => {
        fetch("http://103.49.200.66:8080/user/getclient/" + 101)
        .then(res => res.json())
        .then(data => setUserInfo(data.result.client))
    } ,[]);

    // division and district properties
    // const handleDivisionChange = (event) => {
    //     setSelectedDivision(event.target.value);
    //     setSelectedDistrict("");
    //     setSelectedUpazilla("");
    // };

    // const handleDistrictChange = (event) => {
    //     setSelectedDistrict(event.target.value);
    //     setSelectedUpazilla("");
    // };

    // const handleUpazillaChange = (event) => {
    //     setSelectedUpazilla(event.target.value);
    // };

    //   find selected data source
    // const divisions = data.map((entry) => entry.division);

    // const divisionOptions = divisions.map((division, index) => (
    //     <option key={index} value={division}>
    //         {division}
    //     </option>
    // ));

    // const selectedDivisionObj = data.find(
    //     (entry) => entry.division === selectedDivision
    // );

    // const districts = selectedDivisionObj ? selectedDivisionObj.name : [];

    // const districtOptions = districts.map((district, index) => (
    //     <option key={index} value={district.district}>
    //         {district.district}
    //     </option>
    // ));

    // const selectedDistrictObj = districts.find(
    //     (district) => district.district === selectedDistrict
    // );

    // const upazillas = selectedDistrictObj ? selectedDistrictObj.upazilla : [];

    // const upazillaOptions = upazillas.map((upazilla, index) => (
    //     <option key={index} value={upazilla}>
    //         {upazilla}
    //     </option>
    // ));

    // const userInfo = useLoaderData()
    // console.log(userInfo);

    // const { data: userInfo = [], refetch } = useQuery({
    //     queryKey: ['client_id'],
    //     queryFn: () => fetch("http://103.49.200.66:8080/user/getclient/" + 101)
    //         .then(res => res.json())
    //         // .then(data => console.log(data.result.client))
    
    // })


    // const [lands, setLands] = useState([]);
    // const [clientId, setClientId] = useState("");


    // useEffect(() => {
    //     const fetchData = async () => {


    //         try {
    //             const response = await axios.get("http://103.49.200.66:8080/user/getclient/" + 101);
    //             console.log(response);
    //             setLands(response.data.result.client.client_id);
    //             console.log(lands);
    //         } catch (error) {
    //             console.log("ki error eta?", error);
    //         }
    //     };

    //     fetchData();
    // }, [clientId]);

    // const handleInputChange = (event, type) =>{
    //     switch (type) {
    //         case "land_id":
    //           setFormData({ ...lands, land_id: event});
    //           console.log(lands);
    //           break; 
    //         case "vpcase":
    //           setFormData({ ...lands, vpcase: event});
    //           console.log(lands);
    //           break;
    // }}
    return (
        <div className=' p-7 '>
            <h2 className="text-2xl">অনুগ্রহ করে সঠিক তথ্য লিখুন</h2>
            <form className="mt-12" onSubmit={''}>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="client_id" className="label"> <span className="label-text font-semibold">ক্লায়েন্ট ID</span></label>
                    <input type="text" id="client_id" defaultValue={userInfo.client_id} readOnly disabled
                    // onChange={(event) => { onChangeForm("client_id", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার ক্লায়েন্ট ID লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="name" className="label"> <span className="label-text font-semibold">আপনার নাম</span></label>
                    <input type="text" id="name" defaultValue={userInfo.name}
                    // onChange={(event) => { onChangeForm("name", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার নিজের নাম লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="f_name" className="label"> <span className="label-text font-semibold">পিতার নাম</span></label>
                    <input type="text" id="f_name" defaultValue={userInfo.f_name}
                    //  onChange={(event) => { onChangeForm("f_name", event); }} 
                     className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার পিতার নাম লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="address" className="label"> <span className="label-text font-semibold">স্থায়ী ঠিকানা</span></label>
                    <input type="text" id="address" defaultValue={userInfo.address}
                    // onChange={(event) => { onChangeForm("address", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার স্থায়ী ঠিকানা লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    {/* <label htmlFor="division" className="label"> <span className="label-text font-semibold">বিভাগ</span></label>
                    <select  value={selectedDivision} id="division" defaultValue={userInfo.division}
                
                     onChange={handleDivisionChange} 
                     onClick={(event) => { onChangeForm("division", event); }}
                        className="select input-bordered col-span-4 shadow-sm">
                        <option  value="">Select Division</option>
                        {divisionOptions}
                    </select> */}


                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    {/* <label htmlFor="district" className="label"> <span className="label-text font-semibold">জেলা</span></label>
                    
                    <select value={selectedDistrict} defaultValue={userInfo.district} id="district" onChange={handleDistrictChange}
                    onClick={(event) => { onChangeForm("district", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option value="">Select District</option>
                        {districtOptions}
                    </select> */}

                </div>
                <div className="form-control grid grid-cols-5 mb-4 ">
                    {/* <label htmlFor="upazilla" className="label"> <span className="label-text font-semibold">উপজেলা</span></label>


                    <select id="upazilla" defaultValue={userInfo.upazilla} value={selectedUpazilla}  onChange={handleUpazillaChange}
                    onClick={(event) => { onChangeForm("upazilla", event); }}

                        className="select input-bordered col-span-4 shadow-sm">
                        <option value="">Select Upazilla</option>
                        {upazillaOptions}
                    </select> */}
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="remarks" className="label"> <span className="label-text font-semibold">মন্তব্য</span></label>
                    <input type="text" id="remarks" defaultValue={userInfo.remarks}
                    // onChange={(event) => { onChangeForm("remarks", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="মন্তব্য লিখুন" />

                </div>

                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="nid_number" className="label"> <span className="label-text font-semibold">NID কার্ড নাম্বার</span></label>
                    <input type="number" id="nid_number" defaultValue={userInfo.nid_number}
                    // onChange={(event) => { onChangeForm("nid_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার NID কার্ড নাম্বার লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="dob" className="label"> <span className="label-text font-semibold">জন্ম তারিখ</span></label>
                    <input type="date" id="dob" defaultValue={userInfo.dob}
                    //  onChange={(event) => { onChangeForm("dob", event); }} 
                     className="input input-bordered col-span-4 shadow-sm " placeholder="এখানে আপনার নিজের জন্ম তারিখ লিখুন " />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label htmlFor="phone_number" className="label"> <span className="label-text font-semibold">মোবাইল নাম্বার</span></label>
                    <input type="number" id="phone_number" defaultValue={userInfo.phone_number}
                    //  onChange={(event) => { onChangeForm("phone_number", event); }} 
                     className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="alt_phone_number" className="label"> <span className="label-text font-semibold">২য় মোবাইল নাম্বার</span></label>
                    <input type="number" id="alt_phone_number" defaultValue={userInfo.alt_phone_number}
                    // onChange={(event) => { onChangeForm("alt_phone_number", event); }} 
                    className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার অন্য আর একটি মোবাইল নাম্বার লিখুন " />

                </div>

                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="sex" className="label"> <span className="label-text font-semibold">লিঙ্গ</span></label>
                    <select id="sex" defaultValue={userInfo.sex}
                    // onChange={(event) => { onChangeForm("sex", event); }}
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>পুরুষ</option>
                        <option>মহিলা</option>
                        <option>অন্যান্য</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label htmlFor="user_photo" className="label"> <span className="label-text font-semibold">আপনার ছবি দিন</span></label>
                    <input type="file" id="user_photo"
                    //  onChange={(event) => { onChangeForm("user_photo", event); }}
                      className="input input-bordered col-span-4 shadow-sm" />

                </div>
                <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
            </form>
        </div>
    );
};

export default GetPersonalInfo;