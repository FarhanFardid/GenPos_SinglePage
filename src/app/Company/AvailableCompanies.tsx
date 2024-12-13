import CompaniesInfoList from "./CompaniesInfoList";

const AvailableCompanies = () => {
  const companiesInfo = [
    {
      logo: "https://example.com/logo1.png",
      name: "Company A",
      group: "Tech Group",
      vatNumber: "123456789",
      active: true,
    },
    {
      logo: "https://example.com/logo2.png",
      name: "Company B",
      group: "Finance Group",
      vatNumber: "987654321",
      active: false,
    },
    {
      logo: "https://example.com/logo3.png",
      name: "Company C",
      group: "Retail Group",
      vatNumber: "112233445",
      active: true,
    },
  ];

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
              {companiesInfo.map((info, index) => (
                <CompaniesInfoList
                  key={index}
                  logo={info.logo}
                  name={info.name}
                  group={info.group}
                  vatNumber={info.vatNumber}
                  active={info.active}
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
