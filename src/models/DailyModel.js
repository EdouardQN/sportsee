import { getActivityData } from '../api/GetData';

class DailyActivity {
  constructor(id) {
    this.id = id;
    this.sessions = [];
  }

  async fetchDailyData() {
    try {
      const activityData = await getActivityData(this.id);
      // Accéder aux sessions
      const sessions = activityData.data.sessions;

      // Parcourir chaque objet session et stocker les valeurs dans le tableau sessions
      sessions.forEach(session => {
        const sessionData = {
          day: session.day.split('-')[2], // Stocker uniquement le jour
          calories: session.calories,
          kilograms: session.kilogram
        };
        this.sessions.push(sessionData); // Ajouter les données de la session au tableau
      });
      return activityData;
    } catch (error) {
      console.error('Error fetching activity data:', error);
      throw error;
    }
  }

  async initialize() {
    await this.fetchDailyData();
  }
}

export default DailyActivity;
