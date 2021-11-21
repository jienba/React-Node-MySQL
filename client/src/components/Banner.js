import konoha from '../assets/konoha.svg'
import uchiwa from '../assets/uchiwa.svg'

const Banner = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={konoha} alt=""/>
                </a>
                <h3 className="mt-1">Ninja Management🥷</h3>
                <img src={uchiwa} alt=""/>
            </nav>


        </div>
    )
}

export default Banner
