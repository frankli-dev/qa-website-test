import { Answer, Question } from "types";
import { user_andrew, user_derek, user_rashack } from "./mockUsers";

const answer_1: Answer = {
  id: "1",
  vote: 36,
  user: user_derek,
  answeredAt: "2023-10-24T14:42:30.532Z",
  content: `
    <p>Injected <code>req</code>object is shipped with listeners <code>.on()</code>.</p>

    <p>Listening to <code>close</code> event allows to handle when client close the connection (request cancelled by Angular or, e.g., user closed the querying tab).</p>

    <p>Here are 2 simple examples how to use the <code>close</code>event to stop request processing.</p>

    <p><strong>Example 1: Cancellable synchronous block</strong></p>

    <pre class="lang-js s-code-block"><code class="hljs language-javascript"><span class="hljs-keyword">var</span> clientCancelledRequest = <span class="hljs-string">'clientCancelledRequest'</span>;

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">cancellableAPIMethodA</span>(<span class="hljs-params">req, res, next</span>) {
        <span class="hljs-keyword">var</span> cancelRequest = <span class="hljs-literal">false</span>;

        req.<span class="hljs-title function_">on</span>(<span class="hljs-string">'close'</span>, <span class="hljs-keyword">function</span> (<span class="hljs-params">err</span>){
          cancelRequest = <span class="hljs-literal">true</span>;
        });

        <span class="hljs-keyword">var</span> superLargeArray = [<span class="hljs-comment">/* ... */</span>];

        <span class="hljs-keyword">try</span> {
            <span class="hljs-comment">// Long processing loop</span>
            superLargeArray.<span class="hljs-title function_">forEach</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">item</span>) {
                    <span class="hljs-keyword">if</span> (cancelRequest) {
                        <span class="hljs-keyword">throw</span> {<span class="hljs-attr">type</span>: clientCancelledRequest};
                    }
                    <span class="hljs-comment">/* Work on item */</span>
            });

            <span class="hljs-comment">// Job done before client cancelled the request, send result to client</span>
            res.<span class="hljs-title function_">send</span>(<span class="hljs-comment">/* results */</span>);
        } <span class="hljs-keyword">catch</span> (e) {
            <span class="hljs-comment">// Re-throw (or call next(e)) on non-cancellation exception</span>
            <span class="hljs-keyword">if</span> (e.<span class="hljs-property">type</span> !== clientCancelledRequest) {
                <span class="hljs-keyword">throw</span> e;
            }
        }

        <span class="hljs-comment">// Job done before client cancelled the request, send result to client</span>
        res.<span class="hljs-title function_">send</span>(<span class="hljs-comment">/* results */</span>);
    }
    </code></pre>

    <p><strong>Example 2: Cancellable asynchronous block with promises (analog to a reduce)</strong></p>

    <pre class="lang-js s-code-block"><code class="hljs language-javascript"><span class="hljs-keyword">function</span> <span class="hljs-title function_">cancellableAPIMethodA</span>(<span class="hljs-params">req, res, next</span>) {
        <span class="hljs-keyword">var</span> cancelRequest = <span class="hljs-literal">false</span>;

        req.<span class="hljs-title function_">on</span>(<span class="hljs-string">'close'</span>, <span class="hljs-keyword">function</span> (<span class="hljs-params">err</span>){
          cancelRequest = <span class="hljs-literal">true</span>;
        });

        <span class="hljs-keyword">var</span> superLargeArray = [<span class="hljs-comment">/* ... */</span>];

        <span class="hljs-keyword">var</span> promise = Q.<span class="hljs-title function_">when</span>();
        superLargeArray.<span class="hljs-title function_">forEach</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">item</span>) {
                promise = promise.<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
                    <span class="hljs-keyword">if</span> (cancelRequest) {
                        <span class="hljs-keyword">throw</span> {<span class="hljs-attr">type</span>: clientCancelledRequest};
                    } 
                    <span class="hljs-comment">/* Work on item */</span> 
                });
        });

        promise.<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
            <span class="hljs-comment">// Job done before client cancelled the request, send result to client</span>
            res.<span class="hljs-title function_">send</span>(<span class="hljs-comment">/* results */</span>);
        })
        .<span class="hljs-title function_">catch</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">err</span>) {
            <span class="hljs-comment">// Re-throw (or call next(err)) on non-cancellation exception</span>
            <span class="hljs-keyword">if</span> (err.<span class="hljs-property">type</span> !== clientCancelledRequest) {
                <span class="hljs-keyword">throw</span> err;
            }
        })
        .<span class="hljs-title function_">done</span>();
    }
    </code></pre>
  `,
  comments: [],
};

const answer_2: Answer = {
  id: "2",
  vote: 10,
  user: user_rashack,
  answeredAt: "2023-10-24T14:42:30.532Z",
  content: `
    <p>With express, you can try:</p>
  
    <pre class="lang-js s-code-block"><code class="hljs language-javascript">req.<span class="hljs-property">connection</span>.<span class="hljs-title function_">on</span>(<span class="hljs-string">'close'</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){    
      <span class="hljs-comment">// code to handle connection abort</span>
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'user cancelled'</span>);
    });
    </code></pre>
  `,
  comments: [],
};

const answer_3: Answer = {
  id: "3",
  vote: -4,
  user: user_andrew,
  answeredAt: "2023-10-24T14:42:30.532Z",
  content: `
    <p>You can set a <a href="https://nodejs.org/api/http.html#http_server_timeout" rel="nofollow">timeout</a> for requests on your server:</p>
    
    <pre class="lang-js s-code-block"><code class="hljs language-javascript"><span class="hljs-keyword">var</span> server = app.<span class="hljs-title function_">listen</span>(app.<span class="hljs-title function_">get</span>(<span class="hljs-string">'port'</span>), <span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) {
      <span class="hljs-title function_">debug</span>(<span class="hljs-string">'Express server listening on port '</span> + server.<span class="hljs-title function_">address</span>().<span class="hljs-property">port</span>);
    });
    <span class="hljs-comment">// Set the timeout for a request to 1sec</span>
    server.<span class="hljs-property">timeout</span> = <span class="hljs-number">1000</span>;
    </code></pre>
  `,
  comments: [],
};

export const question_1: Question = {
  id: "1",
  title: "Handling cancelled request with Express/Node.js and Angular",
  view: 32005,
  vote: 38,
  user: user_derek,
  tags: ["javascript", "angularjs", "node.js", "express", "request-cancelling"],
  askedAt: "2023-10-24T14:42:30.532Z",
  lastEditedAt: "2023-10-24T14:42:30.532Z",
  content: `                
    <p>When a pending HTTP request is cancelled by a client/browser it seems that Node with Express continues to process the request. For intensive requests, the CPU is still being kept busy with unnecessary requests.</p>

    <p>Is there a way to ask Node.js/Express to kill/stop these pending requests that are requested to be cancelled?</p>

    <p>It becomes particularly useful given that since AngularJS 1.5 HTTP request are easily <a href="https://docs.angularjs.org/api/ngResource/service/$resource" rel="noreferrer">cancellable</a> by calling <code>$cancelRequest()</code> on <code>$http</code>/<code>$resource</code> objects.</p>

    <p>Such cancellations could occur when exposing an API method providing results for auto-completion or search fields: when typing in the field to be autocompleted or type-aheaded, previous request(s) can be cancelled.</p>

    <p>A global <code>server.timeout</code> does not solve the problem: 1) it is a priori a global setting for all exposed API methods 2) ongoing processing in the canceled request is not killed.</p>
  `,
  answers: [answer_1, answer_2, answer_3],
  comments: [],
};
