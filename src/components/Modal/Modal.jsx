// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

// const { Component } = require("react");

// import { Box, ModalContent } from './Modal.styled';

// const modalRoot = document.querySelector('#ModalRoot');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { url, alt } = this.props;
//     // const { handleBackdropClick } = this;
//     return createPortal(
//       <Box onClick={this.handleBackdropClick} >
//         <ModalContent>
//           <img src={url} alt={alt} />
//         </ModalContent>
//       </Box>,
//       modalRoot
//     );
//   }
// }
// Box.propTypes = {
 
//   onClick: PropTypes.func.isRequired,
// };


import React, { Component } from "react";
import './Modal.styled'
import { Box, ModalContent } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
  if (e.code === 'Escape') {
        this.props.onClose();
    }
  }

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };


  render() {const { url, alt } = this.props;
    // const { handleBackdropClick } = this;
    return (createPortal(<Box onClick={this.handleBackdropClick}>
        <ModalContent>
          <img src={url} alt={alt} />
        </ModalContent>
      </Box>,
      modalRoot)
    );
  }
}

Box.propTypes = {
 
  onClick: PropTypes.func.isRequired,
};



