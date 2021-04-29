import React from "react";
import "../Styles/hero/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <p className="h1">San Luis Obispo Olive</p>
        <div className="info">
          <p className="h3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, eligendi? Temporibus minus error architecto, nemo
            voluptates natus reiciendis placeat aut eius debitis! Quo dicta
            nulla explicabo cupiditate impedit itaque deserunt, et hic saepe
            error tempora facilis magni, animi repudiandae harum cumque
            laudantium dolorem ad commodi quasi nam consequuntur vero.
            Repudiandae rem possimus at perferendis enim, porro totam molestias
            tempore magnam odio, reprehenderit non veniam aliquam repellat.
            Similique sit esse deserunt aliquam voluptatum. Eos laudantium
            excepturi voluptatibus praesentium officia culpa maiores beatae
            commodi earum! Veniam soluta in voluptas hic quo, commodi dolore sed
            tempore consectetur obcaecati modi explicabo nihil ea incidunt.
          </p>
          <a href="https://placeholder.com">
            <img
              src="https://via.placeholder.com/400"
              className="hero-pic"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
