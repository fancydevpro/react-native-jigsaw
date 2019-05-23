import * as React from "react"
import { withTheme } from "../core/theming"
import { View, Text } from "react-native"
import Icon from "./Icon.js"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import Touchable from "./Touchable"

class RadioGroup extends React.Component {
  state = { selected: this.props.defaultSelection }

  onPress = label => {
    this.setState({ selected: label })
  }

  render() {
    const {
      style,
      direction,
      options,
      activeColor,
      inactiveColor,
      labelStyle,
      iconSize,
      contentColor,
      borderRadius,
      spacing,
      borderColor,
      theme: { colors }
    } = this.props

    const optionWidth = style.width / options.length
    const horizontalMargin = direction === "horizontal" ? spacing / 2 : 0
    const verticalMargin = direction === "vertical" ? spacing / 2 : 0

    return (
      <View
        style={{
          flexDirection: direction === "vertical" ? "column" : "row",
          alignItems: "center",
          borderRadius: spacing ? 0 : borderRadius,
          overflow: "hidden"
        }}>
        {options.map((option, index) => {
          const selected = option.label == this.state.selected
          return (
            <Touchable onPress={() => this.onPress(option.label)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected ? activeColor : inactiveColor,
                  height: style.height,
                  width: optionWidth,
                  borderLeftWidth: borderColor && index !== 0 ? 0.5 : 0,
                  borderRightWidth: borderColor && index !== options.length - 1 ? 0.5 : 0,
                  borderColor,
                  borderRadius: spacing ? borderRadius : 0,
                  marginLeft: horizontalMargin,
                  marginRight: horizontalMargin,
                  marginTop: verticalMargin,
                  marginBottom: verticalMargin
                }}>
                {option.icon ? (
                  <Icon name={option.icon} size={iconSize} color={contentColor} />
                ) : null}
                {option.label ? (
                  <Text style={[labelStyle, { color: contentColor }]}>{option.label}</Text>
                ) : null}
              </View>
            </Touchable>
          )
        })}
      </View>
    )
  }
}

export default withTheme(RadioGroup)

export const SEED_DATA = {
  name: "Radio Group",
  tag: "RadioGroup",
  category: COMPONENT_TYPES.formControl,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    direction: {
      label: "Horizontal/Vertical",
      description: "Whether the buttons should be Horizontal or Vertical",
      editable: true,
      required: true,
      type: FORM_TYPES.flatArray,
      value: "horizontal",
      options: ["horizontal", "vertical"]
    },
    activeColor: {
      label: "Active Color",
      description: "Color of the button when it's selected",
      editable: true,
      value: null,
      required: true,
      type: FORM_TYPES.color
    },
    inactivecolor: {
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      editable: true,
      value: null,
      required: true,
      type: FORM_TYPES.color
    },
    contentColor: {
      label: "Content Color",
      description: "Color of the content(Icon and Label)",
      editable: true,
      value: null,
      required: true,
      type: FORM_TYPES.color
    },
    borderColor: {
      label: "Border Color",
      description: "Border color of the option",
      editable: true,
      value: null,
      required: true,
      type: FORM_TYPES.color
    },
    labelStyle: {
      label: "Label Style",
      description: "Font and weight of the Label",
      editable: true,
      required: true,
      type: FORM_TYPES.typeStyle,
      value: null
    },
    spacing: {
      label: "Spacing",
      description: "The spacing between each option",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 20,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    },
    borderRadius: {
      label: "Border Radius",
      description: "The border radius for the container or options",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 100,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    },
    iconSize: {
      label: "Icon Size",
      description: "The size of the icon if enabled",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 50,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    }
  },
  layout: {
    width: 200,
    height: 40
  }
}
