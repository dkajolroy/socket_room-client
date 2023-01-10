import React from 'react'

export default function ChatPage() {
    return (
        <div className="d-flex mt-4 justify-content-center">
            <div className="col-6">
                <div className="shadow-lg rounded ">
                    <div style={{ minHeight: "85vh" }} className="position-relative mx-3">





                        <div style={{
                            bottom: "10px"
                        }} className="input-group position-absolute w-100">
                            <input className='form-control w-75 shadow-none' type="text" placeholder='Type message...' />
                            <input className='btn btn-success w-25 shadow-none ' type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
