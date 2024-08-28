import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ConfirmationDialogProps {
  open?: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
  actions: React.ReactNode;
  onClose: () => void;
  afterClose?: () => void;
}

const ConfirmationDialog = ({
  open = false,
  title,
  content,
  actions,
  onClose,
  afterClose,
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: { borderRadius: 3 },
      }}
      TransitionProps={{ onExited: afterClose }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.15rem',
          pt: 2.5,
          px: 3,
          pb: 2,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ textAlign: 'center', color: 'text.primary', px: 3 }}
          variant="body2"
        >
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions disableSpacing sx={{ pt: 1, pb: 2, px: 2 }}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
