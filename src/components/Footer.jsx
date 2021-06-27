export default function Footer(props) {
    return (
      <div className="footer">
        <img src={props.icon} alt=""/>
        <p>ООО "Онлайн-школа программирования"</p>
        <p>ОГРН: 1186952015645</p>
        <p>Лицензия №10/21-69</p>
      </div>
    );
  }