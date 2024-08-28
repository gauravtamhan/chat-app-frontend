import { Box, List as MuiList, Typography } from '@mui/material';

interface ListProps<T> {
  data: T[];
  starterContent?: React.ReactNode;
  renderListItem: (item: T) => React.ReactNode;
}

const List = <T,>({
  renderListItem,
  starterContent = null,
  data = [],
}: ListProps<T>) => {
  // TODO: Move to ChatList
  const Empty = (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="body1" fontWeight={500}>
        No results found
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This is only a sample feature so the searching functionality may be
        limited.
      </Typography>
    </Box>
  );

  return (
    <MuiList sx={{ p: 0, mx: -1 }}>
      {starterContent}
      {data.map((d) => renderListItem(d))}
      {data.length === 0 && Empty}
    </MuiList>
  );
};

export default List;
