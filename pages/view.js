import { Container, Typography, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import Link from 'next/link';


export default function View() {
  return (
    <Container size="sm">
      <Typography>
        This is the view page!
      </Typography>
      <ButtonGroup color="secondary" variant="contained">
        <Link href="/">
          <Button>Make a plan</Button>
        </Link>
      </ButtonGroup>
    </Container>
  )
}
