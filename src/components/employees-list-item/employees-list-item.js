import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render () {
        const {name, salary, onDelete} = this.props;
        const {increase, like} = this.state;

        let classNames = 'list-group-item';
        if (increase) {
            classNames += ' increase'
        }

        let classNamesStar = 'btn-star';
        if (like) {
            classNamesStar += ' like'
        }

        return (
            <li className={classNames}>
                <span onClick={this.onLike} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="btn-group btn-group-icons">
                    <div className={classNamesStar}>⭐️</div>
                    <button onClick={this.onIncrease} className="btn-cookie" type="button">🍪</button>
                    <button className="btn-trash" type="button" onClick={onDelete}>🗑</button>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;