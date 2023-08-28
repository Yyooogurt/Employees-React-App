import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn"
                type="button">
                    All
            </button>
            <button 
                className="btn btn-light"
                type="button">
                    For promotion
            </button>
            <button 
                className="btn btn-light"
                type="button">
                    Salary > 1000$
            </button>
        </div>
    )
}

export default AppFilter;