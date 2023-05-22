


const About = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to E-Learning Platform</h1>
          <p>Unlock your potential with our online courses</p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our E-Learning Platform?</h2>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-book"></i>
            </div>
            <div className="feature-content">
              <h3>Wide Range of Courses</h3>
              <p>Explore a diverse selection of courses covering various subjects and disciplines.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="feature-content">
              <h3>Flexible Learning Schedule</h3>
              <p>Learn at your own pace and set your own schedule according to your convenience.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="feature-content">
              <h3>Expert Instructors</h3>
              <p>Learn from industry experts and experienced instructors passionate about teaching.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-section">
        <div className="container">
          <h2>Explore Our Courses</h2>
          <div className="course-card">
            <div className="course-thumbnail">
              <img src="course-thumbnail.jpg" alt="Course Thumbnail" />
            </div>
            <div className="course-details">
              <h3>Introduction to Web Development</h3>
              <p>Learn the basics of web development and build your first website from scratch.</p>
              <a href="/courses/intro-web-dev">Enroll Now</a>
            </div>
          </div>
          <div className="course-card">
            <div className="course-thumbnail">
              <img src="course-thumbnail.jpg" alt="Course Thumbnail" />
            </div>
            <div className="course-details">
              <h3>Data Science Fundamentals</h3>
              <p>Explore the world of data science and learn essential skills for data analysis.</p>
              <a href="/courses/data-science">Enroll Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"The courses offered by the E-Learning Platform have greatly enhanced my skills and knowledge in my field. The instructors are top-notch, and the course materials are comprehensive and engaging. I highly recommend this platform to anyone looking to expand their learning."</p>
              <p className="testimonial-author">John Doe</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"I have had an incredible learning experience on this platform. The courses are well-structured, and the interactive learning approach keeps me engaged throughout. The support from the community and instructors is exceptional. I'm grateful for the opportunity to learn here."</p>
              <p className="testimonial-author">Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <h2>Start Your Learning Journey Today</h2>
          <p>Unlock your potential and gain new skills with our diverse range of courses.</p>
          <a href="/sign-up">Get Started</a>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container">
          <p>&copy; 2023 E-Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About