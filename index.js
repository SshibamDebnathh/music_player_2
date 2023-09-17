let currSong = document.createElement("audio")

let searchAudio = document.querySelector('#search')

let byMovie = document.querySelector("#Brahmastra")
let bySong =  document.querySelector("#Arijit")
let byMusic = document.querySelector("#Pritam")
   
let result;    

    
// document.querySelector("input[type='range']").style.setProperty('--thumb-bgcolor','green')
    

let songArr = [
    {    id  : 0,
        song : "Kesariya",
        path : "./songs/kesariya.mp3",
        Artist : "arijit singh",
        Movie: "brahmastra",
        Music:'pritam',
        image:'./imgs/kesariya.jpg',
        Actor:"ranbir"    
    },
    {   
        id   : 1,
        song : "Aayat",
        path : "./songs/Aayat.mp3",
        Artist : "arijit singh",
        Movie: "bajirao mastani",
        Music:'Sanjay Leela Bhansali',
        image:'./imgs/aayat.jpg'
    },
    {   
        id   : 2,
        song : "Deva Deva",
        path : "./songs/deva deva.mp3",
        Artist : "arijit singh",
        Movie: "brahmastra",
        Music:'pritam',
        image:'./imgs/devadeva.jpg',
        Actor:"ranbir"
    },
    {
        id   : 3,
        song : "Inspiring Technology",
        path : "./songs/Inspiring Technology.mp3",
        Artist : "Unknown Artist",
        Movie: "Random",
        Music:'meet bros',
        image:'./imgs/infotech.jpg'
    },
    {
        id   : 4,
        song : "Background music",
        path : "./songs/Background Music.mp3",
        Artist : "jonita gandhi",
        Movie: "dream girl",
        Music:'meet bros',
        image:'./imgs/infotech.jpg'
    },
    {
        id   : 5,
        song : "epic and dramatic",
        path : "./songs/Epic and Dramatic.mp3",
        Artist : "armaan malik",
        Movie: "Random",
        Music:'amaal malik',
        image:'./imgs/infotech.jpg'
    },
    {
        id   : 6,
        song : "crockpot",
        path : "./songs/Crock pot.mp3",
        Artist : "sonu nigam",
        Movie: "Random",
        Music:'amit trivedi',
        image:'./imgs/infotech.jpg'
    },
    {
        id   : 7,
        song : "advertime",
        path : "./songs/Advertime.mp3",
        Artist : "sonu nigam",
        Movie: "Random",
        Music:'amit trivedi',
        image:'./imgs/infotech.jpg'
    },
    {
        id   : 8,
        song : "Whistle",
        path : "./songs/Whistle.mp3",
        Artist : "armaan malik",
        Movie: "Random",
        Music:'amit trivedi',
        image:'./imgs/infotech.jpg'
    }
]

let arrayofActor =   []
let arrayofMovie = []
let arrayofMusic = []
let arrayofArtist =  []


let index = 0
let imgCont = document.querySelector('#img')

let slider = document.querySelector("#song")

let songInfo = Array.from(document.querySelector('#detail').children)
 
let playBtn = document.querySelector("#play")
let play = false;
let nxtBtn = document.querySelector('#nxt')
let prevBtn = document.querySelector('#prev')
let cont = document.querySelector('#container')
let toggleBtn = document.querySelector('#mode')

// let songList = songArr.map(e => e.song)



let volumeSet = document.querySelector('#volume')
let songIndex = document.querySelector('#head').lastElementChild



let songsBtn = document.querySelector('#songList')
let listMode = false;
let updateTime
 
let songList = document.createElement('ul')
    document.body.appendChild(songList)
    songList.setAttribute('id','songs')
let songName

function updateAllArrays(id){

    arrayofActor.includes(songArr[id].Actor)? arrayofActor.push(songArr[id].Actor): false
    arrayofMovie.includes(songArr[id].Movie)? arrayofMovie.push(songArr[id].Movie): false
    arrayofArtist.includes(songArr[id].Artist)? arrayofArtist.push(songArr[id].Artist): false
    arrayofMusic.includes(songArr[id].Music)? arrayofMusic.push(songArr[id].Music): false

}
function createList(){

    songArr.map(e => {
        
        songName = document.createElement('button')
        
        songName.setAttribute('id',e.id)
        songName.innerText = e.song

        
        songList.appendChild(songName)
        
    })
}


createList()   

function myFunc(event){
if(event.target.nodeName==='BUTTON'){

    let e = Number(event.target.id) 
    index = e
    loadAudio(index) 
    playSong()

    changeBg()
}

}


songList.addEventListener('click',myFunc)

function playSong(){

    currSong.play()
    playBtn.innerHTML = '<i class="ri-pause-line ri-2x"></i>'
    play= true
}
function pauseSong(){
    
    currSong.pause()
    playBtn.innerHTML = '<i class="ri-play-fill ri-2x"></i>'
    play= false
}

document.body.appendChild(songList)

let submitFilterBtn = document.querySelector("#submitFilter") 
let filterSong =  document.querySelector('#filterSongList')

let filterBtnGrp = document.querySelector('#filterGrp') 
let filterMode = true  

let res = []
function listCreation() {

 if(res.length>0){
    
     res.map(e=> {
         if(filterMode) {
             
             let filteredSong = document.createElement('button')
             filteredSong.innerHTML = e.song
             filteredSong.setAttribute('id',e.id)
             filterSong.appendChild(filteredSong)
            }
            
        } )
    }
else{
    filterSong.textContent ="No record found"
}
    // filterMode = false
    
    
    res =[]
    
}
let clearFilterBtn = document.querySelector("#clearFilter")

function clearSongFilter(){
    
    Array.from(filterBtnGrp.getElementsByTagName('input')).map(e=> e.checked=false)
    filterSong.style.display = "none";
    submitFilterBtn.style.display = "none";
    clearFilterBtn.style.display = "none";
    filterSong.innerHTML = '';
    Array.from(filterBtnGrp.children).map(e=> e.classList.remove('showInput'))
    res = [];
    musicArr = []
    artistArr =[]
    movieArr =[]
    actorArr =[]
    filterMode=true;
    
}

clearFilterBtn.addEventListener('click',clearSongFilter)


let singerBtn = document.querySelector("#singerSec")
let movieBtn = document.querySelector("#movieSec")
let musicBtn = document.querySelector("#musicSec")
let actorBtn = document.querySelector("#actorSec")

let artistArr =[]
let musicArr =[]
let movieArr =[]
let actorArr =[]

let addSongBtn= document.querySelector("#addSong")

let inpSong=  document.querySelector('#inputSong').value
let inpMusic = document.querySelector('#inputMusic').value
let inpMovie = document.querySelector('#inputMovie').value
let inpActor = document.querySelector('#inputActor').value
let inpArtist = document.querySelector('#inputArtist').value
let inpPath = document.querySelector('#inputPath').value
let inpImage = document.querySelector('#inputImage').value

let addNewSongBtn = document.querySelector("#addNewSong")


function addSong(){

    let obj = {
        id : songArr.length,
        song : inpSong,
        Music : inpMusic,
        Movie : inpMovie,
        path : inpPath,
        Actor : inpActor,
        image : inpImage,
        Artist : inpArtist
    }
 songArr.push(obj)
 console.log("object pushed")

}

addNewSongBtn.addEventListener('click',addSong)


function addForm(){
    document.querySelector("#addSongForm").classList.toggle('form')
}

addSongBtn.addEventListener('click', addForm)


function matchSong(){
    // if(event.target.id=='INPUT'){
    //     console.log(event.target.nodeName)
        filterSong.innerHTML =''
        filterSong.style.display = 'flex'
        
    if(artistArr.length>0){
            
        if(res.length==0){
            artistArr.map(e=> res.push(e))
        }
        else{
            res = artistArr.filter((e)=> res.includes(e))
        }
        
       }
    if(movieArr.length>0){
        if(res.length==0){
            movieArr.map(e=> res.push(e))
        }
        else{
            res = movieArr.filter((e)=> res.includes(e))
        }
        
       }
    if(actorArr.length>0){
        if(res.length==0){
            actorArr.map(e=> res.push(e))
        }
        else{
            res = actorArr.filter((e)=> res.includes(e))
        }
       }
    if(musicArr.length>0){
        if(res.length==0){
            musicArr.map(e=> res.push(e))
        }
        else{
            res = musicArr.filter((e)=> res.includes(e))
        }
       }

       console.log("res")
       console.log(res)

       listCreation()
       
 

       if(listMode){songList.style.display = "none"}

       
}
submitFilterBtn.addEventListener('click',matchSong)

filterSong.addEventListener('click',myFunc)





// res =[]

function showfilterButn(){
    if(artistArr.length || actorArr.length || movieArr.length || musicArr.length)  {
        submitFilterBtn.style.display = 'block'
        clearFilterBtn.style.display = 'block'
        // filterSong.style.display = 'flex'

    } 
    else {
        submitFilterBtn.style.display = "none";
        clearFilterBtn.style.display = "none";
        filterSong.style.display = 'none'   
    }  
}

function singerInput(e){ 

    console.log(e.target.nodeName)
     
    if(e.target.nodeName==='INPUT' && e.target.checked){

        {
            songArr.map(
                s => {s.Artist == e.target.value && !artistArr.includes(s)? artistArr.push(s):false
                    
                })
            }
            console.log("artist arr")
                console.log(artistArr)
            }
    if(e.target.nodeName=='INPUT' && !e.target.checked){
        console.log('unchecked')
        artistArr = artistArr.filter(s => s.Artist !== e.target.value)
        console.log(artistArr)
    }
    
    showfilterButn()
}
function musicInput(e){ 

    if(e.target.nodeName=='INPUT' && e.target.checked){

        {
            songArr.map(
                s => {s.Music == e.target.value && !musicArr.includes(s)? musicArr.push(s):false
                    
                })
            }
            console.log("music arr")
                console.log(musicArr)
            }
    if(e.target.nodeName=='INPUT' && !e.target.checked){
        // console.log('unchecked')
        musicArr = musicArr.filter(s => s.Music !== e.target.value)
        console.log(musicArr)
    } 
   
showfilterButn()

}
function movieInput(e){ 

    if(e.target.nodeName=='INPUT' && e.target.checked){

        {
            songArr.map(
                s => {s.Movie == e.target.value && !movieArr.includes(s)? movieArr.push(s):false
                    
                })
            }
            console.log("moviearr")
                console.log(movieArr)
            }
    if(e.target.nodeName=='INPUT' && !e.target.checked){
        // console.log('unchecked')
        movieArr = movieArr.filter(s => s.Movie !== e.target.value)
        console.log(movieArr)
    } 
   
showfilterButn()

}
function actorInput(e){ 

    if(e.target.nodeName=='INPUT' && e.target.checked){

        {
            songArr.map(
                s => {s.Actor == e.target.value && !actorArr.includes(s)? actorArr.push(s):false
                    
                })
            }
           
                console.log("actor arr")
                console.log(actorArr)
            }
    if(e.target.nodeName=='INPUT' && !e.target.checked){
        // console.log('unchecked')
        actorArr = actorArr.filter(s => s.Actor !== e.target.value)
        console.log(actorArr)
    } 
   
showfilterButn()

}

singerBtn.addEventListener('click',singerInput)
musicBtn.addEventListener('click',musicInput)
movieBtn.addEventListener('click',movieInput)
actorBtn.addEventListener('click',actorInput)

function listSongs(){ 

        listMode? ((songList.style.display = "none"),
        listMode= false) : ((songList.style.display = "flex"),
        listMode= true)
        
    }

songsBtn.addEventListener('click',listSongs)

function playPause(){
    if(play) pauseSong()
    else playSong()
   
 }   

playBtn.addEventListener("click", playPause)

function loadAudio(index){

    clearInterval (updateTime)


    resetValues()

    songIndex.textContent = `Playing ${index+1} of ${songArr.length}`
    currSong.load()
    currSong.src= songArr[index].path
    imgCont.style.backgroundImage = `url(${songArr[index].image})`
    
    songInfo[0].textContent = "Song : " +songArr[index].song
    songInfo[1].textContent = "Artist : " +songArr[index].Artist.split(' ').map(e=> e.slice(0,1).toUpperCase().concat(e.slice(1,e.length))).join(' ')
    songInfo[2].textContent = "Movie: " +songArr[index].Movie
    songInfo[3].textContent = "Music: " +songArr[index].Music
    currSong.addEventListener('ended',nextSong)


    updateTime = setInterval(updateData ,1000);
    

}



function changeBg(){
    let r = Math.floor(Math.random()*256+64)
    let g = Math.floor(Math.random()*256+64)
    let b = Math.floor(Math.random()*256+64)

    let color = `rgb(${r}+${g}+${b})`

    cont.style.backgroundColor = color
}

//playlist creation function
function playlistCreation(){
    let playlistForm = document.querySelector('#playlistForm')

    playlistForm.classList.toggle('playlistBtn')

    document.querySelector('#main').classList.toggle('allBlur')
    document.querySelector('#container').classList.toggle('allBlur')
   
}




function nextSong(){

    play = false

    if(index<songArr.length-1){
        index++ 
        console.log(currSong)
    }
    else{
        index = 0 
        console.log(currSong)
    }
    
    loadAudio(index)
    playPause()
    changeBg()

}

nxtBtn.addEventListener('click',nextSong)

function prevSong(){

    play= false 

    if(index==0){
        index = songArr.length-1
    }
    else{
        index--
    }
    loadAudio(index)
    playPause()
    changeBg()
}
prevBtn.addEventListener('click',prevSong)

let notify = document.querySelector('#notification')

function toggleBg(){

 

 if (toggleBtn.innerHTML=='<i class="ri-sun-fill ri-2x"></i>'){
    document.body.style.backgroundColor = 'Black'

    toggleBtn.innerHTML= '<i class="ri-moon-fill ri-2x"></i>' 
   
    filterBtnGrp.style.border ='2px solid white'

    

    notify.innerHTML = 'Dark mode on'
    notify.style.border = '1px solid white'
    // notify.style.display = 'flex'
    notify.style.visibility = 'visible'

    Array.from(filterBtnGrp.getElementsByTagName("label")).map(
        e => 
        {
            e.style.border = "1px solid white"
            e.style.color = 'white'
            e.parentNode.style.border = '1px solid white'
    })

    if(submitFilterBtn.style.display && clearFilterBtn.style.display =='block' || songList.style.display=='flex' ){

        
        submitFilterBtn.style.border = '1px solid white'
        clearFilterBtn.style.border = '1px solid white'
        songList.style.border = '2px solid white'

    }


    setTimeout(()=>{ 
    notify.style.visibility = 'hidden'
    // notify.style.display = 'none'
    },3000)

 }
 else{
    document.body.style.backgroundColor = 'White'

    toggleBtn.innerHTML= '<i class="ri-sun-fill ri-2x"></i>'

    notify.innerHTML = 'Light mode on'
    notify.style.border = '1px solid black'
    notify.style.visibility = 'visible'
    filterBtnGrp.style.border ='2px solid black'

    Array.from(filterBtnGrp.getElementsByTagName("label")).map(
        e => { 
               e.style.border = "1px solid black"
               e.style.color ="black"
               e.parentNode.style.border = '1px solid black'
            }
        )   

    if(submitFilterBtn.style.display && clearFilterBtn.style.display =='block' || songList.style.display=='flex'){

        
        submitFilterBtn.style.border = '1px solid black'
        clearFilterBtn.style.border = '1px solid black'
        songList.style.border = '2px solid black'
    }

    setTimeout(()=>{
    notify.style.visibility = 'hidden'

    },3000)


 }
 

}
toggleBtn.addEventListener("click",toggleBg)

function resetValues(){

    slider.textContent = "00:00"
    slider.value = 0
    volume.value = 0


}
let songRes = document.getElementById('searchSugg')

function searchPlay(){
    index= result   
    loadAudio(index)
    playSong()
    changeBg()
    songRes.style.display='none'
    searchAudio.value = ''

}

let filterBtn = document.querySelector("#filterBy")
let classListName = document.querySelector('#filterGrp').classList



function byClickFilter(e){
    console.log(e.target.nodeName)
    if(e.target.nodeName=='DIV'){
        if(e.target.id=="singerBtn"){
            document.querySelector('#singerSec').classList.toggle('showInput')
        }
        if(e.target.id=="actorBtn"){
            document.querySelector('#actorSec').classList.toggle('showInput')
        }
       
        if(e.target.id=="musicDirBtn"){
            document.querySelector('#musicSec').classList.toggle('showInput')

        }
        
        if(e.target.id=="movieBtn"){
            document.querySelector('#movieSec').classList.toggle('showInput')

        }
       
    }
}
filterBtnGrp.addEventListener('click',byClickFilter)

function filteration(){

    // Array.from(document.querySelector('#filterGrp').children).map(e=> e.style.display="flex")
   classListName.toggle('show')
   
}
filterBtn.addEventListener('click',filteration)


function searchSong(){
    
   result = songArr.findIndex(e => searchAudio.value == e.song)
   
   if(result>=0) {
       
       songRes.textContent = songArr[result].song
       songRes.style.display= 'block'
       songRes.addEventListener('click', searchPlay )
       
    }
    
   else if(searchAudio.value.length>0 && result<0){
       
       songRes.style.display= 'block'
       songRes.textContent = 'No song found'
       
       setTimeout(()=>{songRes.style.display= 'none'},5000)
    }

    console.log(searchAudio.value)
   
}
searchAudio.addEventListener('change',searchSong)

function songSlider(){ 
    let slide = currSong.duration*(slider.value/100)

    currSong.currentTime = slide
    
}
slider.addEventListener('change',songSlider)

function volumeSlider(){
   currSong.volume = volumeSet.value/100
//    console.log(currSong.volume)
}

volumeSet.addEventListener('change',volumeSlider)


function updateData(){
    
    let songPosition = 0
    let slideVal = Array.from(document.querySelector("#songSlider").children)

    if(isFinite(currSong.duration)){

        songPosition = currSong.currentTime * (100/currSong.duration)
        slideVal[1].value = songPosition
        let currentMints = Math.floor(currSong.currentTime/60)
        let currentSecs = Math.floor(currSong.currentTime-currentMints*60)
        let totalMints = Math.floor(currSong.duration/60)
        let totalSecs = Math.floor(currSong.duration - totalMints*60)
        

        if(currentSecs<10) currentSecs = "0"+currentSecs
        if(currentMints<10) currentMints = "0"+currentMints
        if(totalSecs<10) totalSecs= "0"+totalSecs
       

        slideVal[0].textContent = currentMints + ":" + currentSecs
        slideVal[2].textContent = totalMints + ":" + totalSecs

    }



  
}

loadAudio(index);
