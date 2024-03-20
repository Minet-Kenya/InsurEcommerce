// CSS
import './Auth.css'

// Components
import { Preloader } from '../../utils/Preloader/Preloader';


export function Auth() {
    return (
        <>
          <Preloader />
          <Login />  
        </>
    );
}

export function Login() {
    return (
        <>
            <main id="auth" className="container-fluid flex-grow">
                <h1>Login</h1>
            </main>
        </>
    );
}

export function Logout() {
    return (
        <>
            <main id="auth" className="container-fluid flex-grow">
                <h1>Logout</h1>
            </main>
        </>
    );
}

export function Register() {
    return (
        <>
            <main id="auth" className="container-fluid flex-grow">
                <h1>Sign Up</h1>
            </main>
        </>
    );
}
