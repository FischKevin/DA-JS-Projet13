import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  const token = useSelector(state => state.auth.token); // Assurez-vous que le chemin d'accès est correct
  return token ? children : <Navigate to="/" replace />;
};


export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};