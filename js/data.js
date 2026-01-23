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
            name: "Dr. Behnam Bahr",
            role: "Lab Advisor - Mechanical Engineering",
            image: "images/team/AVL_Dr_Bahr.jpg",
            bio: "Providing academic oversight and mentorship for autonomous vehicle research and development.",
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
            bio: "Supporting project coordination, member engagement, and technical development initiatives.",
            linkedin: "https://www.linkedin.com/in/paarseus/",
            github: "https://github.com/Paarseus",
            email: "mghasemi@cpp.edu"
        },
        {
            name: "Tyrese Rogers",
            role: "Publicity Officer - Mechanical Engineering",
            image: "images/team/AVL_Tyrese_Rogers.jpg",
            bio: "Promoting lab activities and achievements through outreach and communication channels.",
            linkedin: "https://www.linkedin.com/in/tyrese-rogers-0933152a5/",
            email: "tyreserogers101@gmail.com"
        },
        {
            name: "William Saunders",
            role: "Research Assistant - Mechanical Engineering",
            image: "placeholder",
            bio: "Leading the design and construction of ATAV, an all-terrain vehicle for off-road AI testing.",
            linkedin: "https://www.linkedin.com/in/william-saunders-02324925a",
            email: "william.r.saunders.2004@gmail.com"
        },
        {
            name: "Ryan Simpson",
            role: "Onboarding Officer - Computer Science",
            image: "images/team/AVL_Ryan_Simpson.jpg",
            bio: "Guiding new members through onboarding, training, and lab procedures.",
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
            bio: "Developing control systems for autonomous driving, including steering and speed regulation.",
            linkedin: "https://www.linkedin.com/in/calebhylkema",
            email: "calebhylkema6@gmail.com"
        },
        {
            name: "Benjamin Ramirez",
            role: "Research Assistant - Electromechanical Systems Engineering Technology",
            image: "placeholder",
            bio: "Designing CAD mounts for sensors and electronics, and organizing electrical systems on AVL-002.",
            linkedin: "https://www.linkedin.com/in/benjamin-ramirez-98958b303",
            email: "bjmnrmz01@gmail.com"
        },
        {
            name: "Alexander Assal",
            role: "Research Assistant - Computer Engineering",
            image: "images/team/AVL_Alexander_Assal.jpg",
            bio: "Implementing YOLOPv2 for computer vision and machine learning in autonomous perception.",
            linkedin: "https://www.linkedin.com/in/alexanderassal",
            github: "https://github.com/arassal",
            email: "alexander@asaalfamily.com"
        },
        {
            name: "Deyung Sun",
            role: "Research Assistant - Mechanical Engineering M.S.",
            image: "placeholder",
            bio: "Developing Gazebo simulations for autonomous vehicle testing using ROS2 Jazzy.",
            linkedin: "https://www.linkedin.com/in/deyung-sun-634780318",
            github: "https://github.com/deyungOAO",
            email: "deyung000@gmail.com"
        },
        {
            name: "Benjamin S Valladolid",
            role: "Research Assistant - Mechanical Engineering M.S.",
            image: "placeholder",
            bio: "Designing the ATAV chassis and developing vehicle dynamics simulations in MATLAB Simulink.",
            linkedin: "https://www.linkedin.com/in/benjaminvalladolid/",
            email: "bsvalladolid@cpp.edu"
        },
        {
            name: "Karoline Braga",
            role: "Research Assistant - Mechanical Engineering",
            image: "images/team/AVL_Karoline_Braga.jpg",
            bio: "Working on CAD designs and Assembly for IGVC and Thermal Modeling of Battery Active Cooling.",
            linkedin: "www.linkedin.com/in/karolinebraga",
            email: "braga.karoline@hotmail.com"
        }, 
        { 
            name: "Changwe Musonda", 
            role: "Club Member - Computer Engineering", 
            image: "images/team/AVL_Changwe_Musonda.jpg", 
            bio: "Working on ROS2, integrating perception, and planning pipelines for autonomous vehicle operation.", 
            linkedin: "https://www.linkedin.com/in/changwe-musonda-32642a1a8/", 
            email: "bradley.musonda@gmail.com" 
        },
        {
            name: "Samuel Andryasian",
            role: "Club Member - Mechanical Engineering",
            image: "images/team/AVL_Samuel_Andryasian.jpg",
            bio: "Contributing to mechanical engineering research and development for autonomous vehicle systems.",
            linkedin: "https://www.linkedin.com/in/samuelandryasian/",
            email: "samuel.81725@gmail.com"
        }
        
    ],
    
    // Legacy Members (past contributors)
    members: [
        {
            name: "Jaemin Kim",
            role: "Intern at Burbank Water and Power - Electrical Engineering M.S.",
            image: "images/team/AVL_Jaemin_Kim.jpg",
            bio: "Developed embedded control systems for actuators, motors, and IMU data collection.",
            linkedin: "https://www.linkedin.com/in/jm-k/",
            email: "jaemin.d.kim@gmail.com"
        },
        {
            name: "William Masri",
            role: "Former Research Assistant - Electrical Engineering",
            image: "images/team/AVL_William_Masri.jpg",
            bio: "Developed and integrated autonomous vehicle components, specializing in circuit design and embedded systems.",
            linkedin: "https://www.linkedin.com/in/williammasri15/",
            email: "masriw15@yahoo.com"
        },
        {
            name: "Matthew Jabson",
            role: "Former Lab Admin - Mechanical Engineering M.S.",
            image: "images/team/AVL_Matthew_Jabson.jpg",
            bio: "Managed lab operations and developed autonomous systems using ROS, computer vision, and sensor integration.",
            linkedin: "https://www.linkedin.com/in/matthewjabson/",
            email: "matthewjabson@gmail.com"
        },
        {
            name: "Adam Sorenson",
            role: "Engineer at Honda Racing Corporation USA - Mechanical Engineering M.S.",
            image: "images/team/AVL_Adam_Sorenson.jpg",
            bio: "Designed autonomous and robotic systems with expertise in embedded systems and mechanical component design.",
            linkedin: "https://www.linkedin.com/in/asorenson/",
            email: "adam.d.sorenson@gmail.com"
        },
        {
            name: "Johann Fernandez",
            role: "Former Research Assistant - Computer Science",
            image: "images/team/AVL_Johann_Fernandez.jpg",
            bio: "Developed end-to-end neural networks for autonomous driving using behavior cloning and PyTorch.",
            linkedin: "https://www.linkedin.com/in/johann-fernandez/",
            email: "fernandezjohann08@gmail.com"
        },
        {
            name: "Abhishek Vishwakarma",
            role: "Former Research Assistant - Computer Science M.S.",
            image: "images/team/AVL_Abhishek_Vishwakarma.jpg",
            bio: "Engineered real-time perception pipelines using YOLOv8 and developed custom ROS2 navigation systems.",
            linkedin: "https://www.linkedin.com/in/karma218/",
            email: "abhishekvishwakarma218@gmail.com"
        },
        {
            name: "Calvin Chu",
            role: "Robotics Systems Engineer at Promaxo - Mechanical Engineering M.S.",
            image: "images/team/AVL_Calvin_Chu.jpg",
            bio: "Designed control algorithms for autonomous parking and developed Gazebo simulations with ROS2 and NAV2 integration.",
            linkedin: "https://www.linkedin.com/in/calvin-chu-321650226/",
            email: "calchu54321@gmail.com"
        },     
        {
            name: "Yeachan Okh",
            role: "Former Research Assistant - Computer Engineering M.S.",
            image: "images/team/AVL_Yeachan_Okh.jpg",
            bio: "Developed autonomous motor control systems using ROS2 and simulated LiDAR sensing for SLAM navigation.",
            linkedin: "https://www.linkedin.com/in/yeachanokh/",
            email: "yeachanokh@gmail.com"
        },
        {
            name: "Anjali Rai",
            role: "Former Research Assistant - Computer Science M.S.",
            image: "images/team/AVL_Anjali_Rai.jpg",
            bio: "Developed computer vision and machine learning solutions using ROS, Python, and Linux systems.",
            linkedin: "https://www.linkedin.com/in/kenneyanjali/",
            email: "jalraibhardwaj@gmail.com"
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
    { number: "4", label: "Autonomous Vehicle Platforms" },
    { number: "5+", label: "Active Projects" },
    { number: "15+", label: "Lab Members" }
];

const ACHIEVEMENTS = [
    {
        title: "AVL-001 Deployed",
        description: "Fully functioning simple autonomous vehicle platform serving as a proof of concept",
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
        title: "Vehicle Dynamics",
        type: "Lecture Series",
        description: "Comprehensive vehicle dynamics covering quarter car models, steering behavior, and suspension effects.",
        level: "Intermediate",
        docLink: "https://www.cpp.edu/engineering/autonomous-systems/activities.shtml",
        modules: [
            { title: "Module 1 – Introduction", url: "https://streaming.cpp.edu/media/Module+1+-+Vehicle+Dynamics+-+Ganpat+and+Manju+Center/1_57nl7oyc" },
            { title: "Module 2 – Quarter Car Model - 1DOF", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_l3dh7qb1" },
            { title: "Module 3 – Quarter Car Model – 2DOF", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_a1q89p0w" },
            { title: "Module 4 – Half Vehicle Model – Rotational DOF", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_bexa603c" },
            { title: "Module 5 – Low Speed Steady State Turning", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_l6z6f4g8" },
            { title: "Module 6 – High Speed Cornering", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_cg0c7o9a" },
            { title: "Module 7 – Characteristic Speed and Critical Speed", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_s13n9mk7" },
            { title: "Module 8 – Lateral Acceleration Gain", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_8o4cbw32" },
            { title: "Module 9 – Yaw Velocity and Yaw Rate Gain", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_69mnpzvz" },
            { title: "Module 10 – Side Slip Angle", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_92ty3g1d" },
            { title: "Module 11 – Neutral Steer Point", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_vwdwwwbl" },
            { title: "Module 12 – Suspension Effects on Cornering", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_0vwij9xm" }
        ]
    },
    {
        title: "Electric Vehicle & Energy Storage",
        type: "Lecture Series",
        description: "Electric vehicle fundamentals including motor types, charging systems, and battery technologies.",
        level: "Intermediate",
        docLink: "https://www.cpp.edu/engineering/autonomous-systems/activities.shtml",
        modules: [
            { title: "Module 1 – Basic Concepts of Electric Vehicles", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%201%20Basic%20Concepts%20of%20Electric%20Vehicles%2Emp4" },
            { title: "Module 2 – Induction Motor as EV Drive", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%202%20Induction%20Motor%20as%20EV%20Drive%2Emp4" },
            { title: "Module 3 – Fundamentals of Induction Motor Speed Control in EV", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%203%20Fundamentals%20of%20Induction%20Motor%20Speed%20Control%20in%20EV%2Emp4" },
            { title: "Module 4 – Basic Concepts of Permanent Magnet Synchronous Motors", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%204%20Basic%20Concepts%20of%20Permanent%20Magnet%20Synchronous%20Motors%2Emp4" },
            { title: "Module 5 – Permanent Magnet Brushless AC Motor as EV Drive", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%205%20Permanent%20Magnet%20Brushless%20AC%20Motor%20as%20EV%20Drive%2Emp4" },
            { title: "Module 6 – Permanent Magnet Brushless DC Motor as EV Drive", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%206%20Permanent%20Magnet%20Brushless%20DC%20Motor%20as%20EV%20Drive%2Emp4" },
            { title: "Module 7 – EV Charging Standards and Equipment", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%207%20EV%20Charging%20Standards%20and%20Equipment%2Emp4" },
            { title: "Module 8 – Converters for EV Wired Charging", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%208%20Converters%20for%20EV%20Wired%20Charging%2Emp4" },
            { title: "Module 9 – EV Bi-directional Charging", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%209%20EV%20Bi%2Ddirectional%20Charging%2Emp4" },
            { title: "Module 10 – Regenerative Braking in EV", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%2010%20Regenerative%20Braking%20in%20EV%2Emp4" },
            { title: "Module 11 – Fundamentals of Energy Storage Technologies", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%2011%20Fundamentals%20of%20Energy%20Storage%20Technologies%2Emp4" },
            { title: "Module 12 – Li-ion Batteries in EV", url: "https://livecsupomona-my.sharepoint.com/personal/hatle_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fhatle%5Fcpp%5Fedu%2FDocuments%2F1%5FBen%5FiCare%5FVideos%5FHaLe%5F5990%5FEV%2FModule%2012%20Li%2Dion%20Batteries%20in%20EV%2Emp4" }
        ]
    },
    {
        title: "Practical Application of Electric Motors",
        type: "Lecture Series",
        description: "Hands-on electrical machine analysis including power measurement, generators, and motor characteristics.",
        level: "Intermediate",
        docLink: "https://www.cpp.edu/engineering/autonomous-systems/activities.shtml",
        modules: [
            { title: "Module 1 – Power Measurement", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EXBdSJ-aET5AutbH3qYd6I4BrbN5iViM1MmIIE8xEQL-rA?e=ZmAG4Q" },
            { title: "Module 2 – Balanced and Unbalanced 3 Phase Measurement", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EQwwqTjt6wdBgWvJIl8T8okBX6VSlVkGI4kbcDhDv_XhTw?e=NnoxX2" },
            { title: "Module 3 – Power Factor", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EZmU2ffk0Z5FshlrWpGbayABI7j9_WewZCgJH_bit9QE2Q?e=dzJlWi" },
            { title: "Module 4 – DC Generator Characteristics", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EdoXk4PKYPpKq-0IIGsdu38BOYgGnDpoUCOH0CV0o2Wc3g?e=drLCeX" },
            { title: "Module 5 – Synchronous Generator Characteristics", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EZP-e1J0v7FLt5tPnBXL4isBvmRRLqv5kmOtC5px5QR6aw?e=nhGYQ9" },
            { title: "Module 6 – Synchronous Motor", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/ESjO4b6pnydHkrdWj-nTUvUBjlwVbRyZlPYaG2IvXCVAWA?e=Ufo9K7" },
            { title: "Module 7 – Induction Motor", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EQOQBajex_FKmHq-40uCjusBRwq0-5Fck7DCjJDz--4g-Q?e=UX6JI1" },
            { title: "Module 8 – Analysis of a Power System with Electric Machines", url: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/purvav_cpp_edu/EWocFLp_cp9Ki71jLm8ldskBufUd9BuG56denoDTJydraQ?e=lxsa5Q" }
        ]
    },
    {
        title: "Computer Vision and Image Processing",
        type: "Lecture Series",
        description: "Digital image fundamentals, spatial and frequency domain enhancement, and image restoration techniques.",
        level: "Advanced",
        docLink: "https://www.cpp.edu/engineering/autonomous-systems/activities.shtml",
        modules: [
            { title: "Module 1.1 – Introduction 1", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%201%2D1%2Emp4" },
            { title: "Module 1.2 – Introduction 2", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_l3dh7qb1" },
            { title: "Module 1.3 – Introduction 3", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%201%2D3%2Emp4" },
            { title: "Module 2.1 – Digital Image Fundamentals 1", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%202%2D1%2Emp4" },
            { title: "Module 2.2 – Digital Image Fundamentals 2", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%202%2D2%2Emp4" },
            { title: "Module 3.1 – Image Enhancement in a Spatial Domain 1", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D1%2Emp4" },
            { title: "Module 3.2 – Image Enhancement in a Spatial Domain 2", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D2%2Emp4" },
            { title: "Module 3.3 – Image Enhancement in a Spatial Domain 3", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D3%2Emp4" },
            { title: "Module 3.4 – Image Enhancement in a Spatial Domain 4", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D4%2Emp4" },
            { title: "Module 3.5 – Image Enhancement in a Spatial Domain 5", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D5%2Emp4" },
            { title: "Module 3.6 – Image Enhancement in a Spatial Domain 6", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%203%2D6%2Emp4" },
            { title: "Module 4.1 – Image Enhancement in a Frequency Domain 1", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D1%2Emp4" },
            { title: "Module 4.2 – Image Enhancement in a Frequency Domain 2", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D2%2Emp4" },
            { title: "Module 4.3 – Image Enhancement in a Frequency Domain 3", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D3%2Emp4" },
            { title: "Module 4.4 – Image Enhancement in a Frequency Domain 4", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D4%2Emp4" },
            { title: "Module 4.5 – Image Enhancement in a Frequency Domain 5", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D5%2Emp4" },
            { title: "Module 4.6 – Image Enhancement in a Frequency Domain 6", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%204%2D6%2Emp4" },
            { title: "Module 5.1 – Image Restoration 1", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%205%2D1%2Emp4" },
            { title: "Module 5.2 – Image Restoration 2", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%205%2D2%2Emp4" },
            { title: "Module 5.3 – Image Restoration 3", url: "https://livecsupomona-my.sharepoint.com/personal/zaliyazici_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fzaliyazici%5Fcpp%5Fedu%2FDocuments%2FResearch%2FD%2EEducation%20Ganpat%20Center%2FLecture%205%2D3%2Emp4" }
        ]
    },
    {
        title: "ROS2 & Software Integration",
        type: "Hands-on Lab",
        description: "Learn advanced robotics software development using ROS2 for autonomous vehicle systems.",
        level: "Intermediate",
        docLink: "https://docs.ros.org/en/humble/Tutorials.html",
        modules: []
    },
    {
        title: "Embedded Systems & Arduino",
        type: "Workshop Series",
        description: "Hands-on experience with embedded systems, power distribution, and vehicle electronics using Arduino.",
        level: "Beginner",
        docLink: "https://docs.arduino.cc/learn/",
        modules: []
    },
    {
        title: "Control Theory & PID",
        type: "Technical Deep-Dive",
        description: "Learn control systems design including PID controllers for autonomous vehicle steering and speed control.",
        level: "Advanced",
        docLink: "https://learnopencv.com/pid-controller-ros-2-carla/",
        modules: []
    },
    {
        title: "LiDAR & Point Cloud Processing",
        type: "Technical Deep-Dive",
        description: "Work with 3D LiDAR data for mapping, localization, and obstacle detection.",
        level: "Intermediate",
        docLink: "https://pointclouds.org/documentation/tutorials/",
        modules: []
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

// ============================================================================
// SPONSORS & PARTNERS
// ============================================================================
// Add logos to /images/sponsors/ folder
// Types: "university", "industry", "organization", "faculty"

const SPONSORS = [
    {
        name: "RoboDK",
        type: "industry",
        logo: "images/sponsors/AVL_Robodk_Logo.png",
        url: "https://robodk.com/index",
        description: "Simulation and offline programming software for industrial robots"
    }
    // Add more partners as needed:
    // {
    //     name: "Company Name",
    //     type: "industry",
    //     logo: "images/sponsors/company_logo.png",
    //     url: "https://company.com",
    //     description: "Partner description"
    // }
];


// ============================================================================
// MEDIA & VIDEO CONTENT
// ============================================================================
// Add YouTube video IDs or direct video URLs

const MEDIA_CONTENT = {
    // YouTube video ID (the part after v= in YouTube URL)
    // Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, use "dQw4w9WgXcQ"
    featuredVideoId: "",  // Add your YouTube video ID here
    
    // Or use a direct video file
    featuredVideoUrl: "videos/AVL_Video_9-10-25.mp4",  // e.g., "videos/avl_demo.mp4"
    
    // Video details
    videoTitle: "AVL Autonomous Driving Demo",
    videoDescription: "Watch our autonomous vehicles navigate campus roads",
    
    // Instagram
    instagramHandle: "autovehiclelab",
    instagramUrl: "https://www.instagram.com/autovehiclelab/"
};
