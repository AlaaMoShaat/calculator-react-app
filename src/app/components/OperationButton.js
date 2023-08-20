import { ACTIONS } from '@/app/page';

function OperationButton ({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: {operation} }) }>{ operation }</button>
}

export default OperationButton;