import React, {useState} from 'react';
import '../styles.css';
import axios from 'axios';
function Register() {
    const [formData,setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
    });
    let submitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const data = JSON.stringify(formData);
        console.log(data);
        axios.post('http://localhost:8000/user-api/register', data, {
            headers: {
                "content-type": "application/json"
            }
        }).then(
            r => {console.log(r)}
        );
    }
    return (
        <div className={"columns"}>
            <div className={"column"} />
            <div className={"column"}>
                <h1 className={"title"}>Register</h1>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input is-inline" type="text" placeholder="First" onChange={event => setFormData({...formData, first_name: event.target.value})}/>
                        <input className="input is-inline ml-3" type="text" placeholder="Last" onChange={event => setFormData({...formData, last_name: event.target.value})}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="john" onChange={event => setFormData({...formData, username: event.target.value})}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="johndoe@mail.com" onChange={event => setFormData({...formData, email: event.target.value})}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" onChange={event => setFormData({...formData, password: event.target.value})}/>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={submitForm}>Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>
            <div className={"column"} />
        </div>
    );
}

export default Register;