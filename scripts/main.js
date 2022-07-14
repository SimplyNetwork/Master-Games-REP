import { SA } from "./Smelly Api/index.js";
import { World, Commands } from 'mojang-minecraft';
World.events.beforeChat.subscribe(eventChat => {
   const emj = {
      ':smiley:': '', //1
      ':grimacing:': '', //2
      ':grin:': '', //3
      ':joy:': '', //4
      ':smile:': '', //5
      ':sweat_smile:': '', //6
      ':laughing:': '', //7
      ':innocent:': '', //8
      ':wink:': '', //9
      ':blush:': '', //10
      ':slight_smile:': '', //11
      ':upside_down"': '', //12
      ':relaxed:': '', //13
      ':yum:': '', //14
      ':relieved:': '', //15
      ':heart_eyes"': '', //16
      ':kissing_heart"': '', //17
      ':kissing"': '', //18
      ':kissing_smiling_eyes:': '', //19
      ':kissing_closed_eyes:': '', //20
      ':stuck_out_tongue_winking_eye:': '', //21
      ':stuck_out_tongue_closed_eyes:': '', //22
      ':stuck_out_tongue:': '', //23
      ':money_mouth"': '', //24
      ':sunglasses:': '', //25
      ':smirk:': '', //26
      ':no_mouth:': '', //27
      ':neutral_face:': '', //28
      ':expressionless:': '', //29
      ':unamused:': '', //30
      ':rolling_eyes:': '', //31
      ':flushed:': '', //32
      ':disappointed:': '', //33
      ':worried:': '', //34
      ':angry:': '', //35
      ':rage:': '', //36
      ':pensive:': '', //37
      ':confused:': '', //38
      ':slight_frown:': '', //39
      ':frowning2:': '' //40
   };
   eventChat.message = Object.keys(emj).forEach(key => eventChat.message = eventChat.message.replaceAll(`${key}`, emj[key]))
})