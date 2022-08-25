import React from "react";
import {
  AddClientModal,
  AddProjectModal,
  Projects,
  Clients,
} from "../components";

export default function Home() {
  return (
    <>
      <AddClientModal />
      <AddProjectModal />
      <Projects />
      <Clients />
    </>
  );
}
