import axios from 'axios'
import React, { useEffect } from 'react'
import { set, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { register, handleSubmit, setValue } = useForm()
    const { studID } = useParams()
    const navigate = useNavigate()

    async function getStuInfo() {
        const response = await axios.get(`http://localhost:8081/Students/${studID}`)
        setValue('fname', response.data.fname)
        setValue('lname', response.data.lname)
        setValue('dob', response.data.dob)
        setValue('gender', response.data.gender)
        setValue('email', response.data.email)
        setValue('phoneno', response.data.phoneno)
        setValue('course', response.data.course)
    }
    useEffect(() => {
        getStuInfo()
    })

    const updateStud = (data)=>{
        axios.put(`http://localhost:8081/Students/${studID}`, data)
        alert('data Updated !!!')
        navigate('/Show')
    }
    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    <form onSubmit={handleSubmit(updateStud)}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="text" id="firstName" className="form-control form-control-lg" {...register('fname')} />
                                                    <label className="form-label" for="firstName" >First Name</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="text" id="lastName" className="form-control form-control-lg" {...register('lname')} />
                                                    <label className="form-label" for="lastName" >Last Name</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">

                                                <div data-mdb-input-init className="form-outline datepicker w-100">
                                                    <input type="text" className="form-control form-control-lg" id="birthdayDate" {...register('dob')} />
                                                    <label for="birthdayDate" className="form-label">Birthday</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <h6 className="mb-2 pb-1">Gender: </h6>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                        value="Female"  {...register('gender')} />
                                                    <label className="form-check-label" for="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="Male" {...register('gender')} />
                                                    <label className="form-check-label" for="maleGender">Male</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                        value="Other" {...register('gender')} />
                                                    <label className="form-check-label" for="otherGender">Other</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="email" id="emailAddress" className="form-control form-control-lg" {...register('email')} />
                                                    <label className="form-label" for="emailAddress">Email</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div data-mdb-input-init className="form-outline">
                                                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" {...register('phoneno')} />
                                                    <label className="form-label" for="phoneNumber">Phone Number</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">

                                                <select className="select form-control-lg " {...register('course')}>
                                                    <option value="Choose option" >Choose option</option>
                                                    <option value="PYTHON">PYTHON</option>
                                                    <option value="JAVA">JAVA</option>
                                                    <option value="CLOUD">CLOUD</option>
                                                </select>
                                                <label className="form-label select-label">Choose option</label>

                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Update