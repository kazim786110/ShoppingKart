
import React from 'react';
import './SignUpForm.css';

function SignUpForm() {


  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <form onSubmit={""}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={""}
          onChange={""}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={"email"}
          onChange={""}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={""}
          onChange={""}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;