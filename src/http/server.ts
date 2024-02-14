import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPolls } from "./routes/get-polls";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-result";

const app = fastify();

app.register(cookie, {
  secret: "polls-app-nlw", // for cookies signature
  hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
});

app.register(websocket);

// Register routes
app.register(createPoll);
app.register(getPolls);
app.register(voteOnPoll);
app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP Server running on http://localhost:3333");
});
