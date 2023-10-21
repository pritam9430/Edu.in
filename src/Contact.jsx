import { useState } from "react";
import React from "react";
const Contact = () => {
    // const [data, setData] = useState({
    //     Fullname: "",
    //     Phone: "",
    //     Email: "",
    //     Msg: "",
    // })
    // const Fomesubmit = () => {
    // }

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [Message, setmessage] = useState("");
    const Action = (e) => {
        e.preventDefault();
        // alert("hello");
        alert('My Name is ' + name + ' my Phone no is  ' + phone + ' and my email is ' + email + ', Here is What i Want to say ' + Message)
    }

    return (
        <>
            <div className="my-5">
                <div className="text-center"><h2>Contact Us</h2></div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={Action}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">FULL NAME</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        // name='Fullname'
                                        // value={data.Fullname}
                                        // onChange={InputEvent}
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        placeholder="Enter Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">PHONE NO</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        // name='Phone'
                                        // value={data.Phone}
                                        // onChange={InputEvent}
                                        value={phone}
                                        onChange={(e) => setphone(e.target.value)}
                                        placeholder="Mobile No" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">EMAIL ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        // name='Email'
                                        // value={data.Email}
                                        // onChange={InputEvent}
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">MESSAGE</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1" rows="3"
                                        // name='Msg'
                                        // value={data.Msg}
                                        // onChange={InputEvent}
                                        value={Message}
                                        onChange={(e) => setmessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;