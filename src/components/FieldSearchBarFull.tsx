import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import Icon from "./Icon";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  icon?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
  onChange: (text: string) => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  value: string;
};

const FieldSearchBarFull: React.FC<Props> = ({
  icon = "search",
  placeholder = "",
  style,
  theme: { colors, spacing, typography },
  onChange: changeOverride,
  onSubmit: submitOverride,
  value,
}) => {
  const [focused, setIsFocused] = React.useState(false);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChange = (text: string) => {
    changeOverride && changeOverride(text);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    submitOverride && submitOverride(e);
  };

  const { lineHeight, ...typeStyles } = typography.body2; // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <View style={[{ padding: spacing.large }, styles.container, style]}>
      <Icon
        name={icon}
        size={Config.fieldSearchBarFullIconSize}
        color={focused ? colors.primary : colors.light}
      />
      <View style={{ marginLeft: spacing.medium, flex: 1 }}>
        <TextInput
          clearButtonMode="while-editing"
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          placeholderTextColor={colors.light}
          style={[
            {
              color: colors.medium,
            },
            typeStyles,
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default withTheme(FieldSearchBarFull);

export const SEED_DATA = [
  {
    name: "Search Bar",
    tag: "FieldSearchBarFull",
    description: "A search bar with accompanying search icon and clear button.",
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Field_SearchBar_Full.png",
    supports_list_render: false,
    props: {
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Left icon to display",
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
        editable: true,
        required: false,
      },
      placeholder: {
        group: GROUPS.basic,
        label: "Placeholder",
        description: "Input placeholder text",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "Search for...",
        editable: true,
        required: false,
      },
      onSubmit: {
        group: GROUPS.basic,
        label: "Submit action",
        description: "Action to execute on submission",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "searchBarValue",
      },
    },
    layout: {},
  },
];
