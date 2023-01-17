import "./App.css";
import ContactList from "./Components/ContactList";
import ContactInfo from "./Components/ContactInfo";
import SendMessage from "./Components/SendMessage";
import MessageHistory from "./Components/MessageHistory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/contact/:id" element={<ContactInfo />} />
            <Route path="/send-message/:number" element={<SendMessage />} />
            <Route path="/message-history" element={<MessageHistory />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
