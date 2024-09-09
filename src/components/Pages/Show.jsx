import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {
  const [student, setStud] = useState([])
  async function getStudent(){
    const response = await axios.get('http://localhost:8081/Students')
    const result = response.data
    setStud(result)
  }
  useEffect(()=>{
    getStudent()
  })
  return (
    <div>
      <h2>Student Details</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FNAME</th>
            <th>LNAME</th>
            <th>DateOfBirth</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHONENO</th>
            <th>COURSE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((stu, index)=>{
              return(
                <tr key={index}>
                  <td>{stu.id}</td>
                  <td>{stu.fname}</td>
                  <td>{stu.lname}</td>
                  <td>{stu.dob}</td>
                  <td>{stu.gender}</td>
                  <td>{stu.email}</td>
                  <td>{stu.phoneno}</td>
                  <td>{stu.course}</td>
                  <td>
                    <NavLink to={`/update/stud/${stu.id}`}><button className='btn btn-success'>Edit</button></NavLink>
                    <NavLink to={`/delete/stud/${stu.id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Show