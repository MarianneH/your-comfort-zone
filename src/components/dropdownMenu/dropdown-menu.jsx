import styles from "./dropdownMenu.module.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function DropdownMenu() {

    const[activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <a href="#" className={styles.menu_item}>

                {props.children}

            </a>
        );
    }

    return (
        <div className={styles.dropdown}>
            <CSSTransition 
            in={activeMenu === 'main'} 
            unmountOnExit 
            timeout={500}
            classNames={styles.menu_primary}
            >
                <div className={styles.menu}>
                <DropdownItem>Home</DropdownItem>
                <DropdownItem>About Us</DropdownItem>
                
                </div>
            </CSSTransition>

            <CSSTransition 
            in={activeMenu === 'settings'} 
            unmountOnExit 
            timeout={500}
            classNames={styles.menu_secondary}
            >
                <div className={styles.menu}>
                
                <DropdownItem>About Us</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}