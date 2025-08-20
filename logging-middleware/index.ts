import axios from "axios";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqb2hhbmFuMjMwNkBnbWFpbC5jb20iLCJleHAiOjE3NTU2Njg2MTAsImlhdCI6MTc1NTY2NzcxMCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNkMGRmYTY1LWE1ZGUtNDkwOS1iNDc2LWViN2E0YTExNjY4MCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImpvaGFuYW4gcyBhIiwic3ViIjoiYzZmNDRkYzQtODIwMS00YjQ3LWJiMDktZmRjZWQyZmNhOTQxIn0sImVtYWlsIjoiam9oYW5hbjIzMDZAZ21haWwuY29tIiwibmFtZSI6ImpvaGFuYW4gcyBhIiwicm9sbE5vIjoiMjIxMDAxNiIsImFjY2Vzc0NvZGUiOiJ4c1pUVG4iLCJjbGllbnRJRCI6ImM2ZjQ0ZGM0LTgyMDEtNGI0Ny1iYjA5LWZkY2VkMmZjYTk0MSIsImNsaWVudFNlY3JldCI6IlpBbWdNdEpNdXdLWWdjTXAifQ.NhgisYJ-G1NmGuMbsvHD7n8l8X7O7dgtNhMQzyPk7nk";

interface LogProps {
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
    stack: { stack },
    level: { level },
    package: { default_package },
    message: { message },
  });
}
