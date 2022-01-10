import styled from '@emotion/styled'

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    color: #8c959f;
    margin-top: 25px;
    margin-bottom: 25px;
`;

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

export const StatsList = styled.ul`
    display: flex;
    text-align: center;
    flex-wrap: wrap;
`;

export const StatsListItem = styled.li`
    width: 96px;
    padding-top: 10px;
    padding-bottom: 10px;
        :nth-of-type(1) {
        background-color: #${randomColor()};
    };
        :nth-of-type(2) {
        background-color: #${randomColor()};
    };
        :nth-of-type(3) {
        background-color: #${randomColor()};
    };
        :nth-of-type(4) {
        background-color: #${randomColor()};
    };
        :nth-of-type(5) {
        background-color: #${randomColor()};
    };
`;

export const StatsLabel = styled.span`
    display: block;
    margin-bottom: 5px;
    color: #FFFFFF;
`;

export const StatsPercentage = styled.span`
    font-size: 26px;
    color: #FFFFFF;
`;