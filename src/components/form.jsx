import React from 'react'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('statteeeee', this.state);
    
    this.setState({
      username: ''
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <div id='container'>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='username'></label>
        <input required type='text' name='username' className='input-form' value={this.state.username} onChange={this.handleChange}/>
        <br/>
        <h3>Ready to click?</h3>
        <button type='submit' className='submit-button'>Start Clicking!</button>
        </form>
      </div>
    )
  }
}

export default Form;
