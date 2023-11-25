import axios from 'axios';

const apiUrl = 'http://localhost:5174/api/users';

export default {
  createUser: async (userData) => {
    try {
      const response = await axios.post(apiUrl, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
