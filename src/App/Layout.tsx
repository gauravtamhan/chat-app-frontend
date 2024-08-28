import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const ContentArea = styled(Box)(({ theme }) => {
  return {
    minHeight: '100%',
    marginLeft: theme.spacing(2),
  };
});

interface ResponsiveLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  showRight: boolean;
}

const Layout = ({ left, right, showRight = false }: ResponsiveLayoutProps) => {
  const theme = useTheme();
  const isAboveSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: 2,
        paddingRight: 2,
        height: `calc(100vh - ${theme.spacing(4)})`,
      }}
    >
      <ContentArea
        sx={{
          flex: 1,
          maxWidth: isAboveSm ? 460 : '100%',
          width: (theme) => `calc(100% - ${theme.spacing(2)})`,
          minWidth: isAboveSm ? 320 : 'unset',
        }}
      >
        {!isAboveSm && showRight ? right : left}
      </ContentArea>
      {isAboveSm && <ContentArea sx={{ flex: 2 }}>{right}</ContentArea>}
    </Box>
  );
};

export default Layout;
