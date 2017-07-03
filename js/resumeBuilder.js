/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
   name: "Sherry Huang",
   role: "IT Project Engineer",
   contacts: {
     "mobile": "+86 137 6468 7524",
     "email": "haishengjulan@live.cn",
     "github": "huangyinan",
     "twitter": "-",
     "location": "Shanghai"
   },
   welcomeMessage: "Welcome to my page",
   skills: ["JAVA","Oracle","Linux"],
   biopic: "",
   display: display
 }

 var education = {
   schools: [
     {
       "name": "Shanghai University",
       "location": "Shanghai",
       "degree": "Master",
       "majors": "CS",
       "dates": "2015/03/01 until now",
       "url": "http://www.shu.edu.cn/IndexPage.html"
     },
     {
       "name": "Shanghai Normal University TianHua Colleage",
       "location": "Shanghai",
       "degree": "Bachelor",
       "majors": "EE",
       "dates": "2006/09/01 to 2010/06/30",
       "url": "http://www.sthu.cn/"
     },
   ],
   onlineCourses: [
     {
       "title": "FEND",
       "school": "Udacity",
       "dates": "2017-02-06 until now",
       "url": "https://cn.udacity.com/"
     }
   ],
   display: display
 };

var work = {
  jobs: [
    {
      "employer": "SSI Schaefer",
      "title": "IT Project Engineer",
      "location": "Shanghai",
      "dates": "2015/03/01 until now",
      "description": "Designing and implementing as Leading project engineer for WCS system"
    },
    {
      "employer": "FCH",
      "title": "IT Consultant",
      "location": "Shanghai",
      "dates": "2012/2/1 to 2015/03/01",
      "description": "ERP Consultant"
    },
    {
      "employer": "New touch",
      "title": "programmer",
      "location": "Shanghai",
      "dates": "2010/7/1 to 2012/02/01",
      "description": "Programmer and Test Leader"
    }
  ]
};

var projects = {
  projects: [
    {
      "title": "IT Project Leader",
      "dates": "20150301",
      "description": "",
      "images": "",
    },
    {
      "title": "IT Project Leader",
      "dates": "20150301",
      "description": "",
      "images": "",
    }
  ],
  display: display
}





function display() {

}
if (bio.role != null) {
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
}

if (bio.name != null) {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);
}

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (skill in bio.skills) {
    var formattedStill = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedStill);
  }
}


if (work.jobs.length > 0) {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkDates.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDates.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



// $("#main").append(work["position"]);
// $("#main").append(education.name);
