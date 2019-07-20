import React from 'react';
import { Global, css } from '@emotion/core'
import globalStyle from '../components/styles/global.js'

const Page = (props) => {
  return (  
    <div>
      <Global styles={globalStyle} />
      {props.children}
    </div>
  );
};

export default Page;