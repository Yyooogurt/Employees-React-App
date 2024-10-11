import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = "list-group-item";
    if (increase) {
        classNames += " increase";
    }

    let classNamesStar = "btn-star";
    if (rise) {
        classNamesStar += " like";
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
            <div className="btn-group btn-group-icons">
                <div className={classNamesStar}>⭐️</div>
                <button onClick={onToggleProp} className="btn-cookie" type="button" data-toggle="increase">
                    🍪
                </button>
                <button className="btn-trash" type="button" onClick={onDelete}>
                    🗑
                </button>
            </div>
        </li>
    );
};

export default EmployeesListItem;
