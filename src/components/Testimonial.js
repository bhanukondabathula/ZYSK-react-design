import React from "react";
import functionalcompanylogo from '../assets/Fictional company logo.png'
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="logo">
        <img
          src={functionalcompanylogo}
          alt="Sisyphus Logo"
        />
      </div>
      <h1 className="testimonial-head">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className="profile-container">
        <img
          className="profile-pic"
          src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npOE-K~i6hA8OvsL-lkmHTLZO0szKxBMK2dS-ibFk~M8TF1Zuyn5g2XC76wwKZfkbzxd4KKHU~GkoKsitYpmA38qrAkfDFnCijoMaeoZ3Jclmt26V6lVvOCxuTFARnL1yLhxW2b2HWShcAczS4MwUwZt3V2vr4uwTyYbYf5Dv7G1Z6vGLCpb90XfoTRWIbK1tNoQpbe1epuVYldwlzMG0xf7WDTRrQ2gVdjqQwskRDoAprK452J4-C87Sah0ynFq7gH7wspr7i0l3eeyuZfWlRUHYN3E06FLJgrxutC6zQhaELLdrtFfIRXvkzp25lDi3pGhLTw7zGkFuKgOV7wkwA__" // Replace with the actual user image URL
          alt="Candice Wu"
        />
        <div className="profile-info">
          <h4>Candice Wu</h4>
          <p>Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
