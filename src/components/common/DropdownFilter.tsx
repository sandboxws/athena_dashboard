import React, { SyntheticEvent } from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";

type Props = {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  type: string;
  items: string[] | undefined;
  selectedItems: string[] | undefined;
  selectedItemsName: string;
};

export default function DropdownFilter(props: Props) {
  const {
    items,
    selectedItems,
    selectedItemsName,
    setState,
    state,
    type,
  } = props;

  return (
    <Dropdown
      className="mr-5"
      options={items?.map((item) => ({
        key: item,
        value: item,
        text: item,
      }))}
      placeholder={`Filter ${type}`}
      search
      clearable
      multiple
      selection
      value={selectedItems}
      defaultValue={selectedItems}
      onChange={(_e: SyntheticEvent, optionsObj: DropdownProps) =>
        setState({
          ...state,
          activePage: 1,
          [selectedItemsName]: optionsObj.value as string[],
        })
      }
    />
  );
}
