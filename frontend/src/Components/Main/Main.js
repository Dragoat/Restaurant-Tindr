import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Invite from '../Invite/Invite'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div>
                {this.props.token.token !== undefined ?
                        <div>
                            <Navbar collapseOnSelect fixed='static-top' expand='sm' bg='dark' variant='dark'>
                                <Container>
                                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                    <Navbar.Collapse id='responsive-navbar-nav'>
                                        <Nav>
                                            <Nav.Link to='/home'>Home</Nav.Link>
                                            <Nav.Link as={Link} to='/login' onClick={this.handleLogout}>logout</Nav.Link> 
                                            <Redirect to='/home'/>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>  
                    : 
                        <Header />
                }
                <Switch>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                     <Route path ='/invite' component={() => <Invite />}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));