import {
  CommonResponse,
  SearchRequestBody,
} from "../Interface/company-Interface";

export const getAllCompaniesApi = async (
  requestBody: SearchRequestBody
): Promise<CommonResponse> => {
  const response = await fetch("http://103.129.115.165:5000/api/Company/List", {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiQWRtaW5BY2Nlc3MiOnRydWUsImFwcF9tZXRhZGF0YSI6IiIsImV4cCI6MTczNjE4NjQ1NCwiaXNzIjoiR2VuUE9TIn0.f1n7YRDDrnJQ_iy9zSLBp9wgBU2FnIdpPgome7a6Xcc",
    },
    body: JSON.stringify(requestBody),
  });
  return response.json();
};
