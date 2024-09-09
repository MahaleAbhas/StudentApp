import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const [student,setStudent] = useState({})
    const { studID } = useParams()
    const negative = useNavigate()

    async function seleteStudent() {
        try {
            let response = await axios.get(`http://localhost:8081/Students/${studID}`)
            let result = await response.data
            setStudent(result)

        }
        catch(err){
            console.log('Error while fatching the data', err)
        }
    }

    useEffect(()=>{
        seleteStudent()
    }, [])

    const deleteData = () => {
        axios.delete(`http://localhost:8081/Students/${studID}`)
        alert(`Successfully deleted ${student.fname}`)
        negative('/show')
    }

    return (
        <div className='w-50 bg-primary mx-auto rounded-5 p-4 mt-5'>
            <h2>Delete Record For</h2>
            <h3>Student Name :{student.fname} </h3>
            <h3>Student ID : {student.id}</h3>
            <button className='btn btn-danger me-3 w-25' onClick={deleteData}>YES</button>
            <NavLink to={'/show'}><button className='btn btn-success w-25'>NO</button></NavLink>
        </div>
    )
}

export default Delete