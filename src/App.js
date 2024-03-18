import './App.css';
import { UserView} from "./features/user/userView";
import { CakeView } from "./features/cake/cakeView";
import { IcecreamView } from "./features/icecream/icecreamView";

function App() {
  return (
    <div className="App">
        <CakeView />
        <IcecreamView />
        <UserView />
    </div>
  );
}

export default App;
