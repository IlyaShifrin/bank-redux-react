import {useState} from "react";
import {deposit, withDraw} from "../actions/accountActions.js";
import {store} from "../configureStore/store.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className={'flex justify-center'}>
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                onClick={() => dispatch(withDraw(sum))}>Withdraw</button>
            <input
                className={'text-center border rounded-lg'}
                type={'number'}
                onChange={e => setSum(+e.target.value)}
                value = {sum}
            />
            <button
                className={'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;