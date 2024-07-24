import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Container, Input, Stack, Title } from '@mantine/core'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Stack>
        <Title>Aguegue las sedes</Title>
        <Input placeholder='Escriba la sede...'/>
        <Input placeholder='Escriba la extensión...'/>
        <Button>Guardar</Button>
      </Stack>
    </Container>
  )
}

export default App
