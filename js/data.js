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
    // Groups: leadership, researchers, members (current club members), legacy (alumni)
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
            name: "Parsa Ghasemi",
            role: "President - Computer Engineering",
            image: "images/team/AVL_Parsa_Ghasemi.jpg",
            bio: "Working on CAN-bus security and multimodal imitation learning for day-night autonomous driving.",
            linkedin: "https://www.linkedin.com/in/paarseus/",
            github: "https://github.com/Paarseus",
            email: "mghasemi@cpp.edu"
        },
        {
            name: "Ryan Simpson",
            role: "VP External Affairs - Computer Science",
            image: "images/team/AVL_Ryan_Simpson.jpg",
            bio: "Building MARVIN's haptic teleoperation stack: ROS 2, Tailscale, ZED X video, and D-BOX motion feedback.",
            linkedin: "https://www.linkedin.com/in/ryan-m-simpson",
            github: "https://github.com/Ryan-Simpson",
            email: "rmsimpson@cpp.edu"
        },
        {
            name: "Benjamin Ramirez",
            role: "VP Internal Affairs - Electromechanical Engineering",
            image: "images/team/AVL_Benjamin_Ramirez.jpg",
            bio: "Designing CAD mounts for sensors and electronics, and organizing electrical systems on AVL-002.",
            linkedin: "https://www.linkedin.com/in/benjamin-ramirez-98958b303",
            email: "bjmnrmz01@gmail.com"
        },
        {
            name: "Karoline Braga",
            role: "Scheduler - Mechanical Engineering",
            image: "images/team/AVL_Karoline_Braga.jpg",
            bio: "Working on CAD designs and Assembly for IGVC and Thermal Modeling of Battery Active Cooling.",
            linkedin: "https://www.linkedin.com/in/karolinebraga",
            email: "braga.karoline@hotmail.com"
        },
        {
            name: "Chris Sierra",
            role: "Treasurer - Mechanical Engineering",
            image: "images/team/AVL_Chris_Sierra.jpg",
            bio: "Developing MATLAB Simulink and Simscape vehicle-dynamics models for MARVIN.",
            linkedin: "",
            email: ""
        }
    ],
    
    // Research Staff / Lab Hires
    researchers: [
        {
            name: "Aspen Knox",
            role: "Research Assistant - Mechanical Engineering",
            image: "images/team/AVL_Aspen_Knox.jpg",
            bio: "Training day-night imitation-learning models using RGB and thermal cameras on AVL platforms.",
            linkedin: "https://www.linkedin.com/in/aspenknox/",
            email: "aknox@cpp.edu"
        },
        {
            name: "Caleb Hylkema",
            role: "Research Assistant - Electrical Engineering",
            image: "images/team/AVL_Caleb_Hylkema.jpg",
            bio: "Developing control systems for autonomous driving, including steering and speed regulation.",
            linkedin: "https://www.linkedin.com/in/calebhylkema",
            email: "calebhylkema6@gmail.com"
        },
        {
            name: "Garret Anderson",
            role: "Research Assistant - Electrical Engineering",
            image: "placeholder",
            bio: "Leading drive-by-wire and electrical development for Car 1, including actuator control, power distribution, and low-level electronics integration.",
            linkedin: "",
            email: ""
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
            name: "Changwe Musonda", 
            role: "Club Member - Computer Engineering", 
            image: "images/team/AVL_Changwe_Musonda.jpg", 
            bio: "Working on ROS2, integrating perception, and planning pipelines for autonomous vehicle operation.", 
            linkedin: "https://www.linkedin.com/in/changwe-musonda-32642a1a8/", 
            email: "bradley.musonda@gmail.com" 
        },
        { 
            name: "Christian Gomez", 
            role: "Research Assistant - Computer Engineering", 
            image: "images/team/AVL_Christian_Gomez.jpg", 
            bio: "Focused on computer vision for autonomous vehicles, integrating perception pipelines for environment understanding.", 
            linkedin: "https://www.linkedin.com/in/christian-gomez-7438b52b6", 
            email: "gomez.christian1579@gmail.com" 
        },
        {
            name: "Samuel Andryasian",
            role: "Former Vice President - Mechanical Engineering",
            image: "images/team/AVL_Samuel_Andryasian.jpg",
            bio: "Contributing to mechanical engineering research and development for autonomous vehicle systems.",
            linkedin: "https://www.linkedin.com/in/samuelandryasian/",
            email: "samuel.81725@gmail.com"
        },
        {
            name: "Tyrese Rogers",
            role: "Research Assistant - Mechanical Engineering",
            image: "images/team/AVL_Tyrese_Rogers.jpg",
            bio: "Designing a holonomic e-corner module with independent drive, steering, and suspension, including 3D-printed airless lattice tires and FEA validation.",
            linkedin: "https://www.linkedin.com/in/tyrese-rogers-0933152a5/",
            email: "tyreserogers101@gmail.com"
        },
        {
            name: "William Saunders",
            role: "Research Assistant - Mechanical Engineering",
            image: "placeholder",
            bio: "Designing and fabricating ATAV, an all-terrain platform for off-road autonomy testing, including chassis, suspension, and mechanical integration.",
            linkedin: "https://www.linkedin.com/in/william-saunders-02324925a",
            email: "william.r.saunders.2004@gmail.com"
        }
    ],

    members: [],
    
    // Legacy Members (past contributors)
    legacy: [
        {
            name: "Deyung Sun",
            role: "Former Research Assistant - Mechanical Engineering M.S.",
            image: "images/team/AVL_Deyung_Sun.jpg",
            bio: "Developed Gazebo simulations for autonomous vehicle testing using ROS2 Jazzy.",
            linkedin: "https://www.linkedin.com/in/deyung-sun-634780318",
            github: "https://github.com/deyungOAO",
            email: "deyung000@gmail.com"
        },
        {
            name: "Benjamin S Valladolid",
            role: "Former Research Assistant - Mechanical Engineering M.S.",
            image: "images/team/AVL_Benjamin_Valladolid.jpg",
            bio: "Designed the ATAV chassis and developed vehicle dynamics simulations in MATLAB Simulink.",
            linkedin: "https://www.linkedin.com/in/benjaminvalladolid/",
            email: "bsvalladolid@cpp.edu"
        },
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
            role: "Circut Design Engineer at Broadcom & Former Electrical Team Lead - Electrical Engineering",
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
            role: "Former President & Engineer at Honda Racing Corporation USA - Mechanical Engineering",
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
    description: "Join our team. Start as a Club Member or go strait to Research!",
    positions: [
         {
            title: "Any Major - Just stop by!",
            type: "Club Member",
            description: "Work with our research assitants to get hands on experiance with a great pipeline to get into research.",
            requirements: ["Team Player", "Willingness To Learn", "Enthusiasm For AV Technology"],
            applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfk_HtYrLL5Up14f9PZ723znDddnluOmG-dClv7ViwzorlkFg/viewform"
        },
        {
            title: "Research Assitant - Mechanical Engineering",
            type: "Research Position",
            description: "Work on ATAV platform doing CAD, Part Design and all aspects of manufacturing an AV.",
            requirements: ["Hands-on skills", "CAD Knowledge", "Material Design Understanding"],
            applyLink: "" // Add Google Form or email link
        },
        {
            title: "Research Assitant - Electrical & Computer Engineering",
            type: "Research Position",
            description: "Assist with vehicle maintenance, sensor mounting, and electronics integration.",
            requirements: ["Some Programming experience", "Strong Electronical Understanding", "Techincal Writing"],
            applyLink: ""
        },
        {
            title: "Research Assitant - Computer Scientist",
            type: "Research Position",
            description: "Help build and maintain our autonomous vehicle software stack. All skill levels welcome!",
            requirements: ["Python & C++ proficiency", "Basic electronics knowledge", "Linux Skills"],
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
        title: "2025–2026 IGVC Competition Team Launched",
        description: "AVL fielded MARVIN as its Intelligent Ground Vehicle Competition platform, with dedicated perception, vehicle-dynamics, and teleoperation workstreams",
        year: "2025-2026",
        docLink: ""
    },
];


// ============================================================================
// STUDENT PUBLICATIONS & SYMPOSIUM SUBMISSIONS
// ============================================================================
// Tracks research papers, posters, and symposium presentations by AVL members.
//
// Fields:
//   title:       Full title of the publication or presentation
//   authors:     Array of author names in order of contribution
//   venue:       Conference, symposium, or journal name
//   venueShort:  Abbreviated venue name for display badges
//   year:        Year of publication or presentation
//   type:        "paper" | "poster" | "presentation" | "extended-abstract"
//   abstract:    Brief summary or abstract excerpt (1-3 sentences)
//   tags:        Array of topic keywords for filtering
//   paperLink:   URL to the full paper or PDF (use "" if unavailable)
//   posterLink:  URL to the poster image or PDF (use "" if unavailable)
//   slidesLink:  URL to presentation slides (use "" if unavailable)
//   image:       Path to a web-sized poster thumbnail (use "" if none)
//
// To add a new publication: Copy an existing object and modify the fields.
// Publications are displayed newest-first by default.

const PUBLICATIONS = [
    {
        title: "Haptic Sim-Chair-Based Teleoperation System for Autonomous Vehicle Platforms",
        authors: ["Ryan Simpson", "Tyler Carrasco", "Yi-Szen Tang", "Kevin Xu", "Justin Dang", "Dr. Behnam Bahr"],
        venue: "12th Annual Creative Activities and Research Symposium (CPP CARS)",
        venueShort: "CARS 2026",
        year: "2026",
        type: "poster",
        abstract: "Presents a bidirectional haptic teleoperation system that lets a remote operator drive MARVIN through a D-BOX motion chair, Thrustmaster wheel and pedals, and triple-monitor video over a Tailscale VPN. Control, H.265 video, and IMU-driven haptics run as parallel UDP pipelines, with median glass-to-glass camera delay under 150 ms.",
        tags: ["Teleoperation", "Haptics", "ROS 2", "MARVIN"],
        paperLink: "",
        posterLink: "images/posters/AVL_CARS2026_Haptic_Sim_Chair.pdf",
        slidesLink: "",
        image: "images/posters/AVL_CARS2026_Haptic_Sim_Chair.jpg"
    },
    {
        title: "Camera Based Perception for Autonomous Vehicles",
        authors: ["Alexander Assal", "Adam Castillo", "Adrian Tapia", "Janice Hy", "Joshua Lee", "Luman Jiang", "Dr. Behnam Bahr"],
        venue: "12th Annual Creative Activities and Research Symposium (CPP CARS)",
        venueShort: "CARS 2026",
        year: "2026",
        type: "poster",
        abstract: "Describes a camera-only perception and navigation stack for MARVIN at IGVC, running ROS 2 Humble on an NVIDIA Jetson Orin Nano with three ZED X stereo cameras. TwinLiteNet segmentation and YOLOv8 detection are fused into a bird's-eye occupancy costmap for Nav2 MPPI local control.",
        tags: ["Computer Vision", "Perception", "IGVC", "MARVIN"],
        paperLink: "",
        posterLink: "images/posters/AVL_CARS2026_Camera_Perception.pdf",
        slidesLink: "",
        image: "images/posters/AVL_CARS2026_Camera_Perception.jpg"
    },
    {
        title: "Simulation-Based Development of an Autonomous Ground Vehicle",
        authors: ["Alejandro Alcantara", "Kendon Beltran", "Yoliliztli Contreras", "Chris Sierra", "Dr. Behnam Bahr"],
        venue: "12th Annual Creative Activities and Research Symposium (CPP CARS)",
        venueShort: "CARS 2026",
        year: "2026",
        type: "poster",
        abstract: "Develops a MATLAB Simulink and Simscape Multibody digital twin of MARVIN that separates vehicle dynamics from navigation. A Pure Pursuit waypoint follower and PID track-speed controllers were validated in simulation as a foundation for later hardware implementation.",
        tags: ["Simulation", "Vehicle Dynamics", "MATLAB", "MARVIN"],
        paperLink: "",
        posterLink: "images/posters/AVL_CARS2026_Vehicle_Dynamics.pdf",
        slidesLink: "",
        image: "images/posters/AVL_CARS2026_Vehicle_Dynamics.jpg"
    },
    {
        title: "Holonomic E-Corner Module & Airless Tires",
        authors: ["Hyacinth Ang", "Cal Smolenski", "Kaleo Kawamura", "Tyrese Rogers"],
        venue: "12th Annual Creative Activities and Research Symposium (CPP CARS)",
        venueShort: "CARS 2026",
        year: "2026",
        type: "poster",
        abstract: "Presents a low-cost e-corner prototype that combines independent drive, continuous steering, and suspension in one module, using 3D-printed airless lattice tires. A spider-joint suspension pivot and FEA at a 300 lb load informed a working assembly built from catalog hardware and printed TPU, PETG-CF, and PLA parts.",
        tags: ["Holonomic Drive", "Mechanical Design", "Airless Tires"],
        paperLink: "",
        posterLink: "images/posters/AVL_CARS2026_Holonomic_E_Corner.jpg",
        slidesLink: "",
        image: "images/posters/AVL_CARS2026_Holonomic_E_Corner.jpg"
    },
    {
        title: "Simplified Multimodal Imitation Learning for Day-Night Autonomous Driving Using Thermal Vision",
        authors: ["Aspen Knox", "Mohammedparsa Ghasemi", "Dr. Behnam Bahr"],
        venue: "Southern California AI and Robotics Symposium (SCAIR)",
        venueShort: "SCAIR 2025",
        year: "2025",
        type: "poster",
        abstract: "Investigates a simplified, conditioned Imitation Learning model for day-night autonomous driving on a university campus using RGB cameras for daytime and a thermal camera for nighttime operation.",
        tags: ["Imitation Learning", "Thermal Vision", "Autonomous Driving"],
        paperLink: "",
        posterLink: "",
        slidesLink: ""
    },
    {
        title: "Defense-in-Depth Security Architecture for CAN-Based Autonomous Vehicle Control Systems",
        authors: ["Mohammedparsa Ghasemi", "Aspen Knox", "Dr. Behnam Bahr"],
        venue: "Southern California Conference for Undergraduate Research (SCCUR)",
        venueShort: "SCCUR 2025",
        year: "2025",
        type: "presentation",
        abstract: "Proposes practical methods to harden the CAN bus against cyber attacks and make autonomous vehicle control systems more resilient in real-world conditions.",
        tags: ["Cybersecurity", "CAN Bus", "Vehicle Security"],
        paperLink: "",
        posterLink: "",
        slidesLink: ""
    },
    {
        title: "Simulation And Testing Of Autonomous Vehicle With Simultaneous Localization And Mapping (SLAM)",
        authors: ["Jaemin Kim", "Dr. Behnam Bahr", "Dr. Tamer Omar"],
        venue: "Master's Degree Thesis, CPP",
        venueShort: "Thesis",
        year: "2025",
        type: "poster",
        abstract: "Presents the simulation and experimental validation of an autonomous vehicle platform implementing Simultaneous Localization and Mapping (SLAM) for real-time navigation in unknown environments.",
        tags: ["SLAM", "Autonomous Vehicles", "LiDAR", "Sensor Fusion", "ROS", "Robotics"],
        paperLink: "",
        posterLink: "",
        slidesLink: ""
    }
    // -----------------------------------------------------------------------
    // To add a new publication, copy the template below and fill in the fields:
    // -----------------------------------------------------------------------
    // {
    //     title: "Your Paper Title Here",
    //     authors: ["Author One", "Author Two"],
    //     venue: "Full Conference Name",
    //     venueShort: "CONF 2025",
    //     year: "2025",
    //     type: "paper",
    //     abstract: "Brief description of the research.",
    //     tags: ["Tag1", "Tag2"],
    //     paperLink: "",
    //     posterLink: "",
    //     slidesLink: ""
    // }
];


// ============================================================================
// LECTURE SERIES
// ============================================================================
// Faculty-recorded lecture series hosted by Cal Poly Pomona for AVL members.
// Source: https://www.cpp.edu/engineering/autonomous-systems/activities.shtml

const LEARNING_RESOURCES = [
    {
        title: "Vehicle Dynamics",
        professor: "Dr. Farbod Khoshnoud",
        description: "Comprehensive vehicle dynamics covering quarter car models, cornering behavior, suspension effects, and lateral dynamics.",
        level: "Intermediate",
        modules: [
            { title: "Module 1 – Introduction", url: "https://streaming.cpp.edu/media/Module+1+-+Vehicle+Dynamics+-+Ganpat+and+Manju+Center/1_57nl7oyc" },
            { title: "Module 2 – Quarter Car Model – 1DOF", url: "https://streaming.cpp.edu/media/Farbod+Khoshnoud%27s+Personal+Meeting+Room/1_l3dh7qb1" },
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
        professor: "",
        description: "Electric vehicle fundamentals covering motor types, charging systems, regenerative braking, and battery technologies.",
        level: "Intermediate",
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
        professor: "Dr. Sean Monemi",
        description: "Hands-on electrical machine analysis including power measurement, 3-phase systems, generators, and motor characteristics.",
        level: "Intermediate",
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
        professor: "Dr. Zekeriya Aliyazicioglu",
        description: "Digital image fundamentals, spatial and frequency domain enhancement, image restoration, color processing, morphological operations, and segmentation.",
        level: "Advanced",
        modules: [
            { title: "Module 1.1 – Introduction 1", url: "https://streaming.cpp.edu/media/Lecture-1-1/1_dhmbxqd0" },
            { title: "Module 1.2 – Introduction 2", url: "https://streaming.cpp.edu/media/Lecture-1-2/1_g1f4peix" },
            { title: "Module 1.3 – Introduction 3", url: "https://streaming.cpp.edu/media/Lecture-1-3/1_z39i1gp4" },
            { title: "Module 2.1 – Digital Image Fundamentals 1", url: "https://streaming.cpp.edu/media/Lecture-2-1/1_xc7ifdnu" },
            { title: "Module 2.2 – Digital Image Fundamentals 2", url: "https://streaming.cpp.edu/media/Lecture-2-2/1_gvogiav3" },
            { title: "Module 3.1 – Image Enhancement in a Spatial Domain 1", url: "https://streaming.cpp.edu/media/Lecture-3-1/1_ao6rqadq" },
            { title: "Module 3.2 – Image Enhancement in a Spatial Domain 2", url: "https://streaming.cpp.edu/media/Lecture-3-2/1_qrk1b1lv" },
            { title: "Module 3.3 – Image Enhancement in a Spatial Domain 3", url: "https://streaming.cpp.edu/media/Lecture-3-3/1_z083zrnk" },
            { title: "Module 3.4 – Image Enhancement in a Spatial Domain 4", url: "https://streaming.cpp.edu/media/Lecture-3-4/1_1rbs9mmp" },
            { title: "Module 3.5 – Image Enhancement in a Spatial Domain 5", url: "https://streaming.cpp.edu/media/Lecture-3-5/1_f84myc6d" },
            { title: "Module 3.6 – Image Enhancement in a Spatial Domain 6", url: "https://streaming.cpp.edu/media/Lecture-3-6/1_791fw4bz" },
            { title: "Module 4.1 – Image Enhancement in a Frequency Domain 1", url: "https://streaming.cpp.edu/media/Lecture-4-1/1_k0us68mf" },
            { title: "Module 4.2 – Image Enhancement in a Frequency Domain 2", url: "https://streaming.cpp.edu/media/Lecture-4-2/1_twvrgdqs" },
            { title: "Module 4.3 – Image Enhancement in a Frequency Domain 3", url: "https://streaming.cpp.edu/media/Lecture-4-3/1_djobssuk" },
            { title: "Module 4.4 – Image Enhancement in a Frequency Domain 4", url: "https://streaming.cpp.edu/media/Lecture-4-4/1_bzioc4fi" },
            { title: "Module 4.5 – Image Enhancement in a Frequency Domain 5", url: "https://streaming.cpp.edu/media/Lecture-4-5/1_a16jhvfy" },
            { title: "Module 4.6 – Image Enhancement in a Frequency Domain 6", url: "https://streaming.cpp.edu/media/Lecture-4-6/1_xjncosr4" },
            { title: "Module 5.1 – Image Restoration 1", url: "https://streaming.cpp.edu/media/Lecture-5-1/1_63wj1e8v" },
            { title: "Module 5.2 – Image Restoration 2", url: "https://streaming.cpp.edu/media/Lecture-5-2/1_9z2za3zd" },
            { title: "Module 6.1 – Color Image Processing 1", url: "https://streaming.cpp.edu/media/Lecture-6-1/1_goc8oif3" },
            { title: "Module 6.2 – Color Image Processing 2", url: "https://streaming.cpp.edu/media/Lecture-6-2/1_hr5pjoaq" },
            { title: "Module 6.3 – Color Image Processing 3", url: "https://streaming.cpp.edu/media/Lecture-6-3/1_zdw7s1px" },
            { title: "Module 7.1 – Morphological Image Processing 1", url: "https://streaming.cpp.edu/media/Lecture-7-1/1_mvqbmf15" },
            { title: "Module 7.2 – Morphological Image Processing 2", url: "https://streaming.cpp.edu/media/Lecture-7-2/1_fd688bsr" },
            { title: "Module 7.3 – Morphological Image Processing 3", url: "https://streaming.cpp.edu/media/Lecture-7-3/1_nmqgkec4" },
            { title: "Module 7.4 – Morphological Image Processing 4", url: "https://streaming.cpp.edu/media/Lecture-7-4/1_bz9xyof2" },
            { title: "Module 8.1 – Image Segmentation 1", url: "https://streaming.cpp.edu/media/Lecture-8-1/1_3e6govfu" },
            { title: "Module 8.2 – Image Segmentation 2", url: "https://streaming.cpp.edu/media/Lecture-8-2/1_u3n8vtgg" }
        ]
    },
    {
        title: "Fundamentals of Cybersecurity",
        professor: "Dr. Tamer Omar",
        description: "22-module series covering core cybersecurity principles relevant to networked and autonomous systems.",
        level: "Intermediate",
        modules: [
            { title: "Full Playlist – 22 Modules", url: "https://streaming.cpp.edu/playlist/dedicated/1_rhf6tfu4/1_6lv28ieo" }
        ]
    },
    {
        title: "Autonomous Vehicles Kinematics",
        professor: "Dr. Scott Boskovich",
        description: "Spatial descriptions, rotation transforms, quaternions, and differential drive kinematics for autonomous vehicle systems.",
        level: "Intermediate",
        modules: [
            { title: "Module 1 – Spatial Descriptions", url: "https://www.youtube.com/watch?v=xOTWp0aI7sQ&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=1" },
            { title: "Module 2 – Transforms", url: "https://www.youtube.com/watch?v=D9J1lvUn8Hk&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=2" },
            { title: "Module 3 – Compound Rotations", url: "https://www.youtube.com/watch?v=4B5xLo593yM&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=3" },
            { title: "Module 4 – Introduction to Quaternions", url: "https://www.youtube.com/watch?v=JOgmgPz8u_Y&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=4" },
            { title: "Module 5 – Quaternions", url: "https://www.youtube.com/watch?v=HrJh1tX8CLc&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=5" },
            { title: "Module 6 – Differential Drive Robot Kinematics", url: "https://www.youtube.com/watch?v=9fSYZUpsPVo&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=6" },
            { title: "Module 7 – Differential Drive and Control", url: "https://www.youtube.com/watch?v=8R8VfnCpYgE&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=7" },
            { title: "Module 8 – Kingpin Kinematics", url: "https://www.youtube.com/watch?v=IWJNubHSSdA&list=PLjY8PCfTtFsNChs3gFxqYxoEsB0EdmFHL&index=8" }
        ]
    },
    {
        title: "Thermal Management of Electronics and Electric Vehicles",
        professor: "Dr. Reza Baghaei Lakeh",
        description: "Heat transfer fundamentals including conduction, convection, radiation, and practical thermal management strategies for electronics and EVs.",
        level: "Intermediate",
        modules: [
            { title: "Module 1.1 – Fundamentals of Conduction Heat Transfer", url: "https://youtu.be/mY-MDAb5Q9Y" },
            { title: "Module 1.2 – Implementation of Heat Generation", url: "https://youtu.be/3ILAgV2DuyM" },
            { title: "Module 1.3 – Fins for Cooling and Thermal Management", url: "https://youtu.be/herIUN_Usbg" },
            { title: "Module 2.1 – Temperature Regulation of a Heat Source", url: "https://youtu.be/DxuE5Vg9buQ" },
            { title: "Module 2.2 – Temperature Regulation of Internal Flow with Variable Heat Generation", url: "https://youtu.be/KKssDVblvS8" },
            { title: "Module 2.3 – Thermal Management with Natural Convection", url: "https://youtu.be/H4FdmSf3s9Q" },
            { title: "Module 2.4 – Example of Natural Convection Cooling", url: "https://youtu.be/MIRk-cXIUMs" },
            { title: "Module 3.1 – Fundamentals of Radiation", url: "https://youtu.be/QihMAzwcfTs" },
            { title: "Module 3.2 – Spectral Distribution of Blackbody Radiation", url: "https://youtu.be/piDnhl5GE3E" },
            { title: "Module 3.3 – Surface Properties for Thermal Management", url: "https://youtu.be/8BT8k6nXbcs" },
            { title: "Module 4.1 – Fundamentals of Heat Transfer in Enclosures", url: "https://youtu.be/syPJ8_nOnPA" },
            { title: "Module 4.2 – Radiation Shields and Reradiating Surfaces", url: "https://youtu.be/c0xCYKNzk6c" },
            { title: "Module 4.3 – Temperature Regulation of Oven", url: "https://youtu.be/8vtBQ6vQk-s" }
        ]
    },
    {
        title: "Modeling of the Vehicle Routing Problem (VRP)",
        professor: "Dr. Javad Seif",
        description: "Mathematical optimization covering linear programming, integer programming, TSP, and fleet routing formulations.",
        level: "Advanced",
        modules: [
            { title: "Module 1 – Introduction to Mathematical Optimization: Prescriptive Analytics", url: "https://www.youtube.com/watch?v=ElRUXGp2mPo&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=1" },
            { title: "Module 2 – Simplex Method", url: "https://www.youtube.com/watch?v=7WrK6Jk0fvw&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=3" },
            { title: "Module 3 – Linear Programming: The Graphical Method", url: "https://www.youtube.com/watch?v=bBbFDGT-utw&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=4" },
            { title: "Module 4 – Integer Programming and the Branch and Bound Algorithm", url: "https://www.youtube.com/watch?v=C-ZRGA5d9PE&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=4" },
            { title: "Module 5 – Transportation Problem: Mathematical Formulation and Heuristic Algorithms", url: "https://www.youtube.com/watch?v=KXkZ9FQ6Cm4&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=5" },
            { title: "Module 6 – Set Covering Problem: Mathematical Formulation", url: "https://www.youtube.com/watch?v=EF-fwwfsB8g&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=6" },
            { title: "Module 7 – TSP (Traveling Salesman Problem): Mathematical Formulation", url: "https://www.youtube.com/watch?v=krqaZvxwp08&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=7" },
            { title: "Module 8 – Mathematical Model Formulation Basic Examples", url: "https://www.youtube.com/watch?v=YF-ms538UdA&list=PLMquv9hqkirD26OjQwguYYsg7k78a1Lqe&index=8" }
        ]
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
        logo: "images/sponsors/AVL_Sponsor_Robodk.png",
        url: "https://robodk.com/index",
        description: "Simulation and offline programming software for industrial robots"
    },
    {
        name: "SendCutSend",
        type: "industry",
        logo: "images/sponsors/AVL_Sponsor_SendCutSend.png",
        url: "https://sendcutsend.com",
        description: "STEM sponsor providing custom metal cutting and fabrication for AVL vehicle projects"
    }
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
