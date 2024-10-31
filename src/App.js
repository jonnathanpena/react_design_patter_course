import { printProps } from './printProps';
import { UserInfo } from './UserInfo';
import './App.css';

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <UserInfoWrapped a={1} b="Hello" c={{ name: 'Shaun' }} />
  );
}

export default App;
