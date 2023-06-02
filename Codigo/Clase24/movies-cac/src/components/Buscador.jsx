import "./Buscador.css";
import { ImSearch } from "react-icons/im";
import { useState } from "react"; /* 3 importo useState */
import { useNavigate } from "react-router-dom"; /* 7 importo useNavigate */
export const Buscador = () => {
  /*  4 manejamos el estado del input */
  const [searchText, setSearchText] = useState("");
  //1 realizan la funcion que se ejecuta con el submit

  const navigate = useNavigate(); /* 8 utilizo la variable  navigate */

  const handleSubmit = (e) => {
    e.preventDefault(); // mostramos que no se hace el submit
    navigate(`/?search=${searchText}`); /* 9 cuando se ejecuta el evento enviamos a la url lo que se esta buscando */
  };

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
      {" "}
      {/* 2 agrego la funcion al form */}
      <div className="buscadorBox">
        <input
          value={searchText} /* 5 pasamos el valor */
          onChange={(e) =>
            setSearchText(e.target.value)
          } /*  6 actualizamos el valor cuando este cambia */
          type="text"
          className="buscadorInput"
        />
        <button type="submit" className="buscadorButton">
          <ImSearch />
        </button>
      </div>
    </form>
  );
};
