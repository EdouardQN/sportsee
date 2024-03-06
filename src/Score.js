import styled from "styled-components";
import { Pie, PieChart, Cell } from "recharts";

const Wrapper = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  width: 80%;
`;

const Title = styled.h2`
  position: absolute;
  left: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const Objectif = styled.p`
  color: #282d30;
  font-family: "Roboto";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  padding: 0 10px;
  text-align: center;
  & span {
    font-weight: 400;
  }
`;

const Comment = styled.p`
  color: #74798c;
  font-family: "Roboto";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  width: 100px;
`;

function Score(props) {
  //console.log(props.score)
  const score = props.score*100;
  const COLORS = ["#FF0000", "transparent"];

  const data = [
    { name: "Filled", value: score },
    { name: "Non-Filled", value: (1 - props.score) * 100  },
  ];

  return (
    <Wrapper>
        <Title>Score</Title>
        <Content>
          <Objectif>
            {score}
            <span>%</span>
          </Objectif>
          <Comment>de votre objectif</Comment>
        </Content>
        <PieChart width={180} height={180} margin={{top:10}}>
        <Pie
          data={data}
          dataKey="value"
          cx={80}
          cy={90}
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </Wrapper>
  );
}


export default Score;