import {
  Box,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Message } from '../../api/models';

interface ThreadProps {
  messages: Message[];
}

const Thread = ({ messages = [] }: ThreadProps) => {
  return (
    <Box>
      <DateBreak text="Aug 19, 2024, 12:09 PM" />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="Did you get my message yesterday regarding the appointment?"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="We should leave by 4:45 PM to beat traffic."
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Yeah I'm ready."
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Just waiting for you"
      />
      <DateBreak text="Aug 19, 2024, 12:09 PM" />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="Did you get my message yesterday regarding the appointment?"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="We should leave by 4:45 PM to beat traffic."
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Yeah I'm ready."
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Just waiting for you"
      />
      <DateBreak text="Aug 19, 2024, 12:09 PM" />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="Did you get my message yesterday regarding the appointment?"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="incoming"
        content="We should leave by 4:45 PM to beat traffic."
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Hello???"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Boss, where you at?"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="I'm leaving without you"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="Why are you not responding kind sir? Please refer to the aforementioned messages and let me know at your earliest convenience"
      />
      <MessageBubble
        timestamp="Monday 9:46 PM"
        type="outgoing"
        content="bruh..."
      />
    </Box>
  );
};

const DateBreak = ({ text }: { text: string }) => {
  return (
    <Box sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    color: theme.palette.common.white,
    boxShadow: theme.shadows[4],
    fontSize: 13,
    padding: theme.spacing(0.75, 1.25),
    borderRadius: theme.shape.borderRadius * 2,
  },
}));

const MessageBubble = ({
  type,
  content,
  timestamp,
}: {
  type: 'incoming' | 'outgoing';
  content: string;
  timestamp: string;
}) => {
  const bubblePlacement = type === 'outgoing' ? 'row-reverse' : 'row';
  const bubbleColor = type === 'outgoing' ? 'primary.main' : '#f0f0f0';
  const textColor = type === 'outgoing' ? 'common.white' : 'text.primary';

  return (
    <Box sx={{ display: 'flex', flexDirection: bubblePlacement }}>
      <StyledTooltip
        title={timestamp}
        placement="left"
        enterDelay={400}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -12],
                },
              },
            ],
          },
        }}
      >
        <Box
          sx={{
            maxWidth: '70%',
            width: 'fit-content',
            px: 1.5,
            py: 1,
            my: 0.125,
            borderRadius: 4.5,
            bgcolor: bubbleColor,
          }}
        >
          <Typography variant="body1" color={textColor} fontWeight={500}>
            {content}
          </Typography>
        </Box>
      </StyledTooltip>
    </Box>
  );
};

export default Thread;
