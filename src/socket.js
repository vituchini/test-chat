import io from 'socket.io-client'

// const socket = io("http://localhost:9999", {
//     withCredentials: true,
// });
const socket = io();

export default socket