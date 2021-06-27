import {
    Link,
    useLocation
  } from "react-router-dom";
  import { useEffect } from 'react';


export default function Header(props) {
    const { hash } = useLocation()

    if(hash===''){
            
        window.scrollTo(0, 0);
    }
    // else scroll to id
    else{
        setTimeout(
            () => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            },
            0
        );
    }

    // useEffect(() => {
    //     // if not a hash link scroll to top
    //     console.log(pathname);
    //     console.log( hash );
        
    // }, [pathname]);
    return(
      <div>
        <input type="checkbox" id="burg"/>
        <label htmlFor="burg" id="burgl"><span></span></label>
        <header>
          <img src={props.logo} alt="HWLogo"/>
          <nav>
              <Link to="/#about" className="bounce">О школе</Link>
              <Link to="/#cources" className="bounce">Курсы</Link>
              <Link to="/#team" className="bounce">Вакансии</Link>
          </nav>
          <div className="contacts">
              <a href="" className="phone">+7(958)580-25-77</a>
              <a href="" className="whats btn bounce">WhatsApp</a>
              <a href="" className="tlg btn bounce">Telegram</a>
          </div>
          <div className="socials">
              <a href="" className="vk bounce" style={{backgroundImage: `url(${props.icons.vk})`}}></a>
              <a href="" className="inst bounce" style={{backgroundImage: `url(${props.icons.inst})`}}></a>
              <a href="" className="fb bounce" style={{backgroundImage: `url(${props.icons.fb})`}}></a>
          </div>
        </header>
      </div>
    );
  }