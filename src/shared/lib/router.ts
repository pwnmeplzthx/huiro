/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LazyRouteFunction, RouteObject } from "react-router-dom";

export const lazyRoute: (importFn: () => Promise<unknown>) => LazyRouteFunction<RouteObject> = 
  (importFn) => async () => {
    const module = await importFn();
    return {
      Component: (module as any).default || Object.values(module as any)[0]
    };
  };