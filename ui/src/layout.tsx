import { AppShell, Image, NavLink } from "@mantine/core";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header>
        <Image
          src="https://iutcm.edu.ve/wp-content/uploads/2021/11/IUTCM-Logo-Fondo-Blanco.png"
          h={64}
          w="auto"
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink href="#required-for-focus" label="Sedes" />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default Layout;
