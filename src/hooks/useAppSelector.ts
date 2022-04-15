import { useSelector } from "umi";
import { TypedUseSelectorHook } from "react-redux";
import { AppStates } from "@/interfaces";

export const useAppSelector: TypedUseSelectorHook<AppStates> = useSelector;
