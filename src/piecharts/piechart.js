import {Pie, PieChart, Cell, Legend, Tooltip} from 'recharts';
import '../chart.css'

const data = [
    { name: 'Pensions', value: 4 },
    { name: 'Interest Payments', value: 20 },
    { name: 'Centrally Sponsored Schemes', value: 8 },
    { name: 'Subsidies', value: 6 },
    { name: 'Defence', value: 8 },
    { name: 'Central Sector Schemes', value: 16 },
    { name: 'Finance Commission and<br/>other transfers', value: 8 },
    { name: "States' share of<br/>Taxes and Duties", value: 20 },
    { name: 'Other Expenditure', value: 9 },
];

const patterns = [
    '#FF8884',
    '#FFD700',
    '#98FB98',
    '#87CEFA',
    '#FF6347',
    '#CD853F',
    '#C71585',
    '#00FA9A',
    '#8A2BE2',
  ];

function PieChartComponent() {
    const CustomLabel = (props) => {
       console.log(props)
       const {cx, cy, midAngle, outerRadius, payload,value} = props 
       const radius = outerRadius + 18;
       const xAngle = Math.cos(-midAngle*(Math.PI/180))
       const yAngle = Math.sin(-midAngle*(Math.PI/180))
       const x = cx + (radius* xAngle)
       const y = cy + (radius* yAngle)
      
       return (
       
        <g>

            <text  x = {x} y ={y} textAnchor= {x>cx ? 'start' : 'end'}>
                {/*<tspan x = {x} y = {y} textAnchor= {x>cx ? 'start' : 'end'}>{payload.name}</tspan>*/}
                {payload.name.split('<br/>').map((eachPart, index) => (
                <tspan x = {x} dy = {index === 0? 0 : 15}>{eachPart}</tspan>))}
                <tspan x = {x} dy = {20} >{`${value}%`}</tspan>
                {/*  */}
            </text>
            <image x = {cx - 30} y = {cy-30} href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUU-kI1MqflgW9aAg3dbUOJcUDGcyDjDc_0w&usqp=CAU" 
            height={60}
            width={60}/>
        </g>

       )
        {/* g is scalable vector graphics (SVG) element. g element is used to group other SVG elements*/}

    }
    const generatePattern = (color) => {
        return (
            <pattern id={`pattern-${color}`} patternUnits="userSpaceOnUse" width="8" height="8">
            <circle cx = "2" cy = "2" r = "5" fill={color} />
            <circle cx = "4" cy = "4" r = "1" fill="blue" />
           {/* <rect width="4" height="4" fill="gray" /> */} 
          </pattern>


        )

    }

    return (
       <center>
         <div className='chart-container'>
            <h1>Rupee Goes To</h1>
            <PieChart height={500} width={1000}>
                {patterns.map((patternColor) => (
                    generatePattern(patternColor)
                ))}
                <Pie data={data} 
                dataKey= "value" 
                labelLine = {false}
                label = {<CustomLabel/>}
                innerRadius={45}> 

                {data.map((eachCell, index) => (<Cell fill={`url(#pattern-${patterns[index]})`}/>))}
                    
                </Pie>
                
                
            </PieChart>

        </div>
       </center>
    )
}

export default PieChartComponent;