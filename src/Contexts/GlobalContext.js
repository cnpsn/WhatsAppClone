import React,{useState} from 'react'
const GlobalContext = React.createContext();

function GlobalProvider(props) {
    const [user, setUser] = useState();
    const [userInformation, setuserInformation] = useState()
    return (
        <GlobalContext.Provider value={{
            user:user,
            setUser:text =>┬ásetUser(text),
            userInformation:userInformation,
            setuserInformation:text =>┬ásetuserInformation(text)
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider
export {GlobalContext}