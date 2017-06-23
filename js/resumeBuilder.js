/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  jobs: [
    {
      "employer": "SSI Schaefer",
      "title": "IT Project Engineer",
      "location": "Shanghai",
      "dates": "from 2015/03/01 until now",
      "description": ""
    },
    {
      "employer": "SSI Schaefer",
      "title": "IT Project Engineer",
      "location": "Shanghai",
      "dates": "from 2015/03/01 until now",
      "description": ""
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

education["city"] = "Shanghai, China";

$("#main").append(work["position"]);
$("#main").append(work["jobs"]);
$("#main").append(education.name);
