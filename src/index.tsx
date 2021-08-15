import ReactDOM from "react-dom";
import EventComponent from "./Events/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
    const users = [
        {name: 'Abishek', age: 26},
        {name: 'Sarah', age: 26},
    ]
    return <div>
        <UserSearch />
    </div>
};


ReactDOM.render(<App />, document.querySelector('#root'));