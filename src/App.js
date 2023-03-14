import './App.css';
import Dictionary from './Dictionary';

function App() {
    return (
        <div>
            <header>
                <Dictionary defaultKeyword='flower' />
            </header>
            <footer className='text-center mt-1 footer-link'>
                <img
                    className='img-git'
                    src='img/kisspng-github.png'
                    width={40}
                    alt='github icon'
                />
                <a
                    href='https://github.com/Evgeniya-Alekseyenko/dictionary-project'
                    className='link-git'
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className='link'>Open-sourse code on GitHub</span>
                    <span className='name_link'>by Yevgeniya Alekseyenko</span>
                </a>
            </footer>
        </div>
    );
}

export default App;
