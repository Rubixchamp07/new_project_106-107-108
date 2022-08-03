var dog = 0;
var elephant = 0;
var monkey = 0;
var peacock = 0;



function startClassification()
{navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RIbAp3f6w/model.json', modelReady);
document.getElementById('animal_image').src = 'giphy.gif';
}

function modelReady()
{  
    console.log("ready");
    classifier.classify( gotResults);
    document.getElementById('animal_image').src = 'EAR.jpg';
}

function gotResults(error, results) {
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        
    img = document.getElementById('animal_image');

    if (results[0].label == "Dog") {
      alert(results[0].label);
      document.getElementById('animal_image').src = 'dog.png';
      dog = dog+1;
    }
      else if (results[0].label == "Elephant"){
      document.getElementById('animal_image').src = 'elephant.png';
      elephant = elephant + 1;
    }
      else if (results[0].label == "Monkey") {
      document.getElementById('animal_image').src = 'monkey.png';
        monkey = monkey + 1;
    } else if (results[0].label == "Peacock") {
      document.getElementById('animal_image').src = 'peacock.png';
        peacock = peacock + 1;
    } else{
      document.getElementById('animal_image').src = 'giphy.gif';
    }

    }
}