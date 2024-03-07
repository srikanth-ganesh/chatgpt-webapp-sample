import * as React from "react";
import { useState } from "react";
import {
  Dropdown,
  IDropdownProps,
  Stack,
  IconButton,
  Icon
} from "@fluentui/react";

interface Props {
    onHandleSelection: (selectedOption: string) => void;
}

export const SolutionDropdown = (props:Props) => {
  const [selected, setSelected] = useState({ key: "createJira" });

  const onClear = () => {
    setSelected({ key: "createJira" });
    console.log("clicked");
  };

  const handleSelection = (e:any, opt:any, index:any) => {
    setSelected(opt);
    props.onHandleSelection(opt.key)
    console.log("option slected is-> ",opt.key);
  };

  return (
    <div style={{ position: "relative" }}>

      <Dropdown
        label={"Select a solution..."}
        styles={{
          root: {
            // width: "400px"
          }
        }}
        options={[
          { text: "Create Jira", key: "createJira" },
          { text: "Grammar Checker", key: "grammarCheck" }
        ]}
        onChange={handleSelection}
        selectedKey={selected.key}
        onRenderCaretDown={(event) => {
          return (
            <Stack horizontal verticalAlign={"center"}>
              {!!selected.key && (
                <Icon
                  iconName={"Cancel"}
                  styles={{
                    root: {
                      color: "rgb(96, 94, 92)",
                      paddingRight: ".7em",
                      "&:hover": {
                        fontWeight: 800
                      }
                    }
                  }}
                  onClick={(event:any) => {
                    event.stopPropagation();
                    onClear();
                  }}
                />
              )}
              <Icon
                iconName={"ChevronDown"}
                styles={{
                  root: {
                    color: "rgb(96, 94, 92)",
                    "&:hover": {
                      fontWeight: 800
                    }
                  }
                }}
                onClick={(event:any) => event.currentTarget.parentNode.onClick}
              />
            </Stack>
          );
        }}
      />
    </div>
  );
};

//export default SolutionDropdown;
