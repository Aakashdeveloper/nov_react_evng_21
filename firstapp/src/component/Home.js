import React,{Component} from 'react';
import Header from './header';
import Footer from './footer'

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h1>Hii From React App</h1>
                <h2>My app</h2>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;