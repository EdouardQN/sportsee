class AverageModel {
  constructor(id) {
    this.id = id;
    this.average = [];
  }

  async fetchPerformanceData(data) {
    const averageSessions = data.sessions;
    // console.log(averageSessions)

    // Parcourir chaque objet session et stocker les valeurs dans le tableau average
    averageSessions.forEach(a => {
      const averageData = {
        day: a.day,
        sessionLength: a.sessionLength
      };
      this.average.push(averageData); // Ajouter les données de la session au tableau
    });
    return data;
  }

  async initialize(data) {
    await this.fetchPerformanceData(data);
  }
}

export default AverageModel;
