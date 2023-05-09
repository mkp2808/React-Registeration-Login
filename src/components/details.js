import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const Details = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [logindata, setLoginData] = useState([]);


    const todayDate = new Date().toISOString().slice(0, 10);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");


        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);

            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            // console.log(logindata[0].date === todayDate);

            if (userbirth) {
                setTimeout(() => {
                    handleShow();
                }, 3000);
            }
        }

    }
    const userlogout = () => {
        localStorage.removeItem("user_login")
        navigate("/login");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            <div className="container">

                {
                    logindata.length === 0 ? "errror" :
                        <>
                            <h1>Details Page</h1>
                            <h1>{logindata[0].name}</h1>
                            <Button onClick={userlogout}>LogOut</Button>

                            {
                                logindata[0].date === todayDate ?
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                Close
                                            </Button>
                                        </Modal.Footer>
                                    </Modal> : ""
                            }

                        </>
                }
            </div>
        </>
    )
}

export default Details;