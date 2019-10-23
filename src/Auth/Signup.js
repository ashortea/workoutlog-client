import React,{useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Signup =(props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');

    let handleSumbit =(event) =>{
        event.preventDefault();
        console.log(username, password);
        fetch("http://localhost:3000/api/signup",{
            method:'Post',
            body:JSON.stringify({username: username, passwordhash: password}),
            headers:new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data)=> {
            props.updateToken(data.sessionToken)
        })
    }
    return(
        <div>
            <h1>Sign Up</h1>
           <Form onSubmit={handleSumbit}>
           
               <FormGroup>
                   <Label htmlFor="username">Username</Label>
                   <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
               </FormGroup>
               <FormGroup>
                   <Label htmlFor="password">Password</Label>
                   <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
               </FormGroup>
               <Button type="sumbit">Signup</Button>
           </Form>
        </div>
    )
}

export default Signup;