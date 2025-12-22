import { useParams } from "react-router-dom";

import type { PathParams, ROUTES } from "@/shared/model/routes";

export function BoardPage() {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();
  return <div>Board page {params.id}</div>;
}