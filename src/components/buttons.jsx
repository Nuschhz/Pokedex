import "../css/buttons.css";

function Button({ children = "", fn = () => {}, onMouseEnter }) {
  return (
    <button className="StyledButton" onClick={fn} onMouseEnter={onMouseEnter}>
      {children}
    </button>
  );
}

export default Button;
