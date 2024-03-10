import React from 'react';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  console.log(css);
  return (
    <div className={css.welcome_container}>
      <div className={`container ${css.main_container}`}>
        <h1 className={css.welcome_title}>Autoventure Rentals</h1>

        <p className={css.welcome_speech}>
          Welcome to our premier car rental service! Whether you're planning a
          road trip, need a vehicle for business, or simply want to cruise
          around town in style, you've come to the right place. With a wide
          selection of top- quality vehicles and flexible rental options, we're
          here to make your journey smooth and enjoyable. Explore our fleet,
          discover our competitive rates, and get ready to hit the road with
          confidence. Your adventure starts here!
        </p>

        <div className={css.services}>
          <h2 className={css.welcome_our_service}>Our Services</h2>
          <ul className={css.welcome_services}>
            <li className={css.welcome_service}>
              <h3 className={css.services_title}>Wide Selection of Vehicles</h3>
              <p>
                Choose from a diverse range of cars, SUVs, and trucks to suit
                your needs and preferences.
              </p>
            </li>
            <li className={css.welcome_service}>
              <h3 className={css.services_title}>Flexible Rental Options</h3>
              <p>
                We offer short-term, long-term, and one-way rental options,
                ensuring flexibility for your travel plans.
              </p>
            </li>
            <li className={css.welcome_service}>
              <h3 className={css.services_title}>24/7 Customer Support</h3>
              <p>
                Our dedicated customer support team is available around the
                clock to assist you with any queries or concerns.
              </p>
            </li>
            <li className={css.welcome_service}>
              <h3 className={css.services_title}>Convenient Booking Process</h3>
              <p>
                Our easy-to-use online booking platform allows you to reserve
                your vehicle quickly and hassle-free.
              </p>
            </li>
          </ul>
        </div>

        <div className={css.welcome_features}>
          <h2 className={css.welcome_discover}>Discover What You Can Do</h2>
          <ul className={css.welcome_features_list}>
            <li>Explore a wide range of vehicles available for rent</li>
            <li>
              Learn more about each car, including specifications and features
            </li>
            <li>
              Add your favorite cars to your wishlist for future reference
            </li>
            <li>
              Filter cars based on your preferences, such as make, model, or
              price range
            </li>
            <li>
              Rent a car directly from the website with easy booking process
            </li>
          </ul>
        </div>

        <div className={css.finalBlock}>
          <h2 className={css.welcome_wish}>
            Wishing You Safe Travels and Unforgettable Adventures!
          </h2>
          <p className={css.welcome_thanks}>
            Thank you for choosing our car rental service. We truly value your
            trust and confidence in us. As you embark on your journey, may every
            mile be filled with joy, every turn bring excitement, and every
            destination offer new experiences. Our dedicated team is here to
            support you every step of the way. Bon voyage!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
