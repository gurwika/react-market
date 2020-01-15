import React from 'react';
import { connect } from 'react-redux';

import './Login.scss';

const Login = param => <div className="login">Login</div>;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Login);
