const Header = ({ click, show }) => {
  return (
    <header className="card-header d-flex justify-content-between align-items-center">
      <h3>TaskBar</h3>

      <button
        onClick={click}
        className={`btn btn-lg fw-bold p-1 ${
          show ? "btn-dark text-white" : "btn-success text-dark "
        }`}
      >
        {show ? "Close" : "Add"}
      </button>
      
    </header>
  );
};

export default Header;
