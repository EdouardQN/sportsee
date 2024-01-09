import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const dataUser = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
];

const transformData = (data) => {
  return data[0].data.map(item => ({
    kind: data[0].kind[item.kind],
    value: item.value
  }));
};

export default class Performance extends PureComponent {

  
  render() {

    const transformedData = transformData(dataUser);

    return (
      <ResponsiveContainer >
      <RadarChart  cx="50%" cy="50%" innerRadius="5%" outerRadius="58%" data={transformedData}>
        <PolarGrid radialLines={false} outerRadius="10%"/>
        <PolarAngleAxis stroke={"#fff"} strokeWidth={1} tickLine={false} axisLine={true} radius="5%" fontSize={12} dataKey="kind" />
        <Radar  dataKey="value" fill="#FF0101" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
    );
  }
}
