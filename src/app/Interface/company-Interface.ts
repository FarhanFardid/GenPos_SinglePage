export interface SearchRequestBody {
    searchGroupId: number;
    searchCompanyName: string | null;
    searchVatNumber: string | null;
    searchActiveId: number;
    page: number;
    pageSize: number;
    availablePageSizes: string[];
    draw: number | null;
    start: number;
    length: number;
  }
  
  export interface CommonResponse {
    data: Data
  }
  export interface InfoData {
    data: FilterData
  }
  
  export interface Data {
    data: Company[]
    recordsFiltered: number
    recordsTotal: number
  }
  
  export interface Company {
    groupId: number
    groupName: string
    name: string
    address: string
    factoryAddress: string
    remarks: string
    contactNo: string
    email: string
    logoId?: string
    webURL: string
    prefix: string
    vatNumber: string
    active: boolean
    numberOfBrands: number
    logoThumbnailUrl: string
    id: number
  }
  
  
  export interface FilterData {
    searchGroupId: number
    searchCompanyName: string
    searchVatNumber: number
    searchActiveId: number
    availableGroups: AvailableGroup[]
    availableActiveOptions: AvailableActiveOption[]
    page: number
    pageSize: number
    availablePageSizes: string[]
    start: number
    length: number
  }
  
  export interface AvailableGroup {
    disabled: boolean
    // group: any
    selected: boolean
    text: string
    value: string
  }
  
  export interface AvailableActiveOption {
    disabled: boolean
    // group: any
    selected: boolean
    text: string
    value: string
  }
  
  