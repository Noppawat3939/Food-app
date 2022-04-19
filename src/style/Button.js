import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({bg}) => bg || 'orange'};
    padding: 8px 15px;
    border-radius: 30px;

    a {
        color: ${({color}) => color || '#fff'};
        text-transform: capitalize;
        font-weight: 600;
        font-size: 15px;
    }
`;