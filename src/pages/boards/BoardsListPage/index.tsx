import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

export function BoardsListPage() {
  return <div>
    Boards list
    <Link to={href(ROUTES.BOARD, {id: '1'})}>Board 1</Link>
  </div>;
}