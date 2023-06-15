
const PersonalInfo = () => {
    return (
        <div className=' p-7 '>
            <h2 className="text-2xl">অনুগ্রহ করে সঠিক তথ্য লিখুন</h2>
            <form className="mt-12">
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">আপনার নাম</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার নিজের নাম লিখুন "/>
                   
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">পিতার নাম</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার পিতার নাম লিখুন "/>
                    
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">স্থায়ী ঠিকানা</span></label>
                    <input type="text"  className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার স্থায়ী ঠিকানা লিখুন "/>
                   
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">জন্ম তারিখ</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm " placeholder="এখানে আপনার নিজের জন্ম তারিখ লিখুন "/>
                
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">NID কার্ড নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার NID কার্ড নাম্বার লিখুন "/>
                
                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">মোবাইল নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"/>
                
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">২য় মোবাইল নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার অন্য আর একটি মোবাইল নাম্বার লিখুন "/>
                
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">বিভাগ</span></label>
                    <select
                        
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                 
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">জেলা</span></label>
                    <select
                        
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                    
                </div>
                <div className="form-control grid grid-cols-5 mb-4 ">
                    <label className="label"> <span className="label-text font-semibold">উপজেলা</span></label>
                    

                    <select
                        
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>বরিশাল</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">লিঙ্গ</span></label>
                    <select
                        className="select input-bordered col-span-4 shadow-sm">
                        <option>পুরুষ</option>
                        <option>মহিলা</option>
                        <option>অন্যান্য</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">আপনার ছবি দিন</span></label>
                    <input type="file" className="input input-bordered col-span-4 shadow-sm" />

                </div>
                <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
            </form>
        </div>
    );
};

export default PersonalInfo;