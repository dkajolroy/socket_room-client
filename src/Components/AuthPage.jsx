import React from 'react'

export default function AuthPage({ setData, onClick }) {
    return (
        <div className="d-flex  justify-content-center align-items-center min-vh-100">
            <div className='col-md-4 col-sm-6 col-11 bg-light shadow-lg rounded px-5 pb-5 pt-4'>
                <h4 className='text-center'>Join a Room</h4>
                <input onChange={(e) => setData(data => ({ ...data, name: e.target.value }))} className='mb-2 form-control' type="text" placeholder='Your Name' />
                <input onChange={(e) => setData(data => ({ ...data, room: e.target.value }))} className='mb-2 form-control' type="number" placeholder='Room Number' />
                <input onClick={onClick} className='mb-2 btn btn-success w-100' type="submit" value="Join" />
            </div>
        </div>
    )
}
