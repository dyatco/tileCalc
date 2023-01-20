let length1 = document.querySelector('#length-1')
let width1 = document.querySelector('#width-1')
let area1 = document.querySelector('#area-1')
let length2 = document.querySelector('#length-2')
let width2 = document.querySelector('#width-2')
let area2 = document.querySelector('#area-2')
let tileOption = document.querySelector('#tileOption')
let answer = document.querySelector('#answer')

document.getElementById("tileDimensions").style.display='none'
document.getElementById("tileArea").style.display='none'
document.getElementById("tileAreaImg").style.display='none'
document.getElementById("tileDimImg").style.display='none'

document.getElementById("flrDimensions").style.display='none'
document.getElementById("flrArea").style.display='none'
document.getElementById("floorAreaImg").style.display='none'
document.getElementById("floorDimImg").style.display='none'

/*Show or hide input*/
function showTileFields(){	
document.getElementById("tileAreaImg").style.display='none'
document.getElementById("tileDimImg").style.display='none'
document.getElementById("tileImg").style.display='none'
document.getElementById("tileArea").style.display='none'
document.getElementById("tileDimensions").style.display='none'

	console.log(tileOption.value)
	if (tileOption.value === "dimensions"){
		document.getElementById("tileDimImg").style.display=''
		document.getElementById("tileDimensions").style.display='block'
	} else if (tileOption.value === "area"){
		document.getElementById("tileAreaImg").style.display=''
		document.getElementById("tileArea").style.display='block'	
	} else {
		document.getElementById("tileImg").style.display=''
	}
}

function showFlrFields(){
document.getElementById("floorAreaImg").style.display='none'
document.getElementById("floorDimImg").style.display='none'
document.getElementById("floorImg").style.display='none'
document.getElementById("flrArea").style.display='none'
document.getElementById("flrDimensions").style.display='none'

	console.log(flrOption.value)
	if (flrOption.value === "dimensions"){
		document.getElementById("floorDimImg").style.display=''
		document.getElementById("flrDimensions").style.display='block'
		
	} else if (flrOption.value === "area"){
		document.getElementById("floorAreaImg").style.display=''
		document.getElementById("flrArea").style.display='block'
	} else {
		document.getElementById("floorImg").style.display=''
	}
}


/*Track inputs*/
length1.addEventListener('keyup', (e)=>{
	answer.value === 0
	length1 = parseInt(e.target.value)
	console.log(length1)
})

width1.addEventListener('keyup', (e)=>{
	width1 = parseInt(e.target.value)
	console.log(width1)
})

area1.addEventListener('keyup', (e)=>{
	area1 = parseInt(e.target.value)
	console.log(area1)
})

length2.addEventListener('keyup', (e)=>{
	length2 = parseInt(e.target.value)
	console.log(length2)
})

width2.addEventListener('keyup', (e)=>{
	width2 = parseInt(e.target.value)
	console.log(width2)
})

area2.addEventListener('keyup', (e)=>{
	area2 = parseInt(e.target.value)
	console.log(area2)
})

let button = document.querySelector('#button')
button.addEventListener("click", (e) =>{
	e.preventDefault()

	console.log(answer.value)

	if (tileOption.value === "area" && flrOption.value === "area"){
		let result = area2 / area1
		// alert(area2 / area1)
		answer.value = result 
	} else if (tileOption.value === "dimensions" && flrOption.value === "dimensions"){
		let result = (length2 * width2) / (length1 * width1) 
		console.log(result)
		answer.value = result
	} else if (tileOption.value === "dimensions" && flrOption.value === "area"){
		let result = (area2) / (length1 * width1) 
		console.log(result)
		answer.value = result
	}  else if (tileOption.value === "area" && flrOption.value === "dimensions"){
		let result = (length2 * width2) / (area1) 
		console.log(result)
		answer.value = result
	}
})

/*Scroll to Top*/
function topFunction() {
	document.documentElement.scrollTop = 0
}


