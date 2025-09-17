import { unpurchaseData } from "../data";

export function action({ params }) {
  unpurchaseData(params.id);
}
