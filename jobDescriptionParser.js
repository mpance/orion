
/* This is a naive prototype of a feature intended to scrape canddiate profile data in order to match across TalentSeer's
current openings. This script can be copy-pasted into developer tools console while on the candidate's home page. Currently it's necessary
to manually click "See more" to expand text under each job and also click "See more" under the Skills & Endorsements
section for best results (otherwise the data will be hidden and unable to be scraped). Some steps to improve the matching: eliminating
common false-positives such as the keyword "can" and others which leads to misleading results, adding proprietary keywords to job openings using domain expertise beyond
those keywords pulled directly from the comapnies' JD's to increase match accuracy. 
*/

/*
This will grab the text from the candidate's LinkedIn Profile. However it's important to click "See more" under each
"job" and the "skills" section in order to allow the maximum amount of text to be scraped
*/
var candidateTextData = document.getElementsByClassName("pv-content")[0].textContent

// This is the object which contains TalentSeer's available opportuntiies
var openJobs = {};

//Adding individual jobs to openJobs object... 
openJobs.inceptioInfrastructureRobotics = [
/C\+\+/i,
/C/i,
/TCP/i,
/TCP\/IP/i,
/UDP/i,
/CAN/i,
/CAN bus/i,
/I2C/i,
/SPI/i,
/qnx/i,
/perception/i,
/localization/i,
/motion planning/i,
/control/i,
/lidar/i,
/radar/i,   
/radar/i,
/camera/i,
/IMU/i,
/GPS/i,
/ROS/i,
/device driver/i,
/rtmaps/i,
/linux/i,
/gdb/i,
/pdb/i,
/autonomous/i,
/ROS/i,
/Apollo/i,
/robotics middleware/i,
/middleware/i,
/python/i,
/multithreading/i,
/multi-threading/i,
/socket/i,
/hypervisor/i,
/ethernet/i

]

openJobs.inceptioInfrastructureRobotics = [
/C\+\+/i,
/C/i,
/TCP/i,
/TCP\/IP/i,
/UDP/i,
/CAN/i,
/CAN bus/i,
/I2C/i,
/SPI/i,
/qnx/i,
/perception/i,
/localization/i,
/motion planning/i,
/control/i,
/lidar/i,
/radar/i,   
/radar/i,
/camera/i,
/IMU/i,
/GPS/i,
/ROS/i,
/device driver/i,
/rtmaps/i,
/linux/i,
/gdb/i,
/pdb/i,
/autonomous/i,
/ROS/i,
/Apollo/i,
/robotics middleware/i,
/middleware/i,
/python/i,
/multithreading/i,
/multi-threading/i,
/socket/i,
/hypervisor/i,
/ethernet/i

]

openJobs.bytedanceResearchScientistAndSoftwareEngineerSpeechAudioMusic = [
/C\+\+/i,
/natural language processing/i,
/nlp/i,
/music/i,
/audio/i,
/deep learning/i,
/deep-learning/i,
/tensorflow/i,
/linux/i,
/python/i,
/ACM\/ICPC/i,
/NOI\/IOI/i,
/publication/i,
/machine learning/i,
/sequence models/i,
/generative models/i,
/optimization/i,
/low-level optimization/i,
/GPU programming/i,
/GPU/i


]

openJobs.smartNewsSoftwareEngineerServiceBackend = [
/C\+\+/i,
/backend/i,
/back-end/i,
/core backend system/i,
/java/i,
/kotlin/i,
/scala/i,
/JVM/i,
/web framework/i,
/Spring boot/i,
/ruby on rails/i,
/aws/i,
/high-traffic/i,
/web service/i,
/javascript/i,
/html/i,
/css/i

]

openJobs.smartNewsSoftwareEngineerMachineLearning = [
/nlp/i,
/natural language processing/i,
/classification/i,
/search/i,
/recommender systems/i,
/server-side/i,
/information extraction/i,
/unstructured text/i,
/categorization/i,
/ranking algorithm/i,
/Java/i,
/C\+\+/i,
/Python/i,
/Scala/i,
/distributed analytic processing/i,
/hadoop/i,
/hive/i,
/mapreduce/i,
/spark/i,
/solr/i,
/elasticsearch/i,
/cloud based architecture/i,
/amazon web service/i,
/aws/i

]

openJobs.inceptioSeniorResearchEngineerInControlAlgorithmAndSystemIdentification = [
/control and estimation/i,
/MATLAB/i,
/Simulink/i,
/python/i,
/linear/i,
/nonlinear/i,
/non-linear/i,
/motion planning/i,
/trajectory planning/i,
/kinematics/i,
/dynamics/i,
/PID/i,
/gain tuning/i,
/robust control/i,
/SMC/i,
/VSC/i,
/adaptive control/i,
/MRPC/i,
/APPC/i,
/optimal control/i,
/LQR/i,
/LQG/i,
/MPC/i,
/DDP/i,
/h-infinity/i,
/lypunov/i,
/C/i,
/C\+\+/i,
/ROS/i,
/linux/i,
/control algorithm/i,
/fault-tolerant/i,
/redundancy/i,
/state estimation/i,
/sequential prediction/i,
/kalman filters/i,
/path planning/i

]

openJobs.vicariousCloudSoftwareEngineer = [
/C\+\+/i,
/Python/i,
/Scala/i,
/Go/i,
/Golang/i,
/Rust/i,
/RESTful/i,
/API/i,
/cloud/i,
/github/i,
/continous integration/i,
/ttd/i,
/test driven development/i,
/distributed systems/i,
/distributed/i,
/web service/i,
/microservices/i,
/oop/i,
/aws/i,
/gcp/i,
/azure/i,
/object oriented programming/i,
/linux/i

]

openJobs.vicariousSeniorSoftwareEngineer = [
/C\+\+/i,
/python/i,
/Scala/i,
/AWS/i,
/GCP/i,
/Azure/i,
/Google Cloud/i,
/Amazon Web service/i,
/RESTful/i,
/API/i,
/ROS/i,
/Computer vision/i,
/machine learning/i,
/neural net/i,
/robotics/i,
/telemetry/i,
/distributed systems/i,
/parallel systems/i,
/distributed/i,
/parallel/i,
/appliance platform/i,
/bit data/i,
/natural language processing/i,
/security software/i,
/OOP/i,
/object oriented program/i

]

openJobs.inceptioLinuxSoftwareEngineer = [
/python/i,
/c\+\+/i,
/Golang/i,
/Go/i,
/Go/i,
/API/i,
/cloud architecture/i,
/linux/i,
/multi-thread/i,
/multithread/i,
/parallel processing/i,
/parallel processing/i,
/linux software development/i,
/asynchronous design/i,
/low-level architecture/i,
/low level architecture/i


]

openJobs.inceptioSeniorSoftwareEngineerCVDeepLearning = [
/python/i,
/c\+\+/i,
/neural net/i,
/camera calibration/i,
/object detection/i,
/depth estimation/i,
/3D bounding box/i,
/3D lidar/i,
/point cloud processing/i,
/point cloud/i,
/3D object detection/i,
/keras/i,
/tensorflow/i,
/pytorch/i,
/opencv/i,
/tensorRT/i,
/hybrid programming/i,
/cuda/i,
/openCL/i,
/video compression/i,
/real time video streaming/i,
/real-time video/i,
/ROS/i,
/CAN/i,
/ethernet/i,
/computer vision/i

]

openJobs.inceptioSeniorrEmbeddedSoftwareEngineerControls = [
/electronic board/i,
/real-time emulator/i,
/systems specifications/i,
/embedded software/i,
/robotics/i,
/mechatronics/i,
/C/i,
/C\+\+/i,
/embedded C/i,
/microprocessor/i,
/embedded microprocessor/i,
/controls software/i,
/multithread/i,
/multi-thread/i,
/linux kernel/i

]

openJobs.jpmorganAIPlatformSeniorBackendEngineer = [
/C\+\+/i,
/backend/i,
/back-end/i,
/machine learning platform/i,
/C/i,
/C\+\+/i,
/python/i,
/java/i,
/cloud computing/i,
/google cloud/i,
/AWS/i,
/amazon web service/i,
/azure/i,
/docker/i,
/kubernetes/i,
/distributed system/i,
/big data/i,
/hadoop/i,
/hive/i,
/spark/i,
/kafka/i,
/ETL pipeline/i,
/ETL/i,
/batch processing/i,
/real-time processing/i,
/web service/i,
/tensorflow/i,
/caffe/i,
/sagemaker/i,
/kubeflow/i,
/domino/i,
/datarobot/i,
/driverlessAI/i

]

openJobs.jpmorganAIEngineeringSeniorMachineLearningEngineer = [
/C\+\+/i,
/inference workflow/i,
/training pipeline/i,
/Python/i,
/R/i,
/deep learning/i,
/deep-learning/i,
/CNN/i,
/RNN/i,
/LSTM/i,
/NLP/i,
/natural language processing/i,
/Computer Vision/i,
/CV/i,
/Speech recognition/i,
/reinforcement learning/i,
/ranking and recommendation/i,
/time series/i,
/tensorflow/i,
/caffe/i,
/pytorch/i,
/keras/i,
/mxnet/i,
/scikit-learn/i,
/ETL pipeline/i,
/ETL/i,
/data processing/i,
/real-time data/i,
/cloud computing/i,
/aws/i,
/amazon web services/i,
/docker/i,
/kubernetes/i,
/big data/i,
/hadoop/i,
/hive/i,
/spark/i,
/kafka/i,
/distributed system/i
]

openJobs.inceptioSeniorSoftwareEngineerLocalizationMultipleSensorFusion = [
/C\+\+/i,
/sensor fusion/i,
/localization/i,
/multiple sensor fusion/i,
/kalman filter/i,
/extended kalman filter/i,
/unscented kalman filter/i,
/graph optimization/i,
/linux/i,
/SLAM/i,
/VIO/i,
/GNSS/i,
/INS/i,
/map survey/i,
/robotics/i,
/computer vision/i,
/linear algebra/i,
/GNSS/i

]

openJobs.inceptioSeniorSoftwareEngineerMapping = [
/C\+\+/i,
/ADAS map/i,
/HD map/i,
/ADAS map/i,
/map vendor/i,
/china map/i,
/GIS/i,
/Geography Information System/i,
/ground control point/i,
/real-time kinematic/i,
/realtime kinematic/i,
/RTK/i,
/PPK/i,
/post-processed kinematic/i,
/3D image/i,
/point-cloud reconstruction/i,
/point cloud reconstruction/i,
/point cloud/i,
/point-cloud/i,
/3D/i,
/3D image reconsutruction/i,
/3D-image reconsutruction/i,
/ADAS/i,
/mapping/i

]

/*
This function will create a new object corresponding to each job opening. In this object the key will be 
the name of the job opening. And the value will be another object which will get returned from the matchRequirements
function. The final object which will get returned is the finalMatches object with the match data. It will contain number of 
matching keywords with candidates, and other data intended to match candidates with the right
opportunities
*/
function matchJD(scrapedData, openJobs) {

	var finalMatches = {};

	for (jobTitle in openJobs) {

		finalMatches[jobTitle] = matchRequirements(openJobs[jobTitle], scrapedData);

	}

	console.log(finalMatches);


}
/*
This function will return matchData which is an object corresponding to "match" data for each job opening. The object will
contain the keys tally (# of keyword matches), matchedWords (array of matched keywords), etc. 
*/
function matchRequirements(jobRequirements, scrapedData) {


	var matchData = {
		tally: 0,
		matchedWords: [],
		percentMatch: 0,
		yrsOfExperience: 0,
		meetsAgeRequirement: false
	};

	matchData.yrsOfExperience = getYrsOfExperienceNaive(scrapedData);

	for(i = 0; i < jobRequirements.length; i++) {

		if (scrapedData.match(jobRequirements[i]) !== null) {
			matchData.tally++;
			matchData.matchedWords.push(jobRequirements[i])
		}
		matchData.percentMatch = (matchData.tally / jobRequirements.length) * 100;
	}

	return matchData;


}
/*
This function naively gets the years of working experience from candidates' scraped profile data
*/

function getYrsOfExperienceNaive(scrapedData) {

	var patternMatch = /[1-30] yr/g;

	var stringArr = scrapedData.match(patternMatch);
	var yrs = 0;


	for(i = 0; i < stringArr.length; i++) {
		yrs = yrs + parseInt(stringArr[i])
	}

	return yrs;

}



matchJD(candidateTextData, openJobs)
