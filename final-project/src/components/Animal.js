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
      <div className="animalCard" id={title}>
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
        {/* <ul id="dynamic-list"></ul> */}
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

  function editAnimal(id) {
    const animal_name = prompt('Please enter name of animal')
    console.log(animal_name)

    // const newDiv = (
    //     <div className="animalCard" id={title}>
    //         <Image img={img} title={title}/>
    //         <div className="text-container">
    //             <div className="btn-container">
    //                 <button onClick={() => addAnimal(animalName)} className="add-btn">Add</button>
    //                 <button onClick={editAnimal} className="edit-btn">Edit</button>
    //                 <button onClick={deleteAnimal} className="delete-btn">Delete</button>
    //             </div>
    //             <Description animalName={animalName} desc={desc}/>
    //             <Link to='/details' state={stateToTransfer}>More Details</Link> 
    //         </div>
    //     </div>
    // );
  }

  function deleteAnimal() {
    
  }



let animals = [
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
        "title":"tiger",
        "name":"Tiger",
        "desc":"This is a Tiger."
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Wild_Side_Of_china_Red_Panda_Travel_8.18.2012/story_full_width/1g0regqs2j_red_panda.jpg",
        "title":"red_panda",
        "name":"Red Panda",
        "desc":"This is a Red Panda."
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/African_forest_elephant_Gabon/story_full_width/9tac2wy950_why_matter_speciesHI_8480.jpg",
        "title":"african_elephant",
        "name":"African Elephant",
        "desc":"This is a African Elephant."
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/LG_African_Wild_Dog_Why_They_Matter_image_288444.jpg/story_full_width/1a0nvpaorx_LG_African_Wild_Dog_Why_They_Matter_image_288444.jpg",
        "title":"african_wild_dog",
        "name":"African Wild Dog",
        "desc":"This is an African Wild Dog"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Amur_Leopard/story_full_width/bwx2czgh_amur_leopard_87883936.jpg",
        "title":"amur_leopard",
        "name":"Amur Leopard",
        "desc":"This is an Amur Leopard"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg/story_full_width/6wmmiztlbs_Black_Rhino_8.6.2012_Hero_and_Circle_HI_48366.jpg",
        "title":"black_rhino",
        "name":"Black Rhino",
        "desc":"This is a Black Rhino"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Bonobo/story_full_width/yeb93gfid_bonobo_circleXL_233245.jpg",
        "title":"bonobo",
        "name":"Bonobo",
        "desc":"This is a Bonobo"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Giant_Panda2_07.24.2012_Help/story_full_width/2jkhixob3e_Giant_Panda2_07.24.2012_Help.jpg",
        "title":"giant_panda",
        "name":"Giant Panda",
        "desc":"This is a Giant Panda"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/pale_throated_sloth_235260/story_full_width/3lr7gm36va_Sloth_HI_235260.jpg",
        "title":"sloth",
        "name":"Sloth",
        "desc":"This is a Sloth"
    },
    {
        "img":"https://files.worldwildlife.org/wwfcmsprod/images/Bornean_Orangutan_Hero_and_Circle_Image/story_full_width/4ciytyrdcp_Bornean_Orangutan_8.1.2012_hero_and_circle_XL_279107.jpg",
        "title":"bornean_orangutan",
        "name":"Bornean Orangutan",
        "desc":"This is a Bornean Orangutan"
    }
]


  
  export default Animal
  