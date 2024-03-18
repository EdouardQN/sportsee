import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
  
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilograms = payload[0].payload.kilograms;
    const calories = payload[0].payload.calories;

    return (
      <div style={{ backgroundColor: "#E60000", color: "#FFFFFF", padding:"16px", display:"flex", flexDirection:"column", gap:"20px"}}>
        <div>{`${kilograms}kg`}</div>
        <div>{`${calories}kCal`}</div>
      </div>
    );
  }

  return null;
};

export default function Daily(props){
  const daily = props.daily;
  // console.log(daily)
  return ( 
    <BarChart
      width={600}
      height={200}
      data={daily}
    >
      <CartesianGrid strokeDasharray="3 3" vertical="false" />
      <XAxis dataKey="day" tickLine={false} tickMargin={14} axisLine={false} />
      <YAxis
        yAxisId="left"
        orientation="left"
        dataKey="calories"
        tickCount={3}
        hide={true}
      />

      <YAxis
        yAxisId="right"
        orientation="right"
        dataKey="kilograms"
        tickLine={false}
        minTickGap={16}
        axisLine={false}
        domain={["dataMin - 2", "dataMax + 1"]}
        tickCount={3}
      />
      <Tooltip 
        content={<CustomTooltip />}
      />
      <Legend
        verticalAlign="top"
        iconType="circle"
        iconSize={8}
        height={60}
        align="right"
        width={300}
        formatter={(value) => {
          return (
            <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
              {value}
            </span>
          );
        }}
      />
      <Bar
        yAxisId="right"
        dataKey="kilograms"
        name="Poids (kg)"
        fill="#282D30"
        barSize={10}
        radius={[50, 50, 0, 0]}
      />
      <Bar
        yAxisId="left"
        dataKey="calories"
        name="Calories brulées (kCal)"
        fill="#E60000"
        barSize={10}
        radius={[50, 50, 0, 0]}
      />
        <text
        y={15}
        width={147}
        height={48}
        textAnchor="start"
        dominantBaseline="middle"
        fill="#20253A"
        style={{
          fontWeight: 500,
          fontSize: 15,
          fontFamily: "roboto",
        }}
      >
        Activité quotidienne
      </text>

    </BarChart>

  );
}
