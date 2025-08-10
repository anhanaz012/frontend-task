import serviceOne from "../assets/images/service-one.png";
import serviceTwo from "../assets/images/service-two.png";
export const navLinks = [
  { label: "SERVICES", route: "/services" },
  { label: "ABOUT US", route: "/about" },
  { label: "CONTACT US", route: "/contact" },
  { label: "CAREERS", route: "/careers" },
];
export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.",
  },
];
export const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
    image: serviceOne,
    imgDirection: "left",
  },
  {
    title: "Digital Strategy Consulting",
    description:
      "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    image: serviceTwo,
    imgDirection: "right",
  },
];
