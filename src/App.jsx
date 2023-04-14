import "./App.scss";
import FormikForm from "./components/FormikForm";
import SignupForm from "./components/SignupForm";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <div className="App">
      <SimpleForm />
      <FormikForm />
      <SignupForm />
    </div>
  );
}

export default App;
