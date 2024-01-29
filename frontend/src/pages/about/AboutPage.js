import vector from "../../assets/Contact/Group.png";
import Group from "../../assets/About/group.png";
import tick from "../../assets/About/tick.png";
import go from "../../assets/About/go.png";
import globe from "../../assets/About/globe.png";
import elearning from "../../assets/About/elearning.png";
import student from "../../assets/About/student.png";
import support from "../../assets/About/support.png";
import img1 from "../../assets/About/img.png";
import "./aboutpage.css";
import TestimonialPage from "../../components/Testimonial/TestimonialPage";
import crypto1 from "../../assets/crypto1.jpg";
import crypto2 from "../../assets/crypto2.jpg";
export default function AboutPage() {
  return (
    <div className="main-color">
      <div className="contacttt">
        <div className="us">
          <img src={vector}></img>
          <h1>
            <spna className="underlined">
              <span className="under">About Us</span>
            </spna>
          </h1>
        </div>
        <p>
        BitBase believes in blockchain technology's transformative power and aims to  <br />
        empower innovative entrepreneurs driving the future of decentralized solutions.
        </p>
      </div>
      <div>
        <div className="about">
          <div className="about-left">
            <img src={crypto1} alt="GroupPic"></img>
          </div>
          <div className="about-right">
            <h4>About Us</h4>

            <p>
            A strategic funding and advisory firm in blockchain innovation. With a passion for fueling cutting-edge start-ups, we specialize in supporting and propelling the growth of blockchain startups.
              <br></br>
              <br></br>It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            
          </div>
        </div>

        <div className="info">
          <div className="mobileinfo">
            <div className="data-info">
              <div className="info-img">
                <img src={student} alt=""></img>
              </div>
              <div className="datas">
                <h2>1000+</h2>
                <p>Satisfied Customers</p>
              </div>
            </div>
            <div className="data-info">
              <div></div>
              <div className="info-img">
                <img src={support} alt=""></img>
              </div>
              <div className="datas">
                <h2>100</h2>
                <p>Total Consultants</p>
              </div>
            </div>
          </div>
          <div className="mobileinfo">
            <div className="data-info">
              <div className="info-img">
                <img src={elearning} alt=""></img>
              </div>
              <div className="datas">
                <h2>100</h2>
                <p>dummy</p>
              </div>
            </div>
            <div className="data-info">
              <div className="info-img">
                <img src={globe} alt=""></img>
              </div>
              <div className="datas">
                <h2>100</h2>
                <p>dummy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chooseus">
          <div className="left-choose">
            <img src={crypto2} alt=""></img>
          </div>
          <div className="right-choose">
            <h2>Why Choose Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
             
            </p>
          </div>
        </div>

        <section className="section section7" style={{ marginLeft: "110px" }}>
          <h4 className="section-subheading">Testimonials</h4>
          <h1 className="section-heading">
            Read <span className="underline success">Testimonials</span> from our
            Customers
          </h1>
          <div className="testimonials">
            <TestimonialPage></TestimonialPage>
            <TestimonialPage></TestimonialPage>
            <TestimonialPage></TestimonialPage>
            <TestimonialPage></TestimonialPage>
          </div>
        </section>
      </div>
    </div>
  );
}
