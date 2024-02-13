import { Legend, Line, Tooltip, XAxis, YAxis , LineChart, ReferenceLine} from "recharts";
import '../chart.css'


const data = [
    {year : 'FY 14',  'India Dollar GDP growth' : '2', 'World Dollar GDP growth' : '3'},
    {year : 'FY 15' , 'India Dollar GDP growth' : '10' , 'World Dollar GDP growth' : '3.2'},
    {year : 'FY 16' , 'India Dollar GDP growth' : '3' , 'World Dollar GDP growth' : '-6'},
    {year : 'FY 17' , 'India Dollar GDP growth' : '8' , 'World Dollar GDP growth' : '1'},
    {year : 'FY 18' , 'India Dollar GDP growth' : '15' , 'World Dollar GDP growth' : '6'},
    {year : 'FY 19' , 'India Dollar GDP growth' : '2' , 'World Dollar GDP growth' : '5.8'},
    {year : 'FY 20' , 'India Dollar GDP growth' : '4' , 'World Dollar GDP growth' : '2'},
    {year : 'FY 21' , 'India Dollar GDP growth' : '-7' , 'World Dollar GDP growth' : '-3'},
    {year : 'FY 22' , 'India Dollar GDP growth' : '17' , 'World Dollar GDP growth' : '10'},
    {year : 'FY 23' , 'India Dollar GDP growth' : '7' , 'World Dollar GDP growth' : '4'},
    {year : 'FY 24' , 'India Dollar GDP growth' : '9' , 'World Dollar GDP growth' : '4.2'},
    {year : 'FY 25' , 'India Dollar GDP growth' : '8.5' , 'World Dollar GDP growth' : '4.3'},
    {year : 'FY 26' , 'India Dollar GDP growth' : '8.4' , 'World Dollar GDP growth' : '4.2'},
    {year : 'FY 27' , 'India Dollar GDP growth' : '8.5' , 'World Dollar GDP growth' : '4.3'},
    {year : 'FY 28' , 'India Dollar GDP growth' : '8.4' , 'World Dollar GDP growth' : '4.2'},
    {year : 'FY 29' , 'India Dollar GDP growth' : '8.5' , 'World Dollar GDP growth' : '4.3'},
    


]


function LineChartComponent() {
    const YAxisData = data.map((eachObject) => ({...eachObject, percent : parseFloat(eachObject.percent)}))
    const YRange = [Math.min(...YAxisData.map((eachObject) => eachObject.percent)), 
        Math.max(...YAxisData.map((eachObject) => eachObject.percent))]
        const yDomain = [0, 20]
    return (  
        <center>
            <div className="chart-container">
                <h1>India and World Dollar GDP growth</h1>
                
        <LineChart height = {500} width = {1000} data = {data} >
            <Line stroke="maroon" dataKey="India Dollar GDP growth" type = "monotone"/>
            <Line stroke = 'green' dataKey= 'World Dollar GDP growth' type = 'monotone'/>
                <XAxis dataKey= "year"/>
                <YAxis domain={[-20,20]}/>
                <Tooltip/>
                <Legend/> 
                <ReferenceLine y={0} stroke = 'red'/>

            

        </LineChart>

            </div>
        </center>


    )
}

export default LineChartComponent;