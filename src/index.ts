import server from "@WebAPI/server";

const port = parseInt(process.env.PORT || '') || 3003;

server.start(port);
//server.startMultiProcess(port);



