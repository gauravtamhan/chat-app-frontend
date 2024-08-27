import { useReducer } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Layout from './Layout';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';
import { theme } from './theme';
import reducer, { initialState } from '../store/reducer';
import { setSelectedConversationId } from '../store/actions';

const globalStyles = (
  <GlobalStyles styles={{ body: { background: '#f5f5f5' } }} />
);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedConversationId, conversations } = state;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}

      <Layout
        left={
          <ChatList
            conversations={conversations}
            selectedConversationId={selectedConversationId}
            handleSelection={(id) => {
              dispatch(setSelectedConversationId(id));
            }}
          />
        }
        right={<ChatDetails />}
        showRight={false}
      />
    </ThemeProvider>
  );
}

export default App;
