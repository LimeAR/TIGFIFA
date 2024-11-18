import { bootstrapCameraKit, createMediaStreamSource, Transform2D, } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ 
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMxOTI0MDI3LCJzdWIiOiI2Yjk4Y2I0OC1hNDdhLTRiYTMtOGM2Zi1mYjFhM2MwZjc4MDN-U1RBR0lOR34zYmU1YWNhMS02ODBlLTRlN2YtYWEwYS0wOWQ1N2I4NmM2YjgifQ.Sm43EKBLfZl6ktjMAjmGsHEC5UQ-tVlRiCgbAdIkgZE' });

const session = await cameraKit.createSession();

document.getElementById('canvas').replaceWith(session.output.capture);

const lens = await cameraKit.lensRepository.loadLens(
    '50507980875',
    '7fa3fa7c-e626-4539-b9db-73cdb0b0b2ce'
  );

const mediaStream = await navigator.mediaDevices.getUserMedia({
  video:{
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 },
    facingMode: { exact: "environment" },
  },
});

const source = createMediaStreamSource(mediaStream, { cameraType: 'environment' 
})

await session.setSource(source);

await session.play('capture');

await session.applyLens(lens);

// document.getElementsByClassName('snap-button').onclick = function(){resetLens()};

// function resetLens() {
//   session.applyLens(lens);
// }

// if (applyLens(lens) != false) {
//   document.getElementById("playbtn").style.visibility = "visible";
// }
// else
// {
//   document.getElementById("playbtn").style.visibility = "hidden";
// }

//change();

})();