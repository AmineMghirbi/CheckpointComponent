import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/Name/FullName';
import Address from './Component/Profile/Address/Address';
import ProfilePhoto from './Component/Profile/Photo/ProfilePhoto';

function App() {
  return (
    <div className='App-Container'>
      <FullName first={"Amine"} last={"Mghirbi"}/>
      <Address rue={"Farhat Hached"} codepostal={8060} ville={"Nabeul"}/>
      <ProfilePhoto  />
    </div>
  );
}

export default App;
