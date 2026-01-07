/**
 * AVL WEBSITE DATA FILE
 * =====================
 * 
 * Edit this file to update team members, research areas, and other content.
 * The website will automatically reflect your changes.
 * 
 * HOW TO UPDATE:
 * 1. Find the section you want to edit (TEAM_MEMBERS, RESEARCH_AREAS, etc.)
 * 2. Add, remove, or modify entries following the existing format
 * 3. Save the file and refresh the website
 */

// ============================================================================
// TEAM MEMBERS
// ============================================================================
// To add a new member: Copy an existing object and modify the fields
// To remove a member: Delete the entire object (including the comma before it)
// 
// Fields:
//   name: Full name
//   role: Position title (e.g., "Research Lead", "Software Engineer", "Lab Director")
//   image: Path to headshot image (place images in /images/team/ folder)
//          Use "placeholder" for a generated avatar
//   bio: Short description (1-2 sentences)
//   linkedin: LinkedIn URL (optional - use "" if none)
//   github: GitHub URL (optional - use "" if none)
//   email: Email address (optional - use "" if none)

const TEAM_MEMBERS = {
    // Leadership / Executive Board
    leadership: [
        {
            name: "Dr. Benham Bahr",
            role: "Lab Advisor - Mechanical Engineering",
            image: "images/team/AVL_Dr_Bahr.jpg",
            bio: "Providing academic oversight and mentorship for research and development efforts.",
            linkedin: "https://www.linkedin.com/in/behnam-bahr-b951a279",
            email: "bbahr@cpp.edu"
        },
        {
            name: "Aspen Knox",
            role: "Club President - Mechanical Engineering",
            image: "images/team/AVL_Aspen_Knox.jpg",
            bio: "Coordinating club activities and fostering collaboration between researchers and members.",
            linkedin: "https://www.linkedin.com/in/aspenknox/",
            email: "aknox@cpp.edu"
        },
        {
            name: "Parsa Ghasemi",
            role: "Vice President - Computer Engineering",
            image: "images/team/AVL_Parsa_Ghasemi.jpg",
            bio: "Assisting leadership while supporting project coordination and member engagement.",
            linkedin: "https://www.linkedin.com/in/paarseus/",
            github: "https://github.com/Paarseus",
            email: "mghasemi@cpp.edu"
        },
        {
            name: "Tyrese Rogers",
            role: "Publicity Officer - Mechanical Engineering",
            image: "images/team/AVL_Tyrese_Rogers.jpg",
            bio: "Promoting lab activities, achievements, and events through outreach and communication channels.",
            linkedin: "https://www.linkedin.com/in/tyrese-rogers-0933152a5/",
            email: "tyreserogers101@gmail.com"
        },
        {
            name: "Ryan Simpson",
            role: "Onboarding Officer - Computer Science",
            image: "images/team/AVL_Ryan_Simpson.jpg",
            bio: "Guiding new members through onboarding, training, and lab procedures to ensure a smooth transition.",
            linkedin: "https://www.linkedin.com/in/ryan-m-simpson",
            github: "https://github.com/Ryan-Simpson",
            email: "rmsimpson@cpp.edu"   
        }
        
    ],
    
    // Research Staff / Lab Hires
    researchers: [
        {
            name: "Caleb Hylkema",
            role: "Research Assistant - Electrical Engineering",
            image: "images/team/AVL_Caleb_Hylkema.jpg",
            bio: "Working on the control systems for autonomous driving systems.",
            linkedin: "https://www.linkedin.com/in/calebhylkema",
            email: "calebhylkema6@gmail.com"
        },
        {
            name: "Benjamin Ramirez",
            role: "Research Assistant - Electromechanical Systems Engineering Technology",
            image: "placeholder",
            bio: "Working on CAD designs for the mounting of electronic equipment used on AVL 2 and assisting with the design of the electrical layout and organization of the car.",
            linkedin: "linkedin.com/in/benjamin-ramirez-98958b303",
            email: "bjmnrmz01@gmail.com"
        },
        {
            name: "Alexander Assal",
            role: "Research Assistant - Computer Engineering",
            image: "images/team/AVL_Alexander_Assal.jpg",
            bio: "Working on YoloPv2, Computer Vision and Machine Learning",
            linkedin: "https://www.linkedin.com/in/alexanderassal",
            github: "https://github.com/arassal",
            email: "alexander@asaalfamily.com"
        },
        {
            name: "Deyung Sun",
            role: "Research Assistant - Mechanical Engineering M.S.",
            image: "placeholder",
            bio: "Working on Gazebo Simulation via ROS2 jazzy",
            linkedin: "www.linkedin.com/in/deyung-sun-634780318",
            github: "https://github.com/deyungOAO",
            email: "deyung000@gmail.com"
        },
        {
            name: "Benjamin S Valladolid",
            role: "Research Assistant - Mechanical Engineering M.S.",
            image: "placeholder",
            bio: "Designing Chassis for ATAV, Using MATLAB simulink to develop vehicle simulation through campus.",
            linkedin: "https://www.linkedin.com/in/benjaminvalladolid/",
            email: "bsvalladolid@cpp.edu"
        }
    ],
    
    // Legacy Members (past contributors)
    members: [
        {
            name: "Jaemin Kim",
            role: "Researcher - Electrical Engineering M.S.",
            image: "images/team/AVL_Jaemin_Kim.jpg",
            bio: "Developed C++ and Python code used to control linear actuator, stepper motor, gear selection, and Integrated inertial measurement unit within the car for data collection.",
            linkedin: "https://www.linkedin.com/in/jm-k/",
            email: "jaemin.d.kim@gmail.com"
        }
    ]
};


// ============================================================================
// RESEARCH AREAS
// ============================================================================
// Each research area appears as a card on the website
//
// Fields:
//   title: Name of research area
//   icon: Emoji or leave empty for default
//   description: What this research involves
//   projects: Array of current project names

// To add a link to a research area, add docLink field with the URL
// Example: docLink: "https://docs.google.com/document/d/your-doc-id"

const RESEARCH_AREAS = [
    {
        title: "LiDAR Processing & Perception",
        icon: "",
        description: "Real-time point cloud processing, object detection, and 3D scene understanding using Velodyne VLP-16 sensors.",
        projects: ["High-speed packet decoding", "Occupancy grid mapping", "Point cloud segmentation"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Computer Vision",
        icon: "",
        description: "Multi-modal vision systems including stereo cameras and thermal imaging for robust perception in all conditions.",
        projects: ["YOLOPv2 lane detection", "Thermal-visual fusion", "Day-night driving"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Path Planning & Navigation",
        icon: "",
        description: "Developing algorithms for safe and efficient autonomous navigation on campus roads.",
        projects: ["Pure Pursuit controllers", "Dynamic Window Approach", "Behavior planning"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Sensor Fusion",
        icon: "",
        description: "Integrating data from LiDAR, cameras, GPS, and IMU for accurate localization and mapping.",
        projects: ["Multi-sensor calibration", "State estimation", "SLAM integration"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Digital Twins & Simulation",
        icon: "",
        description: "Creating photorealistic virtual environments of campus for testing and validation.",
        projects: ["3D Gaussian Splatting", "Neural radiance fields", "Synthetic data generation"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Vehicle Cybersecurity",
        icon: "",
        description: "Researching CAN bus security, intrusion detection, and secure communication protocols.",
        projects: ["CAN message authentication", "Anomaly detection", "Secure boot systems"],
        docLink: ""  // Add Google Doc or page URL here
    }
];


// ============================================================================
// CURRENT OPENINGS / HIRING
// ============================================================================
// Set isHiring to false to hide the hiring section entirely
// Add or remove positions as needed

const HIRING_INFO = {
    isHiring: true,
    description: "Join our team and work on cutting-edge autonomous vehicle technology!",
    positions: [
        {
            title: "Perception Engineer",
            type: "Research Position",
            description: "Work on LiDAR and camera-based perception systems. Experience with Python, ROS, and computer vision preferred.",
            requirements: ["Python proficiency", "Computer Vision basics", "Enthusiasm for AV technology"],
            applyLink: "" // Add Google Form or email link
        },
        {
            title: "Software Developer",
            type: "Club Member",
            description: "Help build and maintain our autonomous vehicle software stack. All skill levels welcome!",
            requirements: ["Programming experience", "Willingness to learn", "Team player"],
            applyLink: ""
        },
        {
            title: "Hardware Technician",
            type: "Club Member",
            description: "Assist with vehicle maintenance, sensor mounting, and electronics integration.",
            requirements: ["Hands-on skills", "Basic electronics knowledge", "Attention to detail"],
            applyLink: ""
        }
    ]
};


// ============================================================================
// IMPACT & ACHIEVEMENTS
// ============================================================================
// Showcase lab accomplishments

const IMPACT_STATS = [
    { number: "5+", label: "Active Research Papers" },
    { number: "4", label: "Autonomous Vehicles Platforms" },
    { number: "5+", label: "Active Projects" },
    { number: "15+", label: "Lab Members" }
];

const ACHIEVEMENTS = [
    {
        title: "AVL-001 Deployed",
        description: "Fully Functioning simple autonomous vehicle platform searving as a proof of concept",
        year: "2024",
        docLink: ""  // Add link to paper or documentation
    },
    {
        title: "AVL-002 Deployed",
        description: "Fully Autonomous go-kart platforms serving as the main testbed for perception, imitation learning, and path planning research",
        year: "2025",
        docLink: ""  // Add link to paper or documentation
    },
    {
        title: "Project ATAV Launched",
        description: "Next-generation all-terrain autonomous vehicle combining active suspension, regenerative braking, and fuzzy logic control",
        year: "2024-2025",
        docLink: ""
    },
];


// ============================================================================
// LEARN BY DOING WORKSHOPS & RESOURCES
// ============================================================================
// Educational content and workshops offered

const LEARNING_RESOURCES = [
    {
        title: "ROS2 & Software Integration",
        type: "Hands-on Lab",
        description: "Learn advanced robotics software development using ROS2 for autonomous vehicle systems.",
        level: "Intermediate",
        docLink: "https://docs.ros.org/en/humble/Tutorials.html"
    },
    {
        title: "Machine Learning for Autonomy",
        type: "Technical Deep-Dive",
        description: "Apply ML techniques for perception, decision-making, and control in autonomous systems.",
        level: "Advanced",
        docLink: "https://www.coursera.org/specializations/self-driving-cars"
    },
    {
        title: "Embedded Systems & Arduino",
        type: "Workshop Series",
        description: "Hands-on experience with embedded systems, power distribution, and vehicle electronics using Arduino.",
        level: "Beginner",
        docLink: "https://docs.arduino.cc/learn/"
    },
    {
        title: "Control Theory & PID",
        type: "Technical Deep-Dive",
        description: "Learn control systems design including PID controllers for autonomous vehicle steering and speed control.",
        level: "Advanced",
        docLink: "https://learnopencv.com/pid-controller-ros-2-carla/"
    },
    {
        title: "Computer Vision & OpenCV",
        type: "Hands-on Lab",
        description: "Process camera data for object detection, lane tracking, and environmental perception using OpenCV.",
        level: "Intermediate",
        docLink: "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html"
    },
    {
        title: "LiDAR & Point Cloud Processing",
        type: "Technical Deep-Dive",
        description: "Work with 3D LiDAR data for mapping, localization, and obstacle detection.",
        level: "Intermediate",
        docLink: "https://pointclouds.org/documentation/tutorials/"
    }
];


// ============================================================================
// GENERAL SITE INFORMATION
// ============================================================================

const SITE_INFO = {
    labName: "Autonomous Vehicle Laboratory",
    shortName: "AVL",
    university: "Cal Poly Pomona",
    tagline: "Advancing autonomous vehicle research through hands-on innovation",
    
    // About section content
    about: {
        mission: "The Autonomous Vehicle Laboratory (AVL) at Cal Poly Pomona is dedicated to advancing autonomous vehicle technology through cutting-edge research and hands-on education. As both a research lab and student organization, we bridge the gap between academic theory and real-world application.",
        
        vision: "We envision a future where autonomous vehicles are safe, accessible, and integrated into everyday life. Our work contributes to this vision by developing novel perception systems, path planning algorithms, and digital twin technologies.",
        
        approach: "True to Cal Poly Pomona's 'Learn by Doing' philosophy, every member gets hands-on experience with real autonomous vehicle hardware including Velodyne LiDAR, stereo cameras, RTK-GPS, and more. We believe the best way to learn is to build."
    },
    
    // Contact information
    contact: {
        email: "autovehiclelab@gmail.com", // Update with real email
        location: "Building 9, Room 101, Cal Poly Pomona",
        discord: "https://discord.gg/2D5fEg94eM", // Add Discord invite link
        instagram: "https://www.instagram.com/autovehiclelab/", // Add Instagram handle
        github: "https://github.com/Cal-Poly-Pomona-Autonomous-Vehicle-Lab" // Add GitHub organization URL
    }
};


// ============================================================================
// HARDWARE & EQUIPMENT
// ============================================================================
// List of major equipment (displayed in About section)

const EQUIPMENT = [
    { name: "Velodyne VLP-16 LiDAR", description: "360° 3D scanning", docLink: "https://ouster.com/products/hardware/vlp-16" },
    { name: "Stereo Camera System", description: "Depth perception", docLink: "" },
    { name: "RTK-GPS", description: "Centimeter-level positioning", docLink: "" },
    { name: "Xsens IMU", description: "Motion tracking", docLink: "https://www.movella.com/sensor-modules" },
    { name: "NVIDIA RTX 5090", description: "Neural network training", docLink: "https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/" },
    { name: "TrailMaster 200E-XRS", description: "Research vehicle platform", docLink: "https://gokartsusa.com/Trailmaster-200E-XRS-Gokart-Buggy.aspx" }
];
