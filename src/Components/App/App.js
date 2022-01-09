import user from "../../user.json";
import data from "../../data.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { Friends } from "../Friends/Friends";
import { TransactionHistory } from "../TransactionHistory/TransactionsHistory";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
