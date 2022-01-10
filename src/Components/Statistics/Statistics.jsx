import PropTypes from 'prop-types';
import {Title, StatsLabel, StatsPercentage, StatsList, StatsListItem} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
        <section>
            {title && <Title>{title}</Title>}
            <StatsList >
                {stats.map((stat) => (
                    <StatsListItem key={stat.id}>
                        <StatsLabel>{stat.label}</StatsLabel>
                        <StatsPercentage>{stat.percentage}%</StatsPercentage>
                    </StatsListItem>
                ))}
            </StatsList>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};