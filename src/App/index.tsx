import { useEffect, useReducer } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Layout from './Layout';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';
import { theme } from './theme';
import { MessageType } from '../api/models';
import reducer, { initialState } from '../store/reducer';
import {
  setSelectedConversationId,
  addMessage,
  removeConversationById,
} from '../store/actions';

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      body: { background: '#f5f5f5' },
      '.bubble-incoming + .bubble-outgoing, .bubble-outgoing + .bubble-incoming':
        { marginTop: theme.spacing(1.25) },
    })}
  />
);

let count = 0;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedConversationId, conversations } = state;

  useEffect(() => {
    dispatch(setSelectedConversationId(conversations[0].id));
  }, []);

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
            handleDelete={(id) => {
              dispatch(removeConversationById(id));
            }}
          />
        }
        right={
          <ChatDetails
            conversation={selectedConversation}
            onBackClick={() => {
              dispatch(setSelectedConversationId());
            }}
            onMessageSubmit={(content) => {
              const newMessage = {
                id: String(count + 1000),
                type: 'outgoing' as MessageType,
                content,
                timestamp: new Date().toISOString(),
              };
              count++;
              dispatch(addMessage(newMessage));
            }}
          />
        }
        showRight={!!selectedConversationId}
      />
    </ThemeProvider>
  );
}

export default App;
