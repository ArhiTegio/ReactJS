import React from 'react';
import Header3 from './components/Header';
import Image from './components/Image';
import logo from './img/logo.svg'

function Header1() {
    return (<header>Шапка сайта</header>)
}

const Header2 = () => {
    return (<header>Шапка сайта</header>)
}

class App extends React.Component{
    helpText = "Help text"

    render() {
        return (<div className="name">
            <Header1/>
            <Header2/>
            <Header3 title="Шапка сайта"/>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
                onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
            <p>{this.helpText === "Help text" ? "Yes" : "No"}</p>
            <Image image={logo}/>
        </div>)
    }

    inputClick(){ console.log("Clicked") }

    mouseOver() { console.log("Mouse Over") }
}


export default App;
