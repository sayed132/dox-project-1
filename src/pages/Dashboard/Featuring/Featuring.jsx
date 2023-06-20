import Application from "../Application/Application";
import DesignApprove from "../DesignApprove/DesignApprove";
import DesignSend from "../DesignSend/DesignSend";
import LicenseApprove from "../LicenseApprove/LicenseApprove";
import NotLicenseApprove from "../NotLicenseApprove/NotLicenseApprove";

const Featuring = () => {
    return (
        <div className="grid grid-cols-5 gap-4 mx-auto mt-28 shadow-lg p-8 rounded-md">
            <Application></Application>
            <DesignApprove></DesignApprove>
            <DesignSend></DesignSend>
            <NotLicenseApprove></NotLicenseApprove>
            <LicenseApprove></LicenseApprove>
        </div>
    );
};

export default Featuring;