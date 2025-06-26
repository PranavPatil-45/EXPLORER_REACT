{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowLeft } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
function Navbar(){
    return(
        <div>
      
      <nav className="nav w-100  bg-light d-flex justify-content-start align-items-center" style={{height:"80px"}}>
    <a href=" # " style={{textDecoration:"none",color:"black",fontSize:"20px"}}>  <FaArrowLeft /></a>
        <h4 style={{marginLeft:"2%",marginTop:"1%"}}><a href="" style={{textDecoration:"none",color:"Black"}}>Back To All Plants</a></h4>
    <a href="#" style={{textDecoration:"none",color:"black",fontSize:"30px",marginLeft:"78%"}}><FcLike /></a>
      </nav>
      <hr />
    </div>
    )
}

export default Navbar