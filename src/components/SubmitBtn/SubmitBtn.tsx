import React from 'react';

import './SubmitBtn.scss';

interface SubmitBtnProps {
  isEnable: boolean;
  btnText: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ isEnable, btnText }) => {
  return (
    <button
      type="submit"
      className={`submit-btn ${!isEnable && 'submit-btn_disable'}`}
      disabled={!isEnable}
    >
      {btnText}
    </button>
  );
};

export default SubmitBtn;
