import React from 'react'
import Header from '../components/Header/index'

function wrapWithHeader(WrappedComponent) {
  return function WithHeader() {
    return (
      <>
        <Header />
        <div>
          <WrappedComponent />
        </div>
      </>
    )
  }
}

export default wrapWithHeader
