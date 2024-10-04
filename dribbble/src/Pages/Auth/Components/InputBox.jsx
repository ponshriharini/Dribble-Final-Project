import "../Styles/InputBoxStyles.css";

function InputBox({ value, onChange, type = "text" }) {
  return (
    <div className="input-box">
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputBox;
