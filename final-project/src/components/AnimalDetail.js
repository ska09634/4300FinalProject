import {Link} from 'react-router-dom'

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

const AnimalDetail = ({animal}) => {
    return (
      <div className="animalCard">
        <Image img={animal.image} title={animal.title}/>
        <div className="text-container">
            <Description animalName={animal.name} desc={animal.description}/>
        </div>
        <div>
            <Link to='/home'>Back to Home</Link>
        </div>
        <div>
            <Link to='/login'>
            <button className="logout-btn">Logout</button>
            </Link>
        </div>
      </div>
    )
  }
  
  export default AnimalDetail