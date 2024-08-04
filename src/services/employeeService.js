import axios from "axios";

const API_URL = "https://free-ap-south-1.cosmocloud.io/development/api";
const header = {
  headers: {
    projectId: "66aa2cc08a5479d9d20fcf1d",
    environmentId: "66aa2cc08a5479d9d20fcf1e",
  },
};

export const getEmployees = async () => {
  try {
    return await axios.get(`${API_URL}/empl_details`, {
      headers: header.headers, // Access headers correctly
      params: {
        limit: 0,
        offset: 0,
      },
    });
  } catch (error) {
    return error;
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${API_URL}/empl_details/${id}`, {
      headers: header.headers,
    }); // Access headers correctly
  } catch (error) {
    return error;
  }
};

export const createEmployee = async (employee) => {
    console.log(employee);
    try {
    return await axios.post(`${API_URL}/empl_details`, employee, {
      headers: header.headers,
    }); // Correct order of parameters
    
  } catch (error) {
    return error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${API_URL}/empl_details/${id}`, {
      headers: header.headers, // Access headers correctly
    });
  } catch (error) {
    return error;
  }
};
