"use client";

import Log from "@/actions/log";
import { FrontLoader, Person } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { useTransition } from "react";


export default function Home() {
  const [isPending, startTransition] = useTransition();
  async function handleLog() {
    startTransition(async () => {
      try {
        Log({
          stack: "frontend",
          level: "debug",
          default_package: "api",
          message: "testing the api via middleware",
        });
      } catch (error) {
        console.log(error)
      }
    });
  }

  return (
    <Container
      maxWidth="xl"
      className="min-h-screen flex flex-col gap-4 items-center-safe justify-center-safe"
    >
      <h1 className="font-bold text-2xl">
        2210016 - Round 1 - Log Testing
      </h1>
      <Button onClick={handleLog} variant="contained">
        {isPending ? <><FrontLoader fontSize={"small"} /> Loading...</> : <>Test the Logger</>}
      </Button>
    </Container>
  );
}
