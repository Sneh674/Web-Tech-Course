import NavbarComp from "./compComponents/NavbarComp";
import Header from "./compComponents/Header";
import Footer from "./compComponents/Footer";

const Components = () => {
  return (
    <div style={{overflowY:'hidden', height:'100vh'}}>
      <Header />
      <div className="page" style={{display: 'flex', height:'100%'}}>
        <NavbarComp />
        <div style={{padding:'20px'}}>
          Main Content
        </div>
      </div>
      <div className="footer" style={{position:'fixed', bottom:'0px', width:'100%'}}><Footer/></div>
    </div>
  )
}

export default Components
