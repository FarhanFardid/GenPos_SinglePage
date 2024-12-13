import CommonButton from "../Buttons/CommonButton";


const CompanyAdd = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg">
          {/* Left Side Header */}
          <h3 className="text-2xl font-semibold text-gray-800">
            List of Companies
          </h3>
    
          {/* Right Side Button */}
          <div className="mt-2 sm:mt-0">
            <CommonButton text="Add new" path="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" clear='false' />
          </div>
        </div>
      );
    };

export default CompanyAdd;