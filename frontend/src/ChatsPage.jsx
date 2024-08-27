import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow 
        projectId='93e0d3aa-8f23-4a3f-b7c9-f202c7983c89'
        username= {props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage