import { getStatsAction, getChartsDataAction } from "@/utils/actions";

const StatsPage = async () => {
  //   const stats = await getStatsAction();
  const charts = await getChartsDataAction();
  console.log(charts);

  return <div className="text-4xl">StatsPage</div>;
};

export default StatsPage;
