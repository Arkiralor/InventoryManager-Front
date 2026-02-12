import React from 'react';

function UserDetails({ user }) {
  return (
    <section className="user-details">
      <h3>User Details</h3>
      {user ? (
        <div>
          <div><strong>Email:</strong> {user}</div>
        </div>
      ) : (
        <div>No user data.</div>
      )}
    </section>
  );
}

export default UserDetails;
