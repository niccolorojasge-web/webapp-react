import { Link } from "react-router-dom"
const MovieCard = () => {
    return(
   <div className="card mb-4">
            <img src="https://media-assets.wired.it/photos/615f1c66bb19236ecd2bb8b2/master/w_1600%2Cc_limit/1484679918_170116_Juventus-logo_-Interbrand_cmyk.jpg"
                className="card-img-top" alt="titolo del libro" />
            <div className="card-body">
                <h5 className="card-title">Titolo del libro</h5>
                <address><i>Autore</i></address>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ratione veritatis sunt molestias nihil odit totam, quis corporis laboriosam excepturi. Labore vero molestiae eveniet explicabo esse iure laborum nemo odio.</p>
                <Link to={`movie/1`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default MovieCard