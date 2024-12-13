"use client";
import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import DropdownField from "./DropDownField";
import CommonButton from "../Buttons/CommonButton";
import { getAllInfoApi } from "../services/information.service";
import { FilterData } from "../Interface/company-Interface";

interface FormData {
  companyName: string;
  group: string;
  vatNumber: string;
  active: string;
}

interface DropdownOptions {
  groupOptions: { value: string; text: string }[];
  activeOptions: { value: string; text: string }[];
}

const CompanyForm = () => {
  const [info, setInfo] = useState<FilterData>();
  const [dropdownOptions, setDropDownOptions] = useState<DropdownOptions>({
    groupOptions: [],
    activeOptions: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllInfoApi();
      setInfo(response.data);
      console.log(response.data);
      setDropDownOptions({
        groupOptions: response.data.availableGroups,
        activeOptions: response.data.availableActiveOptions,
      });
    };

    fetchData();
  }, []);

  console.log(info);

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    group: "",
    vatNumber: "",
    active: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleClear = () => {
  //     setFormData({
  //       companyName: "",
  //       group: "",
  //       vatNumber: "",
  //       active: "",
  //     });
  //   };

  return (
    <div className="max-w-full mx-auto md:p-8 bg-white shadow-md rounded-lg">
      <form>
        <div className="flex flex-wrap -m-2">
          <InputField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            placeholder="Company name"
            validationMessage={
              !formData.companyName ? "Company Name is required." : undefined
            }
          />
          <DropdownField
            label="Group"
            name="group"
            value={formData.group}
            onChange={handleInputChange}
            options={dropdownOptions.groupOptions}
          />
          <InputField
            label="VAT Number"
            name="vatNumber"
            value={formData.vatNumber}
            onChange={handleInputChange}
            placeholder="VAT number"
          />
          <DropdownField
            label="Active"
            name="active"
            value={formData.active}
            onChange={handleInputChange}
            options={dropdownOptions.activeOptions}
          />
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <CommonButton
            text="Search"
            path="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            clear="false"
          />
          <CommonButton
            text="Clear"
            path="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"
            clear="true"
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
