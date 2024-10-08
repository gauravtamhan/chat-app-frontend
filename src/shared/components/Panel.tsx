import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

const BasePanel = styled(Paper)(({ theme }) => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: theme.spacing(1.5),
    boxShadow: '0 6px 20px rgba(0,0,0,.04), 0 30px 40px -15px rgba(0,0,0,.06)',
  };
});

interface PanelProps {
  header?: React.ReactNode;
  enableHeaderShadow?: boolean;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

function getOptionalShadow(
  mode: 'light' | 'dark',
  enableHeaderShadow: boolean
) {
  const alpha = mode === 'light' ? 0.2 : 0.5;
  return enableHeaderShadow ? `0 0 4px rgba(0, 0, 0, ${alpha})` : 'initial';
}

const Panel = ({
  header = null,
  enableHeaderShadow = false,
  body = null,
  footer,
}: PanelProps) => {
  return (
    <BasePanel>
      <Box
        sx={(theme) => ({
          px: 2,
          py: 1.25,
          minHeight: 60,
          boxShadow: getOptionalShadow('light', enableHeaderShadow),
          ...theme.applyStyles('dark', {
            boxShadow: getOptionalShadow('dark', enableHeaderShadow),
          }),
        })}
      >
        {header}
      </Box>
      <Box sx={{ px: 2, py: 1.25, overflowY: 'auto', flex: 1 }}>{body}</Box>
      {footer && <Box sx={{ px: 2, py: 1.5 }}>{footer}</Box>}
    </BasePanel>
  );
};

export default Panel;
