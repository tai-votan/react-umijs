import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "umi";
import InfiniteScroll from "react-infinite-scroll-component";

import { useAppSelector } from "@/hooks";
import { ArticleItem } from "@/components/app";

function IndexPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {
    home: { posts = [] },
    loading: { effects },
  } = useAppSelector(({ home, loading }) => ({ home, loading }));

  const getFeeds = useCallback(
    (curPage: number) => {
      dispatch({
        type: "home/getFeeds",
        payload: {
          page: curPage,
        },
      });
    },
    [dispatch],
  );

  useEffect(() => {
    getFeeds(page);
  }, []);

  const loadMoreFeed = () => {
    if (effects["home/getFeeds"]) {
      return;
    }
    setPage((prevState) => prevState + 1);
    getFeeds(page + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMoreFeed}
        hasMore
        loader={false}
        endMessage={false}
        className="bg-white border border-solid border-slate-200 rounded-t-md divide-y"
      >
        {posts.map((post) => (
          <ArticleItem {...post} key={post._id} />
        ))}
      </InfiniteScroll>
    </>
  );
}

export default IndexPage;
