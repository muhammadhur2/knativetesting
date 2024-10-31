// calculator.js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const op = queryObject.op;
  const num1 = parseFloat(queryObject.num1);
  const num2 = parseFloat(queryObject.num2);

  let result;
  if (op === 'add') {
    result = num1 + num2;
  } else if (op === 'subtract') {
    result = num1 - num2;
  } else {
    result = "Unsupported operation. Use 'add' or 'subtract'.";
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Result: ${result}\n`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Calculator server running at http://localhost:${PORT}/`);
});
