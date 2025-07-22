import React, {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from 'react-router-dom';
import About from '@/pages/about/About';
import explosionPng from '@/assets/explosion.png'
import confuseBlackJpg from '@/assets/confused-icon.jpg'
import Airplane from '@/assets/airplane.svg'

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            <div>
                <img src={explosionPng} alt="" />
                <img width={64} height={64} src={confuseBlackJpg} alt="" />
            </div>
            <div>
                <Airplane className={classes.icon} width={128} height={128} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <br />
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>
                <span>saddssdsadsa</span>
            </button>
            <About />
        </div>
    );
};