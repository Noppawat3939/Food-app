import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    align-items: ${({ali}) => ali || 'center'};
    justify-content: ${({jusc}) => jusc || 'center'};
    flex-direction: ${({flexd}) => flexd || 'row'};
    margin-bottom: ${({marb}) => marb || '0'};
`;