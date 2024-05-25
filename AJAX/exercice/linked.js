const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  'GET',
  'https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fcjfollini%2F&include_skills=false&include_certifications=false&include_publications=false&include_honors=false&include_volunteers=false&include_projects=false&include_patents=false&include_courses=false&include_organizations=false'
);
xhr.setRequestHeader(
  'X-RapidAPI-Key',
  '11f6e5e7a3msh00349060339ac64p1d9eb1jsn7d47b5c56b8f'
);
xhr.setRequestHeader(
  'X-RapidAPI-Host',
  'fresh-linkedin-profile-data.p.rapidapi.com'
);

xhr.send(data);
