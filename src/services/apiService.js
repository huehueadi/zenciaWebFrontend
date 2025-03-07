import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'https://zencia-web-zeta.vercel.app/v1';

// Utility function to get the auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('authToken'); // Assuming the token is stored in localStorage
};

/**
 * Fetch session data from the server for a specific chatbotId
 * @param {string} chatbotId - The chatbot ID to fetch sessions for
 * @returns {Promise<object>} - The session data from the API
 */
export const fetchSessions = async (chatbotId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sessions/${chatbotId}`);
    return response.data;  // Return the response data (sessions)
  } catch (error) {
    console.error('Error fetching sessions:', error);
    throw error;  // Propagate the error to be handled by the caller
  }
};

/**
 * Fetch chat data for a specific session ID
 * @param {string} sessionId - The session ID to fetch chats for
 * @returns {Promise<object>} - The chat data from the API
 */
export const fetchChats = async (sessionId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sessions/${sessionId}/chats`);
    return response.data;  // Return the response data (chats)
  } catch (error) {
    console.error('Error fetching chats:', error);
    throw error;  // Propagate the error to be handled by the caller
  }
};

/**
 * Fetch users from the admin endpoint
 * @returns {Promise<object>} - List of users from the API
 */
export const fetchUsers = async () => {
  try {
    const token = getAuthToken(); // Retrieve token from localStorage or another storage mechanism
    if (!token) {
      throw new Error('No token found, please login first');
    }

    const response = await axios.get(`${API_BASE_URL}/admin/users`, {
      headers: {
        Authorization: `${token}`, // Correctly prefix the token with Bearer
      },
    });

    return response.data; // Return the list of users from the response
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
