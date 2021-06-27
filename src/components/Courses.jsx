import {
    Link
  } from "react-router-dom";
// import "./Courses.css";
import "./style.css"

function Courses(props) {
    let list = props.courses;
    return (
      <div className="courses" id="cources">
        <h2>Наши Курсы</h2>
        {list.map((item) => {
          return (
            <Course item={item} key={item.id}/>
          );
        })}
      </div>
    );
  }
  
  
  function Course(props) {
    return (

      <div className="courses_item">
        <img src={props.item.img} alt="oops.."/>
        <h3>{props.item.age}</h3>
        <p>{props.item.title}</p>
        <Link to={"/courses/" + props.item.id} className="btn bounce">Подробнее</Link>
      </div>
    );
  }
  export default Courses;