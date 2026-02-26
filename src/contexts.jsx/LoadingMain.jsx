import { createContext,useState, useEffect, useContext } from "react"

const LoadingMain = createContext ()

function LoadingProvider ({children}){
    const [isLoading, setIsLoading]= useState (false)
    return (
        <LoadingMain.Provider
        value={{
            isLoading, 
            setIsLoading
            
        }}>
            {children}
        </LoadingMain.Provider>
    )

   
}
 function useGlobal() {
    const context = useContext(LoadingMain);
    return context;

} 


export { LoadingProvider, useGlobal }