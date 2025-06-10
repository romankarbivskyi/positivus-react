import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Heading } from "./ui";

interface ITestimonial {
  text: string;
  name: string;
  role: string;
}

const testimonialList: ITestimonial[] = [
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto space-y-20 px-5 sm:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Heading>Testimonials</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className="bg-dark overflow-hidden rounded-[45px] py-[54px]">
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides
            initialSlide={0}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                initialSlide: 1,
              },
            }}
            navigation={{
              nextEl: ".swiper-next-button",
              prevEl: ".swiper-prev-button",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-container",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet_active",
            }}
            className="!overflow-visible"
          >
            {testimonialList.map((testimonial) => (
              <SwiperSlide>
                <Testimonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-[124px] flex items-center justify-center gap-10 sm:gap-20 md:gap-[190px]">
          <button className="swiper-prev-button">
            <FaArrowLeft className="fill-white" size={30} />
          </button>
          <div className="swiper-pagination-container flex max-w-max items-center justify-center"></div>
          <button className="swiper-next-button">
            <FaArrowRight className="fill-white" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

type TestimonialProps = ITestimonial;

const Testimonial = ({ text, name, role }: TestimonialProps) => {
  return (
    <div className="mx-auto w-full max-w-[600px] px-[30px]">
      <div className="border-green relative w-full rounded-[45px] border-2 px-[30px] py-12 md:px-[52px]">
        <p className="text-white">{text}</p>
        <svg
          className="absolute -bottom-5 left-12"
          width="30"
          height="20"
          viewBox="0 0 30 20"
        >
          <path
            d="M15 20 L0 0 L30 0 Z"
            fill="#191a23"
            stroke="#191a23"
            strokeWidth="1"
          />
          <path d="M15 20 L0 0" fill="none" stroke="#b9ff66" strokeWidth="2" />
          <path d="M15 20 L30 0" fill="none" stroke="#b9ff66" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-10 ml-15">
        <h4 className="text-green">{name}</h4>
        <p className="text-white">{role}</p>
      </div>
    </div>
  );
};
