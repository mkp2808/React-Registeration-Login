import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from "./sign_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {


    const navigate = useNavigate();
    const [inpval, setInputval] = useState({
        email: "",
        password: ""
    })
    const [data, setData] = useState([]);

    

    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value, name);

        setInputval(
                {...inpval,
                [name]: value})
    }   

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("userRegistration");
        console.log(getuserArr);

        const { email, password } = inpval;

        if (email === "") {
            alert("email field should not be empty...!");
        }
        else if (!email.includes("@")) {
            alert("Enter a valid mail");
        }
        else if (password === "") {
            alert("password field should not be empty...!");
        }
        else if (password.length < 5) {
            alert("Password should be of atleast 6 digits");
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details");
                }
                else {
                    console.log("Login Successful...!");
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    // window.location.href = '/details';
                    navigate('/details');
                }

            }
        }
    }

    return (
        <>
            <div className="container">
                <section className="d-flex justify-content-between">
                    <div className="left_data " style={{ width: "100%" }}>

                        <h3 className="my-4 text-center col-lg-6">Login</h3>

                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control name="email" onChange={getdata} type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control name="password" onChange={getdata} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" onClick={addData} className="col-lg-6" style={{ background: "#12ce73", border: "none" }} type="submit">
                                Login
                            </Button>
                        </Form>
                        <p className="mt-2">Don't Have an account <span><NavLink to="/register">Create Account</NavLink></span></p>

                    </div>
                    <div className="right_data">
                        <Sign_img />
                    </div>
                </section>
            </div >
        </>
    )
}

export default Login