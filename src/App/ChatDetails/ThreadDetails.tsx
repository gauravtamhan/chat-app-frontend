import React, { useEffect, useRef } from 'react';
import {
  Box,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Thread } from '../../api/models';
import { formatDateString } from '../../shared/utils/date-formatter';

interface ThreadDetailsProps {
  threads: Thread[];
}

const ThreadDetails = ({ threads = [] }: ThreadDetailsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        block: 'end',
        inline: 'nearest',
      });
    }
  }, [threads]);

  return (
    <Box ref={containerRef}>
      {threads.map((t) => {
        return (
          <React.Fragment key={t.startedAt}>
            <DateBreak dateString={t.startedAt} />
            {t.messages.map((m) => (
              <MessageBubble
                key={m.id}
                timestamp={m.timestamp}
                type={m.type}
                content={m.content}
              />
            ))}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

const DateBreak = ({ dateString }: { dateString: string }) => {
  const date = formatDateString('thread-details', dateString);

  return (
    <Box sx={{ py: 2, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        {date}
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

  const time = formatDateString('tooltip', timestamp);

  return (
    <Box
      className={`bubble-${type}`}
      sx={{ display: 'flex', flexDirection: bubblePlacement }}
    >
      <StyledTooltip
        title={time}
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
          <Typography
            variant="body1"
            color={textColor}
            fontWeight={500}
            sx={{ whiteSpace: 'pre-line' }}
          >
            {content}
          </Typography>
        </Box>
      </StyledTooltip>
    </Box>
  );
};

export default ThreadDetails;
