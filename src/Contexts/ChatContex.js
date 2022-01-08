import React,{useState} from 'react'
const ChatContex = React.createContext();

function ChatProvider(props) {
    const [DetailsOfSelectedChat, setDetailsOfSelectedChat] = useState(null)
    return (
        <ChatContex.Provider value={{
            DetailsOfSelectedChat:DetailsOfSelectedChat,
            setDetailsOfSelectedChat:text => setDetailsOfSelectedChat(text)
        }}>
            {props.children}
        </ChatContex.Provider>
    )
}
export default ChatProvider
export {ChatContex}