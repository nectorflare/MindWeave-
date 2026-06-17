import "./Testimonials.css";
import userImg from "../../../assets/testimonial-user.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "James Carter",
    role: "CEO",
    text: "Working with them was a complete game-changer for our business. Their attention to detail and innovative approach truly stand out.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Parent",
    text: "The entire process was smooth and professional. We are extremely satisfied with the support and guidance received.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Business Owner",
    text: "Their commitment and dedication helped us achieve better results than expected. Highly recommended.",
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "Teacher",
    text: "Excellent service and amazing team. Their solutions are practical and very effective.",
  },
];

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-top-tag">WHAT PEOPLE SAY</div>

      <h2 className="testimonial-heading">Trusted by Families Across India</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={30}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
          },
          1024: {
            slidesPerView: 1.6,
          },
          1200: {
            slidesPerView: 1.8,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src={userImg} alt={item.name} />

                <div className="joined-badge">
                  <div className="avatars">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p>500+ Joined</p>
                </div>
              </div>

              <div className="testimonial-content">
                <div className="stars">★★★★★</div>

                <h3>{item.text}</h3>

                <p className="testimonial-desc">
                  Their team delivered practical solutions tailored to our needs
                  and helped streamline our processes for long-term success.
                </p>

                <p className="testimonial-author">
                  — {item.name}, {item.role}
                </p>

                <div className="testimonial-tags">
                  <span>Education</span>
                  <span>Learning</span>
                  <span>Success</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
