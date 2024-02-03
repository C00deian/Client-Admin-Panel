import React from 'react';
import ReactLoading from 'react-loading';
 
const Loading = () => (
    <div className="loading-spinner"> 
    <ReactLoading type={'spinningBubbles'} color={'#000'} height={'20%'} width={'20%'} />
  </div>
);
 
export default Loading;