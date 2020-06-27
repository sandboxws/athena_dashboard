/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-undef */
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

export default function operationColor(operation: string): SemanticCOLORS {
  const colorsMap = new Map<string, SemanticCOLORS>();
  colorsMap.set("find", "orange");
  colorsMap.set("SELECT", "orange");
  colorsMap.set("insert", "purple");
  colorsMap.set("INSERT", "purple");
  colorsMap.set("update", "teal");
  colorsMap.set("UPDATE", "teal");
  colorsMap.set("distinct", "yellow");
  colorsMap.set("delete", "red");
  colorsMap.set("aggregate", "blue");
  colorsMap.set("count", "violet");
  colorsMap.set("getMore", "pink");

  return colorsMap.get(operation)!;
}
