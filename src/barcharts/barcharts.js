import { Bar, BarChart, Label, Legend, Tooltip, XAxis, YAxis, LabelList } from "recharts"
import '../chart.css'

const data = [
    {year : 'FY14', percent : '9.4'},
    {year : 'FY15', percent : '5.8'},
    {year : 'FY16', percent : '4.9'},
    {year : 'FY17', percent : '4.5'},
    {year : 'FY18', percent : '3.6'},
    {year : 'FY19', percent : '3.4'},
    {year : 'FY20', percent : '4.8'},
    {year : 'FY21', percent : '6.2'},
    {year : 'FY22', percent : '5.5'},
    {year : 'FY23', percent : '6.7'},
    {year : 'FY24', percent : '5.5'}
    
]

const colorPattern = (color) => {
   return (
    <pattern id = {'pattern'}  patternUnits="userSpaceOnUse" width="8" height="8">
    <rect width="8" height="8" fill= {`${color}`}/>
    <rect width="4" height="4" fill="gray" />
    <rect width="4" height="4" x="4" y="4" fill="gray" />
    </pattern>
   )
    
}

function BarChartComponent() {
    return (
        <center>
        <div className="chart-container">
            <h1>Fall in Headline Inflation</h1>
            <BarChart height={500} width={1000} data = {data} margin = {{ top: 80, right: 100, left: 100, bottom: 5 }}>
            {colorPattern('maroon')}
            
            <Bar fill = {`url(#pattern)`} dataKey= "percent" stroke = 'black'>
            <LabelList dataKey = 'percent' fill = 'black' position= 'top'/>
            </Bar>
            <XAxis dataKey= 'year'/>
            <YAxis/>
            <Legend/>
           
           
           
        </BarChart>
        </div>
        </center>

    )
}

export default BarChartComponent