import Card from "./components/Card";
import Card2 from "./components/Card2";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import "./App.css";

function App() {
  return (
    <>
      <div id="total-container">
        <nav>
          <div className="logo">Edie</div>
          <div id="hamburguer">
            <MenuIcon />
          </div>
          <div className="navBar">
            <span className="nav-item">Home</span>
            <span className="nav-item">Services</span>
            <span className="nav-item">Our Works</span>
            <span className="nav-item">Clients</span>
            <span className="nav-item">Contact</span>
          </div>
        </nav>
        <main>
          <div id="container1a">
            <div id="question">
              <span>Unhappy with your website?</span>
            </div>
            <div id="title">
              <span>We create beautiful and fast web services</span>
            </div>
          </div>
          <div id="container1">
            <img id="main-banner" src="/heroImage.jpg" alt="main-banner" />
          </div>
          <div id="container2">
            <div id="subtitle">
              <span>Story, emotion and purpose</span>
            </div>
            <div id="sub-text">
              <span>
                We help transform your ideas into real world applications that
                will outperform your toughest competition and help you achieve
                your strategic goals in short period of time.
              </span>
            </div>
            <div className="contact">
              <span className="contact-quest">Want us to contact you?</span>
              <div className="lilForm">
                <input
                  className="input-email"
                  type="text"
                  placeholder="Email"
                />
                <input className="input-btn" type="button" value={"Join"} />
              </div>
            </div>
          </div>
          <div id="container3">
            <div id="container-services">
              <span id="subtitle2">We offer high demand services</span>
              <div id="container-cards">
                <Card
                  icon={<EditIcon sx={{ width: "36px", height: "36px" }} />}
                  color="blue"
                  title="UI/UX Design"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
                  conType="conType1"
                  btnType="btnType1"
                />
                <Card
                  icon={<CodeIcon sx={{ width: "36px", height: "36px" }} />}
                  color="green"
                  title="Front End"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
                  conType="conType"
                  btnType="btnType"
                />
                <Card
                  icon={<StorageIcon sx={{ width: "36px", height: "36px" }} />}
                  color="red"
                  title="Back End"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
                  conType="conType1"
                  btnType="btnType1"
                />
              </div>
            </div>
            <div id="container-design">
              <span id="subtitle3">Good design means good business</span>
              <div id="container-cards2">
                <Card2
                  img2="smarthome"
                  subTitle="Full stack application"
                  title2="Smart home dashboard"
                  type2="down"
                />
                <Card2
                  img2="onboard"
                  subTitle="UX/UI design"
                  title2="Onboard application"
                  type2="up"
                />
                <Card2
                  img2="booking"
                  subTitle="Mobile application"
                  title2="Booking system"
                  type2="down"
                />
                <Card2
                  img2="juice-product"
                  subTitle="Front End application"
                  title2="Juice product homepage"
                  type2="up"
                />
              </div>
              <div id="more">
                <span>See More →</span>
              </div>
            </div>
            <div id="team">
              <div id="team-text">
                <span id="text1">Meet the team</span>
                <span id="text2">We are chilled and a laidback team</span>
                <span id="text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </div>
              <div id="team-img-container">
                {/* <div id="left"></div> */}
                <img className="team-img" src="/person1.png" />
                <img className="team-img" src="/person2.png" />
                <img className="team-img" src="/person3.png" />
              </div>
            </div>
            <div id="testimonies-container">
              <div id="testimony">
                <span>
                  “Fast and outstanding resutls. Edie understands their
                  customer’s needs. They have a young and talented team.”
                </span>
              </div>
              <div id="person">
                <div>
                  <img id="person-img" src="/person4.png" />
                </div>
                <div id="person-text">
                  <span id="name">Carlos Tran</span>
                  <span id="company">The Decorate Gatsby</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div id="footer1">
            <span className="nav-footer">Home</span>
            <span className="nav-footer">Services</span>
            <span className="nav-footer">Our Works</span>
            <span className="nav-footer">Clients</span>
            <span className="nav-footer">Contact</span>
          </div>
          <div id="footer2">
            <div id="footer-logo">Edie</div>
            <div id="social-media">
              <img className="social" src="/public/instagram.svg"></img>
              <img className="social" src="/public/linkedin.svg"></img>
              <img src="/public/twitter.svg"></img>
            </div>
          </div>
          <div id="footer3">
            <div className="contact">
              <span className="contact-quest2">Want us to contact you?</span>
              <div className="lilForm2">
                <input
                  className="input-email2"
                  type="text"
                  placeholder="Email"
                />
                <input className="input-btn2" type="button" value={"Join"} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
