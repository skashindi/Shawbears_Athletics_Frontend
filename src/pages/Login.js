import React, { useEffect, useState } from 'react';
import './Login.css';

//Defines a function to invoke on export to display the login and signup page
function Login() {
    const [username, setUsername] = useState(''); //use react's use state to set required form data
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    // useEffect(() => {
    //     const loginText = document.querySelector(".title.login"); //uses the document object to select the title class to translate
    //     const signupText = document.querySelector(".title.signup");
    //     const sliderTab = document.querySelector(".slider-tab");

    //     if (isLogin) {
    //         loginText.style.marginLeft = "20%";
    //         signupText.style.marginLeft = "100%"; 
    //         sliderTab.style.transform = "translateX(0%)"; 
    //     } else {
    //         loginText.style.marginLeft = "-100%"; 
    //         signupText.style.marginLeft = "50%"; 
    //         sliderTab.style.transform = "translateX(0%)";
    //     }
    // }, [isLogin]);

    //Asynchronous function used to send post request to the api. The request contains the user login information 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.replace('/home');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
        }
    };

    //Asynchronous function used to send post request to the api. The request contains the user signup information 
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9000/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert('Signup successful! You can now log in.');
                setIsLogin(true);
            } else {
                alert('Signup failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Signup failed');
        }
    };

    //HTML elements are returned to the browser using react convention of return including the elements
    return (
        <div class="container">
    
        
        {/* <!-- Logo or app name --> */}
            <div class="form-container">
                <img src="../images/city.jpg" alt="Shaw App Logo" />
                <h2>Shaw Athletics</h2>

            <form onSubmit={handleLogin}>
            {/* <!-- Email or username input --> */}
                <label for="username" >Username or Email</label>
                <input type="text" id="username" name="username"  value={username}
                                    onChange={(e) => setUsername(e.target.value)} //sets user name using event and the value that was inserted in the form
                                    required placeholder="Enter your username or email"/>

                {/* <!-- Password input --> */}
                <label for="password">Password</label>
                <input type="password" id="password" name="password"  value={password}
                                    onChange={(e) => setPassword(e.target.value)} //sets the user's password using event and the value that was inserted in the form
                                    required placeholder="Enter your password"/>

                {/* <!-- Login button --> */}
                <button type="submit" >Login</button>
            </form>
            </div>

            {/* <!-- Additional links --> */}
        <div container="links" >
            <a href="#" >Forgot Password?</a>
            <p >Don't have an account? <a href="/signup">Sign up</a></p>
        </div>



        </div>
    );

};
export default Login;