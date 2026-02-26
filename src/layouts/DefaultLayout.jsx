import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Load from "../components/load";
import { useGlobal } from "../contexts.jsx/LoadingMain";


const DefaultLayout = () =>{
    const {isLoading} = useGlobal();
  return(
        <>
          <MainHeader/>
          <main className="container">
            <Outlet/>
          </main>
          {isLoading && <Load />}
        </>
    )
}

export default  DefaultLayout 

