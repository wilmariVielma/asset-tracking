import { Stack, Table, Title } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SedesList = () => {
  
  const [sedes, setSedes] = useState([]);

  useEffect(() => {



    axios
      .get("http://localhost:3000/sedes")
      .then((response) => setSedes(response.data));


  
  }, [])

  const rows = sedes.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.sede}</Table.Td>
      <Table.Td>{element.extension}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack>
      <Title>Mis Sedes</Title>

      <Link to="/sedes/new">Agregar nueva sede</Link>

      <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Sede</Table.Th>
          <Table.Th>Extensión</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>

    </Stack>
  );
};

export default SedesList;
