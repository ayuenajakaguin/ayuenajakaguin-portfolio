const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreProjects = document.getElementById('more-projects');

viewMoreBtn.addEventListener('click', function(e) {
  e.preventDefault();
  moreProjects.classList.toggle('hidden');
  moreProjects.classList.toggle('show');

  if (moreProjects.classList.contains('show')) {
    viewMoreBtn.textContent = 'View Less Projects';
    moreProjects.scrollIntoView({ behavior: 'smooth' });
  } else {
    viewMoreBtn.textContent = 'More Projects';
  }
});
