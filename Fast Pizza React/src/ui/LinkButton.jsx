function aButton({ children, to }) {
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}

export default aButton;
