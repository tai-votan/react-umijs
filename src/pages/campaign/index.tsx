import React, { useMemo } from "react";
import type { IGetInitialProps } from "umi";
import { Helmet, useParams, request } from "umi";
import type { IPost } from "@/models/post";

interface ICampaign {
  postDetails: IPost;
}

const Campaign = (props: ICampaign) => {
  const { campaign } = useParams<{ campaign: string }>();
  const { postDetails = {} as IPost } = props;
  console.log(`Func: Campaign - PARAMS: props`, props);

  const seoData = useMemo(
    () => ({
      thumbnail:
        "https://media.selly.vn/selly-release-files/md_thang-thuong-hieu-trieu-w.jpg",
      title: postDetails.title,
      description: (postDetails.body ?? "").replace(/\n/g, " "),
    }),
    [postDetails],
  );

  return (
    <div>
      <Helmet>
        <title>{seoData.title}</title>
        <link
          rel="canonical"
          href={`https://react-umijs.vercel.app/c/${campaign}`}
        />
        <meta property="description" content={seoData.description} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:image" content={seoData.thumbnail} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>title: {seoData.title}</div>
      <div>description: {seoData.description}</div>
    </div>
  );
};

Campaign.getInitialProps = (async (ctx) => {
  const {
    match: {
      params: { campaign },
    },
  } = ctx;
  const res = await request(`/posts/${campaign}`);
  return {
    postDetails: res,
  };
}) as IGetInitialProps;

export default Campaign;
