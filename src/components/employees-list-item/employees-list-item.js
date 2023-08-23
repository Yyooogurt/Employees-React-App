import "./employees-list-item.css";

const EmployeesListItem = () => {
    return (
        <li className="list-group-item">
            <span className="list-group-item-label">John Smith</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className="btn-group">
                <button className="btn-cookie" type="button">🍪</button>
                <button className="btn-trash" type="button">🗑</button>
                <div>⭐️</div>
            </div>
        </li>
    )
}

export default EmployeesListItem;