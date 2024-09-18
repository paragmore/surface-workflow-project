import { Suspense } from "react";
import { Spinner } from "./Spinner";

export const SuspenseWrapper = ({
  component,
  children,
}: {
  component?: React.JSX.Element;
  children?: React.JSX.Element;
}) => {
  const Component = component ?? children;

  return (
    <Suspense fallback={<Spinner />}>
      {Component && typeof window !== "undefined" && Component}
    </Suspense>
  );
};
