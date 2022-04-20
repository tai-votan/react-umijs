import React, { useEffect, useMemo } from "react";
import { Helmet, useParams, useDispatch } from "umi";
import { useAppSelector } from "@/hooks";

const Product = () => {
  const { campaign } = useParams<{ campaign: string }>();
  console.log(`Func: Product - PARAMS: campaign`, campaign);
  const dispatch = useDispatch();
  const {
    post: { postDetails },
  } = useAppSelector(({ post }) => ({ post }));
  console.log(`Func: Product - PARAMS: postDetails`, postDetails);

  useEffect(() => {
    dispatch({
      type: "post/getPost",
      payload: campaign,
    });
  }, [campaign]);

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
          href="https://react-umijs.vercel.app/c/campaign"
        />
        <meta property="description" content={seoData.description} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:image" content={seoData.thumbnail} />
        <meta property="og:type" content="website" />
      </Helmet>
    </div>
  );
};

export default Product;
