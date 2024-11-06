<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="jscript.js"></script>

</head>
<body>
    <!-- Header -->
    <header>
        <h1>Aaron Ray Brittannia</h1>
        <p>Creative digital designer, Passionate Web Designer</p>
        <nav>
         <!-- Hamburger Menu Button -->
         <button class="hamburger" id="hamburger-icon">&#9776;</button>
         <ul id="nav-links">
             <li><a href="#home">Home</a></li>
             <li><a href="#projects">Projects</a></li>
             <li><a href="#about">About</a></li>
             <li><a href="#contact">Contact</a></li>
         </ul>
        </nav>
    </header>



    
        <!-- Projects Section -->
        <section id="projects">
            <h1>Projects</h1>
            <div class="projects-grid">
                <div class="project-item">
                    <img src="project_engineering.jpg" alt="Engineering Project - Driveway Expansion">
                    <h2>Project Engineering</h2>
                    <div class="project-description">
                        <p>One summer, my father and I took on a personal project together: expanding our neighbor's driveway by moving their fence further into their backyard. This created additional space, allowing residents to exit the basement safely without any car blocking the sidewalk.</p>
                    </div>
                </div>
                <div class="project-item">
                    <img src="plumbing.webp" alt="Plumbing Project - Shell Canada">
                    <h2>Project Plumbing</h2>
                    <div class="project-description">
                        <p>Shell Canada hired me and my best friend, Darren, whose father runs a plumbing business, to drain sewage pipes at a local gas station and fix any broken pipes in the toilet stalls. We used equipment such as drain snakes, sewer rods, vacuum trucks, and chemical cleaners.</p>
                    </div>
                </div>
                <div class="project-item">
                    <img src="networking.jpg" alt="Networking Project - Configuration and Optimization">
                    <h2>Project Networking</h2>
                    <div class="project-description">
                        <p>I configured network settings, including Wi-Fi SSID, password, and security protocols. I also mapped out the connected devices and optimized the router configuration to improve network performance. This setup allowed me to manage and monitor all devices on the network efficiently from my laptop.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
            <div class="about-container">
                <div class="about-image">
                   
                    <img src="unnamed_about_me.jpg" alt="About Aaron" style="border-radius: 10px; max-width: 100%; height: auto;">
                </div>
                <div class="about-content">
                    <h1>About Me</h1>
                    <p> My name is Aaron Ray Brittannia, and I am a second-year student at Ontario Tech University, majoring in Networking and IT Security. I come from a diverse background, with roots in both India and Portugal. As the youngest in my family, I have an older sister who is 23 years old.</p>
                    <p> In my free time, I enjoy playing video games and staying active by going to the gym, where I focus on building strength. As an avid gamer, I currently love playing Overwatch 2 and Warframe. Growing up, the Ratchet series and the Destiny franchise were some of my favorite games. I also have a passion for baking, particularly sweet desserts. One of my specialties is French maple toast, which reflects my undeniable sweet tooth.</p>
                    
                </div>
            </div>
        </section>
    </main>

    <!-- Contact Form -->
    <main>
        <section id="contact">
            <h1>If you have any questions please contact me!</h1>
            <form action="#" method="post">
                <label for="name">Name:</label> 
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Submit</button>
                
             
                
            </form>
        </section>
    </main>

    
</body>
</html>
    <!-- Footer -->
    <footer>
        <p>© 2024 Aaron Ray Brittannia</p>
    </footer>
</body>
</html>
