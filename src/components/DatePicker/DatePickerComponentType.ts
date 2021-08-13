import { IOSNativeProps, AndroidNativeProps, WindowsNativeProps } from "@react-native-community/datetimepicker";
import theme from "../../styles/DefaultTheme";

export type DatePickerComponentProps = IOSNativeProps & AndroidNativeProps & WindowsNativeProps & {
  value: Date;
  onChange: (e: any, data?: any) => void;
  mode: "date" | "time" | "datetime";
  toggleVisibility: () => void;
  isVisible?: boolean;
  theme?: typeof theme;
};
