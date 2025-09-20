
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";


 

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />

      <a href="/menu">
        <Button type="primary">Continue Ordering</Button>
      </a>
    </div>
  );
}


export default Home;
