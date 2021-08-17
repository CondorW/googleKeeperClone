import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Note from './Components/Note';
import Footer from './Components/Footer';
import notes from "./notes";

function createNote(ele) {

}


function App() {
  return (
    <div>
      <Header />
      {notes.map((ele => {
        return (
          <Note
            noteTitle={ele.title}
            noteContent={ele.content}
          />
        );
      }))}
      <Footer />
    </div>
  );
}

export default App;
