import styled from 'styled-components';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({rad}) => rad || '0'};
    transition: .3s ease-in-out;
`;