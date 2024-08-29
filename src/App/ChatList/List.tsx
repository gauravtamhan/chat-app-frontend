import { Box, List as MuiList, Typography } from '@mui/material';
import React from 'react';

interface ListProps<T> {
  data: T[];
  renderListItem: (item: T) => React.ReactNode;
  ListHeaderComponent?: React.ReactNode;
  ListEmptyComponent?: React.ReactNode;
}

const List = <T,>({
  data = [],
  renderListItem,
  ListHeaderComponent = null,
  ListEmptyComponent = null,
}: ListProps<T>) => {
  return (
    <MuiList sx={{ p: 0, mx: -1 }}>
      {ListHeaderComponent}
      {data.map((d) => renderListItem(d))}
      {data.length === 0 && ListEmptyComponent}
    </MuiList>
  );
};

export interface ListEmptyProps {
  primaryText: string;
  secondaryText?: string;
}

export const ListEmpty = ({ primaryText, secondaryText }: ListEmptyProps) => (
  <Box sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="body1" fontWeight={500}>
      {primaryText}
    </Typography>
    {secondaryText && (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {secondaryText}
      </Typography>
    )}
  </Box>
);

export default List;
