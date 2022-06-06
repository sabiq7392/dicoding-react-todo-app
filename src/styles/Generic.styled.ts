import { CSSProperties } from "styled-components";
import STYLES_CONFIG from "./styles.config";

interface _GenericStyles {
  todosCard: CSSProperties;
}

const { color, spacing } = STYLES_CONFIG;

const GenericStyles: _GenericStyles = {
  todosCard: {
    background: color.dark,
    padding: spacing._6,
    borderRadius: 4,
  }
};

export default GenericStyles;
