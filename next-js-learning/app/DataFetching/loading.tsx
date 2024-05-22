import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  return (
    <main>
      <SkeletonTheme baseColor="#990" highlightColor="#550">
        Loading....
        <Skeleton
          style={{ borderRadius: 10 }}
          count={9}
          height={10}
          duration={200}
          width={40}
        />
      </SkeletonTheme>
    </main>
  );
};

export default Loading;
