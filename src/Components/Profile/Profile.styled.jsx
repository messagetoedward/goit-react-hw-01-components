import styled from '@emotion/styled'

export const AvatarWrapper = styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
`;

export const AvatarImg = styled.img`
    border-radius: 50%;
    background-color: palegreen;
    margin-bottom: 25px;
`;

export const UserName = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 15px;
`;

export const Tag = styled.p`
    text-align: center;
    margin-bottom: 15px;
    color: #909CA8;
`;
export const Location = styled.p`
    text-align: center;
    color: #909CA8;
`;

export const StatsList = styled.ul`
    background-color: #E7ECF1;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-top: solid #909ca84f 1px;
`;

export const StatsListItem = styled.li`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    :nth-of-type(2n) {
        border-left: solid #909ca84f 1px;
        border-right: solid #909ca84f 1px;
    }
`;

export const StatsListTitle = styled.span`
    display: block;
    color: #909CA8;
    margin-bottom: 5px;
`;

export const StatsListStat = styled.span`
    font-weight: 700;
`;