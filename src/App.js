import TodoForm from "./components/todo_form/todo_form";
import TodoContainer from "./components/todo_container/todo_container";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import TodoReducer from "./reducer/todo_reducer";
import Stats from "./components/stats/stats";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const mw = [thunk, logger];
const store = createStore(TodoReducer, applyMiddleware(...mw));
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <section className="stat_form">
                    <TodoForm />
                    <Stats />
                </section>
                <TodoContainer />
            </div>
        </Provider>
    );
}

export default App;
