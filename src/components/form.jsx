import React from "react";

class Form extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.submitForm();
  };

  render() {
    const {handleInputChange, username} = this.props;
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"></label>
          <input
            required
            type="text"
            name="username"
            className="input-form"
            value={username}
            onChange={handleInputChange}
          />
          <br />
          <h3>Ready to click?</h3>
          <button type="submit" className="submit-button">
            Start Clicking!
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
