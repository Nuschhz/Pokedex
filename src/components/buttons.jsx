import "../css/buttons.css";

function Button({ children = "", onClick = () => {}}) {
  return (
    <button className="StyledButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
