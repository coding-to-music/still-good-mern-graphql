import React from 'react';

function Join() {
  function editField() {}
  return (
    <div>
      <h2>Login or signup</h2>
      <h4>Login</h4>
      <form>
        <input type="text" value="Put a login form here" onChange={editField} />
      </form>
      <h4>Sign up</h4>
      <form>
        <input type="text" value="Put a signup form here" onChange={editField} />
      </form>
    </div>
  );
}

export default Join;
