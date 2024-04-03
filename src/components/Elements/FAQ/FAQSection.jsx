// component
import SingleFaq from "./SingleFaq";

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What makes Cascade stand out ?",
      answer:
        "Our platform stands out due to its focus on innovation, adaptability, and inclusivity. We integrate cutting-edge technology to personalize learning experiences, ensuring that every individual can thrive regardless of their background or learning style.",
    },
    {
      id: 2,
      question:
        "How do you ensure the quality of the educational content on your platform?",
      answer:
        "We have a rigorous vetting process for educational content, working closely with experts in various fields to curate materials that are accurate, up-to-date, and engaging. Additionally, we continuously gather feedback from users to improve and refine our content offerings.",
    },
    {
      id: 3,
      question: "How does your platform foster collaboration among learners?",
      answer:
        "Collaboration is at the heart of our platform. We offer various features such as discussion forums, group projects, and virtual study sessions to encourage interaction and collaboration among learners. Through these collaborative activities, students can learn from each other, exchange ideas, and deepen their understanding of the subject matter.",
    },
    {
      id: 4,
      question:
        "How do you measure the effectiveness and impact of your educational solutions?",
      answer:
        "We employ a variety of metrics and assessment tools to measure the effectiveness and impact of our educational solutions, including learner performance data, feedback surveys, and qualitative assessments, allowing us to continuously improve and refine our offerings.",
    },
    {
      id: 5,
      question:
        "What kind of technology and tools do you use to enhance the learning experience?",
      answer:
        "We leverage a range of technologies and tools, including AI-driven adaptive learning algorithms,  and interactive multimedia resources, to enhance the learning experience and engage learners effectively.",
    },
    {
      id: 6,
      question:
        "Can your platform accommodate learners of all ages and educational backgrounds?",
      answer:
        "Yes, our platform is designed to cater to learners of all ages and educational backgrounds, from higher primary students to lifelong learners seeking professional development opportunities.",
    },
  ];
  return (
    <>
      <main>
        <div className={`px-5 my-24`}>
          <div className={`text-center`}>
            <h1
              className={`text-4xl font-josefinsansBold text-brandGreen1x lg:text-[40px] text-brandGreen2 xl:leading-[48.41px]`}
            >
              Frequently <br /> Asked Questions
            </h1>
          </div>
          <div
            className={`flex flex-col gap-y-2.5 mt-10 lg:mt-16 mx-auto my-0 md:w-4/5 lg:w-3/5`}
          >
            {faqs.map((faq) => (
              <SingleFaq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FaqSection;
