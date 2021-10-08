
const Header = ({click, show}) => {
    return (
        <header className="card-header d-flex justify-content-between align-items-center">
            <h3><a className="text-primary" href="gwg" >TaskBar</a></h3>

            <div className="card-stool my-2 mx-1">
                <button onClick={click} className={`btn-lg fw-bold ${show ? "btn-danger text-white": "btn-success text-dark "}`}>{show ? "Close" : "Add"}</button>
            </div>
        </header>
    )
}

export default Header
