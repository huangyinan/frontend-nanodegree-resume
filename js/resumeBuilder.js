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
   biopic: "./images/fry.jpg",
   display: function() {
     if (this.role != null) {
       var formattedRole = HTMLheaderRole.replace("%data%",this.role);
       $("#header").prepend(formattedRole);
     }

     if (bio.name != null) {
       var formattedName = HTMLheaderName.replace("%data%",bio.name);
       $("#header").prepend(formattedName);
     }

     if (bio.contacts.mobile != null) {
       var formattedContactsMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
       $("#topContacts").append(formattedContactsMobile);
     }

     if (bio.contacts.email != null) {
       var formattedContactsEmail = HTMLemail.replace("%data%",bio.contacts.email);
       $("#topContacts").append(formattedContactsEmail);
     }

     if (bio.contacts.github != null) {
       var formattedContactsGithub = HTMLgithub.replace("%data%",bio.contacts.github);
       $("#topContacts").append(formattedContactsGithub);
     }

     if (bio.contacts.twitter != null) {
       var formattedContactsTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
       $("#topContacts").append(formattedContactsTwitter);
     }

     if (bio.contacts.location != null) {
       var formattedContactsLocation = HTMLlocation.replace("%data%",bio.contacts.location);
       $("#topContacts").append(formattedContactsLocation);
     }

     if (bio.biopic != null) {
       var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
       $("#header").append(formattedBioPic);
     }

     if (bio.welcomeMessage != null) {
       var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
       $("#header").append(formattedWelcomeMsg);
     }

     if (bio.skills.length > 0) {
       $("#header").append(HTMLskillsStart);
       for (skill in bio.skills) {
         var formattedStill = HTMLskills.replace("%data%",bio.skills[skill]);
         $("#skills").append(formattedStill);
       }
     }
   }
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
   display: function() {
     if (this.schools.length > 0) {
       for (school in this.schools) {
         $("#education").append(HTMLschoolStart);

         var formattedSchoolName = HTMLschoolName.replace("%data%",this.schools[school].name);
         var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
         var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
         $(".education-entry:last").append(formattedSchoolNameDegree);

         var formattedSchoolDates = HTMLschoolDates.replace("%data%",this.schools[school].dates);
         $(".education-entry:last").append(formattedSchoolDates);

         var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
         $(".education-entry:last").append(formattedSchoolLocation);

         var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",this.schools[school].majors);
         $(".education-entry:last").append(formattedSchoolMajor);
       }
     }

     if (this.onlineCourses.length > 0) {
       $("#education").append(HTMLonlineClasses);
       for (onlineCourse in this.onlineCourses) {
         $("#education").append(HTMLschoolStart);

         var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[onlineCourse].title);
         var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[onlineCourse].school);
         var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
         $(".education-entry:last").append(formattedOnlineTitleSchool);

         var formattedOnlineDates = HTMLonlineDates.replace("%data%",this.onlineCourses[onlineCourse].dates);
         $(".education-entry:last").append(formattedOnlineDates);

         var formattedOnlineURL = HTMLonlineURL.replace("%data%",this.onlineCourses[onlineCourse].url);
         $(".education-entry:last").append(formattedOnlineURL);

       }
     }
   }
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
  ],
  display: function() {
    if (this.jobs.length > 0) {
      for (job in this.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",this.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",this.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",this.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%",this.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%",this.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  }
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
  display: function() {
    if (this.projects.length > 0) {
      for (project in this.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",this.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%",this.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",this.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        var formattedImage = HTMLprojectImage.replace("%data%",this.projects[project].images);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

bio.display();
work.display();
projects.display();
education.display();
