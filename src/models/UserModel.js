import { getUserData } from '../api/GetData';

class UserModel {
  constructor(id) {
    this.id = id;
    this.firstName = '';
    this.lastName = '';
    this.calories = 0;
    this.proteines = 0;
    this.glucides = 0;
    this.lipides = 0;
    this.score = 0;
  }

  async fetchUserData() {
    try {
      //faire récupération des données ailleurs, ici on ne fait que map
      //propriété qui permet de chercher l'api ou le fichier en fonction de cette dernière
      const userData = await getUserData(this.id);
      this.firstName = userData.data.userInfos.firstName;
      this.lastName = userData.data.userInfos.lastName;
      this.calories = userData.data.keyData.calorieCount;
      this.proteines = userData.data.keyData.proteinCount;
      this.glucides = userData.data.keyData.carbohydrateCount;
      this.lipides = userData.data.keyData.lipidCount;
      this.score = userData.data.todayScore || userData.data.score;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  async initialize() {
    await this.fetchUserData();
  }
}

export default UserModel;
