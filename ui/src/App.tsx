import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Container, Input, Stack, Title } from "@mantine/core";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const [sede, setSede] = useState("");
  const [extension, setExtension] = useState("");

  const manejarSubmit = () => {
    // Aquí se debe enviar la sede al backend
    axios.post("http://localhost:3000/sedes", {sede, extension})

    toast.success("¡Guardado con éxito!")

    setSede("")
    setExtension("")

  };

  return (
    <Container>
      <Stack>
        <Title>Aguegue la sede</Title>
        <Input
          placeholder="Escriba la sede..."
          value={sede}
          onChange={(e) => setSede(e.target.value)}
        />

        <Input placeholder="Escriba la extensión..." 
        value={extension}
        onChange={(e) => setExtension(e.target.value)}
        />

        <Button onClick={manejarSubmit}>Guardar</Button>
      </Stack>
    </Container>
  );
}

export default App;
