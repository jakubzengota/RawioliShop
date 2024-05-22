import logo from "../assets/logo.svg"
const Navigation = () => {
   
    const logoClick = () =>{

    }
   
  
    return (
      <nav className="navigation">
    <div className="navMenu left">
        <span className="navSpan">Polski sklep</span>
    </div>
    <div className="logoDiv">
        <img onClick={logoClick} className="logo" src={logo} alt="logo"/>
    </div>
    <div className="navMenu right">
        <span className="navSpan">Promocje</span>
        <span className="navSpan">O nas</span>
        <span className="navSpan">Kontakt</span>
    </div>
  </nav>

  
      
    );
  };
  
  export default Navigation;
  