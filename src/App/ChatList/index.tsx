import React, { useState, useMemo, useRef } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import DeleteIcon from '@mui/icons-material/Delete';
import List, { ListEmpty, ListEmptyProps } from './List';
import Panel from '../../shared/components/Panel';
import Input from '../../shared/components/Input';
import { formatDateString } from '../../shared/utils/date-formatter';
import { Conversation } from '../../api/models';
import ConfirmationDialog from './ConfirmationDialog';

interface ChatListProps {
  conversations: Conversation[];
  selectedConversationId?: Conversation['id'];
  isAddingChat: boolean;
  onCloseAddChat: () => void;
  onAddChat: () => void;
  handleSelection: (id: Conversation['id']) => void;
  handleDelete: (id: Conversation['id']) => void;
}

const ChatList = ({
  conversations,
  selectedConversationId,
  isAddingChat,
  onCloseAddChat,
  onAddChat,
  handleSelection,
  handleDelete,
}: ChatListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);
  const clickedConversationId = useRef<string | null>(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onChatDelete = () => {
    if (clickedConversationId.current) {
      closeModal();
      handleDelete(clickedConversationId.current);
    }
  };

  const filteredConversations = useMemo(() => {
    if (!searchTerm) return conversations;

    const regex = searchTerm
      .replace(/[^a-zA-Z]/g, '')
      .split('')
      .join('.*');
    return conversations.filter((convo) => {
      const { name } = convo.participants[0];
      return `${name.first} ${name.last} ${convo.lastMessage}`.match(
        new RegExp(regex, 'i')
      );
    });
  }, [searchTerm, conversations]);

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
          onClick={onAddChat}
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

  const ListHeaderComponent = isAddingChat ? (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onCloseAddChat}>
          <CloseIcon />
        </IconButton>
      }
    >
      <ListItemButton
        sx={{ borderRadius: 3, pt: 1.25, pb: 1.25 }}
        selected
        onClick={() => null}
      >
        <ListItemAvatar>
          <Avatar sx={{ width: 48, height: 48 }}>
            <PersonAddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="New Message"
          primaryTypographyProps={{ sx: { fontWeight: '500' } }}
        />
      </ListItemButton>
    </ListItem>
  ) : null;

  const renderListItem = (item: Conversation) => {
    const user = item.participants[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const timestamp = formatDateString('list-item', item.lastUpdatedAt);

    const contextMenuOptions: {
      label: string;
      icon: React.ReactNode;
      onClick?: () => void;
    }[] = [
      {
        label: 'Mark as read',
        icon: <CheckIcon fontSize="small" />,
      },
      {
        label: 'Mute notifications',
        icon: <NotificationsOffIcon fontSize="small" />,
      },
      {
        label: 'Delete chat',
        icon: <DeleteIcon fontSize="small" />,
        onClick: () => {
          handleClose();
          setShowModal(true);
        },
      },
    ];

    return (
      <ListItem
        key={item.id}
        disablePadding
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="delete"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
                clickedConversationId.current = item.id;
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              sx={{
                '.MuiMenu-paper': {
                  boxShadow: 'none',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,.06))',
                  borderRadius: 3,
                  minWidth: 272,
                },
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {contextMenuOptions.map((item, i, array) => {
                const isLast = i === array.length - 1;
                return (
                  <MenuItem
                    key={item.label}
                    disabled={!isLast}
                    onClick={item?.onClick}
                    sx={{ borderRadius: 3, mx: 0.75, py: 1 }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontWeight: 500 }}>
                      {item.label}
                    </ListItemText>
                  </MenuItem>
                );
              })}
            </Menu>
          </>
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

  const listEmptyProps: ListEmptyProps = {
    primaryText: searchTerm ? 'No results found' : 'No chats to show',
    secondaryText: searchTerm
      ? 'This is only a sample feature so the searching functionality may be limited.'
      : 'Get started by creating a new message!',
  };

  return (
    <>
      <ConfirmationDialog
        open={showModal}
        onClose={closeModal}
        title="Delete chat?"
        content="Once you delete this conversation, it cannot be undone."
        actions={
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Button
              fullWidth
              variant="contained"
              color="customGrey"
              sx={{
                borderRadius: 1.5,
              }}
              onClick={closeModal}
              disableElevation
            >
              Cancel
            </Button>
            <Button
              sx={{ ml: 1, borderRadius: 1.5 }}
              fullWidth
              variant="contained"
              color="error"
              onClick={onChatDelete}
              disableElevation
              autoFocus
            >
              Delete chat
            </Button>
          </Box>
        }
      />
      <Panel
        header={Header}
        body={
          <List
            data={filteredConversations}
            renderListItem={renderListItem}
            ListHeaderComponent={ListHeaderComponent}
            ListEmptyComponent={<ListEmpty {...listEmptyProps} />}
          />
        }
      />
    </>
  );
};

export default ChatList;
