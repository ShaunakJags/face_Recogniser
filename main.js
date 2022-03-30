Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
   });
    
    
   Webcam.attach('#Camera');
    
   function take_snapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
   }
   
  console.log("ml5version",ml5.version);

  classifier=ml5.imageClassifier(" model.json",modelLoaded)

  function modelLoaded() {
    console.log("model is loaded")
  }
  
  function Identify_Image() {
    image=document.getElementById("captured_image");
    classifier.classify(image,gotResult)
  }

  function gotResult(error,results) {
    if (error) {
      console.log("error")
    } else {
      console.log(results)
      document.getElementById("object_result").innerHTML=results[0].label;
      document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
  } 
