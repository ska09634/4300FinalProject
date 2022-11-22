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

const Animal = ({animal}) => {
   return (
      <div id={animal.id}>
        <Image img={animal.img} title={animal.title}/>
        <div className="text-container">
            <Description animalName={animal.name} desc={animal.desc}/>
            <Link to='/details' state={animal}>More Details</Link>
        </div>
      </div>
    )
  }
  
  export default Animal
  