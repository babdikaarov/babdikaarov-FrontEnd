import React from "react";
import ReferenceIcon from "../../assets/reference/ReferenceIcon";

export default function Welcome() {
  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };
  function redirectToDefaultMail() {
    const mailToLink = `mailto:${"babdikaarov@gmail.com"}`;
    window.open(mailToLink, "_blank");
  }

  return (
    <div className="welcome">
      <div className="text-context">
        <h1>Hi there, I'm Beksultan!</h1>
        <p>Thanks for visiting my portfolio, where I showcase my skills:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React Router</li>
        </ul>
        <p>What my portfolio can do:</p>
        <ul>
          <li>
            <h3>Discover Pets by Species</h3>
            <p>
              With our client-side routing using React Router, you can click on
              a specific species to view only those pets. Say goodbye to endless
              scrolling and find your favorite species in an instant.
            </p>
          </li>
          <li>
            <h3>Get to Know Each Pet</h3>
            <p>
              Click on a pet to see their detailed information on the
              PetDetailsPage. We've made it easy by using unique IDs in the
              URLs, ensuring you get accurate and exciting details about your
              chosen pet.
            </p>
          </li>
          <li>
            <h3>Quick and Easy Search</h3>
            <p>
              Looking for a specific pet? Use our search bar, and you'll be
              redirected to the SearchPage, where you can filter pets by their
              names. Finding your dream pet has never been faster.
            </p>
          </li>
          <li>
            <h3>PetNotFound? No Problem!</h3>
            <p>
              If you click on a pet that doesn't have details available or
              search didnt give a result, don't worry! We've got you covered
              with the PetNotFoundPage. From there, a simple "Go Home" button
              will take you back to the main page.
            </p>
          </li>
        </ul>
      </div>
      <div className="welcome-reference">
        <ReferenceIcon
          redirectToURL={redirectToURL}
          redirectToDefaultMail={redirectToDefaultMail}
        />
      </div>
    </div>
  );
}
