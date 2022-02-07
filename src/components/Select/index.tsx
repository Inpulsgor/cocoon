import React, { FC, useCallback, useMemo, useState } from "react";

import Shevron from "@images/icons/arrow_light.svg";

import {
  wrapper,
  wrapperSmall,
  select,
  selectSmall,
  selectTitle,
  selectContent,
  isSelectOpened,
  selectLabel,
} from "./Select.module.scss";

import {
  OPTIONS_MOCK,
  SMALL_OPTIONS_MOCK,
  PLACEHOLDER,
  SMALL_PLACEHOLDER,
} from "./Select.helpers";

type Props = {
  label?: string;
  type?: string;
};

const Select: FC<Props> = ({ label, type = "default" }) => {
  const [isOpened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );

  const isSmall = type === "small";

  const onSelect = () => {
    setOpened(!isOpened);
  };

  const onSetSelectedItem = useCallback(
    (value: string) => {
      setSelectedItem(value);
      setOpened(false);
    },
    [setSelectedItem, setOpened]
  );

  const selectWrapperClassName = useMemo(() => {
    return `${wrapper} ${isSmall && wrapperSmall}`;
  }, [isSmall]);

  const selectClassName = useMemo(() => {
    return `${select} ${isOpened && isSelectOpened} ${isSmall && selectSmall}`;
  }, [isOpened, isSmall]);

  const options = isSmall ? SMALL_OPTIONS_MOCK : OPTIONS_MOCK;

  const placeholder = isSmall ? SMALL_PLACEHOLDER : PLACEHOLDER;

  return (
    <>
      {label && <p className={selectLabel}>{label}</p>}
      <div className={selectWrapperClassName}>
        <div onClick={onSelect} className={selectClassName}>
          <p className={selectTitle}>{selectedItem || placeholder}</p>
          <img src={Shevron} alt="dropdown" />
        </div>
        {isOpened && (
          <div className={selectContent}>
            <ul>
              {options.map((option) => (
                <li
                  key={option.id}
                  onClick={() => {
                    onSetSelectedItem(option.value);
                  }}
                >
                  <p>{option.title}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
