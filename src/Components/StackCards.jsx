import React from 'react'

const StackCards = () => {
    return (
        <>
            <div className='container card__container' style={{visibility:'hidden'}}>
                <h1><span className="text-white">Stake <span className='text-red'>ETHEREUM</span></span></h1>
                <div className='row py-4 justify-content-center gap-3 card__row'>
                    <div className='col-lg-4'>
                        <div className='stack-cards'>
                            <h4 className='text-white'>Stake ETHEREUM</h4>
                            <h5 className='text-white mb-3'>Available to Stake: 0.0 ETHEREUM</h5>
                            <input type="text" placeholder='Amount to Stake' className='form-control' />
                            <div className='d-flex gap-2 mt-2 pt-2'>
                                <button className='btn theme-btn text-white' style={{ width: '50%' }}>Max</button>
                                <button className='btn theme-btn-white' style={{ width: '50%', color: '#FFF' }}>Stake ETHEREUM</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='stack-cards'>
                        <h4 className='text-white'>Unstake ETHEREUM</h4>
                            <h5 className='text-white mb-3'>Available to Stake: 0.0 ETHEREUM</h5>
                            <input type="text" placeholder='Amount to Stake' className='form-control' />
                            <div className='d-flex gap-2 mt-2 pt-2'>
                                <button className='btn theme-btn text-white' style={{ width: '50%' }}>Max</button>
                                <button className='btn theme-btn-white' style={{ width: '50%', color: '#FFF' }}>Withdraw</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <h5 className='text-red'>Claim Schizocurrency</h5>
                        <h3><span className="text-white">You can claim: 0.0 Schizocurrency</span></h3>
                        <button className='btn theme-btn text-white mx-auto mt-3' style={{ width: '200px' }}>Claim</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StackCards