import React from 'react'
import { myInvoice } from '../../../assets/data'
import { AnimatePresence, motion } from 'framer-motion'
const PaymentHistory = () => {
    const boxVariant = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
        },
      },
    }
    const listVariant = {
      hidden: {
        x: 100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        staggerChildren: 1,
        transition: {
          duration: 1,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        },
      },
    }
  return (
    <AnimatePresence>
      <motion.div
        className='payment-wrapper'
        key='modal'
        initial={{ opacity: 0, scaleY:0 }}
        animate={{ opacity: 1, scaleY:1 }}
        transition={{duration:.5}}
        exit={{ opacity: 0 }}
      >
        <div className='payment-title'>
          <h2>Payment History</h2>
          <div className='payment-options'>
            <button>
              Week
              <i className='fa-solid fa-chevron-down' />
            </button>
          </div>
        </div>
        <motion.div className='invoice' key='list' variants={boxVariant}>
          {myInvoice.map((data, index) => {
            return (
              <a
                key={index}
                variants={listVariant}
                initial='hidden'
                whileInView='visible'
              >
                <p>
                  Invoice <span>{data.invoice}</span>
                </p>
                <p>{data.price}</p>
                <p>{data.date}</p>
                <p>
                  {data.status}{' '}
                  <div
                    className='invoice-dot'
                    style={{
                      backgroundColor:
                        data.status === 'Completed'
                          ? 'green'
                          : data.status === 'Pending'
                          ? 'yellow'
                          : 'red',
                    }}
                  />
                </p>
              </a>
            )
          })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PaymentHistory
