import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div
      id={props.contact1Id}
      className="contact1-thq-contact20-elm thq-section-padding"
    >
      <div className="contact1-thq-max-width-elm thq-section-max-width">
        <div className="contact1-thq-content-elm1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact1-thq-contact-info-elm1">
            <div className="contact1-thq-content-elm2">
              <h3 className="contact1-thq-text-elm1 thq-heading-3">Email</h3>
              <p className="contact1-thq-text-elm2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact1-text3">
                      Contact us for a quote or more information
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-thq-email-elm thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact1-text1">contact@brtx.pl</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact1-thq-content-elm3">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact1-thq-contact-info-elm2">
            <div className="contact1-thq-content-elm4">
              <h3 className="contact1-thq-text-elm3 thq-heading-3">Telefon</h3>
              <p className="contact1-thq-text-elm4 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="contact1-text2">
                      We are available Monday to Friday, from 9am to 5pm
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-thq-phone-elm thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact1-text4">+48 123 456 789</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  email1: undefined,
  content2: undefined,
  content1: undefined,
  phone1: undefined,
  contact1Id: '',
}

Contact1.propTypes = {
  email1: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  phone1: PropTypes.element,
  contact1Id: PropTypes.string,
}

export default Contact1
