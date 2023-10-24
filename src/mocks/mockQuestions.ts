import { Question } from "types";
import { user_derek } from "./mockUsers";

export const question_1: Question = {
  id: "1",
  title: "Handling cancelled request with Express/Node.js and Angular",
  view: 32005,
  vote: 38,
  user: user_derek,
  tags: ["javascript", "angularjs", "node.js", "express", "request-cancelling"],
  asked_at: "2023-10-24T14:42:30.532Z",
  last_edited_at: "2023-10-24T14:42:30.532Z",
  content: `                
    <p>When a pending HTTP request is cancelled by a client/browser it seems that Node with Express continues to process the request. For intensive requests, the CPU is still being kept busy with unnecessary requests.</p>

    <p>Is there a way to ask Node.js/Express to kill/stop these pending requests that are requested to be cancelled?</p>

    <p>It becomes particularly useful given that since AngularJS 1.5 HTTP request are easily <a href="https://docs.angularjs.org/api/ngResource/service/$resource" rel="noreferrer">cancellable</a> by calling <code>$cancelRequest()</code> on <code>$http</code>/<code>$resource</code> objects.</p>

    <p>Such cancellations could occur when exposing an API method providing results for auto-completion or search fields: when typing in the field to be autocompleted or type-aheaded, previous request(s) can be cancelled.</p>

    <p>A global <code>server.timeout</code> does not solve the problem: 1) it is a priori a global setting for all exposed API methods 2) ongoing processing in the canceled request is not killed.</p>
  `,
  answers: [],
  comments: [],
};
