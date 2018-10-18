var courses ={
  web: {
    image: 'web.jpg',
    title: 'Web Development',
    description: '3 months weekend course covering node.js, JavaScript, HTML, CSS and MongoDB'
  },
  ds: {
    image: 'ds-image.jpg',
    title: 'Data Structures using C/C++',
    description: '3 months weekend course covering data structures and algorithms using C/C++'
  },
  cpp: {
    image: 'c-image.jpg',
    title: 'C/C++',
    description: '3 months weekend course covering language fundamentals of C and C++'
  },
  default: {
    image: 'c-image.jpg',
    title: 'Course Detal Missing',
    description: 'The exact course you are looking for is not available right now, contact us to get more details'
  }
}

function getCourseDetail(courseId){
  var courseDetail = courses.default;
  if (courseId && courses.hasOwnProperty(courseId)){
    courseDetail = courses[courseId];
  }
  return courseDetail;
}


$('#courseModal').on('shown.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var courseid = button.data('courseid') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  // modal.find('.modal-title').text('New message to ' + recipient)
  // modal.find('.modal-body input').val(recipient)
  // console.log(courseid);
  var courseDetail = getCourseDetail(courseid);
  var backgroundImageString = 'img/' + courseDetail.image;
  modal.find('.modal-header').css('backgroundImage', backgroundImageString);
  console.log(courseDetail);
});

function modalOpened(data) {
  console.log('modal opened, ' + data);
}

$('.course-div').on('click', function (event) {
  console.log(event);
  var courseId = event.currentTarget.dataset.courseid;
  var courseDetail = getCourseDetail(courseId);
  var backgroundImageString = 'img/' + courseDetail.image;
  //
  var modal = $('#courseModal');
  modal.find('.modal-body').css('background-image', 'url(' + backgroundImageString + ')');
  modal.find('.modal-title').text(courseDetail.title);
  modal.find('.modal-description').text(courseDetail.description);
  console.log(courseDetail);
  modal.modal({
    show: true
  });
});
