import { Link, useLocation } from 'react-router-dom'

function Image({ img, title }) {
    return <img src={img} alt={title} class="animal-image" width="200px" />
}

function Description({ animalName, desc }) {
    return (
        <>
            <h2 className="animalName">{animalName}</h2>
            <p className="animalDesc">{desc}</p>
        </>
    )
}

const AnimalDetail = () => {
    const animalVal = useLocation().state.animal;

    // console.log('Inside Animal Details: ', animalVal);

    return (
        <div className="animalCard">
            <Image img={animalVal.image} title={animalVal.title} />
            <div className="text-container">
                <Description animalName={animalVal.name} desc={animalVal.description} />
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