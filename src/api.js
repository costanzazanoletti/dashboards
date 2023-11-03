import axios from 'axios';
const BASE_URL =
  'https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/';

export const getDashboardList = async () => {
  const response = await axios.get(BASE_URL + 'dashboards.json');
  return response.data.dashboards;
};

export const getDashboardDetail = async (id) => {
  const response = await fetch(BASE_URL + id + '.json');
  return await response.json();
};
