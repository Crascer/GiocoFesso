#pragma strict

function Start () {
	this.guiText.text = "Score:" + PlayerPrefs.GetInt("Score");
}

function Update () {
	
	if(Input.touchCount>=1){
		Application.LoadLevel(0);
	}
	
}