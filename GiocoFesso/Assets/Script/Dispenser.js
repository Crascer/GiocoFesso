#pragma strict

var coin : Transform[];
private var currentChild : Transform;

function Start () {

}

function Update () {
	
	if(currentChild == null){
		Random.seed = Time.time;
		var rnd = Random.Range(0,7);
		currentChild = Instantiate(coin[rnd], transform.position, transform.rotation);
		
	}
}