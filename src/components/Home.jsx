import About from './About';
import Courses from './Courses';
import Team from './Team';
import Procs from './Procs';

export default function Home(props) {
    return (
      <div className="main">
        <About about={props.about}/>
        <Courses courses={props.courses}/>
        <Team/>
        <Procs/>
        <div className="writeus">
            <h2> Свяжитесь с нами</h2>
            <div className="contacts">
                <a href="" className="phone">+7(958)580-25-77</a>
                <a href="" className="whats btn dark bounce">WhatsApp</a>
                <a href="" className="tlg btn dark bounce">Telegram</a>
            </div>
        </div>
      </div>
    );
  }