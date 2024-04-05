import fetchData from './Fetch'

export const getUserData = async (id) => {
    let url =`http://localhost:3000/user/${id}`;
    const data = await fetchData(url);
    return data;
};

export const getActivityData = async (id) => {
    let url = `http://localhost:3000/user/${id}/activity`;
    const data = await fetchData(url);
    return data;
};

export const getAverageData = async (id) => {
    let url =`http://localhost:3000/user/${id}/average-sessions`;
    const data = await fetchData(url);
    return data;
};

export const getPerformanceData = async (id) => {
    let url =`http://localhost:3000/user/${id}/performance`;
    const data = await fetchData(url);
    return data;
  };