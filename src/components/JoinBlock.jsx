import React from 'react'
import axios from 'axios'

function JoinBlock() {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const onEnter = () => {
        if (!roomId || !userName) {
            return alert('POSOSI, A?')
        }
        axios.post('/rooms',
            {
                roomId,
                userName
            }
        ).then(()=>{

        })

    }
    return (
        <div className="joinBlock">
            <input type="text"
                   placeholder={'ROOM ID'}
                   value={roomId}
                   onChange={e => {
                       setRoomId(e.target.value)
                   }}
            />
            <input type="text"
                   placeholder={'UR NAME'}
                   value={userName}
                   onChange={e => setUserName(e.target.value)}/>
            <button onClick={onEnter}>ENTER</button>
        </div>
    )
}

export default JoinBlock