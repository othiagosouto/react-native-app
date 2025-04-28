import { Text } from 'react-native';

interface EmptyMessageProps {
  searchText: string;
}

export const EmptyMessage = ({ searchText }: EmptyMessageProps) => {
  const emptyMessage =
    searchText.length > 0
      ? `No search results for '${searchText}'`
      : 'No lotteries available :(';

  return <Text>{emptyMessage}</Text>;
};
