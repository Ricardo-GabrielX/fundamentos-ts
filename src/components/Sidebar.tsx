import {  PencilLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';

import '../global.css'
import { Avatar } from './Avatar';
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1670057037226-b3d65909424f?q=40&w=500&500=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            />
            <div className={styles.profile}>
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/129549638?v=4"
                />

                <strong>Ricardo Gabriel</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}