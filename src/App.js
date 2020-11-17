import TodoForm from "./components/todo_form/todo_form";
import TodoContainer from "./components/todo_container/todo_container";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import TodoReducer from "./reducer/todo_reducer";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(TodoReducer, applyMiddleware(thunk));
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TodoForm />
                <TodoContainer />
            </div>
        </Provider>
    );
}

export default App;
