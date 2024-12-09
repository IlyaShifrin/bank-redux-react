import {useState} from "react";
import {useDispatch} from "react-redux";
import {deposit, withdraw} from "../features/account/balanceSlice.js";
import {fetchQuote} from "../features/api/quoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <>
            <div className={'flex justify-center'}>
                <button
                    className={'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                    onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input
                    className={'text-center border rounded-lg'}
                    type={'number'}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                />
                <button
                    className={'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg text-lg'}
                    onClick={() => dispatch(deposit(sum))}>
                    Deposit
                </button>
            </div>
            <div className={'flex justify-center'}>
                <button
                    onClick={() => dispatch(fetchQuote())}
                    className={'ml-7 bg-blue-300 hover:bg-blue-600 text-white font-bold py-2 px-9 rounded-md mt-1'}
                >Get Quote</button>
            </div>
        </>

    );
};

export default Operation;