import React from 'react';
import Header3 from './components/Header';
import Users from './components/Users'

function Header1() {
    return (<header>Шапка сайта</header>)
}

const Header2 = () => {
    return (<header>Шапка сайта</header>)
}

class App extends React.Component{
    
    render() {
        return (<div className="name">
            <Header3 title="Список пользователей"/>
            <main>
              <Users />
            </main>
            <aside>
              
            </aside>
        </div>)
    }
}


export default App;
