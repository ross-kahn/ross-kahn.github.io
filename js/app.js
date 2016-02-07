

function parseBadges(html){
	var badgeDom = $('<div></div>');	/* Create dummy DOM element to manipulate */
	badgeDom.html(html);
	
	var badgeList = $('div.pam',badgeDom);
	var titleList = badgeList.find('div.tac > h3 > a');
	var logoList = badgeList.find('a.pr-badge > div.badge > img');

	for(i=0; i<titleList.length; i++){
		titleList[i] = titleList[i].text;
		console.log(titleList[i]);
	}

	for(i=0; i<logoList.length; i++){
		logoList[i] = logoList[i].src;
		console.log(logoList[i]);
	}

}

function createCertElements(){
	console.log("Adding certifications to document");
		
	var epicLogoPath = "../resources/epic180x180.png";
	var epic1 = createSingleCert("Epic",epicLogoPath,"Server Programming",["Chronicles NoSQL","Mumps"]);
	
	var epic2 = createSingleCert("Epic",epicLogoPath,"Web Tech Camp",["MVVM Pattern"]);

	var epic3 = createSingleCert("Epic",epicLogoPath,".NET / C# Programming",["HTML5","CSS3","C#","Visual Studio 2013"]);
	
	$("#Epic-Certs").append(epic1).append(epic2).append(epic3);
}

function createSingleCert(certSourceName, certImagePath, certTitleName, extraDetailsList){
	var container = $("<div/>",{
		"class": "cert-container"
	});

	var details = $("<div/>",{
		"class": "cert-details"
	});
	
	var source = $("<div/>",{
		"class": "cert-source",
		text: certSourceName
	});
	
	var imageDiv = $("<div/>",{
		"class":"cert-image"
	});
	
	var certImage = $("<img/>",{
		src: certImagePath
	});
	
	var certTitle = $("<div/>",{
		"class": "cert-title",
		text: certTitleName
	});
	
	var extraDetails = $("<div/>",{
		"class": "cert-extra-details"
	});
	
	var detailsList = $("<ul/>",{
		"class": "extra-details-list"
	});
	
	var listItem;
	for(var i=0; i<extraDetailsList.length; i++){
		listItem = $("<li/>",{
			text: extraDetailsList[i]
		});
		detailsList.append(listItem);
	}
	
	imageDiv.append(certImage);
	details.append(source).append(imageDiv).append(certTitle);
	
	extraDetails.append(detailsList);
	
	container.append(details).append(extraDetails);
	return container;
}

function createIconSemicircle(){
	var titles = [
    "title1",
    "title2",
    "title3",
	"title4"
    ];

	var step = Math.PI / 6;
    var angle = Math.PI / titles.length;
    var radius = 200;
    var offset = $("#bio-image").width;

	for ( var i = 0; i < titles.length; i++ ) {
		var span = document.createElement( "span" );
		span.className = "icon-semicircle";
		span.innerHTML = "title"+i;
		span.style.left = radius * Math.cos( angle ) + offset + "px";
		span.style.top = radius * Math.sin( angle ) + "px";
		$("#bio-container").append( span );
		angle -= step;
	}
}

$( document ).ready(function() {
	createCertElements();
});

/* Use a CORS proxy to allow cross-origin resource sharing */
//$.ajax({ url: 'https://crossorigin.me/https://www.codeschool.com/users/1174646', success: function(data) { parseBadges(data); } });