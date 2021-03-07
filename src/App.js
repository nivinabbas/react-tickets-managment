import Classify from './components/Classify';
import Conversation from './components/Conversation';
import Sidebar from './components/Sidebar';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Classify />
      <Conversation />
    </div>
  );
}
