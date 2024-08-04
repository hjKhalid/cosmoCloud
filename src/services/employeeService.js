import axios from "axios";

const API_URL = "https://free-ap-south-1.cosmocloud.io/development/api/";
const header = {
  headers: {
    projectId: "028969",
    environmentId: "66aa2cc08a5479d9d20fcf1e",
  },
};

export const getEmployees = async () => {
  try {
    return await axios.get(`${API_URL}/employeedetails`, {
      headers: header.headers, // Access headers correctly
      params: {
        limit: 0,
        offset: 0,
      },
    });
  } catch (error) {
    console.error('Error fetching employees:', error.response ? error.response.data : error.message);
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${API_URL}/employeedetails/${id}`, { headers: header.headers }); // Access headers correctly
  } catch (error) {
    return error;
  }
};

export const createEmployee = async (employee) => {
  try {
    return await axios.post(`${API_URL}/employeedetails`, employee, { headers: header.headers }); // Correct order of parameters
  } catch (error) {
    return error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${API_URL}/employeedetails/${id}`, {
      headers: header.headers, // Access headers correctly
    });
  } catch (error) {
    return error;
  }
};
