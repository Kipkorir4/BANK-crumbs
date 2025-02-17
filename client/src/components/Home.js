import React from 'react';
import './styles/Home.css';
import DashNavBar from './DashNavBar';

const greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};

function Home({ user }) {
  if (user) {
    return (
      <div>
        <DashNavBar />
        <h2 className="home-container">
          {greeting()}, {user.username}
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hello! Please Login or Sign Up to access your account</h1>
        <div className="home-container login-message">
          <ul>
            <li>
              At Pesa Bank, we prioritize your financial well-being with unparalleled security, personalized services, and cutting-edge technology.
            </li>
            <li>
              Enjoy the convenience of our user-friendly online platform and 24/7 customer support.
            </li>
            <li>
              Our comprehensive financial products and competitive rates ensure you get the best value, while our commitment to transparency and community-focused initiatives fosters trust and positive impact.
            </li>
            <li>
              Join us today and experience a secure and prosperous future with a trusted partner dedicated to your success.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
