import konoha from '../assets/konoha.svg'
import uchiwa from '../assets/uchiwa.svg'

const Banner = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    {/*<i className="fa fa-user-circle fa-5x" aria-hidden="true"/>*/}
                    <img src={konoha} alt=""/>
                    <h3 className="mt-1">Ninja Management🥷</h3>
                </a>
                <img src={uchiwa} alt=""/>
            </nav>


        </div>
    )
}

export default Banner
