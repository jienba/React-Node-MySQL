const UserItem = ({ninja}) => {
    return(
        ninja.map(shinobi => {
            return [
                <tr key={`ninja-${shinobi.id}`}>
                    <td className="col-3">
                        <img src={shinobi.profile_photo_path}
                             className="rounded-circle img-fluid float-left mr-3"
                             alt=""/>
                        <div>
                            <p className="font-weight-bold">{shinobi.firstName + ` `+ shinobi.lastName }</p>
                            <p className="text-muted">@{shinobi.userName}</p>
                        </div>
                    </td>
                    <td>
                        <i className={`fa fa-circle ${shinobi.status === 'active'?'text-success' : 'text-danger' }  `} aria-hidden="true"/> {shinobi.status}
                    </td>
                    <td>{shinobi.location}</td>
                    <td>{shinobi.phone}</td>
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
            ]
        })
    )

}
export default  UserItem
