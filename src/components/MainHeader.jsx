//importare link 
import { Link } from "react-router-dom"
function MainHeader() {

  return (
    <>
      <nav className="navbar bg-body-tertiary mb-4"> 
        <div className="container-fluid justify-content-start">
         <Link className="navbar-brand" to="/">Bool Movie </Link>
        </div>
      </nav>
    </>
  )
}

export default MainHeader