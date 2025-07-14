const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth = false,
  onClick, // مهم لو محتاج زرار يشتغل
  type = "button", // افتراضيًا يخليه button
}) => {
  const classes = [
    "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full",
    backgroundColor,
    textColor,
    borderColor,
    fullWidth ? "w-full" : "",
  ]
    .filter(Boolean) // دي بتمسح أي undefined أو false
    .join(" ");

  return (
    <button className={classes} onClick={onClick} type={type}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="button" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
