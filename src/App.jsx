import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import TodoList from './TodoList';

const customTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {

  return <>
    <ThemeProvider theme={customTheme}>
      <Container maxWidth="xl">
        <CssBaseline />
        <TodoList />
      </Container>
    </ThemeProvider>
  </>
}

export default App
