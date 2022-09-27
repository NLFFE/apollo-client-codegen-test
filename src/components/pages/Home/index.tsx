import { useGetHistoriesQuery } from "graphql/generated/schema";

import { BasicTemplate } from "../../templates/BasicTemplate";

export default function Home() {
  const { data, loading } = useGetHistoriesQuery();

  if (loading) return <div>로딩중</div>;

  return <BasicTemplate>{data?.histories![0]?.id}</BasicTemplate>;
}
