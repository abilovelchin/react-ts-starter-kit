import React from "react";
import { useGetUserQuery } from "$services/user.service";

const DashboardIndex = () => {
  const { data, isLoading, isSuccess, isError } = useGetUserQuery();

  console.log(data);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h6 className="font-medium">React TS Starter Kit</h6>
      <span>
        by <span className="text-indigo-400">@abilovelchin</span>
      </span>
    </div>
  );
};

export default DashboardIndex;
