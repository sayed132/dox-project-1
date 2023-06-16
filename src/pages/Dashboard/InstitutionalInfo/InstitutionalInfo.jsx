
const InstitutionalInfo = () => {
    return (
        <div className=' p-7 '>
            <h2 className="text-2xl">অনুগ্রহ করে আপনার শিক্ষা প্রতিষ্ঠানের সঠিক তথ্য দিন</h2>
            <form className="mt-12">
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">ID নম্বর</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার শিক্ষা প্রতিষ্ঠানের আইডি নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">প্রতিষ্ঠানের নাম</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার শিক্ষা প্রতিষ্ঠানের নাম লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">প্রধানের পদবী</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="প্রতিষ্ঠান প্রধানের পদবী লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">প্রতিষ্ঠান ID</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm " placeholder="প্রতিষ্ঠানের বা বাক্তিগত ID নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">NID কার্ড নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার NID কার্ড নাম্বার লিখুন " />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">প্রতিষ্ঠানের ধরন</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="শিক্ষা প্রতিষ্ঠানের ধরন লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">ঠিকানা দিন</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে শিক্ষা প্রতিষ্ঠানের ঠিকানা লিখুন " />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">এলাকা/রোড নম্বর</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে শিক্ষা প্রতিষ্ঠানের এলাকা/রোড নম্বর লিখুন " />

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
                    <label className="label"> <span className="label-text font-semibold">থানা</span></label>
                    <select
                        className="select input-bordered col-span-4 shadow-sm">
                        <option></option>
                        <option></option>
                        <option>অন্যান্য</option>
                    </select>
                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">মন্তব্য</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="মন্তব্য লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">ট্রেড লাইসেন্স নম্বর</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="ট্রেড লাইসেন্স নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">ট্রেড লাইসেন্স তারিখ</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="ট্রেড লাইসেন্স তারিখ লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">টিআইএন নম্বর</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="টিআইএন নম্বর লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">টিআইএন তারিখ</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="টিআইএন তারিখ লিখুন" />

                </div>
                <div className="form-control w-full grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">মোবাইল নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন" />

                </div>
                <div className="form-control grid grid-cols-5 mb-4">
                    <label className="label"> <span className="label-text font-semibold">২য় মোবাইল নাম্বার</span></label>
                    <input type="text" className="input input-bordered col-span-4 shadow-sm" placeholder="এখানে আপনার অন্য আর একটি মোবাইল নাম্বার লিখুন " />

                </div>

                <input className='btn btn-accent w-full mt-4' value="জমা দিন" type="submit" />
            </form>
        </div>
    );
};

export default InstitutionalInfo;