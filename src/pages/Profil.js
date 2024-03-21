import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {fetchDataFromFile, fetchDataFromAPI} from '../models/functions'

//Classes
import UserModel from '../models/UserModel';
import DailyModel from '../models/DailyModel';
import PerformanceModel from '../models/PerformanceModel';
import AverageModel from '../models/AverageModel';

//Components
import Daily from '../Daily'
import Moyenne from '../Moyenne'
import Performance from '../Performance'
import Score from '../Score'
import Card from '../Card';

// Assets
import calories from '../assets/calories-icon.svg'
import protein from '../assets/protein-icon.svg'
import carbs from '../assets/carbs-icon.svg'
import fat from '../assets/fat-icon.svg'


const Profil = () => {
  let { id } = useParams();
  id = Number(id);

  const [user, setUser] = useState(null);
  const [daily, setDaily] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [average, setAverage] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const userMock = fetchDataFromFile("user", id);
    const activityMock = fetchDataFromFile("activity", id);
    const performanceMock = fetchDataFromFile("performance", id);
    const averageMock = fetchDataFromFile("average", id);
    //Modify isFetchingAPI to false if we want to use mock data
    const isFetchingAPI = false;
    const fetchData = async () => {
      try {
        const userAPI = await fetchDataFromAPI("user", id);
        const activityAPI = await fetchDataFromAPI("activity", id);
        const performanceAPI = await fetchDataFromAPI("performance", id);
        const averageAPI = await fetchDataFromAPI("average", id);
        
        if(isFetchingAPI){
          console.log("using api");
          const userData = new UserModel(id);
          userData.initialize(userAPI.data);
          setUser(userData);

          const activityData = new DailyModel(id);
          activityData.initialize(activityAPI.data);
          setDaily(activityData);

          const performanceData = new PerformanceModel(id);
          performanceData.initialize(performanceAPI.data); 
          setPerformance(performanceData);

          const averageData = new AverageModel(id);
          averageData.initialize(averageAPI.data); 
          setAverage(averageData);
        }
        else{
          console.log("using mock");
          const userData = new UserModel(id);
          userData.initialize(userMock);
          setUser(userData);

          const activityData = new DailyModel(id);
          activityData.initialize(activityMock);
          setDaily(activityData);

          const performanceData = new PerformanceModel(id);
          performanceData.initialize(performanceMock);
          setPerformance(performanceData);

          const averageData = new AverageModel(id);
          averageData.initialize(averageMock); 
          setAverage(averageData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [])
  // console.log(average);
        

  const poidsStyle = {
    minWidth: "664px",
    height: "200px",
    backgroundColor : "#FBFBFB",
    display : "flex",
    justifyContent : "center",
    borderRadius:"8px",
  }

  const moyenneStyle = {
    position: "relative",
    width: "200px",
    height: "200px",
    backgroundColor: "#FF0000",
    fill: "#ffffff",
    borderRadius:"8px",
    display : "flex",
    justifyContent : "center",
    alignItems: "center",
  }

  const performanceStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#282D30",
    borderRadius:"8px",
    fill: "#ffffff",
  }

  const scoreStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "#FBFBFB",
    borderRadius:"8px",
    fill: "#ffffff",
    display : "flex",
    justifyContent : "center",
    alignItems: "center",
  }

  return (
    <>
      {!loading && user && 
      <main className='main'>
      <div className="main-header-profile">
        <h1 className="main-header-profile-greet">Bonjour <span className="main-header-profile-greet-name">{user.firstName} {user.lastName}</span></h1>
        <p className='main-header-profile-paragraph'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div> 

      <div className='main-content'> 
        <div className='main-content-graphs'> 
          <div style={poidsStyle}>
            <Daily daily={daily.sessions} />
          </div>

          <div style={moyenneStyle}>
            <Moyenne average={average.average} />
          </div>   

          <div style={performanceStyle}>
            <Performance performance={performance.performances} />
          </div >
          
          <div style={scoreStyle}>
            <Score score={user.score} />
          </div>
        </div>
        
        <div className="main-content-results">
          <Card img={calories} alt="Icon calories" value={user.calories} unit="kCAL" name="Calories" />
          <Card img={protein} alt="Icon proteines" value={user.proteines} unit="g" name="Proteines" />
          <Card img={carbs} alt="Icon carbs " value={user.glucides} unit="g" name="Glucides" />
          <Card img={fat} alt="Icon fat" value={user.lipides} unit="g" name="Lipides" />
        </div>
      </div>
    </main>

    }

    </>
  )
}

export default Profil