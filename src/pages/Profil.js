import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {fetchDataFromFile, fetchDataFromAPI} from '../models/functions'
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();
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
    const isFetchingAPI = true;
    const fetchData = async () => {
      try {
        const userAPI = await fetchDataFromAPI("user", id);
        const activityAPI = await fetchDataFromAPI("activity", id);
        const performanceAPI = await fetchDataFromAPI("performance", id);
        const averageAPI = await fetchDataFromAPI("average", id);

        const userData = new UserModel(id);
        const activityData = new DailyModel(id);
        const performanceData = new PerformanceModel(id);
        const averageData = new AverageModel(id);
        
        if(isFetchingAPI){
          // console.log("using api");
        
          userData.initialize(userAPI.data);
          activityData.initialize(activityAPI.data);
          performanceData.initialize(performanceAPI.data); 
          averageData.initialize(averageAPI.data); 
          
          setUser(userData);
        
          setDaily(activityData);
          
          setPerformance(performanceData);
          
          setAverage(averageData);
        }
        else{
          // console.log("using mock");
          userData.initialize(userMock);
          setUser(userData);

          activityData.initialize(activityMock);
          setDaily(activityData);

          performanceData.initialize(performanceMock);
          setPerformance(performanceData);

          averageData.initialize(averageMock); 
          setAverage(averageData);
        }
        setLoading(false);
      } catch{
        setLoading(false);
        navigate("/notfound")
      }
    };
    fetchData();
  }, [])
  // console.log(average);
        
  const poidsStyle = {
    minWidth: "664px",
    height: "280px",
    backgroundColor : "#FBFBFB",
    display : "flex",
    justifyContent : "center",
    borderRadius:"8px",
    paddingTop:"12px",
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
    overflow:"hidden"
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