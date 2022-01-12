import styled from '@emotion/styled'


export const FriendsListItem = styled.li`
    display: flex;
    align-items: center;
    height: 70px;
    max-width: 100%;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 15px;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,.25));
    background-color: #ffffff;
`;

export const IsOnlineTrue = styled.span`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background: green;
`;

export const IsOnlineFalse = styled.span`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 50%;
    background: red;
`;

export const Avatar = styled.img`
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #909ca849;
    border-radius: 6px;
`;

export const Name = styled.p`
    padding-left: 10px;
    font-size: 22px;
`;

