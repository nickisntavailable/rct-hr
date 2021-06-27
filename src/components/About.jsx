export default function About(props) {
    console.log(props);
    return (
        <div className="about" id="about">
              <img src={props.about.title} alt=""/>
              <p>Учим делать игры, сайты, компьютерные программы и мобильные приложения</p>
              <ul className="about_procs">
                  <li style={{backgroundImage: `url(${props.about.gr})`}}>Только индивидуальные уроки</li>
                  <li style={{backgroundImage: `url(${props.about.gr1})`}}>Объясняем протыми словами сложные вещи</li>
                  <li style={{backgroundImage: `url(${props.about.gr2})`}}>Подстроимся под Ваше расписание</li>
              </ul>
              <a href="#cources" className="btn dark bounce">Подробнее о курсах</a>
        </div>
    );
  }