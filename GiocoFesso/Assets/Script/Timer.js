//#####################################################################################
//#####################################################################################
//#####################################################################################
// COUNTDOWN TIMER CODE FOR THE UNITY 3D ENGINE IN JAVASCRIPT
// THIS HAS BEEN WRITTEN BY KYLE D'AOUST FOR FREE AND EDUCATIONAL USE, ROYALTY FREE.
// FEEL FREE TO USE THIS CODE IN ANY OF YOUR PROJECTS
//#####################################################################################
//#####################################################################################
//#####################################################################################
 
// For our timer we will use minutes and seconds
var Seconds:float = 59;
var Minutes: float = 0;
 
function Update()
{
        // This is if statement checks how many seconds there are to decide what to do.
        // If there are more than 0 seconds it will continue to countdown.
        // If not then it will reset the amount of seconds to 59 and handle the minutes;
        // Handling the minutes is very similar to handling the seconds.
        if(Seconds <= 0)
        {
                Seconds = 59;
                if(Minutes >= 1)
                {
                        Minutes--;
                }
                else
                {
                        Minutes = 0;
                        Seconds = 0;
                        // This makes the guiText show the time as X:XX. ToString.("f0") formats it so there is no decimal place.
                        GameObject.Find("TimerText").guiText.text = Minutes.ToString("f0") + ":0" + Seconds.ToString("f0");
                }
        }
        else
        {
                Seconds -= Time.deltaTime;
        }
       
        // These lines will make sure the time is shown as X:XX and not X:XX.XXXXXX
        if(Mathf.Round(Seconds) <= 9)
        {
                GameObject.Find("TimerText").guiText.text = Minutes.ToString("f0") + ":0" + Seconds.ToString("f0");
        }
        else
        {
                GameObject.Find("TimerText").guiText.text = Minutes.ToString("f0") + ":" + Seconds.ToString("f0");
        }
}