import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
} from "react-icons/hi2";



const SingleFaq = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  // show answers
  const handleShowAnswers = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <>
      <main>
        <div className={`cursor-pointer`} onClick={() => handleShowAnswers()}>
          <div className={`flex justify-between items-center lg:text-xl `}>
            <div>
              <h1 className={` text-base font-remMedium`}>
                {faq.question}
              </h1>
            </div>
            <div>
              <button onClick={() => handleShowAnswers()}>
                {showAnswer ? (
                  <HiChevronDoubleDown />
                ) : (
                  <HiChevronDoubleRight />
                )}
              </button>
            </div>
          </div>
          {showAnswer ? (
            <div>
              <p
                className={`font-normal font-remRegular pt-2 text-brandGray3x text-sm leading-6 xl:text-base xl:w-[75%]`}
              >
                {faq.answer}
              </p>
            </div>
          ) : null}
          <div className={`border-b-2 pb-3`}></div>
        </div>
      </main>
    </>
  );
};

export default SingleFaq;
