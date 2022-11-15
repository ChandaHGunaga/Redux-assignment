import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, remove } from "./redux/addUserSlice";

function App() {
  const [userData, setUserData] = useState({ id: "", name: "" });
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users.value);

  const handleChange = (e) => {
    setUserData({ id: new Date().getTime().toString(), name: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (userData.name !== "") {
      dispatch(addUser(userData));
    }
    console.log(userData);
    setUserData({
      id: "",
      name: "",
    });
  };

  return (
    <div className="details">
      <form className="detail-container" onSubmit={formHandler}>
        <input
          type="text"
          className="dataInput"
          value={userData.name}
          onChange={(e) => handleChange(e)}
        />
        <>
          <button className="addbtn">ADD</button>
        </>
      </form>
      <div className="line"></div>

      {allUsers.map((user) => {
        return (
          <div className="showDetails">
            <div className="eachDetails">
              {user.name}
            </div>
            <button className="removebtn" onClick={() => dispatch(remove(user))}>
              REMOVE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
