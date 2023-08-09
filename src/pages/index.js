import Head from 'next/head'
import { ThemeProvider, createTheme } from '@mui/material'

import Nav from '@/components/Nav'
import Workspace from '@/components/Workspace'


export default function Home() {

  const theme = createTheme({
    palette: {
      primary: {main: '#1261A0',},
      secondary: {main: '#943541',},
    },
    
  });
  
  return (
    <>
      <Head>
        <title>Control Panel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className='root'>
        <Nav />

        <Workspace />
        </main>
      </ThemeProvider>
    </>
  )
}
