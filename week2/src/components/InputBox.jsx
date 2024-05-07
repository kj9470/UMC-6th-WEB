// InputBox.jsx
import React from 'react';

function InputBox({ value, onChange, onKeyPress }) {
  return (
    <div className="input-box">
      <input
        type="text"
        className="input"
        placeholder="스터디 계획을 작성해보세요!"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default InputBox;
