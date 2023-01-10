import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Scrollbars from 'react-custom-scrollbars-2';

export default function ChatPage({ data, socket }) {

    const [allMessage, setAllMessage] = useState([])
    const [writeMessage, setWriteMessage] = useState("")
    const sendMessage = async () => {
        const message = {
            senderId: socket.id,
            sender: data.name,
            room: parseInt(data.room),
            message: writeMessage,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }
        await socket.emit("send_message", message)
        setWriteMessage("")
    }
    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setAllMessage(prev => [...prev, data])
        })
    }, [socket])



    return (
        <div style={{
            minHeight: "100vh",
        }} className="d-flex align-items-center justify-content-center">
            <div className="col-md-6 col-11">
                <div className="shadow-lg rounded bg-light">
                    <div style={{ minHeight: "85vh" }} className="position-relative mx-3">

                        <Scrollbars
                            autoHide
                            style={{ width: "100%", height: "80vh" }}
                        >
                            <div className="d-flex flex-column ">
                                {
                                    allMessage.map((x, i) => {
                                        return (
                                            <div key={i} className={`d-flex ${x.senderId === socket.id ? "justify-content-end" : ''}`}>
                                                <div style={{
                                                    minWidth: '40%',
                                                    background: `${x.senderId === socket.id ? "#20bf6b" : "#706fd3"}`,
                                                    overflow: "hidden",
                                                    borderRadius: "10px"
                                                }} className=' my-2'>
                                                    <span style={{
                                                        fontSize: '15px',
                                                        margin: 0,
                                                        background: `${x.senderId === socket.id ? "#157347" : "#474787"}`,
                                                        color: "white",
                                                        borderBottomRightRadius: "15px",
                                                        padding: "5px 30px 0 10px",
                                                    }}>{x.sender}</span>
                                                    <div style={{
                                                        margin: "0 0 0 20px",
                                                        fontSize: "15px",
                                                    }}>
                                                        <p className='m-0 text-light'>{x.message}</p>
                                                        <span style={{ fontSize: "12px" }} className='text-light '>Time {x.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Scrollbars>

                        <div style={{
                            bottom: "10px"
                        }} className="input-group position-absolute w-100">
                            <input value={writeMessage} onChange={(e) => setWriteMessage(e.target.value)} className='form-control w-75 shadow-none' type="text" placeholder='Type message...' />
                            <input onClick={sendMessage} className='btn btn-success w-25 shadow-none ' type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
