import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Layout from './Layout';
import Panel from '../shared/components/Panel';

// TODO: Remove temp imports
import { Avatar, Typography } from '@mui/material';

const globalStyles = (
  <GlobalStyles styles={{ body: { background: '#f5f5f5' } }} />
);

function App() {
  const ChatList = (
    <Panel
      header={
        <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: '700' }}>
          Chats
        </Typography>
      }
      body={null}
    />
  );

  const ChatDetails = (
    <Panel enableHeaderShadow header={<Avatar>ME</Avatar>} body={null} />
  );

  return (
    <>
      <CssBaseline />
      {globalStyles}

      <Layout left={ChatList} right={ChatDetails} showRight={false} />
    </>
  );
}

export default App;
