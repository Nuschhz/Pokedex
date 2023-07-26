import "../css/buttons.css";

function Button({ children = "", fn = () => {} }) {
  return (
    <button className="StyledButton" onClick={fn}>
      {children}
    </button>
  );
}

export default Button;
