#pragma strict

var coin : Transform[];
private var currentChild : Transform;
var score : int;
var creating : boolean = false;

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
	var rnd = Random.Range(0,6);
	Debug.Log(rnd);
	currentChild = Instantiate(coin[rnd], transform.position, transform.rotation);
	currentChild.parent = this.transform;
}
