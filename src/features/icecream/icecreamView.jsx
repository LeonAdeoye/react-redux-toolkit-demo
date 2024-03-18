import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () =>
{
    const numberOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();
    const [restockValue, setRestockValue ] = useState(1)
    return (
        <div>
            <h2>Number of ice creams - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <input type="number" value={restockValue} onChange={(e) => setRestockValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(restockValue))}>Restock ice creams</button>
        </div>
    );
}
