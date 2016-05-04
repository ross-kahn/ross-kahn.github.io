(function(){
	var iconPath = "images//icons//";
	var socialLinks =[
		{
			href: "https://www.linkedin.com/in/rosstkahn",
			imgSrc: iconPath + "linkedin.png",
			imgClass: "icon round"
		},
		{
			href: "https://github.com/ross-kahn",
			imgSrc: iconPath + "github_dark.png",
			imgClass: "icon"
		},
		{
			href: "https://open.spotify.com/user/rkon!",
			imgSrc: iconPath + "spotify.png",
			imgClass: "icon"
		},
		{
			href: "https://www.instagram.com/kaaahhhnnn/",
			imgSrc: iconPath + "instagram.png",
			imgClass: "icon round"
		}
	];
	
	var bioDescriptions=[
		{
			tag: "usability",
			title: "Usability",
			body: "Currently I hold the title of Usability Coordinator for my section at Epic, which contains about 50-75 developers. Usability testing (including hallway testing, moderated testing, and summative testing), Gestaltism, Fitts' law, human factors, heuristic evaluations, and common practices are all tools that I've used effectively on the job. My education, professional experience, and dedicated reading on the subject have allowed me to practice and expand on these skills often. "
		},
		{
			tag: "pm",
			title: "Project Management",
			body: "I have over 4500 hours of project management experience in a wide variety of projects. These projects include the creation of multiple enterprise-level software systems, implementing processes to monitor and control over a dozen volunteer committees, and even organizing a Guinness World Record breaking event. In March 2016 I earned my Certified Associate in Project Management certification from PMI, with the intention of also earning my Project Management Professional and PMI Agile Certified Practitioner certifications in the near future."
		},
		{
			tag: "leadership",
			title: "Leadership",
			body: "My motivation comes from people; both the people I'm creating software for, and the people I work with. I pride myself on working very well with others, being able to motivate the other people on my team, and providing guidance based on my project management experience. I really believe that a high-functioning software team is an unstoppable problem-solving force."
		},
		{
			tag: "learning",
			title: "Learning",
			body: "I have a near-insatiable appetite for learning. I devoured my classes in college, allowing me to graduate with honors in an engineering major and with two minors. All of my work experience, and especially my work at Epic, forces me to become an expert very quickly in both technical and non-technical areas that I've never had experience with. I'm constantly going out of my way to learn new technologies so I can keep my skills razor-sharp and up to date (as evidenced by my Codeschool certifications)."
		},
		{
			tag: "achievement",
			title: "Achievement",
			body: "I'm constantly working to be the best at what I do. I take pride and ownership in any project that I'm a part of, and during work hours I'm using my entire arsenal of knowledge and experience to make my projects the best they can be. After hours I'm determinedly working to expand and reinforce that arsenal of knowledge by doing side projects, completing Codeschool courses, and earning professional certifications like the CAPM."
		},{
			tag: "people",
			title: "The Joy of Software",
			body: "I study both Software Engineering and Psychology, which allows me to understand both computers and the human mind. I also study both Usability and Game Design, which allows me to understand what people need in order to master their software, and also why they keep wanting to use it. People are the reason why I do what I do, and I think my background in these four areas give me a unique perspective on how to make awesome products."
		},
	];
	var csImgPath= "images//codeschool//";
	var csCerts= [
		{
			title: "CoffeeScript",
			source: "Codeschool",
			description: "Variables, Functions, Applied jQuery, Conditionals, Operators, Arrays, Objects, Iterations, Classes",
			imgSrc: csImgPath + "coffeescript.png"
		},{
			title: "Backbone pt. 1",
			source: "Codeschool",
			description: "Models, Views, Event Binding, Collections, Collection Views, Router, History",
			imgSrc: csImgPath + "backbone1.png"
		},{
			title: "Angular pt. 1",
			source: "Codeschool",
			description: "Expressions, Directives, Forms, Custom Directives, Services",
			imgSrc: csImgPath + "angular1.png"
		},
		{
			title: "JavaScript pt. 3",
			source: "Codeschool",
			description: "Function Expressions, Closures, Hoisting, Objects, Prototypes",
			imgSrc: csImgPath + "javascript3.png"
		},
		{
			title: "Front-End 2",
			source: "Codeschool",
			description: "HTML5, CSS3, Fonts & Interactions",
			imgSrc: csImgPath + "frontend2.png"
		},
		{
			title: "Bootstrap",
			source: "Codeschool",
			description: "Grid Design, Typography, Bootstrap CSS, Bootstrap JavaScript",
			imgSrc: csImgPath + "bootstrap.png"
		},
		{
			title: "Sass 1",
			source: "Codeschool",
			description: "Variables, Mixins, Extending, Directives, Math + Color, Responsiveness",
			imgSrc: csImgPath + "sass.png"
		},
		{
			title: "Sass 2",
			source: "Codeschool",
			description: "Compass, Utilities, Rhythm, Sprites",
			imgSrc: csImgPath + "sass2.png"
		},
		{
			title: "Mobile Design",
			source: "Codeschool",
			description: "Mobile foundations, Fluid layouts, Adaptive design, Responsive design, Responsive media",
			imgSrc: csImgPath + "mobile.png"
		},
		{
			title: "CSS",
			source: "Codeschool",
			description: "Clearing, Box bindings, Best Practices, Layout and Specificity Safety, Images, Sprites, Pseudo Classes",
			imgSrc: csImgPath + "css.png"
		},
		{
			title: "JavaScript pt. 2",
			source: "Codeschool",
			description: "Loops, Conditionals, Built-Ins, Declarations, Arrays",
			imgSrc: csImgPath + "javascript2.png"
		},{
			title: "JavaScript pt. 1",
			source: "Codeschool",
			description: "JS Console, Values, Variables, Files",
			imgSrc: csImgPath + "javascript1.png"
		},{
			title: "Front-End 1",
			source: "Codeschool",
			description: "HTML, CSS, Classes and Layout, Images, Fonts and Forms",
			imgSrc: csImgPath + "frontend1.png"
		},
	];
		
	var profImgPath=  "images//";
	var profCerts = [
		{
			title: "CAPM",
			source: "PMI",
			description: "Proficiency in managing integration, scope, time, cost, quality, human resources, communications, risks, procurements, and stakeholders.",
			imgSrc: profImgPath + "pmi.gif"
		},
		{
			title: "Web Tech Camp",
			source: "Epic",
			description: "Safely designing enterprise-level software using the MVVM Pattern, C#, CSS, HTML, JavaScript, Visual Studio 2013, and Fiddler",
			imgSrc: profImgPath + "epic180x180.png"
		},
		{
			title: ".NET / C#",
			source: "Epic",
			description: "Advanced C#, Database communication, Designing for MVVM, Event handling, Error handling",
			imgSrc: profImgPath + "epic180x180.png"
		},
		{
			title: "Chronicles Server",
			source: "Epic",
			description: "Chronicles node-based DBMS, Mumps",
			imgSrc: profImgPath + "epic180x180.png"
		},
	];
	
	var projectList = [
		{
			title: "'jobSalt' web app",
			position: "Project Lead",
			org: "RIT OCE",
			year: "2014",
			bullets: [
				"Job search, alumni connection, salary information, and housing review app for students",
				"Clients were the RIT Office of Cooperative Education and the same office at the University of Arizona",
				"Built using: C#, MVC .NET, Bootstrap + HTML5 + CSS3, Visual Studio 2013"
			],
			hasLinks: true,
			links: [
				{
					title: "Browse project on Github",
					icon: iconPath + "github_dark.png",
					href: "https://github.com/ross-kahn/jobsalt" 
				},{
					title: "Project Page",
					icon: iconPath + "jobSalt-logo.png",
					href: "http://www.se.rit.edu/~oce-connect/index.php" 
				}
			]
		},{
			title: "'StaffInSight' web app",
			position: "Assistant Director",
			org: "Insight Lab",
			year: "2013",
			bullets: [
				"Scheduling and resource management app for small businesses",
				"Client was the Insight Lab, a science education technology lab",
				"Built using Ruby on Rails"
			],
			hasLinks: true,
			links: [
				{
					title: "Browse project on Github",
					icon: iconPath + "github_dark.png",
					href: "https://github.com/ross-kahn/staffinsight" 
				}
			]
		},{
			title: "'Space Adventure' education app",
			position: "Head of Science Education Technology",
			org: "Insight Lab",
			year: "2013",
			bullets: [
				"Re-engineered monolithic code base into stable, maintainable, and working system",
				"Technologies included voice commands and motion capture through Kinect API, C#, and Celestia (space simulation program)",
				"Re-architected using a command pattern to abstract the various inputs (keyboard / mouse, voice commands, motions commands, future commands) from the various outputs (Celestia commands, commands to external APIs, future commands)"
			],
			hasLinks: true,
			links: [
				{
					title: "Browse project on Github",
					icon: iconPath + "github_dark.png",
					href: "https://github.com/RITInsightLab/space-adventure" 
				}
			]
		},{
			title: "Committee Tracking",
			position: "Vice President",
			org: "Phi Kappa Psi",
			year: "2013",
			bullets: [
				"Process improvement project",
				"Developed work performance metrics and used software to efficiently monitor and control 17 independent committees",
				"Managed communication with stakeholders through visual reports and concise status updates"
			],
			hasLinks: false,
		},{
			title: "Public Relations Improvement",
			position: "Head of PR",
			org: "Phi Kappa Psi",
			year: "2012",
			bullets: [
				"Process improvement project",
				"Implemented PR events, both on social media and in person, which successfully increased positive organizational visibility and recruitment rates",
				"Committee was awarded highest honor by Phi Kappa Psi National Executives for the committee's efforts, from a group of over 100 applying chapters"
			],
			hasLinks: false
		},{
			title: "Guinness World Record",
			position: "Head of PR",
			org: "Phi Kappa Psi",
			year: "2011",
			bullets: [
				"Successfully broke the world record for the number of participants in a single game of dodgeball (over 2100 people)",
				"Required the securing of funding, organizational approval, achieving required participation numbers, coordination with local news teams, coordination with the Guinness World Record adjuticators, and more",
				"Done by efficiently leading and managing a group of volunteers"
			],
			hasLinks: true,
			links: [
				{
					title: "Watch news coverage",
					icon: iconPath + "youtube.png",
					href: "https://www.youtube.com/watch?v=tK4Yc8nYaQI" 
				}
			]
		},
	];
	
	var templateScript = $("#social-links-template").html();
	var template = Handlebars.compile(templateScript);
	$("#SocialLinks").append(template(socialLinks));
	
	templateScript = $("#skill-description-template").html();
	template = Handlebars.compile(templateScript);
	$("#SkillDescriptions").append(template(bioDescriptions));
	
	templateScript = $("#certification-template").html();
	template = Handlebars.compile(templateScript);
	$("#ProfCerts").append(template(profCerts));
	$("#CSCerts").append(template(csCerts));
	
	templateScript = $("#project-template").html();
	template = Handlebars.compile(templateScript);
	$("#Projects").append(template(projectList));
	
})();

$(function(){
	// When everything is ready, expand the first skill description
	var $collapsible = $('#usability-skill-description');
	$collapsible.collapse({
		toggle: true,
		parent: '#accordion'
	});
});