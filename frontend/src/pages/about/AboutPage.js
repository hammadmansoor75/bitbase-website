import './aboutpage.css'
import aboutImg from '../../assets/about_image.JPG'
import about2 from '../../assets/about2.JPG'
import person1 from '../../assets/testimonial1.png'
import person2 from '../../assets/testimonial2.png'
import person3 from '../../assets/testimonial3.png'
import service from '../../assets/service.JPG'
import big from '../../assets/big.JPG';
import eye from '../../assets/eye.JPG';
import box from '../../assets/box.JPG';
export default function AboutPage() {
  return (
    <section className='section'>
      <div className='about_container'>
        <div className='content'>
          <h1>About Us</h1>
          <p>Strategic funding and advisory firm in blockchain innovation. With a passion for
              fueling cutting-edge start-ups, we specialize in supporting and propelling the
              growth of blockchain startups.
              BitBase believes in blockchain technology's transformative power and aims to
              empower innovative entrepreneurs driving the future of decentralized solutions.</p>
        </div>

        <div className='image'>
          <img src={aboutImg} alt="about" ></img>
        </div>
      </div>


      <div className='about_container'>
      <div className='image'>
          <img src={about2} alt="about" ></img>
        </div>
        <div className='content'>
          <h1>Our Mission</h1>
          <p>Strategic funding and advisory firm in blockchain innovation. With a passion for
              fueling cutting-edge start-ups, we specialize in supporting and propelling the
              growth of blockchain startups.
              BitBase believes in blockchain technology's transformative power and aims to
              empower innovative entrepreneurs driving the future of decentralized solutions.</p>
        </div>       
      </div>

      <div className="team">
        <h1 className="main_heading">Our Team</h1>
        <p className="main_subheading">Meet our Amazing Team!!</p>
        <div className="team_cards">
          <div className="card">
            <img src={big} alt="person"></img>
            <h2>John Doe</h2>
            <p>Senior Software Engineer</p>
          </div>

          <div className="card">
            <img src={box} alt="person"></img>
            <h2>Sarah White</h2>
            <p>Senior Software Engineer</p>
          </div>

          <div className="card">
            <img src={eye} alt="person"></img>
            <h2>Sarah Black</h2>
            <p>Senior Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
}