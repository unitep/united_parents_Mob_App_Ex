
import React, {useState} from "react";

import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"


const Registration=()=> {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const {register} = useUserAuth()
const [error, setError] = useState("")
const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    try{
        await register(email,password)
        navigate("/")
  

    }catch(err){
        setError(err.message);

    }
}

    return (
 
       <>
       <Card>
           <Card.Body>
            <h2 className="text-center mb-4">  Registrieren </h2>
            {error && <Alert variant= "danger">{error}</Alert>}
            
            <Form onSubmit = {handleSubmit}>
                
                <Form.Group id ="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email address" onChange={(e)=> setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group id ="password" >
                    <Form.Label>Passwort</Form.Label>
                    <Form.Control type="password" placeholder="password"onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group id ="rePassword" >
                    <Form.Label>Passwort Wiederholen</Form.Label>
                    <Form.Control type="Password" placeholder= "repassword" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button className = "w-100" varient="primary" type="register">Registrieren</Button>
                </div>
            </Form>

           </Card.Body>
       </Card>
           <div className="w-100 text-center mt-2">
               Haben Sie ein account? <Link to ="/">einloggen</Link>
           </div>
       
       </>
 
    );
}

export default Registration;
/* <Form.Group id ="firstName" >
                    <Form.Label>Vorname</Form.Label>
                    <Form.Control type="firstName" ref = {firstNameref} required/>
                </Form.Group>
                <Form.Group id ="lastName" >
                    <Form.Label>Nachname</Form.Label>
                    <Form.Control type="lastName" ref = {lastNameRef} required/>
                </Form.Group>
                 <Form.Group id ="birthday" >
                    <Form.Label>GeburtsDatum</Form.Label>
                    <Form.Control type="birthday" ref = {birthdayRef} required/>
                </Form.Group>
                <Form.Group id ="uniPlace" >
                    <Form.Label>Hochschule und Standort</Form.Label>
                    <Form.Control type="uniPlace" ref = {uniPlaceRef} required/>
                </Form.Group>
                
                */