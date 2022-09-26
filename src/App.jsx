import { Board } from "./components/Board/Board";
import { CityList } from "./components/CityList/CityList";
import { Welcome } from "./components/welcome/welcome";

export const App = () => {
  return (
    <>
      <Board />
      <CityList />
      <Welcome />
    </>
  );
};
