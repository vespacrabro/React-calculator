import { ACTIONS } from "../App"

// dispatch - so I can call reducer from here
export default function DigitButton({dispatch, digit}) {
// return button
return <button onClick = {() => dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
}