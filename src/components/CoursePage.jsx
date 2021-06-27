export default function CoursePage(props) {
    
    let res = props.course_page.filter((page)=>{
        return page.id == props.course.id ?  page : null;
    });
    console.log(res);

    return (
        <div className="course_page">
            <h1>{props.course.title}</h1>
            {res[0].body.map((i) => {
                return <Option info={i} key={i.id}/>
            })}
           
        </div>
    );
  }

  function Option(props) {
      return (
        <div className="option">
            <div className="option_title">
                <p>{props.info.title}</p>   
            </div>
            <p className="option_desc">
            {props.info.descr}
            </p>
        </div>
      );
  }