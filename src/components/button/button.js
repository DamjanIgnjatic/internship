export default function Button({
  children,
  bgColor = "#000",
  size = 1.2,
  color = "#f8f8f8",
  fontWeight = "700",
  borderColor = "rgba(255, 148, 70, 0.50)",
  onClick,
}) {
  const style = {
    backgroundColor: `${bgColor}`,
    fontSize: `${size}rem`,
    color: `${color}`,
    fontWeight: `${fontWeight}`,
    borderColor: `${borderColor}`,
  };

  return (
    <button onClick={onClick} style={style} className="btn">
      {children}
    </button>
  );
}
