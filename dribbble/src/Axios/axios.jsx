import axios from 'axios';
 
const axiosInstance = axios.create({
  baseURL: 'https://a07b-103-144-27-118.ngrok-free.app/',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning':'true'
  },
});
 
export const getUsers = () => {
  return axiosInstance.get('Users');
};
 
export const getFeedData = () => {
  return axiosInstance.get('feed');
};
 
export const getDesignData = () => {
  return axiosInstance.get('designs');
};
 
export const getProfileData = () => {
  return axiosInstance.get('profiles');
};
 
export default axiosInstance;