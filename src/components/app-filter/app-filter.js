import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
            promotion: false,
            salary: false,
        };
    }

    onFilterChange = (filter) => {
        console.log(filter);
    };

    render() {
        return (
            <div className="btn-group">
                <button
                    className={"btn " + (!this.state.all ? "btn-light" : "")}
                    data-filter="all"
                    type="button"
                    onClick={(e) => this.onFilterChange(e.currentTarget.getAttribute("data-filter"))}
                >
                    All
                </button>
                <button
                    className={"btn " + (!this.state.promotion ? "btn-light" : "")}
                    data-filter="promotion"
                    type="button"
                    onClick={(e) => this.onFilterChange(e.currentTarget.getAttribute("data-filter"))}
                >
                    For promotion
                </button>
                <button
                    className={"btn " + (!this.state.salary ? "btn-light" : "")}
                    data-filter="salary"
                    type="button"
                    onClick={(e) => this.onFilterChange(e.currentTarget.getAttribute("data-filter"))}
                >
                    Salary {">"} 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;
