import 
{ 
  LineChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Line
} from "recharts";
import styled from "styled-components";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;

    return (
      <div style={{ backgroundColor: "#FFFFFF", color: "#000000", padding:"16px"}}>
        {`${sessionLength} min`}
      </div>
    );
  }

  return null;
};

const AverageSessionsChartTitle = styled.h2`
  position: absolute;
  top: 1rem;
  left: 2rem;

  margin: 0;

  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 0.5rem;
    left: 1.5rem;
  }
`;

export default function Moyenne(props) {

  const average = props.average;
  // console.log("average", average);
  return (
    <>
      <AverageSessionsChartTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsChartTitle>
      <LineChart data={average} height={170} width={170} margin={{top:20, left:10}}>
        <XAxis 
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <YAxis
          dataKey="sessionLength"
          domain={[0, "dataMax + 60"]}
          hide={true}
        />
        <Tooltip  
          content={<CustomTooltip />}
          cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 32,
          }}
        />
        <Line 
          dataKey="sessionLength" 
          dot={false} 
          strokeWidth={2} 
          stroke="#ffffff" 
          type="monotone" 
          activeDot={{ r: 3 }} 
          opacity={0.7}
        />
      </LineChart>
    </>
  )
  
}

