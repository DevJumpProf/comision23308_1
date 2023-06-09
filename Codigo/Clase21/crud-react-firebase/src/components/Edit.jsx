import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [realName, setRealName] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //funcion que actualiza un doc
  const update = async (e) => {
    e.preventDefault();
    const playerDoc = doc(db, "heroes", id);
    const data = {
      age: Number(age),
      name: name,
      realName: realName,
    };
    await updateDoc(playerDoc, data);
    navigate("/");
  };

  //funcion que trae un doc por su id

  const getHeroeById = async (id) => {
    const playerDoc = await getDoc(doc(db, "heroes", id));
    if (playerDoc.exists()) {
      setName(playerDoc.data().name);
      setRealName(playerDoc.data().realName);
      setAge(playerDoc.data().age);
    } else {
      console.log("No existe");
    }
  };

  useEffect(() => {
    getHeroeById(id);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Heroe</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Nombre Real</label>
              <input
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
                className="form-control"
                type="text"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Edad</label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
                type="number"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Edit Heroe
            </button>
             <Link to= "/">
            <button className="btn btn-danger">
            CANCEL
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
