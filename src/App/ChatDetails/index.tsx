import { Avatar } from '@mui/material';
import Panel from '../../shared/components/Panel';

const ChatDetails = () => {
  return <Panel enableHeaderShadow header={<Avatar>ME</Avatar>} body={null} />;
};

export default ChatDetails;
