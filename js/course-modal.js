var courses ={
  web: {
    image: 'web.jpg',
    title: 'Web Development',
    description: '2.5 months weekend course covering node.js, JavaScript, HTML, CSS and MongoDB',
    duration: 'Duration: 2.5 months (On weekends)',
    dateStart: "16th Feb 2019",
    price: 'Price: Rs. 10000/-',
    discount: 'Discount: 75%',
    discountedPrice: 'Final Price: Rs. 2500/-'
  },
  ds: {
    image: 'ds-image.jpg',
    title: 'Data Structures using C/C++',
    description: '3 months weekend course covering data structures and algorithms using C/C++',
    duration: 'Duration: 3 months (On weekends)',
    price: 'Price: Rs. 10000/-',
    discount: 'Discount: 40%',
    discountedPrice: 'Final Price: Rs. 6000/-'
  },
  cpp: {
    image: 'c-image.jpg',
    title: 'C/C++',
    description: '3 months weekend course covering language fundamentals of C and C++',
    duration: 'Duration: 3 months (On weekends)',
    price: 'Price: Rs. 10000/-',
    discount: 'Discount: 40%',
    discountedPrice: 'Final Price: Rs. 6000/-'
  },
  java: {
    image: 'c-image.jpg',
    title: 'Core Java',
    description: '2.5 months weekend course covering Core Java and latest language features',
    duration: 'Duration: 2.5 months (On weekends)',
    dateStart: "16th Feb 2019",
    price: 'Price: Rs. 10000/-',
    discount: 'Discount: 75%',
    discountedPrice: 'Final Price: Rs. 2500/-'
  },
  default: {
    image: 'c-image.jpg',
    title: 'Course Detal Missing',
    description: 'The exact course you are looking for is not available right now, contact us to get more details',
    duration: 'Duration: 3 months (On weekends)',
    price: 'Price: Rs. 10000/-',
    discount: 'Discount: 40%',
    discountedPrice: 'Final Price: Rs. 6000/-'
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
  modal.find('#description').text(courseDetail.description);
  modal.find('#duration').text(courseDetail.duration);
  modal.find('#price').text(courseDetail.price);
  modal.find('#discount').text(courseDetail.discount);
  modal.find('#discountedPrice').text(courseDetail.discountedPrice);
  modal.find('#dateStart').text(courseDetail.dateStart);
  console.log(courseDetail);
  modal.modal({
    show: true
  });
});
