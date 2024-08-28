import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Avatar,
  Box,
  InputBase,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Panel from '../../shared/components/Panel';
import Input from '../../shared/components/Input';
import { Conversation, User } from '../../api/models';
import { users } from '../../api/data';
import ThreadDetails from './ThreadDetails';

interface ChatDetailsProps {
  conversation?: Conversation;
  isAddingChat: boolean;
  onBackClick: () => void;
  onMessageSubmit: (message: string) => void;
  onNewMessageSubmit: (message: string, user: User) => void;
}

const ChatDetails = ({
  conversation,
  isAddingChat,
  onBackClick,
  onMessageSubmit,
  onNewMessageSubmit,
}: ChatDetailsProps) => {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState<User | null>(null);

  const isMessageEmpty = !message;

  useEffect(() => {
    if (!isAddingChat) {
      setRecipient(null);
    }
  }, [isAddingChat]);

  const resetInput = () => {
    setMessage('');
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (isMessageEmpty) return;

    if (isAddingChat && recipient) {
      onNewMessageSubmit(message, recipient);
      setRecipient(null);
    } else {
      onMessageSubmit(message);
    }

    resetInput();
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
          disabled={
            (!conversation && !isAddingChat) || (isAddingChat && !recipient)
          }
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
    if (isAddingChat) {
      return (
        <Panel
          enableHeaderShadow
          header={
            <HeaderComponent onBackClick={onBackClick}>
              <Typography variant="body1" sx={{ mr: 1.25 }}>
                To:
              </Typography>
              <Autocomplete
                openOnFocus
                blurOnSelect
                value={recipient}
                onChange={(_event, value) => {
                  setRecipient(value);
                }}
                forcePopupIcon={false}
                sx={{ width: '100%', '& .MuiInputBase-root': { py: 0.5 } }}
                slotProps={{ paper: { elevation: 3 } }}
                options={users.slice(4)}
                getOptionKey={(option) => option.id}
                getOptionLabel={(option) =>
                  `${option.name.first} ${option.name.last}`
                }
                renderOption={(props, option) => {
                  return (
                    <ListItem {...props} key={option.id}>
                      <ListItemAvatar>
                        <Avatar src={option.avatarUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${option.name.first} ${option.name.last}`}
                        primaryTypographyProps={{ sx: { fontWeight: '500' } }}
                      />
                    </ListItem>
                  );
                }}
                renderInput={(params) => {
                  const { InputLabelProps, InputProps, ...rest } = params;
                  return (
                    <InputBase {...params.InputProps} {...rest} autoFocus />
                  );
                }}
              />
            </HeaderComponent>
          }
          footer={Footer}
        />
      );
    }

    return <Panel enableHeaderShadow footer={Footer} />;
  }

  const user = conversation.participants[0];
  const fullName = `${user.name.first} ${user.name.last}`;

  const Header = (
    <HeaderComponent onBackClick={onBackClick}>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={user.avatarUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={fullName}
          primaryTypographyProps={{ sx: { fontWeight: '500' } }}
        />
      </ListItem>
    </HeaderComponent>
  );

  return (
    <Panel
      enableHeaderShadow
      header={Header}
      body={<ThreadDetails threads={conversation.threads} />}
      footer={Footer}
    />
  );
};

const HeaderComponent = ({
  onBackClick,
  children,
}: {
  onBackClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        aria-label="Back"
        color="primary"
        sx={{ mr: 1, display: { xs: 'inline-flex', sm: 'none' } }}
        onClick={onBackClick}
      >
        <ArrowBackIcon />
      </IconButton>
      {children}
    </Box>
  );
};

export default ChatDetails;
