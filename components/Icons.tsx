import { MaterialIcons } from "@expo/vector-icons";

export function AwesomeIcon(props: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
  }) {
    return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
  }