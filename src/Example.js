import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
  
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilogram = payload[0].payload.kilogram;
    const calories = payload[0].payload.calories;

    return (
      <div style={{ backgroundColor: "#E60000", color: "#FFFFFF", padding:"16px", display:"flex", flexDirection:"column", gap:"20px"}}>
        <div>{`${kilogram}kg`}</div>
        <div>{`${calories}kCal`}</div>
      </div>
    );
  }

  return null;
};

const data = [
  {
      day: '1',
      kilogram: 70,
      calories: 240
  },
  {
      day: '2',
      kilogram: 69,
      calories: 220
  },
  {
      day: '3',
      kilogram: 70,
      calories: 280
  },
  {
      day: '4',
      kilogram: 70,
      calories: 500
  },
  {
      day: '5',
      kilogram: 69,
      calories: 160
  },
  {
      day: '6',
      kilogram: 69,
      calories: 162
  },
  {
      day: '7',
      kilogram: 69,
      calories: 390
  }

];

export default class Example extends PureComponent {

  render() {
    return (
      <BarChart
        width={702}
        height={260}
        data={data}
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
          dataKey="kilogram"
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
          dataKey="kilogram"
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
}
