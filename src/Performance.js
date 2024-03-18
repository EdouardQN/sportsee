import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

export default function Performance(props) {

  const performance = props.performance;
  // console.log(performance)

  return (
    <ResponsiveContainer >
    <RadarChart  cx="48%" cy="50%" innerRadius="5%" outerRadius="58%" data={performance}>
      <PolarGrid radialLines={false} outerRadius="10%"/>
      <PolarAngleAxis stroke={"#fff"} strokeWidth={1} tickLine={false} axisLine={true} radius="5%" fontSize={10} dataKey="kind" />
      <Radar  dataKey="value" fill="#FF0101" fillOpacity={0.8} />
    </RadarChart>
  </ResponsiveContainer>
  );
  
}
