import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Layout from './Layout';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';
import { theme } from './theme';

const globalStyles = (
  <GlobalStyles styles={{ body: { background: '#f5f5f5' } }} />
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <Layout left={<ChatList />} right={<ChatDetails />} showRight={false} />
    </ThemeProvider>
  );
}

export default App;
