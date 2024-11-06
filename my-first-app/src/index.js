import React from 'react';
import ReactDOM from 'react-dom/client';
import Hedder from './componets/hedder';
import Footer from './componets/footer';
import List from './list/lists';



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
<>
<div className='app'>
    <Hedder/>
    <div className='app-body'>
        <List/>
    </div>
    <Footer/>
</div>
</>
);