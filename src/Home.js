import { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ApiContext } from './api/ApiContext';
import Dayly from './Dayly'
import Moyenne from './Moyenne'
import Performance from './Performance'
import Score from './Score'
import calories from './assets/calories-icon.svg'
import protein from './assets/protein-icon.svg'
import carbs from './assets/carbs-icon.svg'
import fat from './assets/fat-icon.svg'
import Card from './Card';

//fetch data
import { 
  getUserData, 
  getActivityData, 
  getPerformanceData, 
  getAverageData
} from './api/GetData'

const Home = () => {
  const { api } = useContext(ApiContext);
  let { id } = useParams();

  const [user, setUser] = useState(null);
  const [dayly, setDayly] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [average, setAverage] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(id);
        setUser(data);

        const dataD = await getActivityData(id);
        setDayly(dataD);

        const dataP = await getPerformanceData(id);
        setPerformance(dataP);

        const dataA = await getAverageData(id);
        setAverage(dataA);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchData();

  }, [])
  
  
  // console.log(user?.data);


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
        <h1 className="main-header-profile-greet">Bonjour <span className="main-header-profile-greet-name">{user.data.userInfos.firstName} {user.data.userInfos.lastName}</span></h1>
        <p className='main-header-profile-paragraph'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div> 

      <div className='main-content'> 
        <div className='main-content-graphs'> 
          <div style={poidsStyle}>
            <Dayly dayly={dayly.data} />
          </div>

          <div style={moyenneStyle}>
            <Moyenne average={average.data} />
          </div>   

          <div style={performanceStyle}>
            <Performance performance={performance.data} />
          </div >
          
          <div style={scoreStyle}>
            <Score score={user.data.todayScore || user.data.score} />
          </div>
        </div>
        
        <div className="main-content-results">
          <Card img={calories} alt="Icon calories" value={user.data.keyData.calorieCount} unit="kCAL" name="Calories" />
          <Card img={protein} alt="Icon proteines" value={user.data.keyData.proteinCount} unit="g" name="Proteines" />
          <Card img={carbs} alt="Icon carbs " value={user.data.keyData.carbohydrateCount} unit="g" name="Glucides" />
          <Card img={fat} alt="Icon fat" value={user.data.keyData.lipidCount} unit="g" name="Lipides" />
        </div>
      </div>
    </main>

    }

    </>
  )
}

export default Home