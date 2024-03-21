class PerformanceModel {
  constructor(id) {
    this.id = id;
    this.performances = [];
  }

  async createPerformanceData(data) {
    // Accéder aux sessions
    // console.log(data)
    const performances = data.data;
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
    const performanceDataWithKind = replaceKindNbrWithValue(this.performances, Object.values(data.kind));
    // console.log(performanceDataWithKind);
    this.performances = performanceDataWithKind;

    return data;
  }

  initialize(data) {
    this.createPerformanceData(data);
  }
}

export default PerformanceModel;