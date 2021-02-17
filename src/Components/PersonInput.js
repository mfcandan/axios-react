import React from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';

export default class PersonInput extends React.Component{

    state = {
        name: '',
    };

    handleChange = e => {
        this.setState({ name: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();

        const user = {
            name: this.state.name
        }

        axios
            .post('https://jsonplaceholder.typicode.com/users', { user })
            .then( res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    PersonName:
                    <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <Button type="submit" color="success">Add</Button>
            </form>
        )
    }

}