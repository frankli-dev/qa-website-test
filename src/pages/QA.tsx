import { Header } from "components/Header";

const QA = () => {
  return (
    <div>
      <Header />
      <div
        id="container"
        className="flex mt-[56px] max-w-[1264px] w-full mx-auto my-0 justify-between"
      >
        <div id="left-sidebar">Left bar</div>
        <div id="content">
          <div id="question-header" className="d-flex sm:fd-column">
            <h1 className="fs-headline1 ow-break-word mb8 flex--item fl1">
              <a
                href="/questions/35198208/handling-cancelled-request-with-express-node-js-and-angular"
                className="question-hyperlink"
              >
                Handling cancelled request with Express/Node.js and Angular
              </a>
            </h1>
            <div className="ml12 aside-cta flex--item print:d-none sm:ml0 sm:mb12 sm:order-first sm:as-end">
              <a
                href="/questions/ask"
                className="ws-nowrap s-btn s-btn__filled"
              >
                Ask Question
              </a>
            </div>
          </div>
          <div className="d-flex fw-wrap pb8 mb16 bb bc-black-200">
            <div
              className="flex--item ws-nowrap mr16 mb8"
              title="2016-02-04 10:15:46Z"
            >
              <span className="fc-black-400 mr2">Asked</span>
              <time>7 years, 8 months ago</time>
            </div>
            <div className="flex--item ws-nowrap mr16 mb8">
              <span className="fc-black-400 mr2">Modified</span>
              <a
                href="?lastactivity"
                className="s-link s-link__inherit"
                title="2016-12-10 03:42:54Z"
              >
                6 years, 10 months ago
              </a>
            </div>
            <div
              className="flex--item ws-nowrap mb8"
              title="Viewed 31,577 times"
            >
              <span className="fc-black-400 mr2">Viewed</span>
              32k times
            </div>
          </div>
          <div id="mainbar"></div>
          <div id="sidebar"></div>
        </div>
      </div>
    </div>
  );
};

export default QA;
