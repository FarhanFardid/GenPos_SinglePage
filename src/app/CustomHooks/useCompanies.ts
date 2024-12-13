import { useEffect, useState } from "react";


  
  const useCompanies = () => {
    const [info, setInfo] = useState<[]>([]); // State to store the data
    const [loading, setLoading] = useState<boolean>(true); // State for loading state
    const [error, setError] = useState<string | null>(null); // State for error handling
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://103.129.115.165:5000/api/Company/List", {
            method: "GET",
            headers: {
              "accept": "*/*",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiQWRtaW5BY2Nlc3MiOnRydWUsImFwcF9tZXRhZGF0YSI6IiIsImV4cCI6MTczNjE4NjQ1NCwiaXNzIjoiR2VuUE9TIn0.f1n7YRDDrnJQ_iy9zSLBp9wgBU2FnIdpPgome7a6Xcc"
            }
          });
  
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
  
          const data = await response.json(); // Type the response data
          setInfo(data); // Save the data to the state
        } catch (err) {
          setError(err.message); // Handle any error
        } finally {
          setLoading(false); 
        }
      };
  
      fetchData(); 
    }, []);
  
    return { info, loading, error }; // Return the state and data
  };
  
  export default useCompanies;