import aButton from "./aButton";

function Error() {
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>Error message</p>

      <aButton href="-1">&larr; Go back</aButton>
    </div>
  );
}

export default Error;
