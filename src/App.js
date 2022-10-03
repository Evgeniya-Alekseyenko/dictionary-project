import './App.css';
import Dictionary from './Dictionary';

function App() {
    return (
        <div className='app'>
            <header className='app-header'>
                <Dictionary />
            </header>
            <footer className='text-center mt-1'>
                <small>Coded by Yevgeniya Alekseyenko</small>
            </footer>
        </div>
    );
}

export default App;
