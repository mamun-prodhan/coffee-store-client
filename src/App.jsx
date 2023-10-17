import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-600">
        Hot Hot cold coffee : {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
