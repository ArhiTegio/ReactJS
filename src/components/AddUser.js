import React from 'react';


class AddUser extends React.Component {
    UserAdd = {}
    constructor(props) {
        super(props)
        
        this.state = props.user ? props.user : {
            first_name: '',
            last_name: '',
            email: '',
            age: 1,
            isHappy: false
        }
    }


    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder='Имя' value={this.state.first_name} onChange={(e) => this.setState({ firstname: e.target.value})} />
                <input placeholder='Фамилия' value={this.state.last_name} onChange={(e) => this.setState({ lastname: e.target.value})} />
                <textarea placeholder='Биография' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value})}></textarea>
                <input placeholder='Возраст' value={this.state.age} onChange={(e) => this.setState({ age: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type='checkbox' id='isHappy' placeholder='Счастлив' checked={this.state.isHappy} onChange={(e) => this.setState({ isHappy: e.target.checked})} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.UserAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if(this.props.user)
                        this.UserAdd.id = this.props.user.id
                    this.props.onAdd(this.UserAdd)}
                    }>Добавить</button>
            </form>
        )
    }
}

export default AddUser;
