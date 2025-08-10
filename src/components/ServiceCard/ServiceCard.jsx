// ServiceCard.jsx

import Button from "../Button/Button";

const ServiceCard = ({
  imageUrl,
  imgDirection = "left",
  title,
  description,
  buttonText,
}) => {
  return (
    <div
      className={`flex xs:max-md:flex-col xs:max-md:text-center items-center p-6 max-w-4xl mx-auto mb-6 ${
        imgDirection === "right" ? "flex-row-reverse" : ""
      }`}
    >
      {/* imageUrl / Image */}
      <div className="flex-shrink-0 mr-6 sm:max-md:w-1/2">
        <img src={imageUrl} alt={title} className="object-contain" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
        <p className=" mt-2 mb-4 leading-relaxed">{description}</p>
        <Button label={buttonText} className="mx-0 xs:max-md:mx-auto" />
      </div>
    </div>
  );
};

export default ServiceCard;
