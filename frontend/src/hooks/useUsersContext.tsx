
import { useContext } from "react"
import { UsersContext } from "../context/UsersContext"

const useUsersContext = () => {
    const context = useContext(UsersContext);

    if(!context){
        throw new Error("The context must be used within the app")  
    }
  
    return context;
}

export default useUsersContext