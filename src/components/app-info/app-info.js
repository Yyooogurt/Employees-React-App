import "./app-info.css";

const AppInfo = (props) => {
    const { employees, increased } = props;
    return (
        <div className="app-info">
            <div className="app-info-header">
                <h1>Employees management in N company</h1>
            </div>
            <div className="app-info-items">
                <h2 className="app-info-item">
                    Employees total: <span>{employees}</span>
                </h2>
                <h2 className="app-info-item">
                    Getting a bonus: <span>{increased}</span>
                </h2>
            </div>
        </div>
    );
};

export default AppInfo;
