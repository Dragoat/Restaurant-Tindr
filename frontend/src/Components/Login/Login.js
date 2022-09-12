import { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToken, addUser} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import { Input } from 'reactstrap';
import facebook from './facebook.svg'
import google from './google.svg'
import restaurant from './restaurant.svg'



const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        

        const userWithToken = await axios.post(baseUrl + '/login', data)

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
      handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    render(){
             return (
         <div id='register'>
                     <div className="login-form">
                          <h3 className = "tind">Welcome to Restaurant Tinder</h3>
                         <img src={restaurant} alt="restaurant" className="restaurant-img" />
                         <br/>
                         <h5 className="Please-Sign-In"><b>Please Sign In</b></h5>
                         
                    <Input  type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                    v-model="user.username"
                    onChange={this.handleInputChange}
                    required
                         />
                         <a href="javascript:void(0)" className='Need_an_account'>Forgot your Username?</a>
                        
                         <Input
                            
                     type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                         />
                         
                         
                         <a href="javascript:void(0)"className='Need_an_account'>Forgot your password?</a>
                         <button type="submit" onClick={this.handleLogin} className="sign-in">Sign in</button>
                         <p id='OR'>-OR-</p>
                         <button type="submit" className="facebook"><img src={facebook} alt="facebook" className="facebook-img" />Continue with Facebook</button>
                         
                         <div id='h1-space'>-</div>
                         <button type="submit" className="google"><img src={google} alt="google" className="google-img" />Continue with Google</button>
                         <br />
                         
                         <Link to="/register" className='Need_an_account'>Need an account?</Link>
                      
                             
           </div>
            </div>
        );
    }
}
export default withRouter(connect(mapDispatchToProps)(Login));