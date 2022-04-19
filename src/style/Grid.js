import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(${({minmax}) => minmax || '350px'}, 1fr));
`;