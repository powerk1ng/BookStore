import { Text as RNText, View } from 'react-native';

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <RNText>{children}</RNText>
    </View>
  );
};

export default Text;
