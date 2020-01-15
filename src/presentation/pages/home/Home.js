import React from 'react';
import { connect } from 'react-redux';

import './Home.scss';

const Home = param => <div className="home">Home</div>;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
