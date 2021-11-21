import '../styles/AddUser.css'
import {useEffect, useState} from "react";
import  Axios from "axios";
import UserItem from "./UserItem";
const AddUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [profile, setProfile] = useState('');
    const [listNinja, setListNinja] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/ninjas")
            .then(response =>{
                setListNinja(response.data)
            })

    }, [listNinja]);


    const submitUser = () => {
        Axios.post("http://localhost:3001/api/add", {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            status: status,
            location:location,
            phone: phone,
            profile: profile
        }).then(() => {
            alert('successful insert')
        })
    }
    return (
        <div className="mt-5 mb-2">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Ninja
            </button>

            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adding User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>First name</label>
                                            <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label>Last name</label>
                                            <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Username</label>
                                            <input type="text" name="userName" onChange={e => setUserName(e.target.value)} className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="inputState">Status</label>
                                            <select id="inputState" name="status" onChange={e => setStatus(e.target.value.toLowerCase())} className="form-control">
                                                <option defaultValue>Choose</option>
                                                <option>Active</option>
                                                <option>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Location</label>
                                            <input type="text" name="location" onChange={e => setLocation(e.target.value)} className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label>Phone</label>
                                            <input type="text" name="phone" onChange={e => setPhone(e.target.value)} className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Profile Picture</label>
                                    <input type="file" name="photoProfile" onChange={e => setProfile("/opt/lammp")} className="form-control-file" id="exampleFormControlFile1"/>
                                </div>

                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={submitUser}>Add</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*User Table*/}
            <table className="table table-borderless table-hover mt-2 table-responsive-sm ">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Ninja</th>
                    <th scope="col">Status</th>
                    <th scope="col">Location</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <UserItem ninja={listNinja}/>
                </tbody>
            </table>
        </div>
    )

}
export default AddUser
