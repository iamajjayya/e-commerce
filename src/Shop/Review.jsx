import { useState } from "react";
import Ratting from "../Components/Ratting";


const reviewTitle = "Add a Review";

const ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className="desc" onClick={() => setReviewShow(false)}>Description</li>
        <li className="rev" onClick={() => setReviewShow(true)}>Review</li>
      </ul>

      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        {reviewShow ? (
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} className="img-50" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewTitle}</h5>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2"> Your Rating </span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Type Here Message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description">
            <p>Our product is a state-of-the-art smartwatch that combines elegant design with advanced technology. It offers comprehensive health tracking, seamless connectivity, and customizable features to enhance your daily life. Experience the perfect blend of style and functionality with our innovative smartwatch.</p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="Product Image" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>Our innovative smartwatch combines elegant design with</li>
                  <li>Our innovative smartwatch combines elegant design with</li>
                  <li>Our innovative smartwatch combines elegant design with</li>
                  <li>Our innovative smartwatch combines elegant design with</li>
                  <li>Our innovative smartwatch combines elegant design with</li>
                  <li>Our innovative smartwatch combines elegant design with</li>
                </ul>
                <p>Our product is a state-of-the-art smartwatch that combines elegant design with advanced technology. It offers comprehensive health tracking, seamless connectivity, and customizable features to enhance your daily life. Experience the perfect blend of style and functionality with our innovative smartwatch.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
