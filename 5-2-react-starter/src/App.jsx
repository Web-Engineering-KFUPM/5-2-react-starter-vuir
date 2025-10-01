import './App.css'
import StudentCard from './components/StudentCard.jsx';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <h1 style={{ color: "#667eea" }}>Student Info</h1>
          <StudentCard name="Hayat Alghamdi" id="202276840" department="ICS"/>
            <StudentCard name="Lama Alghamdi" id="202376840" department="ICS"/>
    
        </div>
      </main>
    </div>
  )
}


export default App
