import { getAverageData } from '../api/GetData';

class AverageModel {
  constructor(id) {
    this.id = id;
    this.average = [];
  }

  async fetchPerformanceData() {
    try {
      const averageData = await getAverageData(this.id);
      // Accéder aux sessions
      const averageSessions = averageData.data.sessions;
      // console.log(averageSessions)

      // Parcourir chaque objet session et stocker les valeurs dans le tableau average
      averageSessions.forEach(a => {
        const averageData = {
          day: a.day,
          sessionLength: a.sessionLength
        };
        this.average.push(averageData); // Ajouter les données de la session au tableau
      });

      return averageData;
    } catch (error) {
      console.error('Error fetching activity data:', error);
      throw error;
    }
  }

  async initialize() {
    await this.fetchPerformanceData();
  }
}

export default AverageModel;
