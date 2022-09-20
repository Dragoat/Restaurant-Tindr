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
import fire from './fire.svg'
import DarkMode from '../../DarkMode'
import darkMode from '../../DarkMode.css'
import Invitations from '../Home/Invitations'
import InviteData from '../Home/InviteData'

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
                            
                                <Container className='Container'>  
                <img src={fire} alt="fire" className = "fire"/>
                                <h4 className="tinder">Restaurant Tinder</h4>
                                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                    <Navbar.Collapse id='responsive-navbar-nav'>
                                        <Nav>
                                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                                        <Nav.Link as={Link} to='/login' onClick={this.handleLogout}>logout</Nav.Link> 
                                        <Nav.Link as={Link} to='/invite'>Create an invitation</Nav.Link>
                                        <Redirect to='/home' />
                                        </Nav>


                                        <DarkMode/>
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
                    <Route path='/home' component={() => <Home />}/>
                     <Route path ='/invite' component={() => <Invite />}/>
                     <Route path = '/invitations' component={() => <InviteData />}/>
                    {/* <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/> */}
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));