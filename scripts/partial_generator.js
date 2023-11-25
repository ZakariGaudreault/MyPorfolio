let standardNavbar = document.getElementById("standard_navbar");
if (standardNavbar !== null) {
    standardNavbar.innerHTML = `
      
        <ul id="nav_links">
        <h1 >Zakari Gaudreault St-Jean </h1>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">My projects</a></li>
            <li><a href="FAQ.html">FAQ</a></li>
        </ul>`;
}

let standardFooter = document.getElementById("standard_footer");
if (standardFooter !== null) {
    standardFooter.innerHTML = `
        <h2 id="footer_label">Informations</h2>
        <ul id="contact_links">
            <li><a href="https://github.com/ZakariGaudreault" target="_blank"></a></li>
            <li><a href="mailto:zakarigaudreault@hotmail.com"></a></li>
            <li><a href="https://www.linkedin.com/in/zakari-gaudreault-st-jean-37b3532a1/" target="_blank"></a></li>
        </ul>`;
}