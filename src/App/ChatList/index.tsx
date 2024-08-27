import React, { useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from './List';
import Panel from '../../shared/components/Panel';
import Input from '../../shared/components/Input';
import { Conversation } from '../../api/models';

interface ChatListProps {
  conversations: Conversation[];
  selectedConversationId?: Conversation['id'];
  handleSelection: (id: Conversation['id']) => void;
}

const ChatList = ({
  conversations,
  selectedConversationId,
  handleSelection,
}: ChatListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const Header = (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 1.5,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: '700' }}>
          Chats
        </Typography>
        <IconButton
          aria-label="New message"
          sx={{ bgcolor: 'action.hover' }}
          onClick={() => null}
        >
          <CreateIcon />
        </IconButton>
      </Box>
      <Input
        type="text"
        autoComplete="off"
        showSearchIcon
        fullWidth
        placeholder="Search"
        aria-label="search"
        name="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Box>
  );

  const renderListItem = (item: Conversation) => {
    const user = item.participants[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const timestamp = new Date(item.lastUpdatedAt).toLocaleTimeString('en-US', {
      timeStyle: 'short',
    });

    return (
      <ListItem
        key={item.id}
        disablePadding
        secondaryAction={
          false ? (
            <Typography variant="caption">{timestamp}</Typography>
          ) : (
            <IconButton edge="end" aria-label="delete">
              <MoreVertIcon />
            </IconButton>
          )
        }
      >
        <ListItemButton
          sx={{ borderRadius: 3, pt: 1.25, pb: 1.25 }}
          selected={item.id === selectedConversationId}
          onClick={() => {
            handleSelection(item.id);
          }}
        >
          <ListItemAvatar>
            <Avatar sx={{ width: 48, height: 48 }} src={user.avatarUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                {fullName}
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="caption"
                  color="text.secondary"
                >
                  {` • ${timestamp}`}
                </Typography>
              </React.Fragment>
            }
            primaryTypographyProps={{ sx: { fontWeight: '500' } }}
            secondary={item.lastMessage}
            secondaryTypographyProps={{ noWrap: true }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Panel
      header={Header}
      body={<List data={conversations} renderListItem={renderListItem} />}
    />
  );
};

export default ChatList;
