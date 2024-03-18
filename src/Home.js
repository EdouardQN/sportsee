import { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import UserModel from './models/UserModel';
import DailyModel from './models/DailyModel';
import PerformanceModel from './models/PerformanceModel';
import AverageModel from './models/AverageModel';
import Daily from './Daily'
import Moyenne from './Moyenne'
import Performance from './Performance'
import Score from './Score'
import calories from './assets/calories-icon.svg'
import protein from './assets/protein-icon.svg'
import carbs from './assets/carbs-icon.svg'
import fat from './assets/fat-icon.svg'
import Card from './Card';

const Home = () => {
  let { id } = useParams();

  const [user, setUser] = useState(null);
  const [daily, setDaily] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [average, setAverage] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = new UserModel(id);
        await userData.initialize();
        setUser(userData);
        
        const activityData = new DailyModel(id);
        await activityData.initialize();
        setDaily(activityData);

        const performanceData = new PerformanceModel(id);
        await performanceData.initialize(); 
        setPerformance(performanceData);

        const averageData = new AverageModel(id);
        await averageData.initialize(); 
        setAverage(averageData);

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

export default Home