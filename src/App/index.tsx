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
  <GlobalStyles
    styles={(theme) => ({
      body: { background: '#f5f5f5' },
      '.bubble-incoming + .bubble-outgoing, .bubble-outgoing + .bubble-incoming':
        { marginTop: theme.spacing(1.25) },
    })}
  />
);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedConversationId, conversations } = state;

  const selectedConversation = conversations.find(
    (item) => item.id === selectedConversationId
  );

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
        right={
          <ChatDetails
            conversation={selectedConversation}
            onBackClick={() => {
              dispatch(setSelectedConversationId());
            }}
          />
        }
        showRight={!!selectedConversationId}
      />
    </ThemeProvider>
  );
}

export default App;
