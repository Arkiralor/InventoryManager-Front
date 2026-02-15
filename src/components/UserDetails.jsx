import React from 'react';
import { Typography } from '@mui/material';

function UserDetails({ user }) {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        User Details
      </Typography>
      {user ? (
        <Typography variant="body1">
          <strong>Email:</strong> {user}
        </Typography>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No user data.
        </Typography>
      )}
    </>
  );
}

export default UserDetails;
