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

const AnimalDetail = ({img, title, animalName, details}) => {
    return (
      <div className="animalCard">
        <Image img="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" title="Tiger"/>
        <div className="text-container">
            <Description animalName="Tiger" desc="This is a Tiger."/>
        </div>
      </div>
    )
  }
  
  export default AnimalDetail