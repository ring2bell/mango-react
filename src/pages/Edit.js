import { useNavigate, useSearchParams } from "react-router-dom";
const Edit = () => {
    let[SearchParams, setSearchParams ]= useSearchParams();
    let navi=useNavigate();
    const id=SearchParams.get("id");
    const mode=SearchParams.get("mode");

  return (
  <div>
    Edit페이지{id}
    <button onClick={()=>navi("/")}>Home</button>
    <button onClick={()=>navi("/New")}>New</button>
    <ul>
        <li>{mode}</li>
    </ul>
  </div>)
};
export default Edit;
