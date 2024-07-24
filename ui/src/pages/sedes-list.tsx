import { Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const SedesList = () => {
  return (
    <Stack>
      <Title>Mis Sedes</Title>

      <Link to="/sedes/new">Agregar nueva sede</Link>
    </Stack>
  );
};

export default SedesList;
