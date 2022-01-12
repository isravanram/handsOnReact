import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'



class App extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event) {
        this.setState({
            fullName: event.target.value
        })
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    onSubmit(event) {
        event.preventDefault()
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signUp', registered)
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            userName: '',
            email: '',
            password: ''
        })
    }



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">YourSpace </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://yourcare.com/">Contact us</a>
                                </li>
                                {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
                                {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
                            </ul>
                            <form className="d-flex" >
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <h1 style={{ marginTop: "25px", marginLeft: "450px", paddingBottom: "50px" }}> Register </h1>
                <div className='container my-3' style={{backgroundImage:"background.jpg"}}>
                    <div className="form-div" >
                        <form onSubmit={this.onSubmit} style={{ width: "40%", paddingBottom: "10px", marginLeft: "300px" }}>
                            <input type="text" placeholder="Full Name"
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className="form-control form-group" />

                            <input type="text" placeholder="Username"
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="form-control form-group" />

                            <input type="text" placeholder="Email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />


                            <input type="password" placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />


                            <input type="submit" style={{ marginTop: "25px", marginLeft: "100px" }} className="btn btn-danger btn-block" value="Submit" />
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;