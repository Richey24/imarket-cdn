'use client';
import axios from 'axios';
import React, { useState } from 'react'

const ResetPassword = () => {

    const [show, setShow] = useState(false)
    const [load, setLoad] = useState(false)
    const [msg, setMsg] = useState("")

    const submitForm = async (e: any) => {
        e.preventDefault()
        setLoad(true)
        const body = {
            password: e.target.newPass.value,
            confirmPass: e.target.confirmPass.value,
            reset: "true"
        }
        if (body.password !== body.confirmPass) {
            setMsg("New password and confirm password do not match")
            setShow(true)
            setLoad(false)
            return
        }
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/update/password`, {
            body: new URLSearchParams(body),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${window.location.pathname.split("/")[2]}`
            },
            method: "put",
        })
            .then((res) => {
                if (res.status == 200) {
                    setMsg(`Password reset successfully, proceed to login`)
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
                                                    `Create a new password`
                                            }
                                        </p>
                                        <div className="form-group mb-0">
                                            <label htmlFor="reset-email" className="font-weight-normal">New Password</label>
                                            <input type="password" className="form-control" id="reset-password" name="newPass"
                                                required />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="reset-email" className="font-weight-normal">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirm-password" name="confirmPass"
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

export default ResetPassword