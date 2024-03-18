import { getPerformanceData } from '../api/GetData';

class PerformanceModel {
  constructor(id) {
    this.id = id;
    this.performances = [];
  }

  async fetchPerformanceData() {
    try {
      const performanceData = await getPerformanceData(this.id);
      // Accéder aux sessions
      const performances = performanceData.data.data;
      // console.log(performanceData)

      // Parcourir chaque objet session et stocker les valeurs dans le tableau performances
      performances.forEach(performance => {
        const performanceData = {
          value: performance.value,
          kind: performance.kind
        };
        this.performances.push(performanceData); // Ajouter les données de la session au tableau
      });

      const replaceKindNbrWithValue = (arrayOfPerf, arrayofKindPerf) => {
        return arrayOfPerf.map(item => ({
          ...item,
          //Soustraire 1 car les indices commencent à 0
          kind: arrayofKindPerf[item.kind - 1]  
        }));
      };
      const performanceDataWithKind = replaceKindNbrWithValue(this.performances, Object.values(performanceData.data.kind));
      // console.log(performanceDataWithKind);
      this.performances = performanceDataWithKind;

      return performanceData;
    } catch (error) {
      console.error('Error fetching activity data:', error);
      throw error;
    }
  }

  async initialize() {
    await this.fetchPerformanceData();
  }
}

export default PerformanceModel;
