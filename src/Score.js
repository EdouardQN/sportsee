import styled from "styled-components";
import PropTypes from "prop-types";
import { Pie, PieChart, Cell } from "recharts";

const Wrapper = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  width: 80%;
`;

const Title = styled.h2`
  color: #20253a;
  font-family: "Roboto";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  left: 20px;
  line-height: 24px;
  position: absolute;
  top: 8px;
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

function Score() {
  const data = [
    { name: "Group A", value: 88 },
    { name: "Group B", value: 12 },
  ];
  
  const COLORS = ["transparent", "#FF0000"];

  return (
    <Wrapper>
        <Title>Score</Title>
        <Content>
          <Objectif>
            {`12`}
            <span>%</span>
          </Objectif>
          <Comment>de votre objectif</Comment>
        </Content>
        <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={100}
          cy={120}
          innerRadius={60}
          outerRadius={70}
          paddingAngle={0}
          startAngle={90}
          endAngle={-280}
          dataKey="value"
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