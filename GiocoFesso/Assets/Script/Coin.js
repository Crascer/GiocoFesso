#pragma strict

var  _horizontalLimit : float = 2.5f;
var  _verticalLimit : float = 2.5f;
var dragSpeed : float = 0.1f;
var cachedTransform : Transform;
var startingPos : Vector3;
var slotColor : String;

function Start () {
    //Make reference to transform
    cachedTransform = transform;

    //Save starting position
    startingPos = cachedTransform.position;
}

// Update is called once per frame
function Update () {
     if(Input.touchCount > 0)
     {
          var deltaPosition : Vector2 = Input.GetTouch(0).deltaPosition;

         //Switch through touch events
         switch(Input.GetTouch(0).phase)
         {
               case TouchPhase.Began:
               break;
               case TouchPhase.Moved:
                    DragObject(deltaPosition);
               break;
               case TouchPhase.Ended:
               break;
         }

     }
}

/// <summary>
/// Drags the object.
/// </summary>
/// <param name='deltaPosition'>
/// Delta position.
/// </param>
function DragObject(deltaPosition : Vector2)
{
	cachedTransform.position = Vector3(Mathf.Clamp((deltaPosition.x * dragSpeed) + cachedTransform.position.x, startingPos.x - _horizontalLimit, startingPos.x + _horizontalLimit),	Mathf.Clamp((deltaPosition.y * dragSpeed) + cachedTransform.position.y, startingPos.y - _verticalLimit, startingPos.y + _verticalLimit), cachedTransform.position.z);
}


function OnTriggerEnter(hit : Collider){
	Debug.Log(""+hit.transform.name);
	if(hit.transform.tag == slotColor || hit.transform.tag == "SlotArcobaleno"){
		transform.parent.transform.GetComponent(Dispenser).score = transform.parent.transform.GetComponent(Dispenser).score+5;
		Destroy(this.gameObject);
	}else {
		transform.parent.transform.GetComponent(Dispenser).score = transform.parent.transform.GetComponent(Dispenser).score-5;
		Destroy(this.gameObject);
	}
}

