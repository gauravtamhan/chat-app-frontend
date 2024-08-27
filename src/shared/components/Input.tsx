import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)(({ theme }) => ({
  '&': {
    borderRadius: 25,
    // TODO: Do we want to handle theming?
    backgroundColor:
      theme.palette.mode === 'light' ? 'rgba(134, 142, 153, 0.1)' : '#1A2027',
  },
  '&.MuiInputBase-multiline': {
    padding: 0,
  },
  '&.MuiInputBase-adornedStart': {
    paddingLeft: 10,
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

const Input = ({
  startAdornment,
  showSearchIcon = false,
  ...props
}: InputProps) => (
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
