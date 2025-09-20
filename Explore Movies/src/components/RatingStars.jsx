import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",   
};


const starContainerStyle = {
  display: "flex",
};

export default function RatingStars({
  max = 10,
  color = "gold",
  size = 24,
  messages = [],
  onSetRating = () => {},
}) {
  const [rateStars, setRateStars] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  function handleRating(starValue) {
    setRateStars(starValue);
    onSetRating(starValue);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0 0 0 12px",
    color,
    fontWeight: "bold",
    fontSize: `${size / 1.3}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            filled={hoverRating ? hoverRating > i : rateStars > i}
            onClick={() => handleRating(i + 1)}
            onMouseIn={() => setHoverRating(i + 1)}
            onMouseOut={() => setHoverRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>

      <span style={textStyle}>
  {messages.length === max
    ? messages[hoverRating ? hoverRating - 1 : rateStars - 1] || ""
    : hoverRating || rateStars || ""}
</span>

    </div>
  );
}

function Star({ filled, onClick, onMouseIn, onMouseOut, color, size }) {
  const svgContainer = {
    height: `${size}px`,
    width: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return filled ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={color}
      stroke={color}
      style={svgContainer}
      onClick={onClick}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={"white"}
      viewBox="0 0 24 24"
      stroke={color}
      style={svgContainer}
      onClick={onClick}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}
