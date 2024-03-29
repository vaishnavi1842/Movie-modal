const cl = console.log;

const showmodal = document.getElementById("showModal");
const backDrop = document.getElementById("backDrop");
const moviemodal = document.getElementById("moviemodal");
const movieForm = document.getElementById("movieForm");
const titleControl = document.getElementById("title");
const imgUrlControl = document.getElementById("imgUrl");
const overviewControl = document.getElementById("overview");
const ratingControl = document.getElementById("rating");
const movieContainer = document.getElementById("movieContainer")
const closeMovieModal = [...document.querySelectorAll(".closeMovieModal")];


const templatingOfMovie = (arr) => {
	let result = ``;
	arr.forEach(obj => {
		result += `
		 <div class="col-md-4">
		 <div class="card mb-4">
		   <figure class="movieCard mb-0"> 
			 <img src="${obj.imgUrl}" alt="${obj.title}" title="${obj.title}">
			  <figcaption>
				<div class="ratingsection">
				   <div class="row">
					  <div class="col-10">
						 <h3>${obj.title}</h3>
					  </div>
					  <div class="col-2">
						 <span>${obj.rating}</span>
					  </div>
				   </div>
				</div>
				<div class="overviewsection">
				   <h4>${obj.title} </h4>
				   <em>Overview</em>
				   <p>
				   ${obj.overview}
				   </p>
					
				</div>
			 </figcaption>
		   </figure>
		 </div>
		</div>
	           `
	})
	  movieContainer.innerHTML=result; 	
}

let movieArr = [
	{
		title: "ek tha tiger",
		imgUrl: "https://c8.alamy.com/comp/F762X7/indian-bollywood-hindi-film-movie-poster-of-ek-tha-tiger-F762X7.jpg",
		overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		rating: "4",
	},
	{
		title: "Teri baaton me",
		imgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383266-nyhebmpdyu-portrait.jpg",
		overview:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		rating: "4",
	},
	{
		title: "Rocky and Rani ",
		imgUrl: "https://www.news18.com/web-stories/entertainment/9-big-hindi-movies-releasing-soon/assets/6.jpeg",
		overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		rating: "4",
	}
];

templatingOfMovie(movieArr)


/*const modalbackDropshow=()=>{
	backDrop.classList.toggle("active");
	moviemodal.classList.toggle("active");
	
}

const modalBackdrophide=()=>{
	backDrop.classList.toggle("active");
	moviemodal.classList.toggle("active");
	
}*/

const modalBackDropToggle = () => {
	backDrop.classList.toggle("active");
	moviemodal.classList.toggle("active");
}

const onMovieAdd = (eve) => {
	eve.preventDefault();
	let movieObj = {
		title: titleControl.value,
		imgUrl: imgUrlControl.value,
		overview: overviewControl.value,
		rating: ratingControl.value,
	}
	movieArr.unshift(movieObj)
	cl(movieArr)
    templatingOfMovie(movieArr)
	eve.target.reset();
	modalBackDropToggle();
	Swal.fire({
		title: `${movieObj.title} Movie is added suceesfuly!!!`,
		icon: "success",
		timer: 2500
	})
}

showmodal.addEventListener("click", modalBackDropToggle)

closeMovieModal.forEach(btn => {
	btn.addEventListener("click", modalBackDropToggle)
})

movieForm.addEventListener("submit", onMovieAdd)
