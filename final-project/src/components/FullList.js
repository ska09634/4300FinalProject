import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Animal from './Animal';

function FullList() {
    const [loading, setLoading] = useState(true);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/animals')
            .then(res => {
                // console.log('UseEffect being Called...');
                console.log(`res.data: ${res.data}`);
                setAnimals(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        setLoading(false);
    }, []);

    if (loading || animals.length === 0) {
        return <>Still loading...</>;
    }

    // console.log(`Animals: {animals}`);

    return (
        <div className='fullList'>
            <h1>Full List</h1>
            <div className="btn-nav">
                <Link to='/home'>
                    <button>Go Back</button>
                </Link>
            </div>
            <div className="animal-container-fl" id='animals-container'>
                {
                    animals.map((animal) => {
                        return (
                            <div className="animalCard">
                                <Animal animal={animal}></Animal>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FullList;