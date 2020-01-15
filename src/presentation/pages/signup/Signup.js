import React from 'react';
import { connect } from 'react-redux';

import './Signup.scss';

const Signup = param => <div className="signup">Login</div>;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Signup);
