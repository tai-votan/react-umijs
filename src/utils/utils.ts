import { getLocale } from "umi";

type keyCurrency = "vi-VN" | "en-US";

const currency: { [key in keyCurrency]: string } = {
  "vi-VN": "VND",
  "en-US": "USD",
};

export function formatMoney(number: number) {
  return new Intl.NumberFormat(getLocale(), {
    style: "currency",
    currency: currency[getLocale() as keyCurrency],
  }).format(number);
}

export function stripHTML(str: string | undefined = "") {
  return str
    .replace(/<[^>]+>/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

export function removeUnicode(str: string) {
  return stripHTML(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d");
}

export function toSlug(str: string) {
  return removeUnicode(str)
    .replace(/([^0-9a-z-\s])/g, "-")
    .replace(/(\s+)/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const truncateWords = (str: string, number = 10) => {
  const arrayWords = stripHTML(str).trim().split(" ");
  return arrayWords.splice(0, number).join(" ") + "...";
};

export const removeEmptyParams = (obj: {
  [key: string]: string | undefined | null | boolean;
}) => {
  return Object.values(obj).filter(
    (value: any) => !["", undefined, null].includes(value),
  );
};
