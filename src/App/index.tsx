import { useState, useEffect, useReducer } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Layout from './Layout';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';
import { theme } from './theme';
import {
  Conversation,
  Message,
  MessageType,
  Thread,
  User,
} from '../api/models';
import reducer, { initialState } from '../store/reducer';
import {
  setSelectedConversationId,
  addMessage,
  removeConversationById,
  addConversation,
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

let messageUuidCount = 0;
let conversationUuidCount = 0;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedConversationId, conversations } = state;
  const [isAddingChat, setIsAddingChat] = useState(false);

  useEffect(() => {
    dispatch(setSelectedConversationId(conversations[0].id));
  }, []);

  const handleAddChat = () => {
    setIsAddingChat(true);
    dispatch(setSelectedConversationId());
  };

  const handleCloseAddChat = () => {
    setIsAddingChat(false);
    dispatch(setSelectedConversationId());
  };

  const onMessageSubmit = (content: string) => {
    const newMessage = {
      id: String(messageUuidCount + 1000),
      type: 'outgoing' as MessageType,
      content,
      timestamp: new Date().toISOString(),
    };
    messageUuidCount++;
    dispatch(addMessage(newMessage));
  };

  const onNewMessageSubmit = (content: string, user: User) => {
    const timestamp = new Date().toISOString();

    const newMessage: Message = {
      id: String(messageUuidCount + 1000),
      type: 'outgoing' as MessageType,
      content,
      timestamp,
    };

    const newThread: Thread = {
      messages: [newMessage],
      startedAt: timestamp,
    };

    const newConversationId = String(conversationUuidCount + 100000);

    const newConversation: Conversation = {
      id: newConversationId,
      participants: [user],
      lastMessage: content,
      lastUpdatedAt: timestamp,
      threads: [newThread],
    };
    messageUuidCount++;
    conversationUuidCount++;
    dispatch(addConversation(newConversation));
    setIsAddingChat(false);
  };

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
              if (isAddingChat) {
                setIsAddingChat(false);
              }
              dispatch(setSelectedConversationId(id));
            }}
            handleDelete={(id) => {
              dispatch(removeConversationById(id));
            }}
            isAddingChat={isAddingChat}
            onAddChat={handleAddChat}
            onCloseAddChat={handleCloseAddChat}
          />
        }
        right={
          <ChatDetails
            conversation={selectedConversation}
            onBackClick={() => {
              dispatch(setSelectedConversationId());
            }}
            onMessageSubmit={onMessageSubmit}
            isAddingChat={isAddingChat}
            onNewMessageSubmit={onNewMessageSubmit}
          />
        }
        showRight={!!selectedConversationId || isAddingChat}
      />
    </ThemeProvider>
  );
}

export default App;
