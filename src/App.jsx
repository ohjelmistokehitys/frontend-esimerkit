import { AppBar, Box, Container, createTheme, CssBaseline, Tab, Tabs, ThemeProvider, Toolbar, Typography } from '@mui/material';
import TodoList from './TodoList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

// Use Finnish locale for dates. See https://mui.com/x/react-date-pickers/adapters-locale/#with-dayjs
import { LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/fi';

const customTheme = createTheme({
    colorSchemes: {
        dark: true,
    },
});

function App() {
    const [tabIndex, setTabIndex] = useState(0);

    function handleTabChange(event, newValue) {
        setTabIndex(newValue);
    }

    return <>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
            <ThemeProvider theme={customTheme}>
                <Container maxWidth="md">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Todo app
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <CssBaseline />
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', my: 4 }}>
                        <Tabs value={tabIndex} onChange={handleTabChange}>
                            <Tab label="Home" />
                            <Tab label="Todos" />
                        </Tabs>
                    </Box>

                    <TabPanel title="Home" current={tabIndex} index={0}>
                        <Typography mb={2}>Welcome!</Typography>
                        <Typography mb={2}>Use the tabs to go to todos.</Typography>
                    </TabPanel>

                    <TabPanel title="Todos" current={tabIndex} index={1}>
                        <TodoList />
                    </TabPanel>


                </Container>
            </ThemeProvider>
        </LocalizationProvider>
    </>
}

/**
 * This helper component will only render its children if the given current tab index matches the index of the tab panel.
 * This way we can have multiple tab panels in the same component and only render the one that is currently selected.
 */
function TabPanel({ title, current, index, children }) {
    if (current !== index) {
        return;
    }
    return <Box>
        <Typography variant="h3" mb={2}>
            {title}
        </Typography>

        {children}
    </Box>
}

export default App
