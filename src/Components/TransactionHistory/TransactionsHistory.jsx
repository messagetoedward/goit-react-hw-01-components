import PropTypes from 'prop-types';
import { Table, TableWrapper, TrHead, Th, TrBody, TdType, TdAmount, TdCurrency } from './TranscationsHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TableWrapper>
            <Table>
                <thead>
                    <TrHead>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Currency</Th>
                    </TrHead>
                </thead>
                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                        <TrBody key={id}>
                            <TdType>{type}</TdType>
                            <TdAmount>{amount}</TdAmount>
                            <TdCurrency>{currency}</TdCurrency>
                        </TrBody>
                    ))}
                </tbody>
            </Table>
        </TableWrapper>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};