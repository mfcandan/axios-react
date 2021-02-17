import React from 'react'
import axios from 'axios'

export default class PersonInput extends React.Component{

    state = {
        name: '',
    };

    
    
    handleSubmit = e => {
        e.preventDefault();

        const user = {
            name: this.state.name
        }

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then( res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <form>
                <label>
                    PersonName:
                    <input type='text' name='name' />
                </label>
            </form>
        )
    }

}