import { Content } from "components/Content";
import { Header } from "components/Header";
import { LeftBar } from "components/LeftBar";
import { question_1 } from "mocks/mockQuestions";

const QA = () => {
  return (
    <div>
      <Header />
      <div
        id="container"
        className="flex mt-header max-w-[1264px] w-full mx-auto my-0 justify-between"
      >
        <LeftBar />
        <Content question={question_1} />
      </div>
    </div>
  );
};

export default QA;
