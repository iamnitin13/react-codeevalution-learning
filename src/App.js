import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import HookChocolateContainer from "./components/HookChocolateContainer";
import UserList from "./components/UserList";

function App() {
  return (
    // providing redux store & passing the store by using store props
    <Provider store={store}>
      <div className="App">
        <CakeContainer message />

        {/* using react-redux hooks  */}
        <HookCakeContainer />
        <HookIceCreamContainer />
        <HookChocolateContainer />

        {/* async fetching userlist */}
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
