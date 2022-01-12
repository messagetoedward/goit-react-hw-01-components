import styled from '@emotion/styled'

export const TableWrapper = styled.div`
    margin-left: 5px;
    margin-right: 5px;
    padding-bottom: 15px;
`

export const Table = styled.table`
    border-radius: 4px;
    border-spacing: 0px;
    width: 100%;
    /* text-align: center; */
    background-color: #ffffff;
    filter: drop-shadow(0 2px 2px rgba(0,0,0,.25));
`

export const TrHead = styled.tr`
    color: #FFFFFF;
`

export const Th = styled.th`
    height: 2.3rem;
    display: table-cell;
    text-align: center;
    background-color: #00C0D6;
    text-transform: uppercase;
    font-weight: 400;
    :nth-of-type(1) {
        border-radius: 4px 0 0 0;
    }
    :nth-of-type(2n) {
        border-left: solid #FFFFFF 1px;
        border-right: solid #FFFFFF 1px;
    }
    :nth-of-type(3) {
        border-radius: 0 4px 0 0;
    }
`

export const TableBody = styled.tbody`
    /* text-align: center; */
`

export const TrBody = styled.tr`
    height: 2.3rem;
    color: #909CA8;
    font-weight: 400;
    :nth-of-type(2n) {
        background-color: #ECF1F3;
    }
`

export const TdType = styled.td`
    /* text-align: end; */
    padding-left: 10%;
`

export const TdAmount = styled.td`
    /* text-align: end; */
    text-align: right;
    padding-right: 10%;
    border-left: solid #909ca84f 1px;
    border-right: solid #909ca84f 1px;
`

export const TdCurrency = styled.td`
    /* text-align: end; */
    text-align: center;
`

