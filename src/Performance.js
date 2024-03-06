import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

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

export default function Performance(props) {

  const performance = props.performance;

  const arrayOfPerf = performance.data;
  // console.log(arrayOfPerf);
  const arrayofKindPerf = Object.values(performance.kind);
  // console.log(arrayofKindPerf);

  const replaceKindNbrWithValue = (arrayOfPerf, arrayofKindPerf) => {
    return arrayOfPerf.map(item => ({
      ...item,
      kind: arrayofKindPerf[item.kind - 1] // Soustraire 1 car les indices commencent à 0
    }));
  };
  const transformedArray = replaceKindNbrWithValue(arrayOfPerf, arrayofKindPerf);
  // console.log(transformedArray);
  return (
    <ResponsiveContainer >
    <RadarChart  cx="48%" cy="50%" innerRadius="5%" outerRadius="58%" data={transformedArray}>
      <PolarGrid radialLines={false} outerRadius="10%"/>
      <PolarAngleAxis stroke={"#fff"} strokeWidth={1} tickLine={false} axisLine={true} radius="5%" fontSize={10} dataKey="kind" />
      <Radar  dataKey="value" fill="#FF0101" fillOpacity={0.8} />
    </RadarChart>
  </ResponsiveContainer>
  );
  
}
