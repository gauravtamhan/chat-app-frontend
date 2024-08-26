import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

const BasePanel = styled(Paper)(({ theme }) => {
  return {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: theme.spacing(1.5),
    boxShadow: '0 6px 20px rgba(0,0,0,.04), 0 30px 40px -15px rgba(0,0,0,.06)',
  };
});

interface PanelProps {
  header: React.ReactNode;
  enableHeaderShadow?: boolean;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

const Panel = ({
  header,
  enableHeaderShadow = false,
  body,
  footer,
}: PanelProps) => {
  return (
    <BasePanel>
      <Box
        sx={{
          px: 2,
          py: 1.25,
          boxShadow: enableHeaderShadow
            ? '0 0 4px rgba(0, 0, 0, 0.2)'
            : 'initial',
        }}
      >
        {header}
      </Box>
      <Box sx={{ p: 2 }}>{body}</Box>
      {footer && <Box sx={{ p: 2 }}>{footer}</Box>}
    </BasePanel>
  );
};

export default Panel;
