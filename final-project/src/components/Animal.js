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
            
        </div>
      </div>
    )
  }
  
  export default Animal
  