import { useState } from 'react';
import {
  Avatar,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Panel from '../../shared/components/Panel';
import Input from '../../shared/components/Input';
import { Conversation } from '../../api/models';
import Thread from './Thread';

interface ChatDetails {
  conversation?: Conversation;
  onBackClick: () => void;
}

const ChatDetails = ({ conversation, onBackClick }: ChatDetails) => {
  const [message, setMessage] = useState('');
  const isMessageEmpty = !message;

  const resetInput = () => {
    setMessage('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (isMessageEmpty) return;

    resetInput();
    console.log('hi');
  };

  const handleTextAreaKeyDown: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.closest('form')?.requestSubmit();
    }
  };

  const Footer = (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Input
          type="text"
          autoComplete="off"
          fullWidth
          multiline
          placeholder="Aa"
          sx={{ mr: 1 }}
          onKeyDown={handleTextAreaKeyDown}
          aria-label="Enter a message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <IconButton
          type="submit"
          aria-label="Send"
          color="primary"
          disabled={isMessageEmpty}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </form>
  );

  if (!conversation) {
    return <Panel enableHeaderShadow footer={Footer} />;
  }

  const user = conversation.participants[0];
  const fullName = `${user.name.first} ${user.name.last}`;

  const Header = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        aria-label="Back"
        color="primary"
        sx={{ mr: 1, display: { xs: 'inline-flex', sm: 'none' } }}
        onClick={onBackClick}
      >
        <ArrowBackIcon />
      </IconButton>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={user.avatarUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={fullName}
          primaryTypographyProps={{ sx: { fontWeight: '500' } }}
        />
      </ListItem>
    </Box>
  );

  return (
    <Panel
      enableHeaderShadow
      header={Header}
      body={<Thread messages={[]} />}
      footer={Footer}
    />
  );
};

export default ChatDetails;
