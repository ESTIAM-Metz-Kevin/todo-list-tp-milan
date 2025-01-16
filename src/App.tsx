import "./App.css";
import { TodoApp } from "./components/TodoApp";

function App() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center flex-col">
        <h1 className="text-5xl font-bold">Ma liste de choses à faire</h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
