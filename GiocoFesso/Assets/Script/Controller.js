#pragma strict

var counter : GUIText;

var hole : Transform;

var holeColl: Transform;

var dispenser : Transform;

function Start () {
	PlayerPrefs.SetInt("Score", 0);
}

function Update () {
	if(counter.GetComponent(Timer).Minutes==0 && counter.GetComponent(Timer).Seconds==0){
		PlayerPrefs.SetInt("Score", dispenser.GetComponent(Dispenser).score);
		Application.LoadLevel(1);
	}
	
	if(counter.GetComponent(Timer).Minutes==0 && counter.GetComponent(Timer).Seconds <=5 && hole){
		Destroy(hole.gameObject);
		var coll : BoxCollider = holeColl.collider as BoxCollider;
		coll.size = Vector3(1,1,5);
	}
}