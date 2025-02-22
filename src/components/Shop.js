import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'

const Shop = () => {
    const balance = useSelector(state => state.amount)

    const dispatch = useDispatch();
    const { depositmoney, withdrawmoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <div className="container">
                <h2>
                    Balance of your Account
                </h2>
                <button className="btn btn-primary mx-2" onClick={() => { (withdrawmoney(200)) }}>
                    -
                </button><h4>{balance}</h4><button className="btn btn-primary mx-2" onClick={() => { (depositmoney(200)) }}>+

                </button>
            </div>
        </>
    )
}

export default Shop