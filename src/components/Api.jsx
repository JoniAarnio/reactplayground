import React from 'react'

export default function Api(props) {
    const [swData, setSWData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     */

    // "https://swapi.dev/api/people/1"

    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setSWData(data))
    }, [count])
    
    return (
        <div>
            
            <h2>Character {swData.name}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Next character</button>
            {/* <pre>{JSON.stringify(swData, null, 2)}</pre> */}
            <h3>Gender: {swData.gender}</h3>
            <h3>Birth year: {swData.birth_year}</h3>
            <h3>Eye color: {swData.eye_color}</h3>
        </div>
    )
}