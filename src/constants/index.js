import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    go,
    gopher,
    java,
    python,
    fastapi,
    aws,
    reactjs,
    tailwind,
    docker,
    mysql,
    geekcamp,
    kogakuin,
    community,
    progate,
    connpass,
    qrcode,
    mapchat,
    furo,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
        title: "University Student",
        icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
        name: "Go",
        icon: go,
    },
    {
        name: "Gopher",
        icon: gopher,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "FastAPI",
        icon: fastapi,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
        name: "mysql",
        icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Entered Kogakuin University",
      company_name: "Department of Electrical and Electronic Engineering, Faculty of Engineering",
      icon: kogakuin,
      iconBg: "#ffffff",
      date: "April 2022 - March 2026",
      points: [
        "In the Department of Electrical and Electronic Engineering, students studied a wide range of fields from basic electrical and electronic theory to applied technology from their first to third year.",
        "I am a member of the Biomedical Bioinformatics Laboratory for lab seminars and have read past papers on biosignal processing / bioinstrumentation / big data / systems biology / medical-engineering collaboration to deepen my knowledge.",
      ],
    },
    {
      title: "Establishment of a student engineering community",
      company_name: "matthewTechCom",
      icon: community,
      iconBg: "#ffffff",
      date: "October 2024 - Present",
      points: [
        "Community members: 8",
        "The basic activity is to give a presentation once a week on what we have learned that week.",
        "We also participate in hackathons as part of our team development practice, and actively participate in study groups and student social gatherings held on connpass and other sites!",
      ],
    },
    {
      title: "I'm giving a lightning talk (LT) at a study group on Connpass.",
      company_name: "gijutsu_club",
      icon: connpass,
      iconBg: "#ffffff",
      date: "November 2024",
      points: [
        "I gave a lightning talk (LT) for the first time in my life at a technical club, a community of working and student engineers.",
        "The theme of the talk was a review of learning and future goals as a self-taught 8-month programming novice.",
      ],
      links: [
        {
            label: "Canva",
            url: "https://www.canva.com/design/DAGWkQNgUNQ/gw12XidmypEglEZ5r7A61Q/view?utm_content=DAGWkQNgUNQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6d49e67501",
        }
      ],
    },
    {
      title: "Participation in Progate+AWS Hackathon",
      company_name: "Progate+AWS Hackathon",
      icon: progate,
      iconBg: "#ffffff",
      date: "December 2024(10 days)",
      points: [
        "Work: QR Code Generation + Editing Application",
        "Responsible for: Frontend, Backend (all), Infrastructure (all)",
        "Tech stack: Go(Echo) , Python(FastAPI), TypeScript(React), Postgresql, Docker, AWS(S3, EC2, RDS, CloudFront)",
        "I participated in a team of four people that were randomly assembled.",
      ],
      links: [
        {
            label: "GitHub Repository",
            url: "https://github.com/aws-bell/QRCode2",
        },
        {
            label: "Topa'z",
            url: "https://topaz.dev/projects/0491b2738324794cb698",
        }
      ],
    },
    {
      title: "geekcamp vol.19",
      company_name: "geekcamp",
      icon: geekcamp,
      iconBg: "#ffffff",
      date: "December 2024(10 days)",
      points: [
        "Work: Anti-bath cancellation neighborhood",
        "Responsible for: Frontend, Backend (all), Infrastructure (all)",
        "Tech stack: Go(Echo) , JavaScript(React), Postgresql, Docker, Render, Vercel",
        "I participated in a team of 5 people that were randomly assembled.",
      ],
      links: [
        {
            label: "GitHub Repository",
            url: "https://github.com/giikucamp19/Bath_Record2",
        }
      ],
    },
    {
        title: "geekcamp vol.20",
        company_name: "geekcamp",
        icon: geekcamp,
        iconBg: "#ffffff",
        date: "January 2025(10 days)",
        points: [
          "Work: MapChat",
          "Responsible for: Frontend, Backend(WebSocket), Infrastructure",
          "Tech stack: Go(Echo) , TypeScript(Next.js), Postgresql, Docker, AWS(S3), Render, Vercel, GoogleMapAPI, Websocket(gorilla)",
          "We were a team of 5 community members.",
        ],
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/matthewTechCom/giikucamp20",
            },
            {
                label: "Demo Youtube",
                url: "https://www.youtube.com/watch?v=6FCzCMR900Y&list=LL"
            },
            {
                label: "GoogleSlide",
                url: "https://docs.google.com/presentation/d/1QDn-A4Fc-5dGqT-dhB04aR5CEcgwjPX1v7d84bZvvaw/edit?usp=sharing",
            }
        ],
    },
  ];
  
  const projects = [
    {
        name: "MapChat",
        description:
          "By using GoogleMap and LINE-like chat, it provides a place where people can easily connect and share information with others nearby on the spot. Chat rooms are created by placing a pin on the map, and users who join the room can conduct group chats.There are also various other functions such as sending files and street view.",
        tags: [
          {
            name: "Go",
            color: "blue-text-gradient",
          },
          {
            name: "Next.js",
            color: "green-text-gradient",
          },
          {
            name: "Websocket",
            color: "pink-text-gradient",
          },
        ],
        image: mapchat,
        source_code_link: "https://github.com/matthewTechCom/giikucamp20",
    },
    {
      name: "QR Code Generation + Editing Application",
      description:
        "QRCode can be generated from URL or Text, and an image can be embedded in the middle of the generated QRCode or its color can be changed. Animated QRCode can also be generated by embedding a Gif image.",
      tags: [
        {
          name: "Go",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: qrcode,
      source_code_link: "https://github.com/aws-bell/QRCode2",
    },
    {
      name: "Anti-bath cancellation neighborhood",
      description:
        "This is an application to make the anti-bath cancellation community, which I heard a lot about for a while on twitter, take a bath. It records whether you take a bath or not in the calendar every day, and if you don't take a bath continuously, your favorite image gets dirtier and dirtier.",
      tags: [
        {
          name: "Go",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Postgres",
          color: "pink-text-gradient",
        },
      ],
      image: furo,
      source_code_link: "https://github.com/giikucamp19/Bath_Record2",
    },
  ];
  
  export { services, technologies, experiences, projects };