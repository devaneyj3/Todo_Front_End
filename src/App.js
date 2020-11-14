import TodoForm from "./components/todo_form/todo_form";
import TodoContainer from "./components/todo_container/todo_container";
import Context from "./context/todo_context";
function App() {
    return (
        <Context>
            <div className="App">
                <TodoForm />
                <TodoContainer />
            </div>
        </Context>
    );
}

export default App;
