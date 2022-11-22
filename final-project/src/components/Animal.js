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
                <button onClick={() => addAnimal(animalName)} className="add-btn">Add</button>
                <button onClick={editAnimal} className="edit-btn">Edit</button>
                <button onClick={deleteAnimal} className="delete-btn">Delete</button>
            </div>
            <Description animalName={animalName} id="name" desc={desc}/>
            <Link to='/details' state={stateToTransfer}>More Details</Link> 
        </div>
        <ul id="dynamic-list"></ul>
      </div>
    )
  }

  function addAnimal(name) {
    console.log(name);
    var ul = document.getElementById("dynamic-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
  } 

  function editAnimal(name, image, desc) {
    var userInput = document.createElement("input");
    const input = document.querySelector(userInput);
    const myItem = input.value;
    input.value = '';
  /**  var img = new Image();
    img.src =
'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.getElementById(name).appendChild(img); */
    var newName = document.getElementById(name).setAttribute(myItem);
  }

  function deleteAnimal() {
    
  }



  //let addButton = document.querySelector("add-btn");
  //addButton.addEventListener("click", () => {

  //});


  
  export default Animal
  