import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div className='container shadow min-vh-100 py-4'>
                    <h1 className='text-center m-4'> DICTIONARY</h1>
                    <div className='row'>
                        <div className='col-md-5 mx-auto'>
                            <div class='small fw-light'>
                                What word do you want to look up?
                            </div>
                            <div className='input-group'>
                                <input
                                    className='form-control border-end-0 border rounded-pill'
                                    type='search'
                                    value='search'
                                    id='example-search-input'
                                />
                                <span className='input-group-append'>
                                    <button
                                        className='btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5'
                                        type='button'
                                    >
                                        <i className='fa fa-search'></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
