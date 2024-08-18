import { useEffect } from 'react';
import './App.css'
import Preloader from './preloader/preload';
import Header from './landing/header';

function App (){
    return(
        <div className='bg-back main'>
            <Preloader></Preloader>
            <div className='page'>
                <div className='page-content'>
                    <Header></Header>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;