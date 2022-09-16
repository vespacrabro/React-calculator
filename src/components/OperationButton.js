import { ACTIONS } from "../App";

// dispatch - so I can call reducer from here
export default function OperationButton({ dispatch, operation }) {
  // return button
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
