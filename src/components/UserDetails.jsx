import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const UserDetailsTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

/**
 * UserDetails component - displays user information
 * @param {Object} props - Component props
 * @param {Object|string} props.user - User information (can be email string or user object)
 * @returns {JSX.Element} UserDetails component
 */
function UserDetails({ user }) {
  return (
    <>
      <UserDetailsTitle variant="h6">User Details</UserDetailsTitle>
      {user ? (
        <Typography variant="body1">
          <strong>Email:</strong> {user.email || user}
        </Typography>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No user data.
        </Typography>
      )}
    </>
  );
}

UserDetails.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default UserDetails;
