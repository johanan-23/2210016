"use client";

import { Person } from "@mui/icons-material";
import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      className="min-h-screen flex flex-col gap-4 items-center-safe justify-center-safe"
    >
      <h1 className="font-bold text-2xl">
        2210016 - Round 1 - Preconfigurations
      </h1>
      <Button variant="contained" startIcon={<Person />}>
        Hello world
      </Button>
    </Container>
  );
}
