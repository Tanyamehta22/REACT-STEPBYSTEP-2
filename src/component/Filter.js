import {useSearchParams} from 'react-router-dom'

function Filter(){
    const [searchParams, setsearchParams]= useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age= searchParams.get('age');
    const city = searchParams.get('city')


    return (
        <div>
            <h1>Filter Page</h1>
            <h3>Age is: {age}</h3>
            <h3>City is: {city}</h3>

            <input type="text" onChange={()=>setsearchParams({text:e.target.value, age:10})}
            placeholder='Set Text in Query Params'/>

             <button onClick={()=>setsearchParams({age:40})}>SET AGE IN QUERY PARAM</button>

        </div>
    )

}