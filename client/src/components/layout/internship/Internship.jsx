import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Button, TextArea} from 'reactstrap';
import axios from 'axios'
 class Internship extends Component {
  constructor(){
    super()
    this.state={
        name:'',
        lastName:'',
        mail:'',
        motivation:''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
  }
  
  onChange= e=>this.setState({[e.target.name]: e.target.value})

  async onSubmit (e) {
    e.preventDefault();
    const {name, lastName, mail, motivation} =this.state;
    const form = await axios.post('/api/form',{
      name,
      lastName,
      mail,
      motivation
    })
  }
      
  render() {
    const {name, lastName, mail, motivation} =this.state;
        return (
      <div className="form-container">
      <h3 className="title-section">Internship</h3>
      <Form onSubmit={this.onSubmit}>
      <FormGroup className="form-group">
      <label htmlFor="name">Name</label>
      <input 
        type="text"
        name="name"
       className="form-control form-control-lg"
       placeholder="Enter Name..."
       value={name}
       onChange={this.onChange}
       />
        
      </FormGroup>
      <FormGroup className="form-group">
      <Label htmlFor="last-name">Last-name</Label>
      <Input 
        type="text"
        name="lastName"
       className="form-control form-control-lg"
       placeholder="Enter last-name..."
       value={lastName}
       onChange={this.onChange}
       />
        
      </FormGroup>
      <FormGroup className="form-group">
      <Label htmlFor="name">E-mail</Label>
      <Input 
        type="mail"
        name="mail"
       className="form-control form-control-lg"
       placeholder="Enter Name..."
       value={mail}
       onChange={this.onChange}
       />
        
      </FormGroup>
      <FormGroup className="form-group">
      <Label htmlFor="motivation">Your Motivation</Label>
      <textarea
        type="text"
        name="motivation"
       className="form-control form-control-lg"
       placeholder="Describe you in few lines"
       value={motivation}
       onChange={this.onChange}
       />
        
      </FormGroup>
      <Button 
      type="submit" 
      value="Apply"
      className="btn btn-outline-warning"
      
      
      >Submit</Button>
      </Form>
      </div>
    )
  }
}
export default Internship