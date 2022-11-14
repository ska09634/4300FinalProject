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

const Animal = ({img, title, animalName, desc}) => {
    const stateToTransfer = {
        img:img,
        title:title,
        animalName:animalName,
        desc:desc
    }

    return (
      <div className="animalCard">
        <Image img={img} title={title}/>
        <div className="text-container">
            <div className="btn-container">
                <button className="add-btn">Add</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
            <Description animalName={animalName} desc={desc}/>
            <Link to='/details' state={stateToTransfer}>More Details</Link>
        </div>
      </div>
    )
  }
  
  export default Animal
  