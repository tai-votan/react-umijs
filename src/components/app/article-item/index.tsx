import React from "react";
import { Avatar } from "antd";
import { useIntl } from "umi";
import type { IFeed } from "@/interfaces";

export const ArticleItem = (props: IFeed) => {
  const { formatMessage, formatPlural } = useIntl();

  const { author, title, brief, coverImage, views } = props;
  return (
    <article className="p-5 space-y-4 border-solid border-slate-200">
      <div className="flex items-center space-x-2">
        <div className="text-sm font-medium rounded-full border border-solid border-slate-200 leading-3 flex overflow-hidden">
          <Avatar src={author.photo} size={40} />
        </div>
        <div className="flex flex-col leading-snug">
          <div className="text-sm font-medium text-current hover:text-current">
            {author.name}
          </div>
          <span className="text-xs text-gray-500">
            {formatMessage({ id: formatPlural(views) }, { view: views })}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap space-y-4 lg:space-y-0">
        <div className="lg:w-auto lg:flex-1 pr-0 lg:pr-5 space-y-1">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className={"text-sm text-gray-600 mb-4"}>{brief}</p>
        </div>
        {coverImage && (
          <div className={"block lg:w-1/3 leading-none"}>
            <img
              src={coverImage}
              alt={title}
              className="rounded-md aspect-video object-cover"
            />
          </div>
        )}
      </div>
    </article>
  );
};
