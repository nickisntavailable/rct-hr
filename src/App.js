import './components/style.css';
import Courses from './components/Courses';
import Header from './components/Header';
import CoursePage from './components/CoursePage';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  useLocation
} from "react-router-dom";
import './components/style.css';

// import ScrollableAnchor from 'react-scrollable-anchor';











function App(props) {
  return (
    <Router>
    <div>
    <Header logo={props.state.logo} icons={props.state.icons}/>
    <Switch>
      <Route exact path="/">
        <Home courses={props.state.courses} about={props.state.about}/>
      </Route>
        {props.state.courses.map((course) => {
          return (
            <Route path={"/courses/" + course.id}>
              <CoursePage course={course} key={course.id} course_page={props.state.course_page}/>
            </Route>
          );
        })}
    </Switch> 
    <Footer icon={props.state.footer.icon}/>
    </div>
  </Router>
  );
}

export default App;
