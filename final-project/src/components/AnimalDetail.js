import {Link, useLocation } from 'react-router-dom'

function Image ({img, title}) {
    return <img src ={img} alt={title} class="animal-image" width="200px"/> 
}

function Description ({animalName, desc}) {
    return (
        <>
            <h2 className="animalName">{animalName}</h2>
            <p className="animalDesc">{desc}</p>
        </>
    )
}

const AnimalDetail = () => {

    const location = useLocation()
    const { img, title, animalName, desc } = location.state

    return (
      <div className="animalCard">
        <Image img={img} title={title}/>
        <div className="text-container">
            <Description animalName={animalName} desc={desc}/>
        </div>
        <Link to='/home'>Back to Home</Link>
      </div>
    )
  }
  
  export default AnimalDetail