import * as React from "react";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

import Row from "./Row";
import Icon from "./Icon";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { StyleProp, ViewStyle } from "react-native";

interface Props {
  title?: string;
  image: string;
  subtitle?: string;
  multilineSubtitle?: boolean;
  icon: string;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
}

const RowHeadlineImageIcon: React.FC<Props> = ({
  title,
  image,
  subtitle,
  multilineSubtitle = false,
  icon,
  style,
  theme: { colors, typography, spacing },
}) => {
  return (
    <Row
      titleTypeStyle={typography.headline6}
      titleColor={colors.strong}
      subtitleTypeStyle={typography.body2}
      subtitleColor={colors.medium}
      title={title}
      subtitle={subtitle}
      multilineSubtitle={multilineSubtitle}
      image={image}
      right={() => (
        <Icon
          name={icon}
          size={
            multilineSubtitle
              ? Config.rowMultiLineIconSize
              : Config.rowSingleLineIconSize
          }
          color={colors.light}
          style={{
            marginLeft: spacing.large,
            alignSelf: multilineSubtitle ? "flex-start" : "center",
            marginTop: multilineSubtitle ? spacing.text : 0,
          }}
        />
      )}
      style={style}
    />
  );
};

export default withTheme(RowHeadlineImageIcon);

export const SEED_DATA = [
  {
    name: "Row Single Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Single Line Headline Icon Image",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image and headline text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_HeadlineIconImage.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.remoteImage,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Double Line Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_HeadlineImageIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        defaultValue: "San Diego",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.remoteImage,
        defaultValue: null,
        editable: true,
      },
    },
    layout: {},
  },
  {
    name: "Row Multiline Headline Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned headline text and multiline subtitle text and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      multilineSubtitle: {
        formType: FORM_TYPES.boolean,
        defaultValue: true,
        editable: false,
      },
    },
    layout: {},
  },
  {
    name: "Row Multiline Headline Image Icon",
    tag: "RowHeadlineImageIcon",
    description:
      "A row with left aligned image, headline text, and multiline subtitle text, and a right aligned icon",
    category: COMPONENT_TYPES.deprecated,
    preview_image_url: "{CLOUDINARY_URL}/Row_Multiline_HeadlineImageIcon.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Headline text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        value:
          "San Diego is a city on the Pacific coast of California known for its beaches, parks and warm climate",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      image: {
        label: "Image",
        description: "Image to display",
        formType: FORM_TYPES.remoteImage,
        defaultValue: null,
        editable: true,
      },
      multilineSubtitle: {
        formType: FORM_TYPES.boolean,
        defaultValue: true,
        editable: false,
      },
    },
    layout: {},
  },
];
