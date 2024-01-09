import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from './api/ApiContext';
import {getUserData, getActivityData, getAverageData, getPerformanceData} from './api/GetData'
import calories from './assets/calories-icon.svg'
import protein from './assets/protein-icon.svg'
import carbs from './assets/carbs-icon.svg'
import fat from './assets/fat-icon.svg'
import Card from './Card';

const Profil = () => {
  const { api } = useContext(ApiContext);
  const [user, setUser] = useState();

  let { id } = useParams();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        // Utiliser les méthodes avec le contexte
        const userData = await getUserData(id);
        const activityData = await getActivityData(id);
        const averageData = await getAverageData(id);
        const performanceData = await getPerformanceData(id);

        // On récupère avec state pour les afficher
        setUser(userData);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Vérifier si l'API est activée avant de faire les requêtes
    if (api) {
      fetchDataFromApi();
    }
  }, [api, id]);

  return (
    <div className="results">
      <Card img={calories} alt="Icon calories" value="1 930" unit="kCAL" name="Calories" />
      <Card img={protein} alt="Icon proteines" value="155" unit="g" name="Proteines" />
      <Card img={carbs} alt="Icon carbs " value="290" unit="g" name="Glucides" />
      <Card img={fat} alt="Icon fat" value="50" unit="g" name="Lipides" />
    </div>
  );
};

export default Profil;
