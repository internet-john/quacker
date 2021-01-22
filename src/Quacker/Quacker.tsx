import React from 'react';
import Header from '../Header';
import Feed from '../Feed';
import NavFooter from '../NavFooter';
import './index.css';

const Quacker = () =>
  <div className="quacker">
    <Header />
    <Feed />
    <NavFooter />
  </div>

export default Quacker;
