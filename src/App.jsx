import { MyBoard } from "./components/MyBoard/MyBoard";
import { CityList } from "./components/CityList/CityList";
import { Welcome } from "./components/welcome/welcome";

export const App = () => {
  return (
    <>
      <MyBoard />
      <CityList />
      <Welcome />
    </>
  );
};
