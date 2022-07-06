import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { withTheme } from "../core/theming";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

interface Props {
  titleTypeStyle?: StyleProp<TextStyle>;
  titleColor?: string;
  subtitleTypeStyle?: StyleProp<TextStyle>;
  subtitleColor?: string;
  title?: string;
  subtitle?: string;
  multilineSubtitle?: boolean;
  image?: string;
  right?: () => React.ReactNode;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
}

const Row: React.FC<Props> = ({
  titleTypeStyle,
  titleColor,
  subtitleTypeStyle,
  subtitleColor,
  title,
  subtitle,
  multilineSubtitle,
  image,
  right,
  style,
  theme: { spacing },
}) => {
  return (
    <View style={[styles.container, { padding: spacing.large }, style]}>
      <View style={styles.leftContainer}>
        {image && (
          <Image
            source={typeof image === "string" ? { uri: image } : image}
            style={{
              marginRight: spacing.medium,
              width: subtitle
                ? Config.rowMultiLineImageSize
                : Config.rowSingleLineImageSize,
              height: subtitle
                ? Config.rowMultiLineImageSize
                : Config.rowSingleLineImageSize,
            }}
          />
        )}
        <View style={styles.textContainer}>
          <Text
            style={[
              titleTypeStyle,
              {
                color: titleColor,
              },
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text
              style={[
                subtitleTypeStyle,
                {
                  color: subtitleColor,
                  marginTop: spacing.text,
                },
              ]}
              numberOfLines={multilineSubtitle ? undefined : 1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {right && right()}
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withTheme(Row);
