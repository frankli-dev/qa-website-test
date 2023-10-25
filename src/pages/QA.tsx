import { Content } from "components/Content";
import { Header } from "components/Header";
import { LeftBar } from "components/LeftBar";
import { QuestionProvider } from "context/question";

const QA = () => {
  return (
    <QuestionProvider>
      <Header />
      <div
        id="container"
        className="flex mt-header max-w-[1264px] w-full mx-auto my-0 justify-between"
      >
        <LeftBar />
        <Content />
      </div>
    </QuestionProvider>
  );
};

export default QA;
