let vid = document.querySelector(".myvideo");

function success(stream){
  let vid_url = URL.createObjectURL(stream);
  vid.src = vid_url;
  vid.play();
}

function fail(err){
  console.log(err.message);
}

navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  audio: true
})
.then(success)
.catch(fail);
