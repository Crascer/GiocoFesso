#pragma strict

var coin : Transform[];
private var currentChild : Transform;
var score : int;
var creating : boolean = false;
var controller : Transform;
var x2Multiplier : boolean = false;
var x3Multiplier : boolean = false;

function Start () {
	score = 0;
}

function Update () {
	
	if(currentChild == null && !creating){
		Creat();
		creating = true;
	}
}

function OnGUI(){
	GUI.Label(Rect(Screen.width/2-Screen.width/2.1, Screen.height/2-Screen.height/2.2, Screen.width/4, Screen.height/9), "Score: "+score);
}

function Creat() {
	yield WaitForSeconds(0.3);
	creating = false;
	Random.seed = Time.time;
	var rnd = Random.Range(0,101);
	Debug.Log(rnd);
	if(rnd>=0 && rnd<=10)
		rnd = 6;
	else 
		rnd = rnd%6;
		
	currentChild = Instantiate(coin[rnd], transform.position, transform.rotation);
	currentChild.parent = this.transform;
}

function AddScore(baseScore : int){
	
	if(x2Multiplier)
		baseScore = baseScore*2;
	
	if(x3Multiplier)
		baseScore = baseScore*3;
	
	score = score+baseScore;
}

function SubScore(baseScore:int){
	score = score-baseScore;
	if(x2Multiplier || x3Multiplier){
		x2Multiplier = false;
		x3Multiplier = false;
	}
}

function x2Multiply(){
	x2Multiplier = true;
}

function x3Multiply(){
	x3Multiplier = true;
}

function AddTime(){
	controller.GetComponent(Controller).AddTime();
}