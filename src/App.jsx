import { useDispatch } from "react-redux"
import RouterComponent from "./Router/RouterComponent"
import Nav from "./components/Nav"
import { asyncgetRecipies } from "./store/actions/recipeAction";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetRecipies());
  }, []);
  return (
    <div className="w-full bg-zinc-100 overflow-hidden">
      <Nav />
      <RouterComponent />
    </div>
  )
}

export default App