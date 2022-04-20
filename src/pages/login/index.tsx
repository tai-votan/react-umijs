import React, { useMemo } from "react";
import { Helmet, useIntl } from "umi";

const Login = () => {
  const { formatMessage } = useIntl();
  const seoData = useMemo(
    () => ({
      thumbnail:
        "https://media.selly.vn/selly-release-files/md_thang-thuong-hieu-trieu-w.jpg",
      title: "Tháng Thương Hiệu Triệu Ưu Đãi",
      description:
        "Tháng 4 chắc chắn không phải là lời nói dối mà là tháng thưởng đậm sâu đến từ các thương hiệu tại Selly nè!",
    }),
    [],
  );

  return (
    <div>
      <Helmet>
        <title>{formatMessage({ id: "site.login" })}</title>
        <link rel="canonical" href="https://react-umijs.vercel.app/login" />
        <meta property="description" content={seoData.description} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:image" content={seoData.thumbnail} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>title: {seoData.title}</div>
    </div>
  );
};

export default Login;
