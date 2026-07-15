// import React from 'react'
//  const Sammy = () => {

//     const [starWarsData, setStarWarsData] = React.useState(null)
//     const [count, setCount] = React.useState(1)
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

//     React.useEffect(()=> {
//         function watchWindowWidth () {
//             setWindowWidth(window.innerWidth)
//         }
//         window.addEventListener("resize", watchWindowWidth)
//         return function (){
//             window.removeEventListener("resize", watchWindowWidth)
//         }
//     })

//     React.useEffect(()=> {
//         fetch(`https://swapi.dev/api/people/${count}`)
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
//     }, [])
//     return ( 
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={()=> setCount(prevCount => prevCount + 1)}>Add</button>
//             <pre>{JSON.stringify(starWarsData, null, 2 )}</pre>
//         </div>

//      );
//  }
  
//  export default Sammy;