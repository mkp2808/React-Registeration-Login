import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from "./sign_img";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [inpval, setInputval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })
    const [data,setData] = useState([]);


    const getdata = (e) => {
        // console.log(e.target.value);

        const { value, name } = e.target;
        // console.log(value, name);

        setInputval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        // console.log(inpval);

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert("Name field should not be empty...!");
        } else if (email === "") {
            alert("email field should not be empty...!");
        }
        else if (!email.includes("@")) {
            alert("Enter a valid mail");
        }
        else if (date === "")
        {
            alert("password field should not be empty...!");
        }
        else if (password === "") {
            alert("password field should not be empty...!");
        }
        else if (password.length < 5) {
            alert("Password should be of atleast 6 digits");
        }else
        {
            localStorage.setItem("userRegistration",JSON.stringify([...data,inpval]));
            alert("Data saved successfully...!");
        }
    }

    return (
        <>
            <div className="container mt-5">
                <section className="d-flex justify-content-between">
                    <div className="left_data " style={{ width: "100%" }}>
                        <h3 className="my-4 text-center col-lg-6">Sign Up</h3>

                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control name="name" onChange={getdata} type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control name="email" onChange={getdata} type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Label>Date of Birth : </Form.Label>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                                <Form.Control name="date" onChange={getdata} type="date" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control name="password" onChange={getdata} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicCheckbox">
                                <Form.Check onChange={getdata} type="checkbox" label="Agree terms & conditions." />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} className="col-lg-6" style={{ background: "#12ce73", border: "none" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-2">Already Have an account <span><NavLink to="/login">Sign In</NavLink></span></p>

                    </div>
                    <div className="right_data">
                        <Sign_img />
                    </div>
                </section>
            </div >
        </>
    )
}

export default Register