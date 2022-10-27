import React from "react";

const Footer = () => {
    return (
        <div className="footer flex-col flex-align-center g-16">
            <ul className="xl-container flex-row flex-center g-10 wrap">
                <li className="footer-link hover">
                    <a href="#">Meta</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">À propos</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Blog</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Emplois</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Aide</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">API</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Confidentialité</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Conditions</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Comptes principaux</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Hashtags</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Lieux</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Fakegram Lite</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Importation des contacts et non-utilisateurs</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Danse</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Alimentation et boissons</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Maison et jardin</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Musique</a>
                </li>
                <li className="footer-link hover">
                    <a href="#">Arts visuels</a>
                </li>
                {/*  */}
            </ul>

            <ul className="xl-container flex-row flex-center g-10 wrap">
                <li className="fw-400 fs-12 gray">Français</li>
                <li className="fw-400 fs-12 gray">
                    © 2022 Fakegram par Steven
                </li>
                <li className="footer-link hover">
                    <a href="https://www.flaticon.com/">
                        Toutes les icônes proviennent de Flaticon
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
