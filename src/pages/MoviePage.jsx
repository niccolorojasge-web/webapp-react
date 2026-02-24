import { Link } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import axios from "axios"
import { useEffect,useState } from "react"

function MoviePage() {

  return (
    <>
     <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src="" alt="titolo del libro" />
                </div>
                <h1>Titolo libro</h1>
                <h3 className="text-muted"><i>By Nome autore</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
      
    </>
  )
}

export default MoviePage