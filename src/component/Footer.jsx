import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-slate-100 dark:bg-black text-base-content p-10 mt-8">
            <aside>
                <h1 className='font-family-anton'>COVERFORGE</h1>
                

                <p>
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a
                    className="link link-hover"
                    href='http://t.me/Mehedi00421'
                    target="_blank"
                >
                    <span>Telegram: </span>@Mehedi00421
                </a>

                <a
                    href="mailto:mehedihasanofficial868@gmail.com"
                    className="link link-hover"
                >
                    <span>Email: </span>mehedihasanofficial868@gmail.com
                </a>

                <a
                    href="https://forms.gle/dHJkE9SbZUuf1w4V7"
                    target="_blank"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Give Feedback / Report a Bug
                </a>
            </nav>

            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
           
        </footer>
    );
};

export default Footer;