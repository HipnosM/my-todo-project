import styles from "./Sidebar.module.css";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";
import { FaHome, FaLightbulb, FaPhone } from "react-icons/fa";
import { FaPeopleGroup, FaGear } from "react-icons/fa6";

import Container from "./Container";

export default function Sidebar() {

    const sidebarRef = useRef();
    const [sidebarIsOpen, setSidebarOpen] = useState(false);

    const activeSidebarItem = (e) => {
        const itemSelected = e.currentTarget;
        const sidebarItems = document.querySelectorAll(`.${styles.sidebar} ul li a`);

        sidebarItems.forEach(item => {
            item.classList.remove(`${styles.current}`);
        });

        itemSelected.classList.add(`${styles.current}`);
    };

    return (
        <header>
            <span className={styles.logo}>Logo</span>
            <CiMenuFries
                className={`${styles.menu} ${sidebarIsOpen ? styles.menuOpen : ""}`}
                onClick={() => {
                    setSidebarOpen(!sidebarIsOpen);
                }}
            />
            <nav className={sidebarIsOpen ? `${styles.sidebar} ${styles.active}` : styles.sidebar} ref={sidebarRef}>
                <Container>
                    <ul>
                        <SideBarItem
                            href="/"
                            icon={<FaHome />}
                            title="Início"
                            onClick={activeSidebarItem}
                        />
                        <SideBarItem
                            href="/about"
                            icon={<FaPeopleGroup />}
                            title="Sobre nós"
                            onClick={activeSidebarItem}
                        />
                        <SideBarItem
                            href="#"
                            icon={<FaPhone />}
                            title="Contato"
                            onClick={activeSidebarItem}
                        />
                        <SideBarItem
                            href="#"
                            icon={<FaGear />}
                            title="Configurações"
                            onClick={activeSidebarItem}
                        />
                    </ul>
                </Container>
            </nav>
            {sidebarIsOpen &&
                <div className={styles.overlay} onClick={() => { setSidebarOpen(false) }}></div>
            }
        </header>
    );
};

const SideBarItem = ({ href, icon, title, onClick }) => {
    return (
        <li>
            <Link to={href} onClick={onClick}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.title}>{title}</span>
            </Link>
        </li>
    );
};