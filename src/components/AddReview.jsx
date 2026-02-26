import axios from "axios"
import {useState } from "react"

function AddReview (props){

    const {movie_id, reloadReviews} = props;
    
const endpoint = `http://localhost:3000/api/Movie/${movie_id}/reviews`

const intialForm = {
        name: "",
        text: "",
        vote: 0
    };
  
    //var di stato per gestire oggetto dei valori input form  
    const [formData, setFormData] = useState(intialForm);

    // funzione di gestione dei dati del form
    function setFieldValue(e) {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }
     // funzione per gestione della chiamata al submit del form
    const handleSubmit = e => {
        // iniziamo comportamento di base del form
        e.preventDefault();
        // gestisci la chiamata in post all'endpoint in axios
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // svuota campi form (e var di stato)
                setFormData(intialForm);
                // ri-esegui funzione di chiamata su page padre
                reloadReviews();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (<div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" name="vote" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )

}


export default AddReview