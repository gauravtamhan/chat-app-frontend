import { Box, IconButton, Typography } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import List from './List';
import Panel from '../../shared/components/Panel';
import Input from '../../shared/components/Input';

const ChatList = () => {
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
      <Input showSearchIcon fullWidth placeholder="Search" />
    </Box>
  );

  const Body = <List />;

  return <Panel header={Header} body={Body} />;
};

export default ChatList;
