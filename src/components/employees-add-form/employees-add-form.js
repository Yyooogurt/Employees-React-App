import "./employees-add-form.css";

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form
                className="add-form">
                <input type="text"
                    className="form-control"
                    placeholder="Name" />
                <input type="number"
                    className="form-control"
                    placeholder="Salary in $?" />

                <button type="submit"
                        className="btn btn-outline-light">
                </button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;