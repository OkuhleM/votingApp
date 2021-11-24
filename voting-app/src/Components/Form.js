import { useState } from 'react'
import react from 'react'
import Delete from './Delete'

function Form(props) {
    const [formInfo, setFormInfo] = useState({
        name: '', vote: '', idNumber: '', place: ''


    })
    const [votersList, setVotersList] = useState([])
    const handleChange = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setVotersList([...votersList, formInfo])
    }
    const handleDelete = (index) => {
        const newVortersList = [...votersList];
        newVortersList.splice(index, 1)
        setVotersList(newVortersList)
    }


    return (


        <div className="App">
            <h1> Vote for a better country</h1>

            <div className="voters">
                <fieldset>
                    <legend>Personalia:</legend>
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input type="text" onChange={handleChange}
                            name="name" id="name-label"
                            value={formInfo.name} required></input>
                        <br />
                        <label for="idNumber">Id Number</label>
                        <input type="number" onChange={handleChange}
                            name="idNumber" id="name-label"
                            value={formInfo.idNumber} required></input>
                        <br />
                        <label for="place">Place</label>
                        <input type="text" onChange={handleChange}
                            name="place" id="place"
                            value={formInfo.place} required></input>
                        <br />


                        <label for="vote" id="vote"><b>Available Party:</b></label><br />
                        <input id="vote" type="radio" id="ANC" name="vote" onChange={handleChange} value='ANC' />
                        <label for="vote">ANC</label><br />
                        <input id="vote" type="radio" id="EFF" name="vote" onChange={handleChange} value='EFF' />
                        <label for="vote">EFF</label><br />
                        <input id="vote" type="radio" id="DA" name="vote" onChange={handleChange} value='DA' />
                        <label for="vote">DA</label><br />

                        <button type='submit'>
                            Submit
                        </button>
                    </form>
                </fieldset>
            </div>
            <div>
                <ul>{votersList.map((voters, index) => {
                    return (
                        <div key={index}>
                            <p>{voters.name}</p>
                            <p>{voters.idNumber}</p>
                            <p>{voters.place}</p>
                            <p>{voters.vote}</p>

                            <p><Delete onClick={()=>handleDelete()} /></p>
                            <hr />
                        </div>

                    )
                })}</ul>
            </div>
        </div>

    );
}

export default Form;




