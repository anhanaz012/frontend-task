import bgImage from "../../assets/images/hero-bg.jpg";
import Button from "../Button/Button";
const HeroSection = () => {
  return (
    <section>
      <div
        className="relative h-[550px] px-20 xs:max-sm:h-[550px] xs:max-sm:px-0 sm:max-md:h-[450px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Content */}
        <div className="relative z-10 flex items-center xs:max-sm:items-end h-full">
          <div
            className="xs:max-sm:w-full w-md px-8 py-4"
            style={{
              background:
                "linear-gradient(256.73deg, #1cbddd 27.86%, #4dca79 100%)",
            }}
          >
            <h2 className="text-white mb-2 font-bold text-3xl leading-snug">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h2>
            <Button label={"Get Free Consultation"} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
