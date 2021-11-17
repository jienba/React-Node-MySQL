import '../styles/AddUser.css'
const AddUser = () => {
    return (
        <div className="mt-5 mb-2">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Ninja
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
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
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label>Last name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Username</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="inputState">Status</label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Choose</option>
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
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label>Phone</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Add</button>
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
                <tr>
                    <td>
                        <img src="https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z"
                             className="rounded-circle img-fluid float-left mr-3"
                             alt=""/>
                        <div>
                            <span className="font-weight-bold">Uzumaki Naruto</span>
                            <p className="text-muted">@nanadaime</p>
                        </div>
                    </td>
                    <td>
                        <i className="fa fa-circle text-success" aria-hidden="true"/> Active
                    </td>
                    <td>Konoha</td>
                    <td>+001234566</td>
                    <td><button className="btn btn-primary">Contact</button></td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-secondary " type="button" id="dropdownMenu2"
                                    data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-ellipsis-v" aria-hidden="true"/>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item text-warning" type="button">
                                    <i className="fa fa-edit" aria-hidden="true"/>
                                    Edit
                                </button>
                                <button className="dropdown-item text-danger" type="button">
                                    <i className="fa fa-trash" aria-hidden="true"/>
                                     Delete
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>





                </tbody>
            </table>
        </div>
    )

}
export default AddUser
