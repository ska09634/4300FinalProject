import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';

function Create() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = { name, title, description, image };
        console.log(animal);

        axios.post('http://localhost:3001/animals',
        animal,{
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        });
    }

    return (
        <div className="create-container">
            <h2>Create Animal Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='create-form'>
                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Title: </label>
                        <input type="text" placeholder="Enter Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea maxLength="1800" placeholder="Enter Description" name="desc" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div>
                        <label>Image: </label>
                        <input type="url" placeholder="Enter Image URL" name="img" value={image} onChange={(e) => setImage(e.target.value)} required />
                    </div>
                    <div>
                        <button type='submit'>Create Animal</button>
                    </div>
                </div>
            </form>

            <div>
                <Link to='/home'>
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default Create
