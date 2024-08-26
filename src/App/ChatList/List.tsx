import {
  Avatar,
  IconButton,
  List as MuiList,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

import data from '../../shared/data/sample-data';

// const GROUP_AVATAR_SIZE = {
//   width: 32,
//   height: 32,
// };

// <AvatarGroup max={2}>
//   <Avatar
//     sx={{ ...GROUP_AVATAR_SIZE, marginTop: '5px' }}
//     src={data[0].picture.thumbnail}
//   />
//   <Avatar
//     sx={{ ...GROUP_AVATAR_SIZE, marginTop: '-5px' }}
//     src={data[1].picture.thumbnail}
//   />
// </AvatarGroup>

const StyledListItemText = styled(ListItemText)(() => ({
  '& .MuiListItemText-primary': {
    fontWeight: '500',
  },
}));

const List = () => {
  return (
    <MuiList sx={{ p: 0 }}>
      {data.map((d, i) => {
        const fullName = `${d.name.first} ${d.name.last}`;
        const { street, city, state } = d.location;
        const subtext = `${street.number} ${street.name} ${city}, ${state} `;

        return (
          <ListItem
            key={d.id.value}
            disablePadding
            secondaryAction={
              false ? (
                <Typography variant="caption">Thu 6/7</Typography>
              ) : (
                <IconButton edge="end" aria-label="delete">
                  <MoreVertIcon />
                </IconButton>
              )
            }
          >
            <ListItemButton
              sx={{ borderRadius: 3, pt: 1.25, pb: 1.25 }}
              selected={i === 1}
              onClick={() => console.log(i)}
            >
              <ListItemAvatar>
                <Avatar sx={{ width: 48, height: 48 }} src={d.picture.medium} />
              </ListItemAvatar>
              <StyledListItemText
                primary={fullName}
                secondary={subtext}
                secondaryTypographyProps={{ noWrap: true }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </MuiList>
  );
};

export default List;
