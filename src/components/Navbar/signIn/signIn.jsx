import React from "react";
import { useState } from "react";

function SignIn() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div>
      <button onClick={toggleForm}>Sign On</button>
      {showForm && (
        <form className="sign-in-form">
        <div>
          <label>Username: NID or DTC-Atlas ID </label>
          <input class="input" name="user_name" type="text" />
        </div>
        <div>
          <label>Password</label>
          <input class="input" name="user_email" type="email" />
        </div>
        <button>
          Sign On
        </button>
      </form>
      )}
      
    </div>
  );
}

export default SignIn