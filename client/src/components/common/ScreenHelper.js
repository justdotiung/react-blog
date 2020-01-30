import React from 'react';
import styled from 'styled-components';

const ScreenHelperBlock = styled.div`
width: 1024;
margin: 0 auto;

@media (max-width: 1024px) {
    width: 768px;
}

@media (max-width: 768px) { 
    width: 100%;
}

@media (max-width: 370px) {
      width:350px;
  }

`;

const ScreenHelper = ({children, ...porps}) => {
    return (
        <ScreenHelperBlock {...porps}>
            {children}
        </ScreenHelperBlock>
    );
};

export default ScreenHelper;