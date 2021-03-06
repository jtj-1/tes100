import React from "react"
import PropTypes from 'prop-types';
import Head from 'next/head'
import 'antd/dist/antd.css'

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
      </Head>
      <Component />
    </>
  );
};

NodeBird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird;