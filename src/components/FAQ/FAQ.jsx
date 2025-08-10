import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-10">
      <h1 className=" text-center mb-10 text-2xl font-semibold text-primary">
        Frequently asked questions
      </h1>

      <div className="space-y-4">
        {questions?.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center bg-theme`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span
                className={`font-medium text-lg xs:max-sm:text-base${
                  activeIndex === index ? "text-primary" : ""
                }`}
              >
                {faq.question}
              </span>
              {activeIndex === index ? (
                <Minus
                  className={`text-2xl xs:max-sm:text-2xl ${
                    activeIndex === index ? "text-primary" : ""
                  }`}
                />
              ) : (
                <Plus
                  className={`text-2xl xs:max-sm:text-2xl ${
                    activeIndex === index ? "text-primary" : ""
                  }`}
                />
              )}
            </button>

            <div
              id={`faq-content-${index}`}
              className={`px-6 overflow-hidden transition-all bg-theme duration-300 ease-in-out 
                ${
                  activeIndex === index
                    ? "max-h-96 pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
            >
              {faq.answer && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
