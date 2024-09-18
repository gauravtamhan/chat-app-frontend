import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const StyledInput = styled(InputBase)(() => ({
  '&': {
    borderRadius: 25,
    backgroundColor: 'rgba(134, 142, 153, 0.1)',
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
