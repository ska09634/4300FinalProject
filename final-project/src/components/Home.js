import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';

function Home() {
  let one = Number(animals_list[0]);
  let two = Number(animals_list[1]);
  let three = Number(animals_list[2]);

  const [cardList, setCardList] = useState([]);
  // const [one, setOne] = useState(0);
  const [animals, setAnimals] = useState([]);
  const [animal1, setAnimal1] = useState(null);
  const [animal2, setAnimal2] = useState(null);
  const [animal3, setAnimal3] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/animals')
      .then(res => {
        // console.log('UseEffect being Called...');
        // console.log(res.data);
        setAnimals(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [cardList]);

  useEffect(() => {
    if (animals.length > 0) {
      // console.log(animals);

      setAnimal1(animals[one]);
      setAnimal2(animals[two]);
      setAnimal3(animals[three]);
    }
  }, [animals]);

  if (animal1 === null || animal2 === null || animal3 === null) {
    return <>Still loading...</>;
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='animal-container' id='animals-container'>
        <div className="animalCard" id='animal-one-container'>
          <div className="btn-container">
            <button id="add-btn-one" onClick={() => addAnimal(animal1.name)}>Add</button>
            <button id="edit-btn-one" onClick={() => editAnimal(animals, setAnimal1, 0)}>Edit</button>
            <button id="delete-btn-one" onClick={() => deleteAnimal(animals, setAnimal1, 0)}>Delete</button>
          </div>
          <Animal animal={animal1}></Animal>
        </div>
        <div className="animalCard" id='animal-two-container'>
          <div className="btn-container">
            <button id="add-btn-two" onClick={() => addAnimal(animal2.name)}>Add</button>
            <button id="edit-btn-two" onClick={() => editAnimal(animals, setAnimal2, 1)}>Edit</button>
            <button id="delete-btn-two" onClick={() => deleteAnimal(animals, setAnimal2, 1)}>Delete</button>
          </div>
          <Animal animal={animal2}></Animal>
        </div>
        <div className="animalCard" id='animal-three-container'>
          <div className="btn-container">
            <button id="add-btn-three" onClick={() => addAnimal(animal3.name)}>Add</button>
            <button id="edit-btn-three" onClick={() => editAnimal(animals, setAnimal3, 2)}>Edit</button>
            <button id="delete-btn-three" onClick={() => deleteAnimal(animals, setAnimal3, 2)}>Delete</button>
          </div>
          <Animal animal={animal3}></Animal>
        </div>
      </div>
      <Footer></Footer>
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

function editAnimal(animals, setAnimal, num) {
  var checkName = false;

  while (checkName === false) {
    const animal_name = prompt('Please enter name of animal')
    console.log(animal_name)

    var result = animals.filter(obj => {
      return (obj.name.toLocaleLowerCase()).includes(animal_name.toLocaleLowerCase());
    })

    result = result[0];
    if (result !== undefined && animal_name !== '') {
      animals_list[num] = Number(result.id) - 1;
      console.log(result)
      setAnimal(result);
      checkName = true;
    }
  }
}


function deleteAnimal(animals, setAnimal, num) {
  const new_num = Math.floor(Math.random() * 10);
  var result = animals[new_num]
  animals_list[num] = new_num;
  console.log(result)
  setAnimal(result);
}

let animals_list = [0, 1, 2];

export default Home