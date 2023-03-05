import React from "react";

const SocialMediaFooter = () => {
  return (
    <div className="space-x-5 text-lg">
      <a
        href="https://www.facebook.com/profile.php?id=100090240186328/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.twitter.com/tecnogreenid/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/tecnogreen.id/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/tecnogreen-id/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialMediaFooter;
