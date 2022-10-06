let io
const socketio=require('socket.io')
module.exports={
    init:(server)=>{
        io=socketio(server)
        return io
    },
    getIo:()=>{
        if(!io)
        {
            throw new Error("connection not created")
        }
        return io
    }
}