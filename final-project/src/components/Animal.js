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
                <button onClick={e => addAnimal(e.target.animalName)} className="add-btn">Add</button>
                <button onClick={editAnimal} className="edit-btn">Edit</button>
                <button onClick={deleteAnimal} className="delete-btn">Delete</button>
            </div>
            <Description animalName={animalName} desc={desc}/>
            <Link to='/details' state={stateToTransfer}>More Details</Link> 
        </div>
        <ul id="dynamic-list"></ul>
      </div>
    )
  }

  function addAnimal(name) {
    console.log(name);
    var ul = document.getElementById("dynamic-list");
    var animal = document.querySelector('text-container.animalName');
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(animal.value));
    ul.appendChild(li);
  } 

  function editAnimal() {

  }

  function deleteAnimal() {
    
  }



  //let addButton = document.querySelector("add-btn");
  //addButton.addEventListener("click", () => {

  //});


  
  export default Animal
  