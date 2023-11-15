import { useEffect, useState } from "react";
import AuthUser from "../config/AuthUser";

export default function Login() {
    const { http, setToken } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [isEqual, setIsEqual] = useState();

    console.log("Email = ", email);
    console.log("Password = ", password);

    const submitForm = () => {
        console.log("Form submit successfully....");
        setToken("DUMMY_TOKEN", "DUMMY_USER");
        // http.post('/login',
        //     {
        //         email: email,
        //         password: password
        //     }).then((res) => {
        //         console.log(res);
        //         setToken(res.data.user, res.data.token);
        //     });
    }

    useEffect(() => {
        console.log("Password = ", password);
        console.log("Confirm Password = ", confirmPassword);

        if (password !== confirmPassword) {
            setIsEqual(true);
        } else {
            setIsEqual(false);
        }

    }, [password, confirmPassword]);


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPass" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                {
                    isEqual &&
                    (<p>
                        Password and Confirm Password must be matched.
                    </p>)
                }
                <button type="button" className="btn btn-primary" onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}