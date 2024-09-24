import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)(({ theme }) => ({
  '&': {
    borderRadius: 25,
    backgroundColor: theme.palette.grey[100],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  '&.MuiInputBase-multiline': {
    padding: 0,
  },
  '&.MuiInputBase-adornedStart': {
    paddingLeft: 10,
  },
  '& .MuiInputAdornment-root': {
    color: theme.palette.grey[600],
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[500],
    }),
  },
  '& .MuiInputBase-input': {
    padding: '7px 10px',
  },
  '& .MuiInputBase-inputAdornedStart': {
    paddingLeft: 0,
  },
}));

interface InputProps extends InputBaseProps {
  showSearchIcon?: boolean;
}

const Input = ({ showSearchIcon = false, ...props }: InputProps) => (
  <StyledInput
    {...props}
    startAdornment={
      showSearchIcon ? (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ) : undefined
    }
  />
);

export default Input;
