import { useState } from "react";
import {
  AppShell,
  Button,
  Container,
  Image,
  Input,
  NavLink,
  Stack,
  Title,
} from "@mantine/core";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SedesNew() {
  const navigate = useNavigate();

  const [sede, setSede] = useState("");
  const [extension, setExtension] = useState("");

  const manejarSubmit = () => {
    // Aquí se debe enviar la sede al backend
    axios.post("http://localhost:3000/sedes", { sede, extension });

    toast.success("¡Guardado con éxito!");

    setSede("");
    setExtension("");

    navigate("/sedes");
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

        <Input
          placeholder="Escriba la extensión..."
          value={extension}
          onChange={(e) => setExtension(e.target.value)}
        />

        <Button onClick={manejarSubmit}>Guardar</Button>
      </Stack>
    </Container>
  );
}

export default SedesNew;
