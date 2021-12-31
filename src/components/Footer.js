import React from "react";

const Footer = ({ setTodos }) => {

  const clear = () =>{
    localStorage?.clear()
    setTodos([])
  }

  return (
    <footer style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <button
        onClick={clear}
        className={`btn btn-md fw-bold p-1 btn-danger`}
      >
        Clear
      </button>
      <p className="text-center text-success fw-bold">
        &copy; copyright of
        <a style={{ color: "#000" }} href="http://esquireyusuf.ml">
          EsquireYusuf { new Date().getFullYear()}
        </a>
      </p>
      <div/>
    </footer>
  );
};

export default Footer;
