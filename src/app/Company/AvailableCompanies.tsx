import { SearchRequestBody } from "../Interface/company-Interface";
import { getAllCompaniesApi } from "../services/company.service";
import CompaniesInfoList from "./CompaniesInfoList";

const AvailableCompanies = async () => {  
  const requestBody: SearchRequestBody = {
    searchGroupId: 0,
    searchCompanyName: null,
    searchVatNumber: null,
    searchActiveId: 0,
    page: 1,
    pageSize: 25,
    availablePageSizes: ["15", "25", "50", "100"],
    draw: null,
    start: 0,
    length: 15,
  };

  const response = await getAllCompaniesApi(requestBody);
  const companiesInfo = response?.data?.data;

  if(!companiesInfo) return (<></>)
    else
  return (
    <div className="p-8">
      <div className="w-full  mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-80 rounded-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>LOGO</th>
                <th>NAME</th>
                <th>GROUP</th>
                <th>VAT NUMBER</th>
                <th>ACTIVE</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {companiesInfo.map((company,index) => (
                <CompaniesInfoList
                key={index}
                  company = {company}
                ></CompaniesInfoList>
              ))}
                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AvailableCompanies;
