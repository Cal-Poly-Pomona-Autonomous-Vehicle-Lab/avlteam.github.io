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
            image: "placeholder",
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
            image: "placeholder",
            bio: "Promoting lab activities, achievements, and events through outreach and communication channels.",
            linkedin: "https://www.linkedin.com/in/tyrese-rogers-0933152a5/",
            email: ""
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
            image: "placeholder",
            bio: "Working on the control systems for autonomous driving systems.",
            linkedin: "https://www.linkedin.com/in/calebhylkema",
            email: "calebhylkema6@gmail.com"
        },
        {
            name: "Researcher Name",
            role: "Computer Vision Engineer",
            image: "placeholder",
            bio: "Working on thermal imaging and day-night autonomous driving systems.",
            linkedin: "",
            github: "",
            email: ""
        },
    ],
    
    // Legacy Members (past contributors)
    members: [
        {
            name: "Jaemin Kim",
            role: "Researcher -M.S. Electrical Engineering",
            image: "placeholder",
            bio: "Developed and optimized C++ and Python code used to control linear actuator, stepper motor, gear selection, and the motorand Integrated inertial measurement unit (IMU), encoders, cameras, and lidar within the car for data collection.",
            linkedin: "https://www.linkedin.com/in/jm-k/",
            email: "jaemin.d.kim@gmail.com"
        },
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
        icon: "🔴",
        description: "Real-time point cloud processing, object detection, and 3D scene understanding using Velodyne VLP-16 sensors.",
        projects: ["High-speed packet decoding", "Occupancy grid mapping", "Point cloud segmentation"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Computer Vision",
        icon: "👁️",
        description: "Multi-modal vision systems including stereo cameras and thermal imaging for robust perception in all conditions.",
        projects: ["YOLOPv2 lane detection", "Thermal-visual fusion", "Day-night driving"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Path Planning & Navigation",
        icon: "🛤️",
        description: "Developing algorithms for safe and efficient autonomous navigation on campus roads.",
        projects: ["Pure Pursuit controllers", "Dynamic Window Approach", "Behavior planning"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Sensor Fusion",
        icon: "🔗",
        description: "Integrating data from LiDAR, cameras, GPS, and IMU for accurate localization and mapping.",
        projects: ["Multi-sensor calibration", "State estimation", "SLAM integration"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Digital Twins & Simulation",
        icon: "🌐",
        description: "Creating photorealistic virtual environments of campus for testing and validation.",
        projects: ["3D Gaussian Splatting", "Neural radiance fields", "Synthetic data generation"],
        docLink: ""  // Add Google Doc or page URL here
    },
    {
        title: "Vehicle Cybersecurity",
        icon: "🔒",
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
    { number: "300K+", label: "Points Processed Per Second" },
    { number: "15+", label: "FPS LiDAR Visualization" },
    { number: "5+", label: "Active Research Projects" },
    { number: "20+", label: "Lab Members" }
];

const ACHIEVEMENTS = [
    {
        title: "Published Research",
        description: "Imitation learning for day-night autonomous driving using thermal vision",
        year: "2024",
        docLink: ""  // Add link to paper or documentation
    },
    {
        title: "Campus Mapping Project",
        description: "Creating the first high-definition digital twin of Cal Poly Pomona campus roads",
        year: "2024-2025",
        docLink: ""  // Add link to paper or documentation
    },
    {
        title: "Real-time LiDAR System",
        description: "Developed custom Velodyne decoder achieving 15+ FPS performance",
        year: "2024",
        docLink: ""  // Add link to paper or documentation
    }
];


// ============================================================================
// LEARN BY DOING WORKSHOPS & RESOURCES
// ============================================================================
// Educational content and workshops offered

const LEARNING_RESOURCES = [
    {
        title: "Introduction to ROS",
        type: "Workshop Series",
        description: "Learn the Robot Operating System from scratch. Covers topics from basic concepts to advanced node development.",
        level: "Beginner"
    },
    {
        title: "LiDAR Fundamentals",
        type: "Hands-on Lab",
        description: "Understand how LiDAR works and process real point cloud data from our Velodyne sensors.",
        level: "Intermediate"
    },
    {
        title: "Computer Vision with OpenCV",
        type: "Workshop",
        description: "Image processing, object detection, and lane detection for autonomous vehicles.",
        level: "Beginner"
    },
    {
        title: "Path Planning Algorithms",
        type: "Technical Deep-Dive",
        description: "Implement A*, RRT, and dynamic planning algorithms for autonomous navigation.",
        level: "Advanced"
    },
    {
        title: "CAN Bus & Vehicle Networks",
        type: "Security Workshop",
        description: "Explore automotive communication protocols and cybersecurity considerations.",
        level: "Intermediate"
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
    { name: "Velodyne VLP-16 LiDAR", description: "360° 3D scanning", docLink: "" },
    { name: "Stereo Camera System", description: "Depth perception", docLink: "" },
    { name: "RTK-GPS", description: "Centimeter-level positioning", docLink: "" },
    { name: "Xsens IMU", description: "Motion tracking", docLink: "" },
    { name: "NVIDIA RTX 5090", description: "Neural network training", docLink: "" },
    { name: "Research Vehicle", description: "Sensor integration platform", docLink: "" }
];
