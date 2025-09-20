import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
import { storeUserName } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const username = useSelector((state) => state.user);
  console.log("username is", username);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleAddName(e) {
    e.preventDefault();
    dispatch(storeUserName(name));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleAddName}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        className="input mb-8 w-72"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.length > 3 && (
        <div>
          <Button type="primary" onClick={handleAddName}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
