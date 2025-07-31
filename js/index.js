var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    loop: true,
    simulateTouch: false,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var ModalmySwiper = new Swiper(".ModalmySwiper", {
    slidesPerView: 2,
    breakpoints: {
        500: { // 当屏幕宽度 >= 640px 时
            slidesPerView: 3, // 设置为每页显示 2 个 slide
        },
    },
    loop: true,
    autoplay: {
        delay: 3000, // 自动播放间隔时间为5秒
        disableOnInteraction: false,
    }
});

var ImaVal;

// Translate
$(document).ready(function () {
    var language = localStorage.getItem('language');
    if (language == "En_Us") {
        $('#English').click();
    } else if (language == "En_Ch") {
        $('#Chinese').click();
    } else {
        $('#English').click();
    }
});

$('#Chinese').click(function () {
    $(this).addClass('active');
    $('#English').removeClass('active');
    localStorage.setItem('language', "En_Ch");
    SetLanguage('En_Us');
})

$('#English').click(function () {
    $(this).addClass('active');
    $('#Chinese').removeClass('active');
    localStorage.setItem('language', "En_Us");
    SetLanguage('En_Ch');
})

function SetLanguage(hide) {
    var language = localStorage.getItem('language');
    $('.' + language).show();
    $('.' + hide).hide();
    $('.EmailAddress').show();

    SetDetails(language, ImaVal);
}

// About Us
$(".AbUS").off().on('click', function () {
    $('.RotationDisplay').fadeIn(1000);
    $('.RotationDisplay').css('display', 'flex');
    ModalmySwiper.autoplay.start();
});

$("#AbClose").off().on('click', function () {
    $('.RotationDisplay').fadeOut(1000);
    ModalmySwiper.autoplay.stop();
});

// Contact us
$(".CtUS").off().on('click', function () {
    $('.RecruitmentDisplay').fadeIn(1000);
    $('.RecruitmentDisplay').css('display', 'flex');
});

$("#CtClose").off().on('click', function () {
    $('.RecruitmentDisplay').fadeOut(1000);
});


var DetailsUsArr = [
    {
        "title": "Client",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#F8F3FF",
        "require": [
            "1. Design and develop mobile game client, including client structure, code and logic, resource structure, UI system;",
            "2. Lead the client development team to ensure that the products responsible for meet the project's time schedule and quality requirements;",
            "3. Coordinate game requirements and technology with server-side, planners, and project managers;",
            "4. Responsible for the design and implementation of various functional modules of the game client;",
            "5. Responsible for personnel allocation, progress, and quality control of the game project client;",
            "6. Continuously optimize code, iterate requirements, ensure quality, improve efficiency, enhance game experience, and precipitate experience into solutions;",
            "7. Responsible for package submission and shelf placement, understanding the Google/iOS submission review mechanism.",
            "8. More than 3 years of game client development experience, more than 1 year of team management experience, priority given to projects that have successfully launched;",
            "9. Proficient in using C#, Java, Kotlin, C/C++, mastering scripting languages such as Lua, familiar with knowledge in the software development field (computer systems, OS, data structures, etc.);",
            "10. Possess a spirit of exploration, love technology, and keep up with technological developments;",
            "11. Strong learning ability, sense of responsibility, good communication skills, and teamwork spirit;",
            "12. Good at summarizing experience, forming documents, and standardizing client work."
        ]
    },
    {
        "title": "Software",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#FBF0F6",
        "require": [
            "1. Responsible for the design, development, testing, and optimization of game server framework, business underlying modules, and logic modules;",
            "2. Responsible for the stability and efficiency optimization of the server framework;",
            "3. Responsible for timely resolution of various faults and problems that occur during game operation.",
            "4. Associate degree or above in computer-related major, with more than 5 years of game development experience;",
            "5. Proficient in C++/Golang/C#, familiar with Linux/Unix development environment, familiar with shell, system programming;",
            "6. Familiar with TCP/IP protocol, network programming, database programming (MySQL, Redis, SQL Server), familiar with Kafka;",
            "7. Good programming specifications and programming ideas, strong problem analysis and problem-solving spirit;",
            "8. Sense of responsibility and teamwork."
        ]
    },
    {
        "title": "Product",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#EAFBF3",
        "require": [
            "1. According to the positioning and requirements of game products, plan and implement version iteration plans and landing for game rules and functional parts;",
            "2. Responsible for acceptance testing of game development content to ensure product quality;",
            "3. Responsible for competitive product research, product analysis, user research, etc.;",
            "4. Collect game feedback, optimize and improve game experience;",
            "5. Complete requirements docking and landing work for other positions such as marketing, operation, and customer service.",
            "6. Bachelor's degree or above, with more than 3 years of experience in leisure game planning; proficiency in game numerical planning is preferred;",
            "7. Familiar with various types of casual games;",
            "8. Possess good documentation and software capabilities;",
            "9. Familiar with game project development and release processes;",
            "10. Excellent team communication and coordination skills;",
            "11. Have a certain understanding, analysis, and research on the game market and various types of game products;",
            "12. Possess a good spirit of exploration, have a good professional ethics, be responsible for work and products, be able to withstand work pressure and challenges."
        ]
    },
    {
        "title": "DevOps",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#EDF4FF",
        "require": [
            "1. Responsible for the design of the company's product operation architecture, writing deployment documents, implementing online environment deployment, version release change implementation, emergency response handling, problem tracking and promotion, log and monitoring system design and implementation, participating in the design of automated operation and maintenance platforms, and CI/CD process planning and implementation.",
            "[Job Requirements]",
            "2. Have extensive experience in large-scale Kubernetes cluster operation and maintenance, and understand its working principles;",
            "3. Proficient in various network protocols such as HTTP, TCP, WS, UDP;",
            "4. Proficient in Python/Go programming languages, Shell script writing tools;",
            "5. Proficient in the architecture principles, installation, and configuration of mainstream open-source systems such as Nginx, Redis, MySQL, Kafka, ELK, Prometheus, Jenkins, microservice frameworks;",
            "6. Proficient in the use of mainstream Linux operating systems;",
            "7. Proficient in the use of public cloud products (Alibaba Cloud, AWS, etc.);",
            "8. Familiar with virtualization, storage, network security protection, LAN, WAN technologies;",
            "9. Clear and agile thinking, strong logical analysis ability, good oral and written communication skills, able to withstand work pressure.",
            "10. Experience in monitoring systems, log systems design, proficient use of cloud-native tools such as Helm.",
            "11. More than 3 years of experience in large-scale network maintenance, familiar with various vendors' routing and switching, and computer maintenance.",
            "12. More than 5 years of experience in the Internet industry operations, experience in high-concurrency and large-scale user operations."
        ]
    },
    {
        "title": "Database Development",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#FDF0F0",
        "require": [
            "1. Responsible for the safe operation and development of the core transaction system database and related basic platform systems;",
            "2. Responsible for designing and implementing high-availability solutions for databases to ensure more than 99.99% availability;",
            "3. Troubleshooting, emergency handling, responsible for analyzing and solving database performance issues, able to accurately locate the root cause of problems in a timely manner;",
            "4. SQL optimization, responsible for optimizing and making suggestions for problem SQL;",
            "5. Conduct forward-looking research on database technology, and promote its use;",
            "6. Provide technical consultation and system technical support services for project managers or system leaders.",
            "7. Have more than 5 years of work experience, including more than three years of SQL Server dedicated database operation management and technical support experience, proficient in using PERFORMANCE DASHBOARD, SQL PROFILER, and related diagnostic tools, deep understanding of index, physical and logical storage, execution plan, BLOCKING AND DEADLOCKING; proficient in backup and restoration, DBCC, database clustering, mirroring, replication distribution, etc., proficient in related Windows platform (cluster/AD domain) auxiliary knowledge; talents with two or more database technologies including SQL SERVER are preferred;",
            "8. Familiar with Linux, Windows, IIS, SQL Server, Apache/Nginx, MySQL;",
            "9. Familiar with the architecture, replication, high availability, monitoring, and backup mechanisms of SQL Server and MySQL, and have practical maintenance experience is preferred;",
            "10. Proficient in SQL statements, writing stored procedures, designing table structures for SQL Server and MySQL;",
            "11. Careful, patient, calm, under pressure, responsible, willing to study technology, high interest in DBA work, and have good communication skills and teamwork spirit."
        ]
    },
    {
        "title": "WEB Development",
        "tag": "Engineer",
        "stag": "[Job Responsibilities]",
        "color": "#EEF7FF",
        "require": [
            "1. Quickly understand requirements and write high-quality code, iterate products and features quickly;",
            "2. Participate in all stages of product conception, architecture, and execution;",
            "3. Mainly responsible for the front-end and back-end development of the product operation background.",
            "4. More than 3 years of development experience, associate degree or above in computer-related major, good programming habits;",
            "5. Proficient in basic front-end technologies, including HTML /CSS /Javascript /jQuery /Bootstrap, etc.;",
            "6. Proficient in at least one common front-end framework, such as React, AngularJs, Vue, etc.;",
            "7. Proficient in .net platform."
        ]
    }
];

var DetailsChArr = [
    {
        "title": "客户端主程",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#F8F3FF",
        "require": [
            "【岗位职责】",
            "1. 设计和开发手机游戏客户端，包括客户端结构、代码和逻辑，资源结构，UI系统；",
            "2. 主导客户端开发团队，确保所负责产品能满足项目的时间计划和质量要求；",
            "3. 跟服务器端，策划和项目经理协调游戏的需求和技术；",
            "4. 负责游戏客户端各功能模块的设计及实施；",
            "5. 负责所在游戏项目客户端的人员分配及进度、质量控制；",
            "6. 持续优化代码、迭代需求，保证质量，提高效率，提升游戏体验，并沉淀经验成形方案；",
            "7. 负责包体提审及上架，了解 Google/iOS 提审审核机制。",
            "【任职要求】",
            "1. 3 年以上游戏客户端开发经验，1 年以上的团队管理经验，有成功上线的项目优先；",
            "2. 熟练使用 C#, Java, Kotlin, C/C++，掌握 Lua 等脚本语言，熟悉软件研发领域知识（计算机系统，OS、数据结构等）；",
            "3. 具有钻研精神，热爱技术，能紧跟技术发展的脚步；",
            "4. 学习能力强，有责任感，有良好的沟通能力，具备团队合作精神；",
            "5. 善于总结经验，形成文档，规范化客户端工作。"
        ]
    },
    {
        "title": "服务端主程",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#FBF0F6",
        "require": [
            "【岗位要求】",
            "1. 负责游戏服务端框架，业务底层模块，逻辑模块设计、开发和测试以及优化；",
            "2. 负责服务器框架的稳定性和效率优化；",
            "3. 负责对游戏上线运营期间产生的各种故障和问题及时解决。",
            "【任职资格】",
            "1. 计算机相关专业大专及以上学历，有5年以上游戏开发经验；",
            "2. 熟练掌握 C++/Golang/C#，熟悉 Linux/Unix 开发环境，熟悉 shell、系统编程；",
            "3. 熟悉 TCP/IP 协议，熟悉网络编程，熟悉数据库（MySQL, Redis, SQL Server）编程，熟悉 Kafka；",
            "4. 良好的编程规范和编程思想，具有较强的分析问题和解决问题精神；",
            "5. 对项目有责任感和团队意识。"
        ]
    },
    {
        "title": "产品经理",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#EAFBF3",
        "require": [
            "【岗位职责】",
            "1. 根据游戏产品的定位及需求对游戏规则及功能部分进行版本迭代计划及落地；",
            "2. 负责对游戏开发内容进行验收测试，保证产品质量；",
            "3. 负责竞品调研、产品分析、用户调研等工作；",
            "4. 收集游戏反馈，优化提高游戏体验；",
            "5. 完成市场、运营、客服等其他岗位的需求对接及落地工作。",
            "【任职要求】",
            "1. 本科以上学历，3年或以上休闲游戏策划经验；擅长游戏数值策划优先；",
            "2. 熟悉各类休闲游戏；",
            "3. 具备良好的文档能力及软件能力；",
            "4. 熟悉游戏项目开发和发布流程；",
            "5. 有优秀的团队沟通及协调能力；",
            "6. 对游戏市场及各类型的游戏产品有一定的理解、分析及研究；",
            "7. 具备良好的钻研精神，具备良好的职业操守，对工作及产品负责，能够承受工作压力及挑战。"
        ]
    },
    {
        "title": "运维工程师",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#EDF4FF",
        "require": [
            "【岗位职责】",
            "1. 负责公司产品运维架构设计、部署文档撰写、线上环境部署实施、版本发布变更实施、突发事件响应处理、问题跟踪推进处理、日志及监控系统方案设计和实施，参与自动化运维平台设计，CI/CD流程规划和实施。",
            "【岗位要求】",
            "1. 有大规模Kubernetes集群运维经验，并了解其工作原理；",
            "2. 精通网络各种Http、TCP、WS、UDP协议；",
            "3. 熟练掌握Python/Go编程语言、Shell编写脚本工具；",
            "4. 熟练掌握Nginx、Redis、Mysql、Kafka、ELK、Prometheus、Jenkins、微服务框架等主流开源系统的架构原理、安装和配置；",
            "5. 熟练掌握Linux主流操作系统的使用；",
            "6. 熟练掌握公有云产品的使用（阿里云、AWS等）；",
            "7. 熟悉虚拟化、存储、网络安全防护、局域网、广域网技术；",
            "8. 思维清晰敏捷，逻辑分析能力强，良好的口头和书面表达能力，能够承受工作压力；",
            "9. 拥有监控系统、日志系统的设计经验，云原生工具如Helm等的熟练使用；",
            "10. 3年以上大型网络维护经验，熟悉各厂商路由交换和电脑维护；",
            "11. 5年及以上互联网行业运维经验，有高并发海量用户运维经验。"
        ]
    },
    {
        "title": "数据库开发工程师",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#FDF0F0",
        "require": [
            "【岗位职责】",
            "1. 负责核心交易系统数据库及相关基础平台系统的安全运维与开发；",
            "2. 负责设计及实施数据库的高可用性方案，以保证数据库99.99%以上的可用性；",
            "3. 故障排查，应急处理，负责分析并解决数据库的性能问题, 能及时准确地定位问题根源；",
            "4. SQL优化，负责对问题SQL提出优化及改进建议；",
            "5. 数据库技术前瞻性研究，并进行技术跟进和推广使用；",
            "6. 为项目经理或者系统负责人提供技术咨询及系统技术支持服务。",
            "【任职要求】",
            "1. 具有5年以上工作经验，其中三年以上SQL Server专职数据库运维管理及技术支持经验，熟练使用PERFORMANCE DASHBOARD、SQL PROFILER和相关诊断工具，深入了解索引、物理和逻辑存储、执行计划、BLOCKING AND DEADLOCKING；熟练掌握备份还原、DBCC、数据库集群、镜像、复制分发等，熟练掌握相关WINDOWS平台（集群/AD域）等辅助知识；掌握包括SQL SERVER在内的两种或以上数据库技术人才优先；",
            "2. 熟悉Linux、Windows、IIS、SQLServer、Apache/Nginx、MySQL；",
            "3. 熟悉SQLServer、MySQL的体系结构，复制，高可用，监控，备份机制，并有过实际维护经验优先；",
            "4. 精通SQL Server和MySQL的SQL语句、编写存储过程、设计表结构；",
            "5. 细心，耐心，冷静，承压，负责，愿意研究技术，对DBA工作有较高兴趣，具有良好的沟通能力和团队合作精神。"
        ]
    },
    {
        "title": "WEB开发工程师",
        "tag": "",
        "stag": "[岗位职责/任职资格]",
        "color": "#EEF7FF",
        "require": [
            "【岗位职责】",
            "1. 快速了解需求并编写高质量的代码，快速迭代产品和功能；",
            "2. 参与到产品构思、架构、和执行的所有开发阶段；",
            "3. 主要负责产品运营后台的前后端开发。",
            "【任职要求】",
            "1. 3年以上开发经验，计算机相关专业大专及以上学历，良好的编程习惯；",
            "2. 精通前端基本技术，包括HTML /CSS /Javascript /jQuery /Bootstrap等；",
            "3. 熟练掌握至少一种常用前端框架，如React、AngularJs、Vue等；",
            "4. 精通.net平台框架，熟练使用C#、asp.net等技术；",
            "5. 熟练使用git团队开发工具；",
            "6. 具备较强研究与解决问题的能力，有良好的沟通能力和团队精神。"
        ]
    }
];

$('.MeanCol').off().on('click', function () {
    var language = localStorage.getItem('language');
    var imgValue = ImaVal = $(this).data('img');
    SetDetails(language, imgValue);
    $('.DetailsDisplay').fadeIn(500);
});
$("#deClose").off().on('click', function () {
    $('.DetailsDisplay').fadeOut(500);
});

function SetDetails(language, imgValue) {
    var Details;
    if (language == 'En_Ch') {
        Details = DetailsChArr[imgValue];
    } else {
        Details = DetailsUsArr[imgValue];
    }
    $('.DetailsBackground').css('background-color', Details.color);
    $('.DetailsTitle').text(Details.title);
    $('.bigTag').text(Details.tag);
    $('.smallTag').text(Details.stag);
    $('.DetailsText').empty();
    $.each(Details.require, function (index, item) {
        $('.DetailsText').append('<p>' + item + '</p>');
    });
}