import { Component } from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line, TooltipProps  } from "recharts";

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
const data = [
{
    day: 1,
    sessionLength: 30
},
{
    day: 2,
    sessionLength: 23
},
{
    day: 3,
    sessionLength: 45
},
{
    day: 4,
    sessionLength: 50
},
{
    day: 5,
    sessionLength: 0
},
{
    day: 6,
    sessionLength: 0
},
{
    day: 7,
    sessionLength: 60
}
]
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];


export default class Moyenne extends Component {
  render() {
    
    return (
      <>
        <span>Durée moyenne des sessions</span>
        <div>
          <LineChart data={data} height={240} width={240}>
            <XAxis axisLine={false} dataKey="day" tickLine={false} />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />}/>
            <Line 
              dataKey="sessionLength" 
              dot={false} 
              strokeWidth={2 } 
              stroke="#ffffff" 
              type="monotone" 
              activeDot={{ r: 3 }} 
              opacity={0.7}
            />
          </LineChart>
        </div>
      </>
    )
  }
}

