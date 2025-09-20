import { useSelector } from "react-redux";

function Username() {
  const userData = useSelector((state) => state.user);
  return (
    <div className="hidden text-sm font-semibold md:block">
      {userData.username}
    </div>
  );
}

export default Username;
