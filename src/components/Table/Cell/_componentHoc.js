import React from 'react';
const componentHoc = (Component, props = {}) => {
  return class ComponentHoc extends React.Component {
    render() {
      return (
        <Component {...props}/>
      )
    }
  }
}

export default componentHoc
