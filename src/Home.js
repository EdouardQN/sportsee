import React from 'react'
import Example from './Example'
import Moyenne from './Moyenne'
import Performance from './Performance'
import Score from './Score'
import calories from './assets/calories-icon.svg'
import protein from './assets/protein-icon.svg'
import carbs from './assets/carbs-icon.svg'
import fat from './assets/fat-icon.svg'
import Card from './Card';

const Home = () => {


  const poidsStyle = {
    width: "800px",
    height: "280px",
    backgroundColor : "#FBFBFB",
    display : "flex",
    justifyContent : "center",
    borderRadius:"8px",
  }

  const moyenneStyle = {
    width: "250px",
    height: "250px",
    backgroundColor: "#FF0000",
    fill: "#ffffff",
    borderRadius:"8px",
  }

  const performanceStyle = {
    width: "250px",
    height: "250px",
    backgroundColor: "#282D30",
    borderRadius:"8px",
    fill: "#ffffff",
  }

  const scoreStyle = {
    width: "250px",
    height: "250px",
    backgroundColor: "#FBFBFB",
    borderRadius:"8px",
    fill: "#ffffff",
    display : "flex",
    justifyContent : "center",
    alignItems: "center",
  }

  return (
    <>
      <main className='main'>
        <div className="main-header">
          <h1 className="main-header-greet">Bonjour <span className="main-header-greet-name">Michel</span></h1>
          <p className='main-header-paragraph'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div> 
        <div style={poidsStyle}>
          <Example />
        </div>

        <div style={moyenneStyle}>
          <Moyenne />
        </div>   

        <div style={performanceStyle}>
          <Performance />
        </div >
        
        <div style={scoreStyle}>
          <Score />
        </div>
        <div className="results">
          <Card img={calories} alt="Icon calories" value="1 930" unit="kCAL" name="Calories" />
          <Card img={protein} alt="Icon proteines" value="155" unit="g" name="Proteines" />
          <Card img={carbs} alt="Icon carbs " value="290" unit="g" name="Glucides" />
          <Card img={fat} alt="Icon fat" value="50" unit="g" name="Lipides" />
        </div>
      </main>
      

    </>
  )
}

export default Home