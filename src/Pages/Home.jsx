


const Home = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to E-learning Platform</h1>
          <p>Learn at your own pace, anytime, anywhere!</p>
          <a className="cta-button" href="#courses">Browse Courses</a>
        </header>

        <section id="courses" className='center-content'>
          <h2>Popular Courses</h2>
          <div className="course-card">
            <img src="course1.jpg" alt="Course 1" />
            <h3>Course 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="course-card">
            <img src="course2.jpg" alt="Course 2" />
            <h3>Course 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="course-card">
            <img src="course3.jpg" alt="Course 3" />
            <h3>Course 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="container">
            <h2>Start Your Learning Journey Today</h2>
            <p>Unlock your potential and gain new skills with our diverse range of courses.</p>
            <a href="/sign-up">Get Started</a>
          </div>
        </section>

        <section id="features" className='center-content'>
          <h2>Features</h2>
          <div className="feature">
            <i className="fa fa-video-camera"></i>
            <h3>High-Quality Videos</h3>
            <p>Watch engaging video lectures by industry experts.</p>
          </div>
          <div className="feature">
            <i className="fa fa-certificate"></i>
            <h3>Certifications</h3>
            <p>Earn certificates upon course completion.</p>
          </div>
          <div className="feature">
            <i className="fa fa-comments"></i>
            <h3>Community</h3>
            <p>Connect with other learners and instructors in the community.</p>
          </div>
        </section>

        <section id="testimonials" className='center-content'>
          <h2>Testimonials</h2>
          <div className="testimonial">
            <img src="user1.jpg" alt="User 1" />
            <p>I highly recommend this platform for anyone looking to enhance their skills.</p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial">
            <img src="user2.jpg" alt="User 2" />
            <p>The courses offered here are top-notch, and the instructors are very knowledgeable.</p>
            <h4>Jane Smith</h4>
          </div>
        </section>
        <footer>
          <p>&copy; 2023 E-learning Platform. All rights reserved.</p>
        </footer>
      </div>
  )
}

export default Home