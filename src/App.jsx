import { useEffect } from 'react';
import './App.css'
import Preloader from './preloader/preload';
import Header from './landing/header';
import NavArrows from './landing/navArrows';
function App (){
    return(
        <div className='bg-back main'>
            <Preloader></Preloader>
            <div className='page block w-full h-full min-h-full overflow-hidden py-0 px-[100px]'>
                <div className='page-content relative w-full max-w-[1280px] min-h-[80vh] my-[10vh] p-0 bg-[#444] shadow-[0_0_100px_-5px_rgba(0,0,0,.25)] rounded-[32px] backface-hidden'>
                    <Header></Header>
                    <div className="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <NavArrows></NavArrows>
                </div>
            </div>
        </div>
    )
}

export default App;