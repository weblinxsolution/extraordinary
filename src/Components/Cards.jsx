import React from 'react'
import Coin1 from '/templates/images/download.jpg'
import Coin2 from '/templates/images/media.jpg'


const Cards = () => {
  return (
    <>
      <section className='nft-card'>
        <div className='container mb-5'>
          <h2 className='text-start'><span className="text-white mb-0">Coin</span> <span className="text-red">Market Cap</span></h2>
          <p className="text-white text-start fs-4" style={{ fontWeight: 200 }}>View Market Stakes</p>
          <div className='row py-5 justify-content-center gap-4'>
            <div className='col-lg-3 col-md-6'>
              <div className='coin-card'>
                <div className='coin-box'>
                  <div className='coin-box-img'>
                    <img src={Coin1} alt="image" />
                  </div>
                  <div className='py-3'>
                    <h5 className='text-white mb-3'>HarryPotterObamaSonic10Inu</h5>
                    <a href='https://coinmarketcap.com/currencies/harrypotterobamasonic10inu-eth/' className='btn theme-btn w-75 text-white' target='_blank'>View</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='coin-card'>
                <div className='coin-box'>
                  <div className='coin-box-img'>
                    <img src={Coin2} alt="image" />
                  </div>
                  <div className='py-3'>
                    <h5 className='text-white mb-3'>VoldemortTrumpRobotnik-10Neko</h5>
                    <a href='https://coinmarketcap.com/currencies/voldemorttrumprobotnik-10neko/' className='btn theme-btn w-75 text-white' target='_blank'>View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards