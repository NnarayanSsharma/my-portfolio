import React from 'react'
import Img from './img/artificial-flowers-blurred-background-close-up-1229861.jpg'

function Main() {
    return (
        <div>
            <main className="main-container">
                <div className="bg-img"></div>
                <div className="main-container-content">
                    <h1>Narayan Sharma</h1>
                    <h3>Frontend Developer</h3>
                    <button>View Project</button>
                    <ul className="contacts">
                        <li className="linkedIn"><a href="https://www.linkedin.com/in/narayan-sharma-72114215a/" target="_blank" ><i class="fab fa-linkedin"></i></a></li>
                        <li className="gitHub"><a href="https://github.com/NnarayanSsharma" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li className="hackerRank"><a href="" target="_blank"><i class="fab fa-hackerrank"></i></a></li>
                        <li className="faceBook"><a href="https://www.facebook.com/om.sharma.906" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Main
