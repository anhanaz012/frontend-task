const Button = ({
  icon: Icon,
  disabled = false,
  bg,
  textColor,
  label,
  onClick,
  iconClass,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex min-w-fit uppercase items-center outline-none cursor-pointer gap-2 px-4 text-sm py-2.5 rounded-sm hover:opacity-90 transition 
        ${className}
        ${disabled ? "bg-gray-300 cursor-not-allowed" : ""}
        ${bg ? bg : "bg-secondary"}
        ${textColor ? textColor : "text-white"}`}
    >
      {Icon && <Icon className={iconClass || "h-5 w-5"} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
