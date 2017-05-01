/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  jobs: [
    {
      "employer": "SSI Schaefer",
      "title": "IT Project Engineer",
      "location": "Shanghai",
      "dates": "2015/03/01 until now",
      "description": "Designing and implementing as Leading project engineer for MFS system"
    },
    {
      "employer": "FCH",
      "title": "IT Consultant",
      "location": "Shanghai",
      "dates": "2012/2/1 to 2015/03/01",
      "description": "Consultant"
    },
    {
      "employer": "New touch",
      "title": "programmer",
      "location": "Shanghai",
      "dates": "2010/7/1 to 2012/02/01",
      "description": "programmer"
    }
  ]
};

var projects = {
  projects: [
    {
      "title": "IT Project Leader",
      "dates": "20150301",
      "description": ""
    },
    {
      "title": "IT Project Leader",
      "dates": "20150301",
      "description": ""
    }
  ]
}

var bio = {
  name: "Sherry Huang",
  role: "IT Project Engineer",
  welcomeMessage: "Welcome to my page",
  biopic: "",
  contacts: {
    mobile: "+86 137 6468 7524",
    email: "haishengjulan@live.cn",
    github: "huangyinan",
    twitter: "-",
    location: "Shanghai"
  },
  skills: ["JAVA","Oracle","Linux"]
}

var education = {
  schools: [
    {
      "name": "Shanghai University",
      "location": "Shanghai",
      "majors": "CS",
      "dates": 2015,
      "url": "http://www.shu.edu.cn/IndexPage.html"
    },
    {
      "name": "Shanghai Normal University TianHua Colleage",
      "location": "Shanghai",
      "majors": "EE",
      "dates": 2010,
      "url": "http://www.sthu.cn/"
    },
  ],
  onlineCourses: [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://cn.udacity.com/"
    }
  ]
};

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
