import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from '../__mock__/data'
import { 
  getUserData,
  getActivityData,
  getAverageData,
  getPerformanceData
} from '../api/GetData';

export function fetchDataFromFile(type, id){
  switch (type) {
    case "user":
      return USER_MAIN_DATA.find(d => d.id ===  id);
    case "activity":
      return USER_ACTIVITY.find(d => d.userId ===  id);
    case "average":
      return USER_AVERAGE_SESSIONS.find(d => d.userId ===  id);
    case "performance":
      return USER_PERFORMANCE.find(d => d.userId ===  id);
    default:
      return USER_MAIN_DATA.find(d => d.id ===  id);
  }
}

export async function fetchDataFromAPI(type, id){
  switch (type) {
    case "user":
      return await getUserData(id);
    case "activity":
      return await getActivityData(id)
    case "average":
      return await getAverageData(id);
    case "performance":
      return await getPerformanceData(id);
    default:
      return await getUserData(id);
  }
}