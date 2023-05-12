import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    var nameformat = /^[a-zA-Z][a-zA-Z\\s]+$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneformate = /^[6789]\d{9}$/;
    const navigate = useNavigate();

    const [inpval, setInputval] = useState({

        fname: "",
        lname: "",
        phone: "",
        email: "",
        pass: "",
        cpass: "",
        gender: "",
        caste: "",
        language: [],
        dob: "",
        edu: "",
        city: "",
        address: "",
        tnc: ""
    });


    const [error, setError] = useState({})

    const handlefName = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, fname: value })

        if (value === "") {
            setError({ ...error, fname: "name should not be empty" })
            return false;
        }
        else if (!value.match(nameformat)) {
            setError({ ...error, fname: "name should only contains alphabets" })
            return false;
        }
        else {
            setError({ ...error, fname: "" })
            return true;
        }
    }

    const handlelName = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, lname: value })


        if (value === "") {
            setError({ ...error, lname: "name should not be empty" })
            return false;
        }
        else if (!value.match(nameformat)) {
            setError({ ...error, lname: "name should only contains alphabets" })
            return false;
        }
        else {
            setError({ ...error, lname: "" })
            return true;
        }
    }


    const handleEmail = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, email: value })
        if (value === "") {
            setError({ ...error, email: "Email should not be empty" })
            return false;
        }
        else if (!value.match(mailformat)) {
            setError({ ...error, email: "Enter a valid email id" })
            return false;
        }
        else {
            setError({ ...error, email: "" })
            return true;
        }
    }

    const handlePassword = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, pass: value })
        if (value === "") {
            setError({ ...error, pass: "Password should not be empty" })
            return false;
        }
        else if (value.length < 8) {
            setError({ ...error, pass: "Password should contain atleast 8 characters" })
            return false;
        }
        else {
            setError({ ...error, pass: "" })
            return true;
        }
    }

    const handleCPassword = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, cpass: value })
        if (value !== inpval.pass) {
            setError({ ...error, cpass: "Passwords does not match." })
            return false;
        }
        else {
            setError({ ...error, cpass: "" })
            return true;
        }
    }

    const handlePhone = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, phone: value })

        if (value === "") {
            setError({ ...error, phone: "Phone number should not be empty" })
            return false;
        }
        else if (!value.match(phoneformate)) {
            setError({ ...error, phone: "Enter a valid Phone number" })
            return false;
        }
        else {
            setError({ ...error, phone: "" })
            return true;
        }
    }

    const handleGender = (e) => {
        const { value, checked } = e.target;

        if (!checked) {
            setError({ ...error, gender: "Gender should not be empty" })
            return false;
        }
        else {
            setError({ ...error, gender: "" })
            setInputval({ ...inpval, gender: value })
            return true;
        }
    }

    const handleDob = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, dob: value })

        if (value === "") {
            setError({ ...error, dob: "Date of Birth should not be empty" })
            return false;
        }
        else {

            var today = new Date();
            var birthDate = new Date(value);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0) {
                age--;
            }
            if (age >= 18 && age <= 65) {
                setError({ ...error, dob: "" })
                return true;
            }
            else {
                setError({ ...error, dob: "Age must be between 18 to 65" })
                return false;
            }
        }
    }

    const handleCaste = (e) => {
        const { value, checked } = e.target;

        if (!checked) {
            setError({ ...error, caste: "Caste should not be empty" })
            return false;
        }
        else {
            setInputval({ ...inpval, caste: value })
            setError({ ...error, caste: "" })
            return true;
        }
    }

    const handleLanguage = (e) => {
        const { value, checked } = e.target;

        let copy = { ...inpval };

        if (checked) {
            copy.language.push(value);
        } else {
            copy.language = copy.language.filter(el => el !== value);
        }

        setInputval(copy)
        if (!copy.language.length > 0) {
            setError({ ...error, language: "Language should not be empty" })
            return false;
        }
        else {
            setError({ ...error, language: "" })
            return true;
        }
    }

    const isEmpty = (e) => {
        if (!inpval.language.length > 0) {
            setError({ ...error, language: "Language should not be empty" })
            return false;
        }
        else {
            setError({ ...error, language: "" })
            return true;
        }
    }

    const handleCity = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, city: value })

        if (value == "") {
            setError({ ...error, city: "City should not be empty" })
            return false;
        }
        else {
            setError({ ...error, city: "" })
            return true;
        }
    }

    const handleEducation = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, edu: value })

        if (value === "") {
            setError({ ...error, edu: "Address should not be empty" })
            return false;
        }
        else {
            setError({ ...error, edu: "" })
            return true;
        }
    }

    const handleAddress = (e) => {
        const { value } = e.target;
        setInputval({ ...inpval, address: value })

        if (value === "") {
            setError({ ...error, address: "Address should not be empty" })
            return false;
        }
        else {
            setError({ ...error, address: "" })
            return true;
        }
    }


    const handleTnc = (e) => {
        const { checked } = e.target;

        setInputval({ ...inpval, tnc: checked })
        if (!checked) {
            setError({ ...error, tnc: "Please check Terms and conditions." })
            return false;
        }
        else {
            setError({ ...error, tnc: "" })
            return true;
        }
    }


    // SUBMIT

    const handleSubmit = (e) => {
        e.preventDefault();


        let valid = true;

        const { fname, lname, phone, email, pass, cpass, gender, caste, language, dob, edu, city, address, tnc } = inpval;


        const submitError = {};


        if (fname === "") {
            valid = false;
            submitError.fname = "First name should not be empty";

        }
        else if (!fname.match(nameformat)) {
            valid = false;
            submitError.fname = "First name should only contains alphabets"
        }


        if (lname === "") {
            valid = false;
            submitError.lname = "Last name should not be empty";

        }
        else if (!lname.match(nameformat)) {
            valid = false;
            submitError.lname = "Last name should only contains alphabets"
        }


        if (email === "") {
            valid = false;
            submitError.email = "Email should not be empty"
        }
        else if (!email.match(mailformat)) {
            valid = false;
            submitError.email = "Enter a valid email id";
        }

        if (pass === "") {
            valid = false;
            submitError.pass = "Password should not be empty";
        }
        else if (pass.length < 8) {
            valid = false;
        }

        if (cpass === "") {
            valid = false;
            submitError.cpass = "Confirm Password should not be empty";
        }
        else if (pass !== cpass) {
            submitError.cpass = "Password does not match";
            valid = false;
        }

        if (phone === "") {
            valid = false;
            submitError.phone = "Phone number should not be empty";
        }
        else if (!phone.match(phoneformate)) {
            valid = false;
            submitError.phone = "Enter a valid Phone number";
        }

        if (gender === "") {
            valid = false;
            submitError.gender = "Gender should not be empty";
        }

        if (caste === "") {
            valid = false;
            submitError.caste = "Caste should not be empty";
        }
        if (language.length < 1) {
            valid = false;
            submitError.language = "Language should not be empty";
        }
        if (dob === "") {
            valid = false;
            submitError.dob = "Date of Birth should not be empty";
        }
        else {

            var today = new Date();
            var birthDate = new Date(dob);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0) {
                age--;
            }
            if (age >= 18 && age <= 65) {
                valid = true;
            }
            else {
                submitError.dob = "Age must be between 18 to 65";
                valid = false;
            }
        }

        if (edu === "") {
            submitError.edu = "Education should not be empty";
            valid = false;
        }

        if (city === "") {
            submitError.city = "Please select your city";
            valid = false;
        }

        if (address === "") {
            submitError.address = "Address should not be empty";
            valid = false;
        }

        if (!tnc) {
            submitError.tnc = "Please check terms and condition.";
            valid = false;
        }

        console.log(tnc);

        setError(submitError);

        if (valid) {
            localStorage.setItem("userRegisteration", JSON.stringify({ fname, lname, phone, email, pass, cpass, gender, caste, language, dob, edu, city, address, tnc }));
            navigate('/login');
        }

    }

    return (
        <>
            <div className="container mt-3 d-flex justify-content-center">

                <Form className='col-6' action="" style={{ border: "1px solid black", borderRadius: "10px", padding: "10px 50px" }}>
                    <h1 className='d-flex justify-content-center'>Registration</h1>
                    <Form.Group className="mb-2 d-flex justify-content-between">
                        <section className='m-1'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" onBlur={(e) => handlefName(e)} onChange={(e) => handlefName(e)} name='name' placeholder="Enter first name" />
                            <div className="validation-alert" id="fnameAlert">{error.fname}</div>
                        </section>
                        <section className='m-1'>

                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" onBlur={(e) => handlelName(e)} onChange={(e) => handlelName(e)} name='name' placeholder="Enter last name" />
                            <div className="validation-alert" id="lnameAlert">{error.lname}</div>
                        </section>
                        <section className='m-1'>
                            <Form.Label>Phone number</Form.Label>
                            <input className="form-control" type="tel" onBlur={(e) => handlePhone(e)} onChange={(e) => handlePhone(e)} id="phone" placeholder="Phone Number" />
                            <div className="validation-alert" id="phoneAlert">{error.phone}</div>
                        </section>
                    </Form.Group>

                    <Form.Group className="mb-2 d-flex justify-content-between">
                        <section className='m-1'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onBlur={(e) => handleEmail(e)} onChange={(e) => handleEmail(e)} name='email' placeholder="Enter email" />
                            <div className="validation-alert" id="emailAlert">{error.email}</div>
                        </section>
                        <section className='m-1'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onBlur={(e) => handlePassword(e)} onChange={(e) => handlePassword(e)} placeholder="Password" />
                            <div className="validation-alert" id="Alert">{error.pass}</div>
                        </section>
                        <section className='m-1'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" onBlur={(e) => handleCPassword(e)} onChange={(e) => handleCPassword(e)} placeholder="Confirm Password" />
                            <div className="validation-alert" id="Alert">{error.cpass}</div>
                        </section>
                    </Form.Group>


                    <Form.Group className="mb-2 d-flex justify-content-between">
                        {/* Gender */}
                        <section className='m-1 col-4'>
                            <Form.Label>Gender</Form.Label><br />
                            <input type="radio" name="gender" onBlur={(e) => handleGender(e)} onChange={(e) => handleGender(e)} id="gender-male" value="Male" /><label htmlFor="gender-male" style={{ margin: "0 0 0 3px" }}>Male</label><br />
                            <input type="radio" name="gender" onBlur={(e) => handleGender(e)} onChange={(e) => handleGender(e)} id="gender-female" value="Female" /><label htmlFor="gender-female" style={{ margin: "0 0 0 3px" }}>Female</label>
                            <div className="validation-alert" id="Alert">{error.gender}</div>
                        </section>

                        {/* Caste */}
                        <section className='m-1 col-4'>
                            <Form.Label>Caste</Form.Label><br />
                            <div>
                                <input type="radio" id="caste1" onBlur={(e) => handleCaste(e)} onChange={(e) => handleCaste(e)} value="general" name="caste" /><label htmlFor="caste1" style={{ marginLeft: "3px" }}  >General</label><br />
                                <input type="radio" id="caste2" onBlur={(e) => handleCaste(e)} onChange={(e) => handleCaste(e)} value="obc" name="caste" /><label htmlFor="caste2" style={{ marginLeft: "3px" }} >Obc</label><br />
                                <input type="radio" id="caste3" onBlur={(e) => handleCaste(e)} onChange={(e) => handleCaste(e)} value="sc" name="caste" /><label htmlFor="caste3" style={{ marginLeft: "3px" }} >Sc</label><br />
                                <input type="radio" id="caste4" onBlur={(e) => handleCaste(e)} onChange={(e) => handleCaste(e)} value="st" name="caste" /><label htmlFor="caste4" style={{ marginLeft: "3px" }} >St</label><br />
                            </div>
                            <div className="validation-alert" id="Alert">{error.caste}</div>
                        </section>

                        {/* Language */}
                        <section className='m-1 col-4'>
                            <Form.Label>Language</Form.Label><br />
                            <div>
                                <input type="checkbox" onBlur={(e) => isEmpty(e)} onChange={(e) => handleLanguage(e)} id="lang1" name="language" value="Gujarati" /><label style={{ margin: "3px" }} htmlFor="lang1">Gujarati</label><br />
                                <input type="checkbox" onBlur={(e) => isEmpty(e)} onChange={(e) => handleLanguage(e)} id="lang2" name="language" value="Hindi" /><label style={{ margin: "3px" }} htmlFor="lang2">Hindi</label><br />
                                <input type="checkbox" onBlur={(e) => isEmpty(e)} onChange={(e) => handleLanguage(e)} id="lang3" name="language" value="English" /><label style={{ margin: "3px" }} htmlFor="lang3">English</label><br />
                                <input type="checkbox" onBlur={(e) => isEmpty(e)} onChange={(e) => handleLanguage(e)} id="lang4" name="language" value="Marathi" /><label style={{ margin: "3px" }} htmlFor="lang4">Marathi</label><br />
                            </div>
                            <div className="validation-alert" id="Alert">{error.language}</div>
                        </section>
                    </Form.Group>

                    <Form.Group className="mb-2 d-flex justify-content-between">
                        <section className='m-1 col-4'>
                            <Form.Label>Date of Birth</Form.Label><br />
                            <input className="form-control" onBlur={(e) => handleDob(e)} onChange={(e) => handleDob(e)} type="date" id="dob" placeholder="Birth Date" />
                            <div className="validation-alert" id="Alert">{error.dob}</div>
                        </section>

                        <section className='m-1 col-4'>
                            <Form.Label>Education</Form.Label><br />
                            <input className="form-control" onBlur={(e) => handleEducation(e)} onChange={(e) => handleEducation(e)} type="text" id="education" placeholder="Education" />
                            <div className="validation-alert" id="Alert">{error.edu}</div>
                        </section>

                        <section className='m-1 col-4'>
                            <Form.Label>City</Form.Label><br />
                            <select className="form-control" onBlur={(e) => handleCity(e)} onChange={(e) => handleCity(e)} id="city">
                                <option value="">Enter Cour City</option>
                                <option id="city1" value="Ahmedabad">Ahmedabad</option>
                                <option id="city2" value="Mumbai">Mumbai</option>
                                <option id="city3" value="Surat">Surat</option>
                                <option id="city4" value="Vadodra">Vadodra</option>
                            </select>
                            <div className="validation-alert" id="Alert">{error.city}</div>
                        </section>
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Address</Form.Label><br />
                        <textarea className="form-control" onBlur={(e) => handleAddress(e)} onChange={(e) => handleAddress(e)} style={{ resize: "none" }} id="address" placeholder="Address"></textarea>
                        <div className="validation-alert" id="Alert">{error.address}</div>
                    </Form.Group>

                    <Form.Group className="mb-2 col-lg-6">
                        <Form.Check type="checkbox" onBlur={(e) => handleTnc(e)} onChange={(e) => handleTnc(e)} label="Agree terms & conditions." />
                        <div className="validation-alert" id="Alert">{error.tnc}</div>
                    </Form.Group>

                    <Button variant="primary" className='col-12' onClick={(e) => handleSubmit(e)} type="submit" >
                        Submit
                    </Button>
                </Form>

                {/* <img src="./Welcome-bro.svg" alt="Welcome" style={{ maxWidth: "40vw" }} /> */}
            </div >
        </>
    )
}

export default Home