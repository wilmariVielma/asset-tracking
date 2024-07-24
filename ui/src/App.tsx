import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Container, Input, Stack, Title } from "@mantine/core";

function App() {
  const [sede, setSede] = useState("pepe");

  const manejarSubmit = () => {
    // Aquí se debe enviar la sede al backend

    console.log("Sede:", sede);
  };

  return (
    <Container>
      <Stack>
        <Title>Aguegue las sedes</Title>
        <Input
          placeholder="Escriba la sede..."
          value={sede}
          onChange={(e) => setSede(e.target.value)}
        />

        <Input placeholder="Escriba la extensión..." />

        <Button onClick={manejarSubmit}>Guardar</Button>
      </Stack>
    </Container>
  );
}

export default App;
