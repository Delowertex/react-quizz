import classes from "../styles/Illustration.module.css";
import sighupimage from '../assets/images/signup.svg';
export default function Illustration(){
    return(
        <div className={classes.illustration}>
            <img src={sighupimage} alt="Signup"/>
        </div>
    );
}