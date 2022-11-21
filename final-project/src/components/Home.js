import {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';

function Home() {
  const [animal1, setAnimal1] = useState(
    animals[Number(animals_list[0])]
  );

  const [animal2, setAnimal2] = useState(
    animals[Number(animals_list[1])]
  );

  const [animal3, setAnimal3] = useState(
    animals[Number(animals_list[2])]
  );

  return (
    <div className="App">
      <Header></Header>
      <div className='animal-container' id='animals-container'>
        <div className="animalCard" id='animal-one-container'>
          <div className="btn-container">
            <button id="add-btn-one" onClick={() => addAnimal(animal1.name)}>Add</button>
            <button id="edit-btn-one" onClick={() => editAnimal(setAnimal1, 0)}>Edit</button>
            <button id="delete-btn-one" onClick={() => deleteAnimal(setAnimal1, 0)}>Delete</button>
          </div>
          <Animal animal={animal1}></Animal>
        </div>
        <div className="animalCard" id='animal-two-container'>
          <div className="btn-container">
            <button id="add-btn-two" onClick={() => addAnimal(animal2.name)}>Add</button>
            <button id="edit-btn-two" onClick={() => editAnimal(setAnimal2, 1)}>Edit</button>
            <button id="delete-btn-two" onClick={() => deleteAnimal(setAnimal2, 1)}>Delete</button>
          </div>
          <Animal animal={animal2}></Animal>
        </div>
        <div className="animalCard" id='animal-three-container'>
          <div className="btn-container">
            <button id="add-btn-three" onClick={() => addAnimal(animal3.name)}>Add</button>
            <button id="edit-btn-three" onClick={() => editAnimal(setAnimal3, 2)}>Edit</button>
            <button id="delete-btn-three" onClick={() => deleteAnimal(setAnimal3, 2)}>Delete</button>
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

function editAnimal(animal, num){
  const animal_name = prompt('Please enter name of animal')
  console.log(animal_name)

  var result = animals.filter(obj => {
    return (obj.name.toLocaleLowerCase()).includes(animal_name.toLocaleLowerCase());
  })
  result = result[0];
  animals_list[num] = Number(result.id) - 1;
  console.log(result)
  animal(result);
}

function deleteAnimal(animal, num){
  const new_num = Math.floor(Math.random() * 10);
  var result = animals[new_num]
  animals_list[num] = new_num;
  console.log(result)
  animal(result);
}

let animals_list = [0, 1, 2];

let animals = [
  {
    "id":"1",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
    "title":"tiger",
    "name":"Tiger",
    "desc":"This is a Tiger."
  },
  {
    "id":"2",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Wild_Side_Of_china_Red_Panda_Travel_8.18.2012/story_full_width/1g0regqs2j_red_panda.jpg",
    "title":"red_panda",
    "name":"Red Panda",
    "desc":"This is a Red Panda."
  },
  {
    "id":"3",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/African_forest_elephant_Gabon/story_full_width/9tac2wy950_why_matter_speciesHI_8480.jpg",
    "title":"african_elephant",
    "name":"African Elephant",
    "desc":"This is a African Elephant."
  },
  {
    "id":"4",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/LG_African_Wild_Dog_Why_They_Matter_image_288444.jpg/story_full_width/1a0nvpaorx_LG_African_Wild_Dog_Why_They_Matter_image_288444.jpg",
    "title":"african_wild_dog",
    "name":"African Wild Dog",
    "desc":"This is an African Wild Dog"
  },
  {
    "id":"5",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Amur_Leopard/story_full_width/bwx2czgh_amur_leopard_87883936.jpg",
    "title":"amur_leopard",
    "name":"Amur Leopard",
    "desc":"This is an Amur Leopard"
  },
  {
    "id":"6",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg/story_full_width/6wmmiztlbs_Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg",
    "title":"black_rhino",
    "name":"Black Rhino",
    "desc":"This is a Black Rhino"
  },
  {
    "id":"7",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Bonobo/story_full_width/yeb93gfid_bonobo_circleXL_233245.jpg",
    "title":"bonobo",
    "name":"Bonobo",
    "desc":"This is a Bonobo"
  },
  {
    "id":"8",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Giant_Panda2_07.24.2012_Help/story_full_width/2jkhixob3e_Giant_Panda2_07.24.2012_Help.jpg",
    "title":"giant_panda",
    "name":"Giant Panda",
    "desc":"This is a Giant Panda"
  },
  {
    "id":"9",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/pale_throated_sloth_235260/story_full_width/3lr7gm36va_Sloth_HI_235260.jpg",
    "title":"sloth",
    "name":"Sloth",
    "desc":"This is a Sloth"
  },
  {
    "id":"10",
    "img":"https://files.worldwildlife.org/wwfcmsprod/images/Bornean_Orangutan_Hero_and_Circle_Image/story_full_width/4ciytyrdcp_Bornean_Orangutan_8.1.2012_hero_and_circle_XL_279107.jpg",
    "title":"bornean_orangutan",
    "name":"Bornean Orangutan",
    "desc":"This is a Bornean Orangutan"
  }
]

export default Home
