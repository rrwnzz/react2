import { useRef,useState } from "react";

export default function RefNew() {
    const inputRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors,setErrors] = useState({});
    const handleSubmit =()=>{
        console.log('this is submit')
        const username=userNameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const newErrors={}
        if(username.length <5){
            newErrors.username='username must be at least 8 characters long'
        }
        if(password.length <8){
           newErrors.password='password must be at least 8 characters long' 
        }
        if(!email.includes("@")){
            newErrors.email='password must contains @' 
        }
        setErrors(newErrors);
        if(newErrors.username){
            userNameRef.current.focus();
        }
        if(newErrors.password){
            passwordRef.current.focus();
        }
        if(newErrors.email){
            emailRef.current.focus();
        }
    }

    return (
        <div>
            <h1>Ref component</h1>
            <p>This component is used to demonstrate</p>
            <p>Ref provided a way</p>
            <input ref={inputRef} />
            <button onClick={() => {
                inputRef.current.focus();
                alert('you clicked');
            }}>Click</button>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
            }}>
                <label>username</label>
                <input type="text" ref={userNameRef}></input>
                {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
                <br></br>
                <label>password</label>
                <input type="password" ref={passwordRef}></input>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                <br></br>
                <label>email</label>
                <input type="email" ref={emailRef}></input>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    );
}
