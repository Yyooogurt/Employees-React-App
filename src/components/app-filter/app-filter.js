import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: "all", label: "All" },
        { name: "rise", label: "For promotion" },
        { name: "salary", label: "Salary > 1000$" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = !active ? "btn-light" : "";
        return (
            <button key={name} className={`btn ${clazz}`} onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
