import React, {useRef, useState} from "react";
import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        try{
            await login(email,password)
            navigate("/home")
    
        }catch(err){
            setError(err.message);
        }
    }
        
    return ( 
        <>
        <Card className="login-card">
            <Card.Body className="login-card-body">
             <h1 className="text-center mb-4">Login</h1>
             {error && <Alert variant = "danger">{error}</Alert>}
             
             <Form onSubmit = {handleSubmit}>
                 
                 <Form.Group id ="email" >
                     <Form.Label>E-Mail</Form.Label>
                     <Form.Control type="email" placeholder="E-Mail Adresse" onChange={(e)=> setEmail(e.target.value)}/>
                 </Form.Group>
                 <Form.Group id ="password" >
                     <Form.Label>Passwort</Form.Label>
                     <Form.Control type="password" placeholder="Passwort"onChange={(e)=> setPassword(e.target.value)}/>
                 </Form.Group>
                 
                 <Button className = "w-100" type="register">Login</Button>
             </Form>
 
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2">
                Du hast noch keinen Account? <Link to ="/registration">Registriere dich hier</Link>
            </div>     
    </>
    );
}

export default Login;