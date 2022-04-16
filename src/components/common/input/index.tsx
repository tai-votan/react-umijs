import React from "react";
import { useIntl } from "umi";

interface InputProps {
  placeholderId: string;
}

export const Input = (props: InputProps) => {
  const { placeholderId } = props;
  const { formatMessage } = useIntl();
  return (
    <input
      className={
        "leading-6 bg-slate-50 w-full py-2 px-4 rounded-full border border-solid border-slate-200 focus:border-blue-500 focus:bg-white"
      }
      placeholder={formatMessage({ id: placeholderId })}
    />
  );
};
