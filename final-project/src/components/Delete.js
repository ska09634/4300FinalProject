
function Delete() {

    return (
        <div className="delete-container">
            <h2>Delete Animal Page</h2>
            <form>
                <div className='delete-form'>
                    <div>
                        <label>Choose Animal</label>
                        <select name="animals">

                        </select>
                    </div>
                    <div>
                        <button type='submit'>Delete Animal</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Delete