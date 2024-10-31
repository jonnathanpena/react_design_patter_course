import { UserInfo } from './UserInfo';
import { widthUser } from './withUser';
import './App.css';

const UserInfoWithLoader = widthUser(UserInfo, '234');

function App() {
  return (
    <UserInfoWithLoader />
  );
}

export default App;
