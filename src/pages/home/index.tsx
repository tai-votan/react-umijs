import { Alert, Button } from "antd";
import { useDispatch, useIntl } from "umi";
import { useAppSelector } from "@/hooks";

function IndexPage() {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const { count } = useAppSelector(({ home }) => home);

  const handleUpdateCount = () => {
    dispatch({
      type: "home/updateCount",
      payload: {
        count: count + 1,
      },
    });
  };

  const handleResetCount = () => dispatch({ type: "home/resetCount" });

  return (
    <>
      <Alert message={formatMessage({ id: "antd" })} />
      <div>{count}</div>
      <Button onClick={handleUpdateCount}>Click</Button>
      <Button onClick={handleResetCount}>reset</Button>
    </>
  );
}

export default IndexPage;
