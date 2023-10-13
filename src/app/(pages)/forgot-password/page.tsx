'use client';
import axios from 'axios';
import React, { useState } from 'react'
import { Toast } from 'react-bootstrap';

const Page = () => {
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState(false)
    const [msg, setMsg] = useState("")

    const submitForm = async (e: any) => {
        e.preventDefault()
        setLoad(true)
        const body = {
            email: e.target.email.value,
            url: window.location.origin
        }
        axios.post(`http://localhost:4000/api/auth/forgot/password`, body)
            .then((res) => {
                if (res.status === 201) {
                    setMsg("There is not account associated with this email, kindly proceed to create an account")
                } else if (res.status == 200) {
                    setMsg(`A email containing instruction on how to reset your password has been sent to ${body.email}, Kindly follow the instructions to reset your password`)
                } else {
                    setMsg("Something went wrong, Try again")
                }
                setShow(true)
                setLoad(false)
            })
            .catch(() => {
                setMsg("Something went wrong, Try again")
                setShow(true)
                setLoad(false)
            })
            .finally(() => {
                setLoad(false)
            })
    }

    return (
        <div>
            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="demo4.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="category.html">Shop</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        My Account
                                    </li>
                                </ol>
                            </div>
                        </nav>

                        <h1>My Account</h1>
                    </div>
                </div>
                <div className="container reset-password-container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="feature-box border-top-primary">
                                <div className="feature-box-content">
                                    <form onSubmit={submitForm} className="mb-0" action="#">
                                        <p style={{ fontSize: "16px" }}>
                                            {
                                                show ? msg :
                                                    `Lost your password? Please enter your
                                            username or email address. You will receive
                                            a link to create a new password via email.`
                                            }
                                        </p>
                                        <div className="form-group mb-0">
                                            <label htmlFor="reset-email" className="font-weight-normal">Username or email</label>
                                            <input type="email" className="form-control" id="reset-email" name="email"
                                                required />
                                        </div>

                                        <div className="form-footer mb-0">
                                            <a href="login.html">Click here to login</a>

                                            <button type="submit"
                                                className="btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0">
                                                {load ? "Loading..." : " Reset Password"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page