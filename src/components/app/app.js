import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddFrom from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {

    const data = [
        {name: "John C.", salary: 800, increase: false, id: 1},
        {name: "Alex W.", salary: 4000, increase: true, id: 2},
        {name: "Dave R.", salary: 5000, increase: false, id: 3}
    ]
    return(
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddFrom />
        </div>
    );
}

export default App;