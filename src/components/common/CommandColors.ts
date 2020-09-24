/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-undef */
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

export default function operationColor(operation: string): SemanticCOLORS {
  const colorsMap = new Map<string, SemanticCOLORS>();
  colorsMap.set("find", "purple");
  colorsMap.set("SELECT", "purple");
  colorsMap.set("insert", "orange");
  colorsMap.set("INSERT", "orange");
  colorsMap.set("update", "teal");
  colorsMap.set("UPDATE", "teal");
  colorsMap.set("distinct", "yellow");
  colorsMap.set("delete", "red");
  colorsMap.set("aggregate", "green");
  colorsMap.set("count", "blue");
  colorsMap.set("getMore", "pink");

  return colorsMap.get(operation)!;
}
