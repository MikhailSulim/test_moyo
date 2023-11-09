import React from 'react';

import './SubmitBtn.scss';

const SubmitBtn = ({isEnable, btnText}) => {
  return (
    <button 
      type='submit' 
      className={`submit-btn ${!isEnable && 'submit-btn_disable'}`} 
      disabled={!isEnable}>
      {btnText}
    </button>
  );
};

export default SubmitBtn;