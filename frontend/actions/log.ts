import axios from "axios";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqb2hhbmFuMjMwNkBnbWFpbC5jb20iLCJleHAiOjE3NTU2NzQyOTUsImlhdCI6MTc1NTY3MzM5NSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNhZWQzNDkyLTlmMDItNGEzMS04YzE2LTBkZGQ4MzY1ZDJjMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImpvaGFuYW4gcyBhIiwic3ViIjoiYzZmNDRkYzQtODIwMS00YjQ3LWJiMDktZmRjZWQyZmNhOTQxIn0sImVtYWlsIjoiam9oYW5hbjIzMDZAZ21haWwuY29tIiwibmFtZSI6ImpvaGFuYW4gcyBhIiwicm9sbE5vIjoiMjIxMDAxNiIsImFjY2Vzc0NvZGUiOiJ4c1pUVG4iLCJjbGllbnRJRCI6ImM2ZjQ0ZGM0LTgyMDEtNGI0Ny1iYjA5LWZkY2VkMmZjYTk0MSIsImNsaWVudFNlY3JldCI6IlpBbWdNdEpNdXdLWWdjTXAifQ.GXu_ZJGGP_88hoIba5iCPcYqtgwcCAe4Y5FEJIsNJOQ";


export interface LogProps {
  stack: string;
  level: string;
  default_package: string;
  message: string;
}

export default async function Log({
  stack,
  level,
  default_package,
  message,
}: LogProps) {
  axios.post("http://20.244.56.144/evaluation-service/logs", {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
    stack: stack,
    level: level,
    package: default_package,
    message: message,
  }).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });;
}
