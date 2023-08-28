import "./app-info.css";

const AppInfo = () => {
    return (
        <div className="app-info">
            <div className="app-info-header">
                <h1>Employees management in N company</h1>
            </div>
            <div className="app-info-items">
                <h2 className="app-info-item">Employees total: <span>24</span></h2>
                <h2 className="app-info-item">Getting a bonus: <span>8</span></h2>
            </div>
        </div>
    )
}

export default AppInfo;